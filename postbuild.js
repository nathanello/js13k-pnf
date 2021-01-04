const fs = require("fs");
const archiver = require("archiver");
const { execFileSync } = require("child_process");
const ect = require("ect-bin");
const path = require("path");
const inliner = require("web-resource-inliner").html;
const minify = require("html-minifier-terser").minify;
const BUNDLE_FILE = "./dist/bundle.html";

// Create final html
inliner(
  {
    fileContent: fs.readFileSync("./dist/index.html", "utf8"),
    relativeTo: "dist",
  },
  function (err, result) {
    if (err) {
      throw new Error("Failed to inline");
    }

    const minified = minify(result, {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
      minifyCSS: true,
    });
    fs.writeFileSync(BUNDLE_FILE, minified);

    const ZIP_FILE = path.resolve("./dist/build.zip");

    let output = fs.createWriteStream(ZIP_FILE);
    let archive = archiver("zip");

    const MAX = 13 * 1024; // 13kb

    output.on("close", function () {
      console.log(`Applying ECT to html file ${ZIP_FILE}`);
      // ECT -#
      // Select compression level [1-9] (default: 3).
      // Advanced usage:
      // A different syntax may be used to achieve even more compression for deflate compression if time (and efficiency) is not a concern.
      // If the value is above 10000, the blocksplitting-compression cycle is repeated # / 10000 times. If # % 10000 is above 9, level 9 is
      // used and the number of iterations of deflate compression per block is set to # % 10000. If # % 10000 is 9 or below, this number
      // specifies the level.
      // For instance, "-100500" saved 3 bytes
      const result = execFileSync(ect, ["-9", "-strip", "-zip", ZIP_FILE]);
      console.log(result.toString("utf8"));

      const stats = fs.statSync(ZIP_FILE);

      const bytes = stats["size"];
      const percent = ((bytes / MAX) * 100).toFixed(2);
      if (bytes > MAX) {
        console.error(`Size overflow: ${bytes} bytes (${percent}%)`);
      } else {
        console.log(`Size: ${bytes} bytes (${percent}%)`);
      }
    });

    archive.on("warning", function (err) {
      if (err.code === "ENOENT") {
        console.warn(err);
      } else {
        throw err;
      }
    });

    archive.on("error", function (err) {
      throw err;
    });

    archive.pipe(output);
    archive.append(fs.createReadStream(BUNDLE_FILE), {
      name: "index.html",
    });

    archive.finalize();
  }
);
