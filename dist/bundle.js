class t{constructor(t){this.t=0,this.l=0,this.h={},this.seed=t,8>this.seed.length&&(this.seed="padding_"+this.seed),this.seed.length%2==0&&(this.seed="1"+this.seed),this.i=[2972948403,3086140710,2071788248,3026137486,1411764137,2265725585,2923087685,1593177610],this.o=3234042090;for(let t=this.seed.length-1;t>=0;t--){let e=this.seed.charCodeAt(t);this.o=((this.o<<5)+this.o^e^this.o<<e%13+1^this.o>>e%17+1)>>>0,this.i[t%8]^=((this.o>>9)*(this.o%16384+3427)^e)>>>0}}M(){let t=this.seed.charCodeAt(this.t),e=this.i[this.l];return this.o=((this.o<<5)+this.o+e^t^this.o<<t%17+1^this.o>>t%13+1)>>>0,this.i[this.l]=(e>>3^e<<t%19+1^this.o%134217728*3427)>>>0,this.t=(this.t+1)%this.seed.length,this.l=(this.l+1)%8,this.o}u(t){let e=[1160605769,1424711319,876532818,1419174464],a=1206170165;if(t||(t="?/?/?/",a=3379896793),this.h[t])return this.h[t];for(let r=t.length-1;r>=0;r--){let l=t.charCodeAt(r),h=e[0]^l;h=(h^h<<11)>>>0,h=(h^h>>8)>>>0,e[0]=e[1],e[1]=e[2],e[2]=e[3],e[3]=(e[3]^e[3]>>19^h)>>>0,a=3427*(a^l<<24)^e[3]}for(let t=this.seed.length-1;t>=0;t--){let r=this.seed.charCodeAt(t),l=e[0]^r;l=(l^l<<11)>>>0,l=(l^l>>8)>>>0,e[0]=e[1],e[1]=e[2],e[2]=e[3],e[3]=(e[3]^e[3]>>19^l)>>>0,a=3427*(a^r<<24)^e[3]}return this.h[t]=a>>>0,this.h[t]}m(t,e){return(4294967296*this.M()+this.M())/0x10000000000000000*(e-t)+t}p(t,e){return Math.floor(this.m(t,e+1))}g(t){return this.m(0,1)<t}v(t,e,a){return(4294967296*this.u(a)+this.u(a+"@"))/0x10000000000000000*(e-t)+t}A(t,e,a){return Math.floor(this.v(t,e+1,a))}k(t,e){return this.v(0,1,e)<t}S(t){return this.g(t)?-1:1}q(t,e){let a=0;for(;this.g(t)&&e>a;)a++;return a}C(t,e,a){let r=0;for(;(4294967296*this.u(a+r)+this.u(a+"@"+r))/0x10000000000000000<t&&e>r;)r++;return r}D(t){let e=0;for(let a=0;t.length>a;a++)e+=t[a];let a=this.m(0,e);for(let e=0;t.length>e;e++)if(a-=t[e],0>a)return e;return 0}K(t,e){let a=0;for(let e=0;t.length>e;e++)a+=t[e];let r=this.v(0,a,e);for(let e=0;t.length>e;e++)if(r-=t[e],0>r)return e;return 0}}function e(t,e,a){return Math.max(e,Math.min(a,t))}function a(t,e){return`rgb(${t.map(t=>t*e*100).join("%,")}%)`}function r(t,e,a){let r=(r,l=(r+6*t)%6)=>a-a*e*Math.max(Math.min(l,4-l,1),0);return[r(5),r(3),r(1)]}function l(l,h,n){return((l,h,n)=>{let i=(t=>{let e=[];return e[0]=.8*t.m(.001,1)*2**t.m(0,8),e[1]=.9*t.m(.01,1)*2**t.m(0,8),e[2]=1*t.m(.001,1)*2**t.m(0,8),e[3]=3*t.m(0,1)*2**t.m(0,8),e[4]=.5*t.m(0,1)*2**t.m(0,8),e[5]=.05*t.m(0,1)*2**t.m(0,8),e[6]=.5*t.m(0,1)*2**t.m(0,8),e})(l),o=[],f=[],M=1+(l.k(.7,"base color +1")?1:0)+l.C(.3,3,"base color count");for(let t=0;M>t;t++){let a="base color"+t;o.push(r(l.v(0,1,a+"hue")**2,e(l.v(-.2,1,a+"saturation"),0,l.v(0,1,a+"saturation bound")**4),e(l.v(.7,1.1,a+"value"),0,1))),f.push(2**l.v(0,6,a+"chances"))}let s=new t(l.seed+h);function u(){let t=o[s.D(f)];return s.g(l.v(0,.5,"base color shift chance")**2)&&(t=[t[0],t[1],t[2]],t[0]=e(t[0]+l.v(0,.6,"base color shift range red")**2*e(s.m(-1,1.2),0,1)*e(s.S(.7)+s.S(.7),-1,1),0,1),t[1]=e(t[1]+l.v(0,.6,"base color shift range green")**2*e(s.m(-1,1.2),0,1)*e(s.S(.7)+s.S(.7),-1,1),0,1),t[2]=e(t[2]+l.v(0,.6,"base color shift range blue")**2*e(s.m(-1,1.2),0,1)*e(s.S(.7)+s.S(.7),-1,1),0,1)),t}n=n||s.m(l.v(2.5,3.5,"size min"),l.v(5,7,"size max"))**3;let c=s.m(l.v(.5,1,"wratio min"),l.v(1,1.3,"wratio max")),m=s.m(l.v(.7,1,"hratio min"),l.v(1.1,1.7,"hratio max")),d=Math.floor(n*c),b=Math.floor(d/2),p=Math.floor(d/6),g=(d-6*p)/2,w=Math.floor(n*m),x=Math.floor(w/2),v=Math.floor(w/6),y=(w-6*v)/2,A=document.createElement("canvas");A.width=d,A.height=w;let k=A.getContext("2d"),S=d*w/20;[()=>{let t=Math.ceil(d*l.v(.1,1,"outline0 iw")/5),a=[[[b-t,0],[b+t,w]]],r=2+Math.floor(s.m(.5,1)*l.v(2,8,"outline0 bc")*n**.5);for(let t=1;r>t;t++){let t=a[s.p(0,a.length-1)],r=[t[0][0]+s.m(0,1)*(t[1][0]-t[0][0]),t[0][1]+s.m(0,1)*(t[1][1]-t[0][1])];(t[0][1]+t[1][1])/2>r[1]&&s.g(l.v(.5,1.5,"outline0 frontbias"))&&(r[1]=t[1][1]-(r[1]-t[0][1]));let h=[e(s.m(0,1)*d,0,d),e(s.m(0,1)*w,0,w)],n=S/Math.abs((h[0]-r[0])*(h[1]-r[1]));if(1>n&&(h[0]=r[0]+(h[0]-r[0])*n,h[1]=r[1]+(h[1]-r[1])*n),r[0]>h[0]){let t=r[0];r[0]=h[0],h[0]=t}if(r[1]>h[1]){let t=r[1];r[1]=h[1],h[1]=t}a.push([[Math.floor(r[0]),Math.floor(r[1])],[Math.ceil(h[0]),Math.ceil(h[1])]])}k.fillStyle="#fff";for(let t=0;a.length>t;t++){let e=a[t];k.fillRect(e[0][0],e[0][1],e[1][0]-e[0][0],e[1][1]-e[0][1]),k.fillRect(d-e[1][0],e[0][1],e[1][0]-e[0][0],e[1][1]-e[0][1])}},()=>{let t=Math.max(2,(S/Math.PI)**.5),e=Math.ceil(d*l.v(.1,1,"outline1 iw")/5),a=[],r=Math.floor(w/(2*e));for(let t=0;r>t;t++)a.push({O:[b,w-e*(2*t+1)],r:e});let h=r+Math.floor(s.m(.5,1)*l.v(10,50,"outline1 cc")*n**.5);for(let e=r;h>e;e++){let e=a[Math.max(s.p(0,a.length-1),s.p(0,a.length-1))],r=s.m(1,t),h=s.m(Math.max(0,e.r-r),e.r),n=s.m(0,2*Math.PI);n>Math.PI&&s.g(l.v(.5,1.5,"outline1 frontbias"))&&(n=s.m(0,Math.PI));let i=[e.O[0]+Math.cos(n)*h,e.O[1]+Math.sin(n)*h];r=Math.min(r,i[0],d-i[0],i[1],w-i[1]),a.push({O:i,r})}k.fillStyle="#fff";for(let t=0;a.length>t;t++){let e=a[t];k.beginPath(),k.arc(e.O[0],e.O[1],e.r,0,7),k.fill(),k.beginPath(),k.arc(d-e.O[0],e.O[1],e.r,0,7),k.fill()}},()=>{let t=[[b,s.m(0,.05)*w],[b,s.m(.95,1)*w]],e=6/n+l.v(.03,.1,"outline2 basefatness"),a=Math.max(3,Math.ceil(s.m(.05,.1)/e*n**.5));k.lineCap=["round","square"][l.A(0,1,"outline2 linecap")],k.strokeStyle="#fff";for(let r=1;a>r;r++){let a=t[r];a||(a=[s.m(0,1)*d,s.m(0,1)**l.v(.1,1,"outline2 frontbias")*w],t.push(a));let h=1+s.q(l.v(0,1,"outline2 conadjust"),3);for(let r=0;h>r;r++){let r=t[s.p(0,t.length-2)];k.lineWidth=s.m(.7,1)*e*n,k.beginPath(),k.moveTo(r[0],r[1]),k.lineTo(a[0],a[1]),k.stroke(),k.beginPath(),k.moveTo(d-r[0],r[1]),k.lineTo(d-a[0],a[1]),k.stroke()}}}][l.K([1,1,1],"outline type")]();let q=k.getImageData(0,0,d,w);function C(t,e){return q.data[4*(e*d+t)+3]}let D=[];for(let t=0;p>t;t++){D[t]=[];for(let e=0;v>e;e++)D[t][e]={I:t,j:e,x:Math.floor(g+6*(t+.5)),y:Math.floor(y+6*(e+.5))}}let K=[D[Math.floor(p/2)][Math.floor(v/2)]],O=0;for(;K.length>O;){let t=K[O];if(t.I>0){let e=D[t.I-1][t.j];e.B||(C(e.x,e.y)?(e.B=1,K.push(e)):e.B=2)}if(p-1>t.I){let e=D[t.I+1][t.j];e.B||(C(e.x,e.y)?(e.B=1,K.push(e)):e.B=2)}if(t.j>0){let e=D[t.I][t.j-1];e.B||(C(e.x,e.y)?(e.B=1,K.push(e)):e.B=2)}if(v-1>t.j){let e=D[t.I][t.j+1];e.B||(C(e.x,e.y)?(e.B=1,K.push(e)):e.B=2)}O++}for(let t=0;K.length>t;t++){let e=K[t],a=D[p-1-e.I][e.j];1!=a.B&&(a.B=1,K.push(a))}let I=l.A(1,2,"base component passes"),Q=Math.max(1,Math.floor(K.length*l.v(0,1/I,"extra component amount"))),j=I*K.length+Q;function B(t,e){let a=Math.floor((t-g)/6),r=Math.floor((e-y)/6);return 0>a||a>=p||0>r||r>=v?0:1==D[a][r].B}function N(t){return 1-t[1]/w}function F(t,e){let a=Math.min(1,1-Math.abs(t[0]-b)/b);return e&&(a=Math.min(a,1-Math.abs(t[1]-x)/x)),a}function G(t,e,a,r,h,n,i){let o=(F(e,1)*(1-1/((d+w)/1e3+1))*l.v(0,1,"master bigness")**.5*(1-P/j))**a,f=8;if(s.g(l.v(r,h,`com${t} bigchance`)*o)){let a=l.v(n,i,`com${t} bigincchance`);for(;s.g(a*o)&&Math.min(e[0]-f,d-e[0]-f,e[1]-f,w-e[1]-f)>f/2;)f*=1.5}return f}function U(t,e,a){let r=k.createLinearGradient(e[0],e[1],2*t[0]-e[0],2*t[1]-e[1]),l=`rgba(0,0,0,${a})`;return r.addColorStop(0,l),r.addColorStop(.5,"rgba(0,0,0,0)"),r.addColorStop(1,l),r}A.width|=0;let $=[t=>{let r=G(0,t,.3,0,.9,0,.5),l=2*r,h=[Math.ceil(s.m(1,Math.max(2,r/2))),Math.ceil(s.m(1,Math.max(2,r/2)))],n=Math.min(h[0],h[1])*s.m(.1,1.2),i=[h[0]+2*n,h[1]+2*n],o=[Math.ceil(l/i[0]),Math.ceil(l/i[1])],f=[Math.round(o[0]*i[0]/2),Math.round(o[1]*i[1]/2)],M=u(),c=a(M,s.m(.4,1)),m=a(M,s.m(.4,1));k.fillStyle=`rgba(0,0,0,${s.m(0,.25)})`,k.fillRect(t[0]-f[0]-1,t[1]-f[1]-1,i[0]*o[0]+2,i[1]*o[1]+2),k.fillStyle=m,k.fillRect(t[0]-f[0],t[1]-f[1],i[0]*o[0],i[1]*o[1]),k.fillStyle=c;for(let e=0;o[0]>e;e++){let a=t[0]+n+e*i[0]-f[0];for(let e=0;o[1]>e;e++)k.fillRect(a,t[1]+n+e*i[1]-f[1],h[0],h[1])}s.g(e(r/8*(.6*P/j+.3),0,.98))&&(k.fillStyle=U(t,[t[0]+f[0],t[1]],s.m(0,.9)),k.fillRect(t[0]-f[0],t[1]-f[1],i[0]*o[0],i[1]*o[1]))},t=>{let r=G(1,t,.2,.3,1,0,.6),h=Math.ceil(s.m(.8,2)*r),n=Math.ceil(s.m(.8,2)*r),i=s.p(3,Math.max(4,h)),o=Math.max(1,Math.round(h/i));h=o*i;let f=a(u(),s.m(.5,1)),M=s.m(.3,.9);if(s.g(e(l.v(-.2,1.2,"com1 hchance"),0,1))){let e=[t[0]-Math.floor(h/2),t[1]-Math.floor(n/2)];k.fillStyle=`rgba(0,0,0,${s.m(0,.25)})`,k.fillRect(e[0]-1,e[1]-1,h+2,n+2),k.fillStyle=f,k.fillRect(e[0],e[1],h,n);for(let a=0;o>a;a++)k.fillStyle=U([e[0]+(a+.5)*i,t[1]],[e[0]+a*i,t[1]],M),k.fillRect(e[0]+a*i,e[1],i,n)}else{let e=[t[0]-Math.floor(n/2),t[1]-Math.floor(h/2)];k.fillStyle=`rgba(0,0,0,${s.m(0,.25)})`,k.fillRect(e[0]-1,e[1]-1,n+2,h+2),k.fillStyle=f,k.fillRect(e[0],e[1],n,h);for(let a=0;o>a;a++)k.fillStyle=U([t[0],e[1]+(a+.5)*i],[t[0],e[1]+a*i],M),k.fillRect(e[0],e[1]+a*i,h,i)}},t=>{let r=G(2,t,.05,0,1,0,.9),h=Math.ceil(s.m(.6,1.4)*r),n=Math.ceil(s.m(1,2)*r),i=[Math.ceil(e(h*s.m(.7,1)/2,1,h)),Math.ceil(e(h*s.m(.8,1)/2,1,h))],o=[Math.floor(e(h*s.m(.05,.25),1,n)),Math.floor(e(h*s.m(.1,.3),1,n))],f=o[0]+o[1],M=s.g(l.v(0,1,"com2 oddchance")**.5),c=e(Math.floor(n/f),1,n),m=c*f+(M?o[0]:0),d=u(),b=s.m(.6,1),p=s.m(.6,1),g=[a(d,b),a(d,p)],w=1-s.m(.5,.95),x=[a(d,w*b),a(d,w*p)];if(s.g(l.v(0,1,"com2 verticalchance")**.1)){let e=k.createLinearGradient(t[0]-i[0],t[1],t[0]+i[0],t[1]),a=k.createLinearGradient(t[0]-i[1],t[1],t[0]+i[1],t[1]),r=Math.floor(t[1]-m/2);e.addColorStop(0,x[0]),e.addColorStop(.5,g[0]),e.addColorStop(1,x[0]),a.addColorStop(0,x[1]),a.addColorStop(.5,g[1]),a.addColorStop(1,x[1]);for(let l=0;c>l;l++)k.fillStyle=e,k.fillRect(t[0]-i[0],r+l*f,2*i[0],o[0]),k.fillStyle=a,k.fillRect(t[0]-i[1],r+l*f+o[0],2*i[1],o[1]);M&&(k.fillStyle=e,k.fillRect(t[0]-i[0],r+c*f,2*i[0],o[0]))}else{let e=k.createLinearGradient(t[0],t[1]-i[0],t[0],t[1]+i[0]),a=k.createLinearGradient(t[0],t[1]-i[1],t[0],t[1]+i[1]),r=Math.floor(t[0]-m/2);e.addColorStop(0,x[0]),e.addColorStop(.5,g[0]),e.addColorStop(1,x[0]),a.addColorStop(0,x[1]),a.addColorStop(.5,g[1]),a.addColorStop(1,x[1]);for(let l=0;c>l;l++)k.fillStyle=e,k.fillRect(r+l*f,t[1]-i[0],o[0],2*i[0]),k.fillStyle=a,k.fillRect(r+l*f+o[0],t[1]-i[1],o[1],2*i[1]);M&&(k.fillStyle=e,k.fillRect(r+c*f,t[1]-i[0],o[0],2*i[0]))}},t=>{if(s.g(N(t)-.3)||B(t[0],t[1]+6*1.2)||B(t[0],t[1]+10.8))for(let e=0;100>e;e++){let e=s.D(i);if(3!=e)return void $[e](t)}let e=G(3,t,.1,.6,1,.3,.8),r=s.m(1,2)*e,h=Math.ceil(s.m(.3,1)*e),n=r*s.m(.25,.6),M=(r+n)/2/2,u=[Math.max(1,Math.ceil(h*s.m(.08,.25))),Math.max(1,Math.ceil(h*s.m(.03,.15)))],c=u[0]+u[1],m=Math.ceil(h/c);h=m*c+u[0];let d=o[l.K(f,"com3 basecolor")],b=l.v(.5,.8,"com3 lightness0 mid"),p=b-l.v(.2,.4,"com3 lightness0 edge"),g=l.v(0,.2,"com3 lightness1 edge"),w=[k.createLinearGradient(t[0]-M,t[1],t[0]+M,t[1]),k.createLinearGradient(t[0]-M,t[1],t[0]+M,t[1])],x=Math.ceil(t[1]-h/2),v=[x+u[0],x+c];w[0].addColorStop(0,a(d,p)),w[0].addColorStop(.5,a(d,b)),w[0].addColorStop(1,a(d,p)),w[1].addColorStop(0,a(d,g)),w[1].addColorStop(.5,a(d,1)),w[1].addColorStop(1,a(d,g)),k.fillStyle=w[0],k.beginPath(),k.moveTo(t[0]-n/2,x),k.lineTo(t[0]+n/2,x),k.lineTo(t[0]+r/2,x+h),k.lineTo(t[0]-r/2,x+h),k.fill(),k.fillStyle=w[1];for(let e=0;m>e;e++){let a=[e*c+u[0],(e+1)*c],l=[v[0]+e*c,v[1]+e*c],i=[(n+a[0]/h*(r-n))/2,(n+a[1]/h*(r-n))/2];k.beginPath(),k.moveTo(t[0]-i[0],l[0]),k.lineTo(t[0]+i[0],l[0]),k.lineTo(t[0]+i[1],l[1]),k.lineTo(t[0]-i[1],l[1]),k.fill()}},t=>{let e,r=F(t,0),h=s.m(.7,1),i=s.m(0,.2),o=u(),f=a(o,h),M=a(o,i),c=Math.max(3,Math.ceil(n*s.m(.4,1)**2*l.v(.02,.1,"com4 maxwidth"))),m=Math.floor(c/2),d=c%2,p=l.v(0,1,"com4 directionc0")**4,g=.1*l.v(0,1,"com4 directionc1")**4,x=.2*l.v(0,1,"com4 directionc2")**4,v=s.D([p*(2-r),g,x*(1+r)]);if(v)if(2>v){let a=Math.min(Math.max(8,w-t[1]-s.p(0,16)),Math.floor(.6*n*s.m(0,1)**l.v(2,7,"com4 hpower1"))),r=t[0]-m,h=t[1],i=k.createLinearGradient(r,h,t[0]+m+d,h);i.addColorStop(0,M),i.addColorStop(.5,f),i.addColorStop(1,M),k.fillStyle=i,k.fillRect(r,h,c,a),e=[t[0],t[1]+a]}else{let a=k.createLinearGradient(t[0],t[1]-m,t[0],t[1]+m+d);a.addColorStop(0,M),a.addColorStop(.5,f),a.addColorStop(1,M),k.fillStyle=a,k.fillRect(t[0],t[1]-m,Math.ceil(b-t[0])+1,c),e=[b,t[1]]}else{let a=Math.min(Math.max(8,t[1]-s.p(0,16)),Math.floor(.7*n*s.m(0,1)**l.v(2,6,"com4 hpower0"))),r=t[0]-m,h=t[1]-a,i=k.createLinearGradient(r,h,t[0]+m+d,h);i.addColorStop(0,M),i.addColorStop(.5,f),i.addColorStop(1,M),k.fillStyle=i,k.fillRect(r,h,c,a),e=[t[0],t[1]-a]}let y=[.6*l.v(0,1,"com4 covercomc0")**2,.2*l.v(0,1,"com4 covercomc1")**2,l.v(0,1,"com4 covercomc2")**2];if($[s.D(y)](t),B(e[0],e[1])){let t=[e[0]+Math.round(6*s.m(-1,1)),e[1]+Math.round(6*s.m(-1,1))];$[s.D(y)](B(t[0],t[1])?t:e)}},t=>{let e=G(5,t,.1,0,.9,0,.8),r=s.m(.75,1),h=s.m(0,.25),n=u(),i=a(n,r),o=a(n,h),f=1+s.q(l.v(0,1,"com5 multxc"),Math.floor(1.2*(e/8)**.6)),M=1+s.q(l.v(0,1,"com5 multyc"),Math.floor(1.2*(e/8)**.6)),c=s.m(.5,1)*e/Math.max(f,M),m=c+.5,d=c+1,b=c/5,p=[t[0]-c*f,t[1]-c*M];k.fillStyle=`rgba(0,0,0,${s.m(0,.2)})`;for(let t=0;f>t;t++){let e=p[0]+(2*t+1)*c;for(let t=0;M>t;t++){let a=p[1]+(2*t+1)*c;k.beginPath(),k.arc(e,a,d,0,7),k.fill()}}for(let t=0;f>t;t++){let e=p[0]+(2*t+1)*c;for(let t=0;M>t;t++){let a=p[1]+(2*t+1)*c,r=k.createRadialGradient(e,a,b,e,a,m);r.addColorStop(0,i),r.addColorStop(1,o),k.fillStyle=r,k.beginPath(),k.arc(e,a,m,0,7),k.fill()}}},t=>{if(0>=H||s.g(N(t)))return void $[s.D(i.slice(0,6))](t);let e=G(6,t,.05,0,.9,0,.8),r=Math.ceil(2*e*s.m(.6,1)),h=Math.floor(r/2),n=r%2,o=r*s.m(l.v(0,.8,"com6 h1min")**.5,.9)**l.v(.5,1.5,"com6 h1power"),f=Math.floor(o/2),M=Math.max((o-r)/2,r*(s.m(0,.45)+s.m(0,.45))*(l.k(.8,"com6 backnesstype")?l.v(.2,.9,"com6 backness#pos"):l.v(-.2,-.05,"com6 backness#neg"))),c=Math.ceil(e*s.m(.7,1)*l.v(.1,3.5,"com6 width")**.5),m=Math.floor(c/2),d=c%2,b=[[t[0]-m,t[1]+M-f],[t[0]+m+d,t[1]-h],[t[0]+m+d,t[1]+h+n],[t[0]-m,t[1]+M+f+r%2]],p=u();k.fillStyle=`rgba(0,0,0,${s.m(0,.2)})`,k.beginPath(),k.moveTo(b[0][0]-1,b[0][1]),k.lineTo(b[1][0]-1,b[1][1]),k.lineTo(b[2][0]-1,b[2][1]),k.lineTo(b[3][0]-1,b[3][1]),k.fill(),k.fillStyle=a(p,s.m(.7,1)),k.beginPath(),k.moveTo(b[0][0],b[0][1]),k.lineTo(b[1][0],b[1][1]),k.lineTo(b[2][0],b[2][1]),k.lineTo(b[3][0],b[3][1]),k.fill()}],z=0,H=0,L=0,P=0;for(;;){let t;if(I>H)K.length>L?(t=K[L],L++):(H++,t=K[0],L=1);else{if(z>=Q)break;t=K[s.p(0,K.length-1)],z++}let e=[t.x,t.y];for(let a=0;10>a;a++){let a=[t.x+s.p(-6,6),t.y+s.p(-6,6)];if(!(0>a[0]||a[0]>d||0>a[1]||a[1]>w)&&C(a[0],a[1])){e=a;break}}6>Math.abs(e[0]-b)&&s.g(l.v(0,1,"com middleness"))&&(e[0]=b),$[s.D(i)](e),P++}return k.clearRect(b+d%2,0,d,w),k.scale(-1,1),k.drawImage(A,-d,0),A})(l,h,n)}function h(t){return t.getContext("2d")}function n(t,e){let a=document.createElement("canvas");return a.width=t,a.height=e,[a,h(a)]}function i(t,e,a,r){t.beginPath(),t.arc(e,a,r,0,7),t.fill()}function o(t){return h(t).getImageData(0,0,t.width,t.height)}function f(t){let e=h(t),a=o(t),r=[],l=[];for(let t=0;a.width>t;t++)for(let e=0;a.height>e;e++)a.data[4*(e*a.width+t)+3]&&(r.push(t),l.push(e));let n=Math.min(...r),i=Math.min(...l),f=e.getImageData(n,i,1+Math.max(...r)-n,1+Math.max(...l)-i);return t.width=f.width,t.height=f.height,e.putImageData(f,0,0),t}function M(t){let e=((t,e,a)=>{let r=Math.floor(t/a),l=Math.floor(e/a),h=[],n=Math.floor(e/(2*l));for(let a=0;l>a;a++){let i=Math.floor(t/((2-a%2)*r));for(let o=0;r-a%2>o;o++)h.push([1e9,1e9,0,0,i+(o+(Math.random()-.5))*t/r,n+(a+(Math.random()-.5))*e/l,[]])}return h})(t.width,t.height,Math.max(12,Math.floor(Math.min(t.width,t.height)/12))),a=t.width,r=t.height,l=o(t);for(let t=0;r>t;t++)for(let r=0;a>r;r++){let h=4*(t*a+r);if(l.data[h+3]){let a,n=1e9;for(let l=0;e.length>l;l++){let h=Math.hypot(e[l][4]-r,e[l][5]-t);n>h&&(n=h,a=e[l])}a[0]=Math.min(r,a[0]),a[2]=Math.max(r,a[2]),a[1]=Math.min(t,a[1]),a[3]=Math.max(t,a[3]),a[6].push([r,t,l.data[h+0],l.data[h+1],l.data[h+2],l.data[h+3]])}}let h=[];return e.map(t=>{if(1e9>t[0]){let e=t[2]-t[0]+1,a=t[3]-t[1]+1,[r,l]=n(e,a),i=o(r);t[6].map(a=>{let r=4*((a[1]-t[1])*e+(a[0]-t[0]));i.data[r+0]=a[2],i.data[r+1]=a[3],i.data[r+2]=a[4],i.data[r+3]=a[5]}),l.putImageData(i,0,0),h.push([t[4],t[5],t[0]-t[4],t[1]-t[5],r])}}),h}function s(t,e,a){let r=t[0]-e/2,l=t[1]-a/2,h=Math.hypot(r,l),n=h*h,i=h*(1.5+1.5*Math.random());return[...t,(i-h)*(1-l**2/n)**.5*(r>0?1:-1),(i-h)*(1-r**2/n)**.5*(l>0?1:-1),(720*Math.random()-360*Math.PI)/((Math.random()+2)*t[4].width*18)]}let u=new(window.AudioContext||webkitAudioContext),c=([t,e,a,r,l,h=4,n=0,i=0,o=0,f=0,M=0,s=.1,c=0,m=0,d=0,b=.04,p=0,g=0,w=0])=>{let x,v,y,A,k=2*Math.PI,S=n*=500*k/44100/44100,q=e*=(1+.1*Math.random()-.05)*k/44100,C=[],D=0,K=0,O=0,I=1,Q=0,j=0,B=0;for(M*=500*k/44100**3,m*=k/44100,w*=k/44100,g*=44100,p=44100*p|0,v=(o=44100*o+9)+(b*=44100)+(a*=44100)+(r*=44100)+(f*=44100)|0;v>O;C[O++]=B)++j%(100*c|0)||(B=h?h>1?h>2?h>3?Math.sin((D%k)**3):Math.max(Math.min(Math.tan(D),1),-1):1-(2*D/k%2+2)%2:1-4*Math.abs(Math.round(D/k)-D/k):Math.sin(D),B=(p?1-i+i*Math.sin(k*O/p):1)*(B>0?1:-1)*Math.abs(B)**s*t*.3*(o>O?O/o:o+b>O?1-(O-o)/b*(1-l):o+b+a>O?l:v-f>O?(v-O-f)/r*l:0),B=f?B/2+(f>O?0:(v-f>O?1:(v-O)/f)*C[O-f|0]/2):B),x=(e+=n+=M)*Math.cos(m*K++),D+=x-x*d*(1-1e9*(Math.sin(O)+1)%2),I&&++I>g&&(e+=w,q+=w,I=0),!p||++Q%p||(e=q,n=S,I||=1);return y=u.createBuffer(1,v,44100),y.getChannelData(0).set(C),A=u.createBufferSource(),A.buffer=y,A.connect(u.destination),A.start(),A};function m(){c([.1,467,.06,.14,.58,,,.02,,,,,.4,303,.5,.02])}function d(t){c([t,274,.03,.67,.63,,,,,.25,,1.11,.5,,.8,.02,.04])}function b(){c([.3,279,.09,.09,.89,3,-4.9,.02,.02,.05,-.6,1.2])}function p(t){Y.save(),t(),Y.restore()}function w(t){let[e,a]=n(t.width,t.height),r=o(t),l=r.data;for(let t=0;l.length>t;t+=4){let e=l[t+0],a=l[t+1],r=l[t+2];l[t+0]=255-(.393*e+.769*a+.189*r),l[t+1]=255-(.349*e+.686*a+.168*r),l[t+2]=255-(.272*e+.534*a+.131*r)}return a.putImageData(r,0,0),e}function x(t){let[e,a]=n(20,20),r=a.createRadialGradient(10,10,0,10,10,10);return r.addColorStop(t,"#ff0"),r.addColorStop(1,"#f00"),a.fillStyle=r,i(a,10,10,10),e}function v(t){let[e,a]=n(t.width,t.height);return a.scale(1,-1),a.drawImage(t,0,0,t.width,-t.height),e}let y,A,k,S,q,C,D,K,O,I,Q,j,B,N,F,G,U,$,z,H,L=["#9af","#abf","#ccf","#fef","#fee","#fc9","#fc6"],P=g,Y=h(P),Z=f(l(new t("piBbgDn4CZqlkqiF"),"ie7jMyCFouoUjkVs",60)),J=M(Z),T=Z.width,V=Z.height,W=Math.floor(T/2),X=Math.floor(V/2),E=o(Z).data,R=(()=>{let t=[Z];for(let e=0;10>e;e++){let[a,r]=n(2*T,2*V);for(let e=0;3>e;e++)for(let a=0;3>a;a++)r.drawImage(t[0],W-t.length-1+a,X-t.length-1+e);r.globalCompositeOperation="source-in",r.fillStyle=e>5?"#0ff":"#00f",r.fillRect(0,0,a.width,a.height),r.globalCompositeOperation="source-over",r.drawImage(t[0],W-t.length,X-t.length),t.unshift(f(a))}return t.pop(),t.map(e=>{let a=h(e);a.globalCompositeOperation="destination-out",a.globalAlpha=.2;for(let r=5;10>r;r++)a.drawImage(t[r],Math.floor((e.width-t[r].width)/2),Math.floor((e.height-t[r].height)/2))}),t.length=5,t})(),_=[],[tt,et]=(()=>{let[t,e]=n(20,60);return e.fillStyle="#ff0",e.beginPath(),e.moveTo(10,60),e.lineTo(0,10),e.arc(10,10,10,Math.PI,0),e.lineTo(10,60),e.fill(),e.strokeStyle="#0ff",e.shadowColor="#00f",e.globalCompositeOperation="source-atop",e.shadowBlur=4,e.lineWidth=10,e.beginPath(),e.moveTo(10,70),e.lineTo(-3,10),e.arc(10,10,13,Math.PI,0),e.lineTo(10,70),e.stroke(),[t,o(t).data]})(),at=(()=>{let t=[];for(let e=0;9>e;e++)t.unshift(x(e/10)),t.push(x(e/10));return t})(),rt=o(at[0]).data,[lt,ht]=(()=>{let[t,e]=n(60,60),a=e.createRadialGradient(30,30,0,30,30,30);return a.addColorStop(.6,"#008"),a.addColorStop(1,"#00f"),e.fillStyle=a,i(e,30,30,30),[t,o(t).data]})(),nt=JSON.parse(localStorage.pnf_highscores||0)||[],it=(()=>{let[t,e]=n(100,100);e.font="bold 20px Arial",e.translate(50,50),e.rotate(-Math.PI/2),e.fillStyle="#fff",e.textAlign="center",e.fillText("NEW!",0,0),f(t);let[a,r]=n(t.width+10,t.height+10);return r.fillStyle="#f00",r.fillRect(0,0,a.width,a.height),r.drawImage(t,5,5),a})(),ot=0,ft=0,Mt=[],st=0,ut=performance.now(),ct=0;function mt(t){N+=t,F=(new Intl.NumberFormat).format(N)}function dt(){let t=Math.max(400,1e3-25*B);Kt+=Ct.p(t,t+400)}function bt(t){let e=f(t[0]);t[1]=o(e).data,t[2]=w(e),t[3]=M(e)}(t=>{let[e,a]=n(32,32),r=32,l=32;t.width>t.height?l*=t.height/t.width:r*=t.width/t.height,a.drawImage(t,0,0,r,l);let h=document.createElement("link");h.setAttribute("rel","icon"),h.setAttribute("href",e.toDataURL()),document.head.appendChild(h)})(Z);let pt=[["c4pf4K5xHzu4CyZM","Wl9w64KNQvFNbbbU",50,10,.35,0,[]],["VTjHVRDIYTbXk766","a3QM5c7MnbQlWns3",80,30,.27,0,[]],["1fOXvyryYCvwBWPL","I4xttvPYWxB1So2A",230,80,.2,6,[]],["VsM4qdcBSiuCPDGJ","q4D72OvJMb23kSZC",60,20,.4,0,[]],["l4pyu8yF0mt84Q4u","jPU5GcKNpf2JMgoG",100,40,.35,0,[[350]]],["NMp3mtsPHIwzMKYk","dBzvSKo7wpema3S5",220,90,.22,9,[]],["o67yOby6izpasGgo","fyKKupDEId96qQHu",70,20,.5,0,[[350]]],["IU7xqL8UqZIXJQDQ","aVBO8buAfBbQ4DOY",100,40,.35,0,[[350,6]]],["LP6kUeGMn7S5xZzi","p5O7jAQK67mDULTD",230,100,.25,14,[]],["SsSvCKpjLVTGITYH","aOEjI2Owpqpl06ex",65,30,.5,0,[[350]]],["AGUwhB1E94wgKe49","pwUtokX7oS7ZKFK1",110,50,.35,6,[[350,6]]],["qRF6GA3xnzX0lMcH","RIdNudvB6T2ro7C3",240,120,.3,22,[]]];function gt(t,e){let a=Math.round(t[0]-t[2]/2),r=Math.round(t[1]-t[3]/2),l=Math.round(e[0]-e[2]/2),h=Math.round(e[1]-e[3]/2);if(l+e[2]>a&&a+t[2]>l&&h+e[3]>r&&r+t[3]>h){let n=Math.min(a+t[2],l+e[2]),i=Math.min(r+t[3],h+e[3]),[o,f,M]=a>l?[0,a-l,n-a]:[l-a,0,n-l],[s,u,c]=r>h?[0,r-h,i-r]:[h-r,0,i-h];for(let a=0;c>a;a++)for(let r=0;M>r;r++)if(t[4][4*((s+a)*t[2]+o+r)+3]>0&&e[4][4*((u+a)*e[2]+f+r)+3]>0)return 1}}function wt(){j?(j--,c([.9,119,0,.44,.85,0,5.3,,,.01,-4.2,.09,.1,-340,.7,.08])):K||(d(1),K=1)}let xt,vt,yt,At=[["f","#fa0",t=>{I=t+6500}],["s","#0ff",()=>{c([.5,505,.12,.46,.69,2,,,.21,,,1.67,,,,.03,.28,.02,58]),j++}],["b","#f00",t=>{d(1.5),Q=t+1e3,Kt+=1500}]];function kt(t,e,a,r,l){return h=>{let n=(h-l)/r;if(1>=n)return p(()=>{Y.globalAlpha=1-n**2,Y.translate(e+t[0]+t[5]*n,a+t[1]+t[6]*n),Y.rotate(t[7]*n),Y.drawImage(t[4],t[2],t[3])}),1}}function St(t,e,a,r,l,h){let n=at[0].width,i=at[0].height,o=Math.hypot(a-t,r-e),f=(a-t)/o,M=(r-e)/o;return a=>{if(Q>a)return;let r=a-h;return gt(D,[t+=r*l*f,e+=r*l*M,n,i,rt])&&(wt(),!K)||e-i/2>700||0>e+i/2||t-n/2>480||0>t+n/2?void 0:(h=a,Y.drawImage(at[a%at.length|0],t-n/2,e-i/2),2)}}function qt(t,e,a,r,l,h){let n=[];for(let i=0;t>i;i++){let o=r+2*i*Math.PI/t;n.push(St(e,a,e+100*Math.cos(o),a+100*Math.sin(o),l,h))}return n}let Ct,Dt,Kt,Ot,It,Qt,jt,Bt,Nt=5;function Ft(t){t.preventDefault();let e=480/700,[a,r]=P.offsetWidth/P.offsetHeight>e?[P.offsetHeight*e,P.offsetHeight]:[P.offsetWidth,P.offsetWidth/e],[l]=t.changedTouches||[t];return[Math.floor(480*(l.pageX-(P.offsetWidth-a)/2)/a),Math.floor(700*(l.pageY-(P.offsetHeight-r)/2)/r)]}self.onmousedown=t=>{Ft(t),ot=1},self.ontouchstart=t=>{[y,A]=Ft(t),ot=1},self.onmousemove=t=>{[k,S]=Ft(t)},self.ontouchmove=t=>{let[e,a]=Ft(t);k+=e-y,S+=a-A,y=e,A=a},self.ontouchend=self.onmouseup=t=>{Ft(t),ot=0},self.onkeydown=self.onkeyup=t=>{st=Mt[t.keyCode]=t.type[5]},P.width=480,P.height=700,function e(a){2===ct?(t=>{let e=t-Bt;Bt=t,e>160&&(ut+=e,Mt=[]);let a=t-ut;if(!K){let t=.6*e,a=Mt[38]||Mt[90],r=Mt[40]||Mt[83],l=Mt[37]||Mt[65],h=Mt[39]||Mt[68];if(a||r||l||h){let e=t/((a||r)&&(l||h)?2**.5:1);a&&(C-=e),r&&(C+=e),l&&(q-=e),h&&(q+=e),k=q,S=C}else{let e=k-q,a=S-C,r=Math.hypot(e,a);t>r?(q=k,C=S):(q+=e/r*t,C+=a/r*t)}W>q?q=W:q>480-W&&(q=480-W),X>C?C=X:C>700-X&&(C=700-X),D=[q,C,T,V,E]}Y.fillStyle="#002",Y.fillRect(0,0,480,700);for(let t,e=100;e--;Y.fillStyle=L[e%L.length],i(Y,Math.floor(-60*(100-e)*(q-W)/(100*(480-T)))+102797*(1+Math.sin(t))*e%540,700*(Math.tan(e/9)+t*a/3e3)%700,3.3*(t-.3)))t=150/(3*e+200);let r=K,l=[],h=[],n=[];function o(t){let e=[],r=t(a,e);r&&(r-2?l.push(t):h.push(t),r.call&&n.push(r)),e.map(o)}if(xt.map(o),!r&&K&&(O=a,J.map(t=>kt(s(t,T,V),q-W,C-X,1500,a)).map(o)),xt=l.concat(h),vt=n,Y.fillStyle="#fff",Y.textAlign="center",K)p(()=>{Y.globalAlpha=Math.min(1,(a-O)/2e3),Y.textBaseline="middle",Y.font="40px Arial",Y.fillText("Game Over",240,350)});else{if(j){let t=R[Math.max(0,R.length-j)];Y.drawImage(t,q-Math.floor(t.width/2),C-Math.floor(t.height/2))}Y.drawImage(Z,q-W,C-X)}Q>a&&p(()=>{Y.globalAlpha=(Q-a)/1e3,Y.fillRect(0,0,480,700)}),Y.textBaseline="top",Y.font="16px Arial",Y.fillText(F,240,5);let f=I>a;if(!K&&a>yt+(f?100:200)&&(Nt=-Nt,xt.push(((t,e,a)=>r=>{let l=[t,e-=20*(r-a)/32,tt.width,tt.height,et];for(let t=0;vt.length>t;t++)if(vt[t](l,10,r))return;if(e+tt.height/2>=0)return a=r,Y.drawImage(tt,t-tt.width/2,e-tt.height/2),1})(q+(f?Nt:0),C-Math.floor(V/2),a)),yt=Math.max(a),c([.04,292,.01,.08,.74,3,-3.9,.43,.02])),a>Ot&&!jt&&(++B%5?Ot=a+1e4:(jt=1,xt.push(((t,e)=>{let a,r,l=U.width,h=U.height,n=0,i=e+2e3,o=1e9,f=e,M=240,u=-h/2,d=0,g=0,w=0;function x(t,e,r){if(gt(t,a))return g=r,o-=e,o>0&&m(),1}return(e,m)=>{let v=0;if(o>0){let a=e-f;0===n?e>i&&(n=1):1===n?(u+=.15*a,u>150&&(u=150,o=100+250*t,n=2,r=e)):0===d?(M+=.1*a,M+l/2>480&&(M=480-l/2,d=1)):(M-=.1*a,0>M-l/2&&(M=l/2,d=0))}else v=1;if(v)return c([1.1,369,.1,1,.77,2,.4,,,.37,,.05,.8,-1.3,.7]),mt(500*t),jt=0,Ot=e+1e4,It=Kt=500+e,dt(),void H.map(t=>m.push(kt(s(t,l,h),M-l/2,u-h/2,500,e)));a=[M,u,l,h,$],gt(D,a)&&(K=1),f=e,Y.drawImage(U,M-l/2,u-h/2);let y=400-e+g;if(y>0&&p(()=>{Y.globalAlpha=y/400,Y.drawImage(z,M-l/2,u-h/2)}),!K&&2===n&&e>r){if(b(),5*t>w){let[a,r]=[[28,119],[42,123],[108,94],[121,80],[143,50],[28,119]][Math.floor(w/t)];m.push(St(M-a,u+r,M-a,u+r+100,.5,e),St(M+a,u+r,M+a,u+r+100,.5,e))}else m.push(St(M,u+125,q,C,.3,e));w++,10*t>w?r=w>5*t?e+200:w===5*t?e+800:w%t?e+180:e+500:(w=0,r=e+800)}return x}})(Math.floor(B/5),a)))),a>It&&!jt&&(xt.push(((t,e,a,r)=>l=>{let h=[t,e+=5*(l-r)/32,lt.width,lt.height,ht],n=35*(1.5+Math.sin(l/200)/2);if(K||!gt(D,h)){if(700>=e-Math.floor(lt.height/2))return r=l,p(()=>{Y.translate(t,e),Y.drawImage(lt,-lt.width/2,-lt.height/2),Y.textAlign="center",Y.textBaseline="middle",Y.font="bold "+n+"px Copperplate",Y.fillStyle=At[a][1],Y.fillText(At[a][0],0,0)}),2}else At[a][2](l)})(Dt.p(30,450),Math.floor(-lt.height/2),Qt++,a)),Qt%=At.length,It=a+9e3),a>Kt&&!jt){let t=Ct.p(Math.min(Math.max(B-2,0),_.length-3),Math.min(B,_.length-1));xt.push((([t,e,a,r,l,h,n,i],o,f,M)=>{let u,c=Ct.m(0,2*Math.PI),g=t.width,w=t.height,x=-t.height/2,v=0;function y(t,e,a){if(gt(t,u))return v=a,(l-=e)>0&&m(),1}return(m,A)=>{let k=x,S=0;if(0>=l||Q>m?S=1:(x+=(m-M)*h,u=[o,x,g,w,e],gt(D,u)&&(wt(),K||(S=1))),S)return d(g/275),mt(f),n>0&&A.push(...qt(n,o,x+17*h,c,.45,m)),void r.map(t=>A.push(kt(s(t,g,w),o-g/2,x-w/2,500,m)));if(x-w/2>700)return;M=m,Y.drawImage(t,o-g/2,x-w/2);let O=400-m+v;if(O>0&&p(()=>{Y.globalAlpha=O/400,Y.drawImage(a,o-g/2,x-w/2)}),!K)for(let t=0;i.length>t;t++){let e=i[t][0];if(e>k&&x>e){b();let e=i[t][1],a=x+17*h;e?A.push(...qt(e,o,a,c,.3,m)):A.push(St(o,a,q,C,.3,m))}}return y}})(_[t],Ct.p(30,450),50*(t+1),a)),dt()}K&&a>O+3500&&((()=>{let t=[N,Date.now()];N&&(nt.push(t),nt.sort((t,e)=>e[0]-t[0]||e[1]-t[1]),nt.length=Math.min(nt.length,5),localStorage.pnf_highscores=JSON.stringify(nt)),G=nt.indexOf(t)})(),ct=1,ft=ot)})(a):(e=>{if(Y.fillStyle="#002",Y.fillRect(0,0,480,700),p(()=>{for(let t=200;t--;){Y.fillStyle=L[t%L.length];let a=50/(6-(e/3e3+t/13)%6);Y.globalAlpha=Math.min(a/100,1),i(Y,Math.cos(t)*a+240,Math.sin(t*t)*a+350,a/200)}}),Y.fillStyle="#fff",Y.textBaseline="middle",Y.textAlign="center",1===ct)Y.font="italic small-caps 40px Futura-CondensedMedium,sans-serif-condensed,sans-serif",nt.length?(Y.fillText("High Scores",240,100),p(()=>{Y.textAlign="start",Y.textBaseline="top";for(let t=0;nt.length>t;t++){Y.fillStyle="#fff",t===G&&(Y.drawImage(it,90-Math.floor(it.width/2),185+80*t-Math.floor(it.height/2)),Y.fillStyle="#fc6");let e=Intl.NumberFormat().format(nt[t][0]),a=new Date(nt[t][1]).toLocaleString();Y.font="50px Arial",Y.fillText(t+1,115,160+80*t),Y.font="60px Arial",Y.fillText("{",145,150+80*t),Y.font="25px Arial",Y.fillText(e+" points",170,160+80*t),Y.font="15px Arial",Y.fillText(a,170,190+80*t)}})):Y.fillText("Planet Not Found",240,350),Y.font="20px Arial",Y.fillText("<Press anywhere or any key to play>",240,670),ot||st?ft||(ct=2,Ct=new t("enemy"),Dt=new t("powerup"),Kt=1e3,Ot=5e3,It=9e3,xt=[],vt=[],Bt=ut=performance.now(),mt(B=Qt=yt=Q=I=N=0),K=0,k=q=240,S=C=630,j=1,jt=0):ft=0;else if(Y.font="italic 30px Arial",Y.fillText("Loading…",240,350),U)if(pt.length>_.length)_.push((([e,a,r,...h])=>[v(l(new t(e),a,r)),0,0,0,...h])(pt[_.length]));else{for(let t=0;_.length>t;t++)if(!_[t][1])return void bt(_[t]);ct=1}else U=v(f(l(new t("HYj7ADLjQr6icLtO"),"CdiB9N2ZoQWuAxur",270))),z=w(U),H=M(U),$=o(U).data})(a),st=0,requestAnimationFrame(e)}(ut);
