!function(){class t{constructor(t){this.t=0,this.h=0,this.i={},this.seed=t,8>this.seed.length&&(this.seed="padding_"+this.seed),this.seed.length%2==0&&(this.seed="1"+this.seed),this.o=[2972948403,3086140710,2071788248,3026137486,1411764137,2265725585,2923087685,1593177610],this.M=3234042090;for(let t=this.seed.length-1;t>=0;t--){const h=this.seed.charCodeAt(t);this.M=((this.M<<5)+this.M^h^this.M<<h%13+1^this.M>>h%17+1)>>>0,this.o[t%8]^=((this.M>>9)*(this.M%16384+3427)^h)>>>0}}l(){const t=this.seed.charCodeAt(this.t),h=this.o[this.h];return this.M=((this.M<<5)+this.M+h^t^this.M<<t%17+1^this.M>>t%13+1)>>>0,this.o[this.h]=(h>>3^h<<t%19+1^this.M%134217728*3427)>>>0,this.t=(this.t+1)%this.seed.length,this.h=(this.h+1)%8,this.M}u(t){const h=[1160605769,1424711319,876532818,1419174464];let s=1206170165;if(t||(t="?/?/?/",s=3379896793),this.i[t])return this.i[t];for(let i=t.length-1;i>=0;i--){const e=t.charCodeAt(i);let n=h[0]^e;n=(n^n<<11)>>>0,n=(n^n>>8)>>>0,h[0]=h[1],h[1]=h[2],h[2]=h[3],h[3]=(h[3]^h[3]>>19^n)>>>0,s=3427*(s^e<<24)^h[3]}for(let t=this.seed.length-1;t>=0;t--){const i=this.seed.charCodeAt(t);let e=h[0]^i;e=(e^e<<11)>>>0,e=(e^e>>8)>>>0,h[0]=h[1],h[1]=h[2],h[2]=h[3],h[3]=(h[3]^h[3]>>19^e)>>>0,s=3427*(s^i<<24)^h[3]}return this.i[t]=s>>>0,this.i[t]}m(t,h){return(4294967296*this.l()+this.l())/0x10000000000000000*(h-t)+t}p(t,h){return Math.floor(this.m(t,h+1))}v(t){return this.m(0,1)<t}g(t,h,s){return(4294967296*this.u(s)+this.u(s+"@"))/0x10000000000000000*(h-t)+t}H(t,h,s){return Math.floor(this.g(t,h+1,s))}k(t,h){return this.g(0,1,h)<t}q(t){return this.v(t)?-1:1}B(t,h){let s=0;for(;this.v(t)&&h>s;)s++;return s}S(t,h,s){let i=0;for(;(4294967296*this.u(s+i)+this.u(s+"@"+i))/0x10000000000000000<t&&h>i;)i++;return i}D(t){let h=0;for(let s=0;t.length>s;s++)h+=t[s];let s=this.m(0,h);for(let h=0;t.length>h;h++)if(s-=t[h],0>s)return h;return 0}K(t,h){let s=0;for(let h=0;t.length>h;h++)s+=t[h];let i=this.g(0,s,h);for(let h=0;t.length>h;h++)if(i-=t[h],0>i)return h;return 0}}function h(t,h,s){return Math.max(h,Math.min(s,t))}function s(t,h){return`rgb(${t.map(t=>t*h*100).join("%,")}%)`}function i(t,h,s){const i=(i,e=(i+6*t)%6)=>s-s*h*Math.max(Math.min(e,4-e,1),0);return[i(5),i(3),i(1)]}function e(e,n,o){return((e,n,o)=>{const a=(t=>{const h=[];return h[0]=.8*t.m(.001,1)*2**t.m(0,8),h[1]=.9*t.m(.01,1)*2**t.m(0,8),h[2]=1*t.m(.001,1)*2**t.m(0,8),h[3]=3*t.m(0,1)*2**t.m(0,8),h[4]=.5*t.m(0,1)*2**t.m(0,8),h[5]=.05*t.m(0,1)*2**t.m(0,8),h[6]=.5*t.m(0,1)*2**t.m(0,8),h})(e),c=[],r=[],M=1+(e.k(.7,"base color +1")?1:0)+e.S(.3,3,"base color count");for(let t=0;M>t;t++){const s="base color"+t;c.push(i(e.g(0,1,s+"hue")**2,h(e.g(-.2,1,s+"saturation"),0,e.g(0,1,s+"saturation bound")**4),h(e.g(.7,1.1,s+"value"),0,1))),r.push(2**e.g(0,6,s+"chances"))}const f=new t(e.seed+n);function l(){let t=c[f.D(r)];return f.v(e.g(0,.5,"base color shift chance")**2)&&(t=[t[0],t[1],t[2]],t[0]=h(t[0]+e.g(0,.6,"base color shift range red")**2*h(f.m(-1,1.2),0,1)*h(f.q(.7)+f.q(.7),-1,1),0,1),t[1]=h(t[1]+e.g(0,.6,"base color shift range green")**2*h(f.m(-1,1.2),0,1)*h(f.q(.7)+f.q(.7),-1,1),0,1),t[2]=h(t[2]+e.g(0,.6,"base color shift range blue")**2*h(f.m(-1,1.2),0,1)*h(f.q(.7)+f.q(.7),-1,1),0,1)),t}o=o||f.m(e.g(2.5,3.5,"size min"),e.g(5,7,"size max"))**3;const u=f.m(e.g(.5,1,"wratio min"),e.g(1,1.3,"wratio max")),m=f.m(e.g(.7,1,"hratio min"),e.g(1.1,1.7,"hratio max")),d=Math.floor(o*u),p=Math.floor(d/2),b=Math.floor(d/6),w=(d-6*b)/2,v=Math.floor(o*m),x=Math.floor(v/2),g=Math.floor(v/6),H=(v-6*g)/2,y=document.createElement("canvas");y.width=d,y.height=v;const k=y.getContext("2d"),q=d*v/20;[()=>{const t=Math.ceil(d*e.g(.1,1,"outline0 iw")/5),s=[[[p-t,0],[p+t,v]]],i=2+Math.floor(f.m(.5,1)*e.g(2,8,"outline0 bc")*o**.5);for(let t=1;i>t;t++){const t=s[f.p(0,s.length-1)],i=[t[0][0]+f.m(0,1)*(t[1][0]-t[0][0]),t[0][1]+f.m(0,1)*(t[1][1]-t[0][1])];(t[0][1]+t[1][1])/2>i[1]&&f.v(e.g(.5,1.5,"outline0 frontbias"))&&(i[1]=t[1][1]-(i[1]-t[0][1]));const n=[h(f.m(0,1)*d,0,d),h(f.m(0,1)*v,0,v)],o=q/Math.abs((n[0]-i[0])*(n[1]-i[1]));if(1>o&&(n[0]=i[0]+(n[0]-i[0])*o,n[1]=i[1]+(n[1]-i[1])*o),i[0]>n[0]){const t=i[0];i[0]=n[0],n[0]=t}if(i[1]>n[1]){const t=i[1];i[1]=n[1],n[1]=t}s.push([[Math.floor(i[0]),Math.floor(i[1])],[Math.ceil(n[0]),Math.ceil(n[1])]])}k.fillStyle="#fff";for(let t=0;s.length>t;t++){const h=s[t];k.fillRect(h[0][0],h[0][1],h[1][0]-h[0][0],h[1][1]-h[0][1]),k.fillRect(d-h[1][0],h[0][1],h[1][0]-h[0][0],h[1][1]-h[0][1])}},()=>{const t=Math.max(2,(q/Math.PI)**.5),h=Math.ceil(d*e.g(.1,1,"outline1 iw")/5),s=[],i=Math.floor(v/(2*h));for(let t=0;i>t;t++)s.push({O:[p,v-h*(2*t+1)],r:h});const n=i+Math.floor(f.m(.5,1)*e.g(10,50,"outline1 cc")*o**.5);for(let h=i;n>h;h++){const h=s[Math.max(f.p(0,s.length-1),f.p(0,s.length-1))];let i=f.m(1,t);const n=f.m(Math.max(0,h.r-i),h.r);let o=f.m(0,2*Math.PI);o>Math.PI&&f.v(e.g(.5,1.5,"outline1 frontbias"))&&(o=f.m(0,Math.PI));let a=[h.O[0]+Math.cos(o)*n,h.O[1]+Math.sin(o)*n];i=Math.min(i,a[0],d-a[0],a[1],v-a[1]),s.push({O:a,r:i})}k.fillStyle="#fff";for(let t=0;s.length>t;t++){const h=s[t];k.beginPath(),k.arc(h.O[0],h.O[1],h.r,0,7),k.fill(),k.beginPath(),k.arc(d-h.O[0],h.O[1],h.r,0,7),k.fill()}},()=>{const t=[[p,f.m(0,.05)*v],[p,f.m(.95,1)*v]],h=6/o+e.g(.03,.1,"outline2 basefatness"),s=Math.max(3,Math.ceil(f.m(.05,.1)/h*o**.5));k.lineCap=["round","square"][e.H(0,1,"outline2 linecap")],k.strokeStyle="#fff";for(let i=1;s>i;i++){let s=t[i];s||(s=[f.m(0,1)*d,f.m(0,1)**e.g(.1,1,"outline2 frontbias")*v],t.push(s));const n=1+f.B(e.g(0,1,"outline2 conadjust"),3);for(let i=0;n>i;i++){const i=t[f.p(0,t.length-2)];k.lineWidth=f.m(.7,1)*h*o,k.beginPath(),k.moveTo(i[0],i[1]),k.lineTo(s[0],s[1]),k.stroke(),k.beginPath(),k.moveTo(d-i[0],i[1]),k.lineTo(d-s[0],s[1]),k.stroke()}}}][e.K([1,1,1],"outline type")]();const B=k.getImageData(0,0,d,v);function S(t,h){return B.data[4*(h*d+t)+3]}const D=[];for(let t=0;b>t;t++){D[t]=[];for(let h=0;g>h;h++)D[t][h]={A:t,C:h,x:Math.floor(w+6*(t+.5)),y:Math.floor(H+6*(h+.5))}}const K=[D[Math.floor(b/2)][Math.floor(g/2)]];let O=0;for(;K.length>O;){const t=K[O];if(t.A>0){const h=D[t.A-1][t.C];h.F||(S(h.x,h.y)?(h.F=1,K.push(h)):h.F=2)}if(b-1>t.A){const h=D[t.A+1][t.C];h.F||(S(h.x,h.y)?(h.F=1,K.push(h)):h.F=2)}if(t.C>0){const h=D[t.A][t.C-1];h.F||(S(h.x,h.y)?(h.F=1,K.push(h)):h.F=2)}if(g-1>t.C){const h=D[t.A][t.C+1];h.F||(S(h.x,h.y)?(h.F=1,K.push(h)):h.F=2)}O++}for(let t=0;K.length>t;t++){const h=K[t],s=D[b-1-h.A][h.C];1!=s.F&&(s.F=1,K.push(s))}const A=e.H(1,2,"base component passes"),C=Math.max(1,Math.floor(K.length*e.g(0,1/A,"extra component amount"))),F=A*K.length+C;function I(t,h){const s=Math.floor((t-w)/6),i=Math.floor((h-H)/6);return s>=0&&b>s&&i>=0&&g>i&&1==D[s][i].F}function Q(t){return 1-t[1]/v}function j(t,h){let s=Math.min(1,1-Math.abs(t[0]-p)/p);return h&&(s=Math.min(s,1-Math.abs(t[1]-x)/x)),s}function N(t,h,s,i,n,o,a){const c=(j(h,!0)*(1-1/((d+v)/1e3+1))*e.g(0,1,"master bigness")**.5*(1-L/F))**s;let r=8;if(f.v(e.g(i,n,`com${t} bigchance`)*c)){const s=e.g(o,a,`com${t} bigincchance`);for(;f.v(s*c)&&Math.min(h[0]-r,d-h[0]-r,h[1]-r,v-h[1]-r)>r/2;)r*=1.5}return r}function G(t,h,s){const i=k.createLinearGradient(h[0],h[1],2*t[0]-h[0],2*t[1]-h[1]),e=`rgba(0,0,0,${s})`;return i.addColorStop(0,e),i.addColorStop(.5,"rgba(0,0,0,0)"),i.addColorStop(1,e),i}y.width|=0;const U=[t=>{const i=N(0,t,.3,0,.9,0,.5),e=2*i,n=[Math.ceil(f.m(1,Math.max(2,i/2))),Math.ceil(f.m(1,Math.max(2,i/2)))],o=Math.min(n[0],n[1])*f.m(.1,1.2),a=[n[0]+2*o,n[1]+2*o],c=[Math.ceil(e/a[0]),Math.ceil(e/a[1])],r=[Math.round(c[0]*a[0]/2),Math.round(c[1]*a[1]/2)],M=l(),u=s(M,f.m(.4,1)),m=s(M,f.m(.4,1));k.fillStyle=`rgba(0,0,0,${f.m(0,.25)})`,k.fillRect(t[0]-r[0]-1,t[1]-r[1]-1,a[0]*c[0]+2,a[1]*c[1]+2),k.fillStyle=m,k.fillRect(t[0]-r[0],t[1]-r[1],a[0]*c[0],a[1]*c[1]),k.fillStyle=u;for(let h=0;c[0]>h;h++){const s=t[0]+o+h*a[0]-r[0];for(let h=0;c[1]>h;h++)k.fillRect(s,t[1]+o+h*a[1]-r[1],n[0],n[1])}f.v(h(i/8*(.6*L/F+.3),0,.98))&&(k.fillStyle=G(t,[t[0]+r[0],t[1]],f.m(0,.9)),k.fillRect(t[0]-r[0],t[1]-r[1],a[0]*c[0],a[1]*c[1]))},t=>{const i=N(1,t,.2,.3,1,0,.6);let n=Math.ceil(f.m(.8,2)*i);const o=Math.ceil(f.m(.8,2)*i),a=f.p(3,Math.max(4,n)),c=Math.max(1,Math.round(n/a));n=c*a;const r=s(l(),f.m(.5,1)),M=f.m(.3,.9);if(f.v(h(e.g(-.2,1.2,"com1 hchance"),0,1))){const h=[t[0]-Math.floor(n/2),t[1]-Math.floor(o/2)];k.fillStyle=`rgba(0,0,0,${f.m(0,.25)})`,k.fillRect(h[0]-1,h[1]-1,n+2,o+2),k.fillStyle=r,k.fillRect(h[0],h[1],n,o);for(let s=0;c>s;s++)k.fillStyle=G([h[0]+(s+.5)*a,t[1]],[h[0]+s*a,t[1]],M),k.fillRect(h[0]+s*a,h[1],a,o)}else{const h=[t[0]-Math.floor(o/2),t[1]-Math.floor(n/2)];k.fillStyle=`rgba(0,0,0,${f.m(0,.25)})`,k.fillRect(h[0]-1,h[1]-1,o+2,n+2),k.fillStyle=r,k.fillRect(h[0],h[1],o,n);for(let s=0;c>s;s++)k.fillStyle=G([t[0],h[1]+(s+.5)*a],[t[0],h[1]+s*a],M),k.fillRect(h[0],h[1]+s*a,n,a)}},t=>{const i=N(2,t,.05,0,1,0,.9),n=Math.ceil(f.m(.6,1.4)*i),o=Math.ceil(f.m(1,2)*i),a=[Math.ceil(h(n*f.m(.7,1)/2,1,n)),Math.ceil(h(n*f.m(.8,1)/2,1,n))],c=[Math.floor(h(n*f.m(.05,.25),1,o)),Math.floor(h(n*f.m(.1,.3),1,o))],r=c[0]+c[1],M=f.v(e.g(0,1,"com2 oddchance")**.5),u=h(Math.floor(o/r),1,o),m=u*r+(M?c[0]:0),d=l(),p=f.m(.6,1),b=f.m(.6,1),w=[s(d,p),s(d,b)],v=1-f.m(.5,.95),x=[s(d,v*p),s(d,v*b)];if(f.v(e.g(0,1,"com2 verticalchance")**.1)){const h=k.createLinearGradient(t[0]-a[0],t[1],t[0]+a[0],t[1]),s=k.createLinearGradient(t[0]-a[1],t[1],t[0]+a[1],t[1]),i=Math.floor(t[1]-m/2);h.addColorStop(0,x[0]),h.addColorStop(.5,w[0]),h.addColorStop(1,x[0]),s.addColorStop(0,x[1]),s.addColorStop(.5,w[1]),s.addColorStop(1,x[1]);for(let e=0;u>e;e++)k.fillStyle=h,k.fillRect(t[0]-a[0],i+e*r,2*a[0],c[0]),k.fillStyle=s,k.fillRect(t[0]-a[1],i+e*r+c[0],2*a[1],c[1]);M&&(k.fillStyle=h,k.fillRect(t[0]-a[0],i+u*r,2*a[0],c[0]))}else{const h=k.createLinearGradient(t[0],t[1]-a[0],t[0],t[1]+a[0]),s=k.createLinearGradient(t[0],t[1]-a[1],t[0],t[1]+a[1]),i=Math.floor(t[0]-m/2);h.addColorStop(0,x[0]),h.addColorStop(.5,w[0]),h.addColorStop(1,x[0]),s.addColorStop(0,x[1]),s.addColorStop(.5,w[1]),s.addColorStop(1,x[1]);for(let e=0;u>e;e++)k.fillStyle=h,k.fillRect(i+e*r,t[1]-a[0],c[0],2*a[0]),k.fillStyle=s,k.fillRect(i+e*r+c[0],t[1]-a[1],c[1],2*a[1]);M&&(k.fillStyle=h,k.fillRect(i+u*r,t[1]-a[0],c[0],2*a[0]))}},t=>{if(f.v(Q(t)-.3)||I(t[0],t[1]+6*1.2)||I(t[0],t[1]+10.8))for(let h=0;100>h;h++){const h=f.D(a);if(3!=h)return void U[h](t)}const h=N(3,t,.1,.6,1,.3,.8),i=f.m(1,2)*h;let n=Math.ceil(f.m(.3,1)*h);const o=i*f.m(.25,.6),M=(i+o)/2/2,l=[Math.max(1,Math.ceil(n*f.m(.08,.25))),Math.max(1,Math.ceil(n*f.m(.03,.15)))],u=l[0]+l[1],m=Math.ceil(n/u);n=m*u+l[0];const d=c[e.K(r,"com3 basecolor")],p=e.g(.5,.8,"com3 lightness0 mid"),b=p-e.g(.2,.4,"com3 lightness0 edge"),w=e.g(0,.2,"com3 lightness1 edge"),v=[k.createLinearGradient(t[0]-M,t[1],t[0]+M,t[1]),k.createLinearGradient(t[0]-M,t[1],t[0]+M,t[1])],x=Math.ceil(t[1]-n/2),g=[x+l[0],x+u];v[0].addColorStop(0,s(d,b)),v[0].addColorStop(.5,s(d,p)),v[0].addColorStop(1,s(d,b)),v[1].addColorStop(0,s(d,w)),v[1].addColorStop(.5,s(d,1)),v[1].addColorStop(1,s(d,w)),k.fillStyle=v[0],k.beginPath(),k.moveTo(t[0]-o/2,x),k.lineTo(t[0]+o/2,x),k.lineTo(t[0]+i/2,x+n),k.lineTo(t[0]-i/2,x+n),k.fill(),k.fillStyle=v[1];for(let h=0;m>h;h++){const s=[h*u+l[0],(h+1)*u],e=[g[0]+h*u,g[1]+h*u],a=[(o+s[0]/n*(i-o))/2,(o+s[1]/n*(i-o))/2];k.beginPath(),k.moveTo(t[0]-a[0],e[0]),k.lineTo(t[0]+a[0],e[0]),k.lineTo(t[0]+a[1],e[1]),k.lineTo(t[0]-a[1],e[1]),k.fill()}},t=>{const h=j(t,!1),i=f.m(.7,1),n=f.m(0,.2),a=l(),c=s(a,i),r=s(a,n),M=Math.max(3,Math.ceil(o*f.m(.4,1)**2*e.g(.02,.1,"com4 maxwidth"))),u=Math.floor(M/2),m=M%2,d=e.g(0,1,"com4 directionc0")**4,b=.1*e.g(0,1,"com4 directionc1")**4,w=.2*e.g(0,1,"com4 directionc2")**4,x=f.D([d*(2-h),b,w*(1+h)]);let g;if(x)if(2>x){const h=Math.min(Math.max(8,v-t[1]-f.p(0,16)),Math.floor(.6*o*f.m(0,1)**e.g(2,7,"com4 hpower1"))),s=t[0]-u,i=t[1],n=k.createLinearGradient(s,i,t[0]+u+m,i);n.addColorStop(0,r),n.addColorStop(.5,c),n.addColorStop(1,r),k.fillStyle=n,k.fillRect(s,i,M,h),g=[t[0],t[1]+h]}else{const h=k.createLinearGradient(t[0],t[1]-u,t[0],t[1]+u+m);h.addColorStop(0,r),h.addColorStop(.5,c),h.addColorStop(1,r),k.fillStyle=h,k.fillRect(t[0],t[1]-u,Math.ceil(p-t[0])+1,M),g=[p,t[1]]}else{const h=Math.min(Math.max(8,t[1]-f.p(0,16)),Math.floor(.7*o*f.m(0,1)**e.g(2,6,"com4 hpower0"))),s=t[0]-u,i=t[1]-h,n=k.createLinearGradient(s,i,t[0]+u+m,i);n.addColorStop(0,r),n.addColorStop(.5,c),n.addColorStop(1,r),k.fillStyle=n,k.fillRect(s,i,M,h),g=[t[0],t[1]-h]}const H=[.6*e.g(0,1,"com4 covercomc0")**2,.2*e.g(0,1,"com4 covercomc1")**2,e.g(0,1,"com4 covercomc2")**2];if(U[f.D(H)](t),I(g[0],g[1])){const t=[g[0]+Math.round(6*f.m(-1,1)),g[1]+Math.round(6*f.m(-1,1))];U[f.D(H)](I(t[0],t[1])?t:g)}},t=>{const h=N(5,t,.1,0,.9,0,.8),i=f.m(.75,1),n=f.m(0,.25),o=l(),a=s(o,i),c=s(o,n),r=1+f.B(e.g(0,1,"com5 multxc"),Math.floor(1.2*(h/8)**.6)),M=1+f.B(e.g(0,1,"com5 multyc"),Math.floor(1.2*(h/8)**.6)),u=f.m(.5,1)*h/Math.max(r,M),m=u+.5,d=u+1,p=u/5,b=[t[0]-u*r,t[1]-u*M];k.fillStyle=`rgba(0,0,0,${f.m(0,.2)})`;for(let t=0;r>t;t++){const h=b[0]+(2*t+1)*u;for(let t=0;M>t;t++){const s=b[1]+(2*t+1)*u;k.beginPath(),k.arc(h,s,d,0,7),k.fill()}}for(let t=0;r>t;t++){const h=b[0]+(2*t+1)*u;for(let t=0;M>t;t++){const s=b[1]+(2*t+1)*u,i=k.createRadialGradient(h,s,p,h,s,m);i.addColorStop(0,a),i.addColorStop(1,c),k.fillStyle=i,k.beginPath(),k.arc(h,s,m,0,7),k.fill()}}},t=>{if(0>=$||f.v(Q(t)))return void U[f.D(a.slice(0,6))](t);const h=N(6,t,.05,0,.9,0,.8),i=Math.ceil(2*h*f.m(.6,1)),n=Math.floor(i/2),o=i%2,c=i*f.m(e.g(0,.8,"com6 h1min")**.5,.9)**e.g(.5,1.5,"com6 h1power"),r=Math.floor(c/2),M=Math.max((c-i)/2,i*(f.m(0,.45)+f.m(0,.45))*(e.k(.8,"com6 backnesstype")?e.g(.2,.9,"com6 backness#pos"):e.g(-.2,-.05,"com6 backness#neg"))),u=Math.ceil(h*f.m(.7,1)*e.g(.1,3.5,"com6 width")**.5),m=Math.floor(u/2),d=u%2,p=[[t[0]-m,t[1]+M-r],[t[0]+m+d,t[1]-n],[t[0]+m+d,t[1]+n+o],[t[0]-m,t[1]+M+r+i%2]],b=l();k.fillStyle=`rgba(0,0,0,${f.m(0,.2)})`,k.beginPath(),k.moveTo(p[0][0]-1,p[0][1]),k.lineTo(p[1][0]-1,p[1][1]),k.lineTo(p[2][0]-1,p[2][1]),k.lineTo(p[3][0]-1,p[3][1]),k.fill(),k.fillStyle=s(b,f.m(.7,1)),k.beginPath(),k.moveTo(p[0][0],p[0][1]),k.lineTo(p[1][0],p[1][1]),k.lineTo(p[2][0],p[2][1]),k.lineTo(p[3][0],p[3][1]),k.fill()}];let Y=0,$=0,z=0,L=0;for(;;){let t;if(A>$)K.length>z?(t=K[z],z++):($++,t=K[0],z=1);else{if(Y>=C)break;t=K[f.p(0,K.length-1)],Y++}let h=[t.x,t.y];for(let s=0;10>s;s++){const s=[t.x+f.p(-6,6),t.y+f.p(-6,6)];if(!(0>s[0]||s[0]>d||0>s[1]||s[1]>v)&&S(s[0],s[1])){h=s;break}}6>Math.abs(h[0]-p)&&f.v(e.g(0,1,"com middleness"))&&(h[0]=p),U[f.D(a)](h),L++}return k.clearRect(p+d%2,0,d,v),k.scale(-1,1),k.drawImage(y,-d,0),y})(e,n,o)}function n(t,h){const s=document.createElement("canvas");return s.width=t,s.height=h,s}function o(t){return t.getContext("2d").getImageData(0,0,t.width,t.height)}function a(t){const h=t.getContext("2d"),s=o(t),i=[],e=[];for(let t=0;s.width>t;t++)for(let h=0;s.height>h;h++)s.data[4*(h*s.width+t)+3]&&(i.push(t),e.push(h));const n=Math.min(...i),a=Math.min(...e),c=h.getImageData(n,a,1+Math.max(...i)-n,1+Math.max(...e)-a);return t.width=c.width,t.height=c.height,h.putImageData(c,0,0),t}function c(t){const h=((t,h,s)=>{const i=Math.floor(t/s),e=Math.floor(h/s),n=[],o=Math.floor(h/(2*e));for(let s=0;e>s;s++){const a=s%2==0?i:i-1,c=Math.floor(t/((2-s%2)*i));for(let r=0;a>r;r++)n.push([c+(r+(Math.random()-.5))*t/i,o+(s+(Math.random()-.5))*h/e])}return n})(t.width,t.height,Math.max(12,Math.floor(Math.min(t.width,t.height)/12))),s=t.width,i=t.height,e=o(t),a=h.map(t=>({I:1e9,j:1e9,N:0,G:0,U:t,Y:[]}));for(let t=0;i>t;t++)for(let i=0;s>i;i++){const n=4*(t*s+i);if(e.data[n+3]){let s,o=1e9;for(let e=0;h.length>e;e++){const n=Math.hypot(h[e][0]-i,h[e][1]-t);o>n&&(o=n,s=e)}const c=a[s];c.I>i&&(c.I=i),i>c.N&&(c.N=i),c.j>t&&(c.j=t),t>c.G&&(c.G=t),c.Y.push([i,t,e.data[n+0],e.data[n+1],e.data[n+2],e.data[n+3]])}}const c=[];return a.map(t=>{if(1e9>t.I){const h=t.N-t.I+1,s=n(h,t.G-t.j+1),i=o(s);t.Y.map(s=>{const e=4*((s[1]-t.j)*h+(s[0]-t.I));i.data[e+0]=s[2],i.data[e+1]=s[3],i.data[e+2]=s[4],i.data[e+3]=s[5]}),s.getContext("2d").putImageData(i,0,0),c.push({U:t.U,canvas:s,$:[t.I,t.j]})}}),c}function r(t,h,s){const i=t.U[0]-h/2,e=t.U[1]-s/2,n=Math.hypot(i,e),o=n*n,a=n*(1.5+1.5*Math.random());t.L=(a-n)*(1-e**2/o)**.5*(i>0?1:-1),t.P=(a-n)*(1-i**2/o)**.5*(e>0?1:-1),t.angle=(720*Math.random()-360*Math.PI)/((Math.random()+2)*t.canvas.width*18)}const M=new(window.AudioContext||webkitAudioContext),f=44100,l=(t,h,s,i,e,n=4,o=0,a=0,c=0,r=0,l=0,u=.1,m=0,d=0,p=0,b=.04,w=0,v=0,x=0)=>{let g,H,y,k,q=2*Math.PI,B=o*=500*q/f/f,S=h*=(1+.1*Math.random()-.05)*q/f,D=[],K=0,O=0,A=0,C=1,F=0,I=0,Q=0;for(l*=500*q/f**3,d*=q/f,x*=q/f,v*=f,w=w*f|0,H=(c=c*f+9)+(b*=f)+(s*=f)+(i*=f)+(r*=f)|0;H>A;D[A++]=Q)++I%(100*m|0)||(Q=n?n>1?n>2?n>3?Math.sin((K%q)**3):Math.max(Math.min(Math.tan(K),1),-1):1-(2*K/q%2+2)%2:1-4*Math.abs(Math.round(K/q)-K/q):Math.sin(K),Q=(w?1-a+a*Math.sin(q*A/w):1)*(Q>0?1:-1)*Math.abs(Q)**u*t*.3*(c>A?A/c:c+b>A?1-(A-c)/b*(1-e):c+b+s>A?e:H-r>A?(H-A-r)/i*e:0),Q=r?Q/2+(r>A?0:(H-r>A?1:(H-A)/r)*D[A-r|0]/2):Q),g=(h+=o+=l)*Math.cos(d*O++),K+=g-g*p*(1-1e9*(Math.sin(A)+1)%2),C&&++C>v&&(h+=x,S+=x,C=0),!w||++F%w||(h=S,o=B,C||=1);return y=M.createBuffer(1,H,f),y.getChannelData(0).set(D),k=M.createBufferSource(),k.buffer=y,k.connect(M.destination),k.start(),k};function u(){l(...[.1,467,.06,.14,.58,,,.02,,,,,.4,303,.5,.02])}function m(t){l(...[t,274,.03,.67,.63,,,,,.25,,1.11,.5,,.8,.02,.04])}function d(){l(.3,279,.09,.09,.89,3,-4.9,.02,.02,.05,-.6,1.2)}const p=["#9af","#abf","#ccf","#fef","#fee","#fc9","#fc6"];function b(t){const h=n(t.width,t.height),s=o(t),i=s.data;for(let t=0;i.length>t;t+=4){const h=i[t+0],s=i[t+1],e=i[t+2];i[t+0]=255-(.393*h+.769*s+.189*e),i[t+1]=255-(.349*h+.686*s+.168*e),i[t+2]=255-(.272*h+.534*s+.131*e)}return h.getContext("2d").putImageData(s,0,0),h}function w(t){const h=n(20,20),s=h.getContext("2d"),i=s.createRadialGradient(10,10,0,10,10,10);return i.addColorStop(t,"#ff0"),i.addColorStop(1,"#f00"),s.fillStyle=i,s.beginPath(),s.arc(10,10,10,0,7),s.fill(),h}function v(t){const h=n(t.width,t.height),s=h.getContext("2d");return s.scale(1,-1),s.drawImage(t,0,0,t.width,-t.height),h}const x=480,g=700,H=240,y=350,k=self.a,q=k.getContext("2d"),B=a(e(new t("piBbgDn4CZqlkqiF"),"ie7jMyCFouoUjkVs",60)),S=c(B),D=B.width,K=B.height,O=o(B).data,A=(()=>{const t=[B];for(let h=0;10>h;h++){const s=n(2*D,2*K),i=s.getContext("2d");for(let h=0;3>h;h++)for(let s=0;3>s;s++)i.drawImage(t[0],Math.floor(D/2)-t.length-1+s,Math.floor(K/2)-t.length-1+h);i.globalCompositeOperation="source-in",i.fillStyle=h>5?"#0ff":"#00f",i.fillRect(0,0,s.width,s.height),i.globalCompositeOperation="source-over",i.drawImage(t[0],Math.floor(D/2)-t.length,Math.floor(K/2)-t.length),t.unshift(a(s))}return t.pop(),t.map(h=>{const s=h.getContext("2d");s.globalCompositeOperation="destination-out",s.globalAlpha=.2;for(let i=5;10>i;i++)s.drawImage(t[i],Math.floor((h.width-t[i].width)/2),Math.floor((h.height-t[i].height)/2))}),t.length=5,t})(),C=[],[F,I]=(()=>{const t=n(20,60),h=t.getContext("2d");return h.fillStyle="#ff0",h.beginPath(),h.moveTo(10,60),h.lineTo(20,10),h.arc(10,10,10,0,Math.PI,!0),h.lineTo(10,60),h.fill(),h.strokeStyle="#0ff",h.shadowColor="#00f",h.globalCompositeOperation="source-atop",h.shadowBlur=4,h.lineWidth=10,h.beginPath(),h.moveTo(10,70),h.lineTo(23,10),h.arc(10,10,13,0,Math.PI,!0),h.lineTo(10,70),h.stroke(),[t,o(t).data]})(),Q=(()=>{const t=[];for(let h=0;9>h;h++)t.unshift(w(h/10)),t.push(w(h/10));return t})(),j=o(Q[0]).data,[N,G]=(()=>{const t=n(60,60),h=t.getContext("2d"),s=h.createRadialGradient(30,30,0,30,30,30);return s.addColorStop(.6,"#008"),s.addColorStop(1,"#00f"),h.fillStyle=s,h.beginPath(),h.arc(30,30,30,0,7),h.fill(),[t,o(t).data]})(),U=JSON.parse(self.localStorage.pnf_highscores||0)||[],Y=(()=>{const t=n(100,100),h=t.getContext("2d");h.font="bold 20px Helvetica",h.translate(50,50),h.rotate(-Math.PI/2),h.fillStyle="#f00",h.fillStyle="#fff",h.textAlign="center",h.textBaseline="middle",h.fillText("NEW!",0,0),a(t);const s=n(t.width+10,t.height+10),i=s.getContext("2d");return i.fillStyle="#f00",i.fillRect(0,0,s.width,s.height),i.drawImage(t,5,5),s})();let $,z,L,P,X,Z,J,T,V,W,E,R,_,tt,ht=!1,st=!1,it=-1,et=-1,nt=[],ot=!1,at=[$,z,D,K,O],ct=performance.now(),rt=0,Mt=-1;function ft(t){V+=t,W=(new Intl.NumberFormat).format(V)}function lt(){const t=Math.max(400,1e3-25*T);Ot+=Dt.p(t,t+400)}function ut(t){const h=a(t[0]),s=o(h).data,i=b(h),e=c(h);t[1]=s,t[2]=i,t[3]=e}(t=>{const h=n(32,32),s=h.getContext("2d");let i=32,e=32;t.width>t.height?e*=t.height/t.width:i*=t.width/t.height,s.drawImage(t,0,0,i,e);const o=document.createElement("link");o.setAttribute("rel","icon"),o.setAttribute("href",h.toDataURL()),document.head.appendChild(o)})(B);const mt=[["c4pf4K5xHzu4CyZM","Wl9w64KNQvFNbbbU",50,10,.35,0,[]],["VTjHVRDIYTbXk766","a3QM5c7MnbQlWns3",80,30,.27,0,[]],["1fOXvyryYCvwBWPL","I4xttvPYWxB1So2A",230,80,.2,6,[]],["VsM4qdcBSiuCPDGJ","q4D72OvJMb23kSZC",60,20,.4,0,[]],["l4pyu8yF0mt84Q4u","jPU5GcKNpf2JMgoG",100,40,.35,0,[[y]]],["NMp3mtsPHIwzMKYk","dBzvSKo7wpema3S5",220,90,.22,9,[]],["o67yOby6izpasGgo","fyKKupDEId96qQHu",70,20,.5,0,[[y]]],["IU7xqL8UqZIXJQDQ","aVBO8buAfBbQ4DOY",100,40,.35,0,[[y,6]]],["LP6kUeGMn7S5xZzi","p5O7jAQK67mDULTD",230,100,.25,14,[]],["SsSvCKpjLVTGITYH","aOEjI2Owpqpl06ex",65,30,.5,0,[[y]]],["AGUwhB1E94wgKe49","pwUtokX7oS7ZKFK1",110,50,.35,6,[[y,6]]],["qRF6GA3xnzX0lMcH","RIdNudvB6T2ro7C3",240,120,.3,22,[]]];function dt(t,h){const s=h[0]-h[2]/2>t[0]-t[2]/2?[t,h]:[h,t],i=h[1]-h[3]/2>t[1]-t[3]/2?[t,h]:[h,t];if(s[0][0]+s[0][2]/2>s[1][0]-s[1][2]/2&&i[0][1]+i[0][3]/2>i[1][1]-i[1][3]/2){const e=Math.floor(s[1][0]-s[1][2]/2),n=Math.floor(i[1][1]-i[1][3]/2),o=Math.floor(Math.min(s[0][0]+s[0][2]/2,s[1][0]+s[1][2]/2))-e,a=Math.floor(Math.min(i[0][1]+i[0][3]/2,i[1][1]+i[1][3]/2))-n,c=e-Math.floor(t[0]-t[2]/2),r=n-Math.floor(t[1]-t[3]/2),M=e-Math.floor(h[0]-h[2]/2),f=n-Math.floor(h[1]-h[3]/2);for(let s=0;a>s;s++)for(let i=0;o>i;i++)if(t[4][4*((r+s)*t[2]+c+i)+3]>0&&h[4][4*((f+s)*h[2]+M+i)+3]>0)return!0}return!1}function pt(){J?(J--,l(...[.9,119,0,.44,.85,0,5.3,,,.01,-4.2,.09,.1,-340,.7,.08])):L||(m(1),L=!0)}const bt=[["F","#fa0",t=>{X=t+6500}],["S","#0ff",()=>{l(...[.5,505,.12,.46,.69,2,,,.21,,,1.67,,,,.03,.28,.02,58]),J++}],["B","#f00",t=>{m(1.5),Z=t+1e3,Ot+=1500}]];class wt{constructor(t,h,s,i){this.x=t,this.y=h,this.type=s,this.X=i,this.Z=0,this.J=!0}T(t,h,s){if(this.y+=5*(s-this.X)/32,this.Z=(this.Z+1)%50,!L&&dt(at,[this.x,this.y,N.width,N.height,G]))return bt[this.type][2](s),!1;if(this.y-Math.floor(N.height/2)>g)return!1;this.X=s,h.save(),h.translate(this.x,this.y),h.drawImage(N,-Math.floor(N.width/2),-Math.floor(N.height/2)),h.textAlign="center",h.textBaseline="top";let i=65;i+=25>this.Z?this.Z:50-this.Z,h.font="700 "+Math.floor(i/2)+"px Helvetica";const e=h.measureText(bt[this.type][0]),n=e.actualBoundingBoxDescent-e.actualBoundingBoxAscent;return h.fillStyle=bt[this.type][1],h.fillText(bt[this.type][0],0,-Math.floor(n/2)),h.restore(),!0}}class vt{constructor(t,h,s){this.x=t,this.y=h,this.X=s,this.V=10}T(t,h,s){this.y-=20*(s-this.X)/32;const i=[this.x,this.y,F.width,F.height,I];for(let h=0;t.length>h;h++){const e=t[h];if(dt(i,e.W))return e.R(this.V,s),!1}return this.y+Math.floor(F.height/2)>=0&&(this.X=s,h.drawImage(F,this.x-Math.floor(F.width/2),this.y-Math.floor(F.height/2)),!0)}}class xt{constructor(t,h,s,i,e){this.time=e,this.U=t.U,this.canvas=t.canvas,this.$=t.$,this.L=t.L,this.P=t.P,this.angle=t.angle,this._=h,this.tt=s,this.ht=i}T(t,h,s){const i=s-this.time;if(i>this.ht)return!1;const e=this._+this.U[0]+this.L*Math.min(i,this.ht)/this.ht,n=this.tt+this.U[1]+this.P*Math.min(i,this.ht)/this.ht;return h.save(),h.globalAlpha=1-(Math.min(i,this.ht)/this.ht)**2,h.translate(e,n),h.rotate(this.angle*Math.min(i,this.ht)/this.ht),h.drawImage(this.canvas,this.$[0]-this.U[0],this.$[1]-this.U[1]),h.restore(),!0}}class gt{constructor(t,h,s,i,e,n){this.width=Q[0].width,this.height=Q[0].height,this.x=t,this.y=h;const o=Math.hypot(s-t,i-h);this.st=(s-t)/o,this.it=(i-h)/o,this.X=n,this.speed=e,this.Z=0,this.J=!0,this.et()}T(t,h,s){if(Z>s)return!1;const i=s-this.X;return this.y+=i*this.speed*this.it,this.x+=i*this.speed*this.st,this.et(),!(dt(at,this.W)&&(pt(),!L)||this.y-Math.floor(this.height/2)>g||0>this.y+Math.floor(this.height/2)||this.x-Math.floor(this.width/2)>x||0>this.x+Math.floor(this.width/2)||(this.X=s,this.Z=(this.Z+1)%Q.length,h.drawImage(Q[this.Z],this.x-Math.floor(this.width/2),this.y-Math.floor(this.height/2),this.width,this.height),0))}et(){this.W=[this.x,this.y,this.width,this.height,j]}}function Ht(t,h,s,i,e,n){const o=[];for(let a=0;t>a;a++){const c=i+2*a*Math.PI/t;o.push(new gt(h,s,h+Math.round(100*Math.cos(c)),s+Math.round(100*Math.sin(c)),e,n))}return o}class yt{constructor([t,h,s,i,e,n,o,a],c,r,M){this.nt=Dt.m(0,2*Math.PI),this.canvas=t,this.ot=h,this.at=s,this.width=t.width,this.height=t.height,this.ct=e,this.x=c,this.y=Math.floor(-t.height/2),this.X=M,this.rt=0,this.Mt=i,this.speed=n,this.ft=r,this.lt=o,this.ut=a,this.et()}T(t,h,s){const i=this.y;let e=!1;if(0>=this.ct||Z>s?e=!0:(this.y+=(s-this.X)*this.speed,this.et(),dt(at,this.W)&&(pt(),L||(e=!0))),e)return m(this.width/275),ft(this.ft),(this.lt>0?Ht(this.lt,this.x,this.y+Math.round(17*this.speed),this.nt,.45,s):[]).concat(this.Mt.map(t=>(r(t,this.width,this.height),new xt(t,this.x-Math.floor(this.width/2),this.y-Math.floor(this.height/2),500,s))));if(this.y-Math.floor(this.height/2)>g)return!1;this.X=s;const n=s-this.rt;let o=0;if(400>n&&(o=(400-n)/400),h.save(),h.drawImage(this.canvas,this.x-Math.floor(this.width/2),this.y-Math.floor(this.height/2),this.width,this.height),o>0&&(h.globalAlpha=o,h.drawImage(this.at,this.x-Math.floor(this.width/2),this.y-Math.floor(this.height/2),this.width,this.height)),h.restore(),!L)for(let t=0;this.ut.length>t;t++){const h=this.ut[t][0];if(h>i&&this.y>h){d();const h=this.ut[t][1],i=this.y+Math.round(17*this.speed);return h?[this,...Ht(h,this.x,i,this.nt,.3,s)]:[this,new gt(this.x,i,$,z,.3,s)]}}return!0}et(){this.W=[this.x,this.y,this.width,this.height,this.ot]}R(t,h){this.rt=h,this.ct-=t,this.ct>0&&u()}}class kt{constructor(t,h){this.F=0,this.dt=h+2e3,this.ct=1e9,this.X=h,this.width=E.width,this.height=E.height,this.x=H,this.y=-this.height/2,this.direction=0,this.rt=0,this.bt=t,this.et()}T(t,h,s){let i=!1;if(this.ct>0){const t=s-this.X;0===this.F?s>this.dt&&(this.F=1):1===this.F?(this.y+=.15*t,this.y>150&&(this.y=150,this.ct=100+250*this.bt,this.F=2,this.wt=s,this.vt=0)):0===this.direction?(this.x+=.1*t,this.x+Math.floor(this.width/2)>x&&(this.x=x-Math.floor(this.width/2),this.direction=1)):(this.x-=.1*t,0>this.x-Math.floor(this.width/2)&&(this.x=Math.floor(this.width/2),this.direction=0)),this.et(),dt(at,this.W)&&(L=!0)}else i=!0;if(i)return l(...[1.1,369,.1,1,.77,2,.4,,,.37,,.05,.8,-1.3,.7]),ft(500*T),It=!1,At=s+1e4,Ot=500+s,lt(),Ct=500+s,tt.map(t=>(r(t,this.width,this.height),new xt(t,this.x-Math.floor(this.width/2),this.y-Math.floor(this.height/2),500,s)));this.X=s;const e=s-this.rt;let n=0;if(400>e&&(n=(400-e)/400),h.save(),h.drawImage(E,this.x-Math.floor(this.width/2),this.y-Math.floor(this.height/2),this.width,this.height),n>0&&(h.globalAlpha=n,h.drawImage(_,this.x-Math.floor(this.width/2),this.y-Math.floor(this.height/2),this.width,this.height)),h.restore(),!L&&2===this.F&&s>this.wt){d();const t=[];if(5*this.bt>this.vt){const[h,i]=[[28,119],[42,123],[108,94],[121,80],[143,50],[28,119]][Math.floor(this.vt/this.bt)];t.push(new gt(this.x-h,this.y+i,this.x-h,this.y+i+100,.5,s)),t.push(new gt(this.x+h,this.y+i,this.x+h,this.y+i+100,.5,s))}else t.push(new gt(this.x,this.y+125,$,z,.3,s));return this.vt++,10*this.bt>this.vt?this.wt=this.vt>5*this.bt?s+200:this.vt===5*this.bt?s+800:this.vt%this.bt?s+180:s+500:(this.vt=0,this.wt=s+800),[this,...t]}return!0}et(){this.W=[this.x,this.y,this.width,this.height,R]}R(t,h){this.rt=h,this.ct-=t,this.ct>0&&u()}}let qt,Bt,St,Dt,Kt,Ot,At,Ct,Ft,It,Qt,jt=5;function Nt(t){let h,s,i,e;t.preventDefault(),k.offsetWidth/k.offsetHeight>.6857142857142857?(s=0,e=k.offsetHeight,i=e*x/g,h=Math.floor(k.offsetWidth-i)/2):(h=0,i=k.offsetWidth,e=i*g/x,s=Math.floor(k.offsetHeight-e)/2);let n={};n=t.changedTouches?t.changedTouches[0]:t,it=Math.floor((n.pageX-h)*x/i),et=Math.floor((n.pageY-s)*g/e)}self.ontouchstart=self.onpointerdown=t=>{ht=!0,Nt(t)},self.ontouchmove=self.onpointermove=Nt,self.ontouchend=self.onpointerup=t=>{t.preventDefault(),ht=!1},self.onkeydown=self.onkeyup=t=>{ot=nt[t.keyCode]=t.type[5]},k.width=x,k.height=g,requestAnimationFrame(function h(s){(h=>{2===rt?(t=>{const h=t-Qt;if(Qt=t,h>160)return ct+=h,void(nt=[]);if(!L){const t=.6*h,s=nt[38]||nt[90],i=nt[40]||nt[83],e=nt[37]||nt[65],n=nt[39]||nt[68];if(s||i||e||n){const h=t/((s||i)&&(e||n)?2**.5:1);s&&(z-=h),i&&(z+=h),e&&($-=h),n&&($+=h),it=$,et=z}else{const h=it-$,s=et-z,i=Math.hypot(h,s);t>i?($=it,z=et):($+=h/i*t,z+=s/i*t)}Math.floor(D/2)>$?$=Math.floor(D/2):$>x-Math.floor(D/2)&&($=x-Math.floor(D/2)),Math.floor(K/2)>z?z=Math.floor(K/2):z>g-Math.floor(K/2)&&(z=g-Math.floor(K/2)),at=[$,z,D,K,O]}q.fillStyle="#000",q.fillRect(0,0,x,g);for(let h,s=100;s--;q.fillStyle=p[s%p.length],q.beginPath(),q.arc(Math.floor(-60*(100-s)*($-D/2)/(100*(x-D)))+102797*(1+Math.sin(h))*s%540,g*(Math.tan(s/9)+h*(t-ct)/3e3)%g,3.3*(h-.3),0,7),q.fill())h=150/(3*s+200);const s=L,i=[],e=[],n=[];function o(h){const s=h.T(Bt,q,t-ct);Array.isArray(s)?s.map(t=>{h===t?s&&(h.J?e.push(h):i.push(h),h.R&&n.push(h)):o(t)}):s&&(h.J?e.push(h):i.push(h),h.R&&n.push(h))}if(qt.map(o),!s&&L&&(P=t-ct,S.map(h=>(r(h,D,K),new xt(h,$-Math.floor(D/2),z-Math.floor(K/2),1500,t-ct))).map(o)),qt=i.concat(e),Bt=n,q.fillStyle="#fff",q.textAlign="center",L)q.save(),q.globalAlpha=Math.min(1,(t-ct-P)/2e3),q.textBaseline="middle",q.font="40px Helvetica",q.fillText("Game Over",H,y),q.restore();else{if(J){const t=A[Math.max(0,A.length-J)];q.drawImage(t,$-Math.floor(t.width/2),z-Math.floor(t.height/2))}q.drawImage(B,$-Math.floor(D/2),z-Math.floor(K/2))}Z>t-ct&&(q.save(),q.globalAlpha=(Z-t+ct)/1e3,q.fillRect(0,0,x,g),q.restore()),q.textBaseline="top",q.font="16px Helvetica",q.fillText(W,H,5);const a=X>t-ct;if(!L&&t-ct>St+(a?100:200)&&(jt=-jt,qt.push(new vt($+(a?jt:0),z-Math.floor(K/2),t-ct)),St=Math.max(t-ct),l(.04,292,.01,.08,.74,3,-3.9,.43,.02)),t-ct>At&&!It&&(++T%5?At=t-ct+1e4:(It=!0,qt.push(new kt(Math.floor(T/5),t-ct)))),t-ct>Ct&&!It&&(qt.push(new wt(Kt.p(30,450),Math.floor(-N.height/2),Ft,t-ct)),Ft=(Ft+1)%bt.length,Ct=t-ct+9e3),t-ct>Ot&&!It){const h=Dt.p(Math.min(Math.max(T-2,0),C.length-3),Math.min(T,C.length-1));qt.push(new yt(C[h],Dt.p(30,450),50*(h+1),t-ct)),lt()}L&&t-ct>P+3500&&((()=>{if(V){const t=[V,Date.now()];U.push(t),U.sort((t,h)=>h[0]-t[0]||h[1]-t[1]),U.length=Math.min(U.length,5),Mt=U.indexOf(t),self.localStorage.pnf_highscores=JSON.stringify(U)}})(),rt=1,st=ht)})(h):(h=>{q.fillStyle="#000",q.fillRect(0,0,x,g);let s=(h-ct)/3e3;q.save();for(let t=200;t--;){q.fillStyle=p[t%p.length];let h=50/(6-(s+t/13)%6);q.globalAlpha=Math.min(h/100,1),q.beginPath(),q.arc(Math.cos(t)*h+H,Math.sin(t*t)*h+y,h/200,0,7),q.fill()}if(q.restore(),q.fillStyle="#fff",q.textBaseline="middle",q.textAlign="center",1===rt){if(q.font="italic small-caps 40px Futura-CondensedMedium,sans-serif-condensed,sans-serif",U.length){q.fillText("High Scores",H,100),q.save(),q.textAlign="start",q.textBaseline="top";for(let t=0;U.length>t;t++){q.fillStyle="#fff",t===Mt&&(q.save(),q.translate(90,185+80*t),q.drawImage(Y,-Math.floor(Y.width/2),-Math.floor(Y.height/2)),q.restore(),q.fillStyle="#fc6");const h=Intl.NumberFormat().format(U[t][0]),s=new Date(U[t][1]).toLocaleString();q.font="50px Helvetica",q.fillText(t+1,115,160+80*t),q.font="60px Helvetica",q.fillText("{",145,150+80*t),q.font="25px Helvetica",q.fillText(h+" points",170,160+80*t),q.font="15px Helvetica",q.fillText(s,170,190+80*t)}q.restore()}else q.fillText("Planet Not Found",H,y);q.font="20px Helvetica",q.fillText("<Press anywhere or any key to play>",H,670),ht||ot?st||(rt=2,T=0,Dt=new t("enemy"),Kt=new t("powerup"),Ot=1e3,At=5e3,Ct=9e3,Ft=0,St=0,qt=[],Bt=[],ct=performance.now(),Qt=performance.now(),V=0,ft(0),L=!1,$=H,z=630,X=0,Z=0,J=1,It=!1,Mt=-1):st=!1}else if(q.font="italic 30px Helvetica",q.fillText("Loading…",H,y),E)if(mt.length>C.length)C.push(((h,s,i,...n)=>[v(e(new t(h),s,i)),void 0,void 0,void 0,...n])(...mt[C.length]));else{let t=!0;for(let h=0;t&&C.length>h;h++)C[h][1]||(t=!1,ut(C[h]));t&&(rt=1)}else E=v(a(e(new t("HYj7ADLjQr6icLtO"),"CdiB9N2ZoQWuAxur",270))),_=b(E),tt=c(E),R=o(E).data})(h),ot=!1})(s),requestAnimationFrame(h)})}();
