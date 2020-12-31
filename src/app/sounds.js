// ZzFX - Zuper Zmall Zound Zynth - Micro Edition
// MIT License - Copyright 2019 Frank Force
// https://github.com/KilledByAPixel/ZzFX

// This is a tiny build of zzfx with only a zzfx function to play sounds.
// You can use zzfxV to set volume.
// There is a small bit of optional code to improve compatibility.
// Feel free to minify it further for your own needs!

///////////////////////////////////////////////////////////////////////////////

// ZzFXMicro - Zuper Zmall Zound Zynth - v1.1.2

// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @output_file_name ZzFXMicro.min.js
// @js_externs zzfx, zzfxV, zzfxX
// @language_out ECMASCRIPT_2019
// ==/ClosureCompiler==

const zzfxX = new (window.AudioContext || webkitAudioContext)(); // audio context
const zzfxR = 44100; // sample rate
const zzfxV = 0.3; // volume
const zzfx = (
  // play sound
  // parameters
  volume = 1,
  randomness = 0.05,
  frequency = 220,
  attack = 0,
  sustain = 0,
  release = 0.1,
  shape = 0,
  shapeCurve = 1,
  slide = 0,
  deltaSlide = 0,
  pitchJump = 0,
  pitchJumpTime = 0,
  repeatTime = 0,
  noise = 0,
  modulation = 0,
  bitCrush = 0,
  delay = 0,
  sustainVolume = 1,
  decay = 0,
  tremolo = 0
) => {
  // init parameters
  let PI2 = Math.PI * 2,
    sign = (v) => (v > 0 ? 1 : -1),
    startSlide = (slide *= (500 * PI2) / zzfxR / zzfxR),
    startFrequency = (frequency *=
      ((1 + randomness * 2 * Math.random() - randomness) * PI2) / zzfxR),
    b = [],
    t = 0,
    tm = 0,
    i = 0,
    j = 1,
    r = 0,
    c = 0,
    s = 0,
    f,
    length,
    buffer,
    source;

  // scale by sample rate
  attack = attack * zzfxR + 9; // minimum attack to prevent pop
  decay *= zzfxR;
  sustain *= zzfxR;
  release *= zzfxR;
  delay *= zzfxR;
  deltaSlide *= (500 * PI2) / zzfxR ** 3;
  modulation *= PI2 / zzfxR;
  pitchJump *= PI2 / zzfxR;
  pitchJumpTime *= zzfxR;
  repeatTime = (repeatTime * zzfxR) | 0;

  // generate waveform
  for (
    length = (attack + decay + sustain + release + delay) | 0;
    i < length;
    b[i++] = s
  ) {
    if (!(++c % ((bitCrush * 100) | 0))) {
      // bit crush
      s = shape
        ? shape > 1
          ? shape > 2
            ? shape > 3 // wave shape
              ? Math.sin((t % PI2) ** 3) // 4 noise
              : Math.max(Math.min(Math.tan(t), 1), -1) // 3 tan
            : 1 - (((((2 * t) / PI2) % 2) + 2) % 2) // 2 saw
          : 1 - 4 * Math.abs(Math.round(t / PI2) - t / PI2) // 1 triangle
        : Math.sin(t); // 0 sin

      s =
        (repeatTime
          ? 1 - tremolo + tremolo * Math.sin((PI2 * i) / repeatTime) // tremolo
          : 1) *
        sign(s) *
        Math.abs(s) ** shapeCurve * // curve 0=square, 2=pointy
        volume *
        zzfxV * // envelope
        (i < attack
          ? i / attack // attack
          : i < attack + decay // decay
          ? 1 - ((i - attack) / decay) * (1 - sustainVolume) // decay falloff
          : i < attack + decay + sustain // sustain
          ? sustainVolume // sustain volume
          : i < length - delay // release
          ? ((length - i - delay) / release) * // release falloff
            sustainVolume // release volume
          : 0); // post release

      s = delay
        ? s / 2 +
          (delay > i
            ? 0 // delay
            : ((i < length - delay ? 1 : (length - i) / delay) * // release delay
                b[(i - delay) | 0]) /
              2)
        : s; // sample delay
    }

    f =
      (frequency += slide += deltaSlide) * // frequency
      Math.cos(modulation * tm++); // modulation
    t += f - f * noise * (1 - (((Math.sin(i) + 1) * 1e9) % 2)); // noise

    if (j && ++j > pitchJumpTime) {
      // pitch jump
      frequency += pitchJump; // apply pitch jump
      startFrequency += pitchJump; // also apply to start
      j = 0; // reset pitch jump time
    }

    if (repeatTime && !(++r % repeatTime)) {
      // repeat
      frequency = startFrequency; // reset frequency
      slide = startSlide; // reset slide
      j ||= 1; // reset pitch jump time
    }
  }

  // play an array of audio samples
  buffer = zzfxX.createBuffer(1, length, zzfxR);
  buffer.getChannelData(0).set(b);
  source = zzfxX.createBufferSource();
  source.buffer = buffer;
  source.connect(zzfxX.destination);
  source.start();
  return source;
};

export function bullet() {
  zzfx(
    ...[
      0.04,
      ,
      292,
      0.02,
      0.01,
      0.08,
      3,
      0.1,
      -3.9,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      0.74,
      0.04,
      0.43,
    ]
  );
}

export function enemyHit() {
  zzfx(
    ...[
      0.3,
      ,
      467,
      ,
      0.06,
      0.14,
      4,
      0.1,
      ,
      ,
      ,
      ,
      ,
      0.5,
      303,
      0.4,
      ,
      0.58,
      0.02,
      0.02,
    ]
  );
}

export function explosion() {
  zzfx(
    ...[
      ,
      ,
      274,
      ,
      0.03,
      0.67,
      4,
      1.11,
      ,
      ,
      ,
      ,
      0.04,
      0.8,
      ,
      0.5,
      0.25,
      0.63,
      0.02,
    ]
  );
}

export function shieldHit() {
  zzfx(
    ...[
      ,
      ,
      119,
      ,
      ,
      0.44,
      ,
      0.09,
      5.3,
      -4.2,
      ,
      ,
      ,
      0.7,
      -340,
      0.1,
      0.01,
      0.85,
      0.08,
    ]
  );
}

export function shieldPowerup() {
  zzfx(
    ...[
      ,
      ,
      505,
      0.21,
      0.12,
      0.46,
      2,
      1.67,
      ,
      ,
      58,
      0.02,
      0.28,
      ,
      ,
      ,
      ,
      0.69,
      0.03,
    ]
  );
}

export function bossExplosion() {
  zzfx(
    ...[
      1.5,
      ,
      369,
      ,
      0.1,
      1,
      2,
      0.05,
      0.4,
      ,
      ,
      ,
      ,
      0.7,
      -1.3,
      0.8,
      0.37,
      0.77,
      0.04,
    ]
  );
}

export function enemyFire() {
  zzfx(
    ...[
      0.6,
      ,
      279,
      0.02,
      0.09,
      0.09,
      3,
      1.2,
      -4.9,
      -0.6,
      ,
      ,
      ,
      ,
      ,
      ,
      0.05,
      0.89,
      0.04,
      0.02,
    ]
  );
}
