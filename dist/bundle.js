!function(){class t{constructor(t){this.t=0,this.h=0,this.i={},this.seed=t,8>this.seed.length&&(this.seed="padding_"+this.seed),this.seed.length%2==0&&(this.seed="1"+this.seed),this.o=[2972948403,3086140710,2071788248,3026137486,1411764137,2265725585,2923087685,1593177610],this.M=3234042090;for(let t=this.seed.length-1;t>=0;t--){const s=this.seed.charCodeAt(t);this.M=((this.M<<5)+this.M^s^this.M<<s%13+1^this.M>>s%17+1)>>>0,this.o[t%8]^=((this.M>>9)*(this.M%16384+3427)^s)>>>0}}l(){const t=this.seed.charCodeAt(this.t),s=this.o[this.h];return this.M=((this.M<<5)+this.M+s^t^this.M<<t%17+1^this.M>>t%13+1)>>>0,this.o[this.h]=(s>>3^s<<t%19+1^this.M%134217728*3427)>>>0,this.t=(this.t+1)%this.seed.length,this.h=(this.h+1)%8,this.M}u(t){const s=[1160605769,1424711319,876532818,1419174464];let h=1206170165;if(t||(t="?/?/?/",h=3379896793),this.i[t])return this.i[t];for(let i=t.length-1;i>=0;i--){const e=t.charCodeAt(i);let n=s[0]^e;n=(n^n<<11)>>>0,n=(n^n>>8)>>>0,s[0]=s[1],s[1]=s[2],s[2]=s[3],s[3]=(s[3]^s[3]>>19^n)>>>0,h=3427*(h^e<<24)^s[3]}for(let t=this.seed.length-1;t>=0;t--){const i=this.seed.charCodeAt(t);let e=s[0]^i;e=(e^e<<11)>>>0,e=(e^e>>8)>>>0,s[0]=s[1],s[1]=s[2],s[2]=s[3],s[3]=(s[3]^s[3]>>19^e)>>>0,h=3427*(h^i<<24)^s[3]}return this.i[t]=h>>>0,this.i[t]}m(t,s){return(4294967296*this.l()+this.l())/0x10000000000000000*(s-t)+t}p(t,s){return Math.floor(this.m(t,s+1))}v(t){return this.m(0,1)<t}g(t,s,h){return(4294967296*this.u(h)+this.u(h+"@"))/0x10000000000000000*(s-t)+t}H(t,s,h){return Math.floor(this.g(t,s+1,h))}k(t,s){return this.g(0,1,s)<t}q(t){return this.v(t)?-1:1}B(t,s){let h=0;for(;this.v(t)&&s>h;)h++;return h}S(t,s,h){let i=0;for(;(4294967296*this.u(h+i)+this.u(h+"@"+i))/0x10000000000000000<t&&s>i;)i++;return i}D(t){let s=0;for(let h=0;t.length>h;h++)s+=t[h];let h=this.m(0,s);for(let s=0;t.length>s;s++)if(h-=t[s],0>h)return s;return 0}K(t,s){let h=0;for(let s=0;t.length>s;s++)h+=t[s];let i=this.g(0,h,s);for(let s=0;t.length>s;s++)if(i-=t[s],0>i)return s;return 0}}function s(t,s,h){return Math.max(s,Math.min(h,t))}function h(t,s){return`rgb(${t.map(t=>t*s*100).join("%,")}%)`}function i(t,s,h){const i=(i,e=(i+6*t)%6)=>h-h*s*Math.max(Math.min(e,4-e,1),0);return[i(5),i(3),i(1)]}function e(e,n,o){return((e,n,o)=>{const a=(t=>{const s=[];return s[0]=.8*t.m(.001,1)*2**t.m(0,8),s[1]=.9*t.m(.01,1)*2**t.m(0,8),s[2]=1*t.m(.001,1)*2**t.m(0,8),s[3]=3*t.m(0,1)*2**t.m(0,8),s[4]=.5*t.m(0,1)*2**t.m(0,8),s[5]=.05*t.m(0,1)*2**t.m(0,8),s[6]=.5*t.m(0,1)*2**t.m(0,8),s})(e),c=[],r=[],M=1+(e.k(.7,"base color +1")?1:0)+e.S(.3,3,"base color count");for(let t=0;M>t;t++){const h="base color"+t;c.push(i(e.g(0,1,h+"hue")**2,s(e.g(-.2,1,h+"saturation"),0,e.g(0,1,h+"saturation bound")**4),s(e.g(.7,1.1,h+"value"),0,1))),r.push(2**e.g(0,6,h+"chances"))}const f=new t(e.seed+n);function l(){let t=c[f.D(r)];return f.v(e.g(0,.5,"base color shift chance")**2)&&(t=[t[0],t[1],t[2]],t[0]=s(t[0]+e.g(0,.6,"base color shift range red")**2*s(f.m(-1,1.2),0,1)*s(f.q(.7)+f.q(.7),-1,1),0,1),t[1]=s(t[1]+e.g(0,.6,"base color shift range green")**2*s(f.m(-1,1.2),0,1)*s(f.q(.7)+f.q(.7),-1,1),0,1),t[2]=s(t[2]+e.g(0,.6,"base color shift range blue")**2*s(f.m(-1,1.2),0,1)*s(f.q(.7)+f.q(.7),-1,1),0,1)),t}o=o||f.m(e.g(2.5,3.5,"size min"),e.g(5,7,"size max"))**3;const u=f.m(e.g(.5,1,"wratio min"),e.g(1,1.3,"wratio max")),d=f.m(e.g(.7,1,"hratio min"),e.g(1.1,1.7,"hratio max")),m=Math.floor(o*u),b=Math.floor(m/2),p=Math.floor(m/6),w=(m-6*p)/2,v=Math.floor(o*d),x=Math.floor(v/2),g=Math.floor(v/6),y=(v-6*g)/2,H=document.createElement("canvas");H.width=m,H.height=v;const k=H.getContext("2d"),q=m*v/20;[()=>{const t=Math.ceil(m*e.g(.1,1,"outline0 iw")/5),h=[[[b-t,0],[b+t,v]]],i=2+Math.floor(f.m(.5,1)*e.g(2,8,"outline0 bc")*o**.5);for(let t=1;i>t;t++){const t=h[f.p(0,h.length-1)],i=[t[0][0]+f.m(0,1)*(t[1][0]-t[0][0]),t[0][1]+f.m(0,1)*(t[1][1]-t[0][1])];(t[0][1]+t[1][1])/2>i[1]&&f.v(e.g(.5,1.5,"outline0 frontbias"))&&(i[1]=t[1][1]-(i[1]-t[0][1]));const n=[s(f.m(0,1)*m,0,m),s(f.m(0,1)*v,0,v)],o=q/Math.abs((n[0]-i[0])*(n[1]-i[1]));if(1>o&&(n[0]=i[0]+(n[0]-i[0])*o,n[1]=i[1]+(n[1]-i[1])*o),i[0]>n[0]){const t=i[0];i[0]=n[0],n[0]=t}if(i[1]>n[1]){const t=i[1];i[1]=n[1],n[1]=t}h.push([[Math.floor(i[0]),Math.floor(i[1])],[Math.ceil(n[0]),Math.ceil(n[1])]])}k.fillStyle="#fff";for(let t=0;h.length>t;t++){const s=h[t];k.fillRect(s[0][0],s[0][1],s[1][0]-s[0][0],s[1][1]-s[0][1]),k.fillRect(m-s[1][0],s[0][1],s[1][0]-s[0][0],s[1][1]-s[0][1])}},()=>{const t=Math.max(2,(q/Math.PI)**.5),s=Math.ceil(m*e.g(.1,1,"outline1 iw")/5),h=[],i=Math.floor(v/(2*s));for(let t=0;i>t;t++)h.push({O:[b,v-s*(2*t+1)],r:s});const n=i+Math.floor(f.m(.5,1)*e.g(10,50,"outline1 cc")*o**.5);for(let s=i;n>s;s++){const s=h[Math.max(f.p(0,h.length-1),f.p(0,h.length-1))];let i=f.m(1,t);const n=f.m(Math.max(0,s.r-i),s.r);let o=f.m(0,2*Math.PI);o>Math.PI&&f.v(e.g(.5,1.5,"outline1 frontbias"))&&(o=f.m(0,Math.PI));let a=[s.O[0]+Math.cos(o)*n,s.O[1]+Math.sin(o)*n];i=Math.min(i,a[0],m-a[0],a[1],v-a[1]),h.push({O:a,r:i})}k.fillStyle="#fff";for(let t=0;h.length>t;t++){const s=h[t];k.beginPath(),k.arc(s.O[0],s.O[1],s.r,0,7),k.fill(),k.beginPath(),k.arc(m-s.O[0],s.O[1],s.r,0,7),k.fill()}},()=>{const t=[[b,f.m(0,.05)*v],[b,f.m(.95,1)*v]],s=6/o+e.g(.03,.1,"outline2 basefatness"),h=Math.max(3,Math.ceil(f.m(.05,.1)/s*o**.5));k.lineCap=["round","square"][e.H(0,1,"outline2 linecap")],k.strokeStyle="#fff";for(let i=1;h>i;i++){let h=t[i];h||(h=[f.m(0,1)*m,f.m(0,1)**e.g(.1,1,"outline2 frontbias")*v],t.push(h));const n=1+f.B(e.g(0,1,"outline2 conadjust"),3);for(let i=0;n>i;i++){const i=t[f.p(0,t.length-2)];k.lineWidth=f.m(.7,1)*s*o,k.beginPath(),k.moveTo(i[0],i[1]),k.lineTo(h[0],h[1]),k.stroke(),k.beginPath(),k.moveTo(m-i[0],i[1]),k.lineTo(m-h[0],h[1]),k.stroke()}}}][e.K([1,1,1],"outline type")]();const B=k.getImageData(0,0,m,v);function S(t,s){return B.data[4*(s*m+t)+3]}const D=[];for(let t=0;p>t;t++){D[t]=[];for(let s=0;g>s;s++)D[t][s]={A:t,C:s,x:Math.floor(w+6*(t+.5)),y:Math.floor(y+6*(s+.5))}}const K=[D[Math.floor(p/2)][Math.floor(g/2)]];let O=0;for(;K.length>O;){const t=K[O];if(t.A>0){const s=D[t.A-1][t.C];s.F||(S(s.x,s.y)?(s.F=1,K.push(s)):s.F=2)}if(p-1>t.A){const s=D[t.A+1][t.C];s.F||(S(s.x,s.y)?(s.F=1,K.push(s)):s.F=2)}if(t.C>0){const s=D[t.A][t.C-1];s.F||(S(s.x,s.y)?(s.F=1,K.push(s)):s.F=2)}if(g-1>t.C){const s=D[t.A][t.C+1];s.F||(S(s.x,s.y)?(s.F=1,K.push(s)):s.F=2)}O++}for(let t=0;K.length>t;t++){const s=K[t],h=D[p-1-s.A][s.C];1!=h.F&&(h.F=1,K.push(h))}const A=e.H(1,2,"base component passes"),C=Math.max(1,Math.floor(K.length*e.g(0,1/A,"extra component amount"))),F=A*K.length+C;function I(t,s){const h=Math.floor((t-w)/6),i=Math.floor((s-y)/6);return h>=0&&p>h&&i>=0&&g>i&&1==D[h][i].F}function N(t){return 1-t[1]/v}function Q(t,s){let h=Math.min(1,1-Math.abs(t[0]-b)/b);return s&&(h=Math.min(h,1-Math.abs(t[1]-x)/x)),h}function j(t,s,h,i,n,o,a){const c=(Q(s,!0)*(1-1/((m+v)/1e3+1))*e.g(0,1,"master bigness")**.5*(1-L/F))**h;let r=8;if(f.v(e.g(i,n,`com${t} bigchance`)*c)){const h=e.g(o,a,`com${t} bigincchance`);for(;f.v(h*c)&&Math.min(s[0]-r,m-s[0]-r,s[1]-r,v-s[1]-r)>r/2;)r*=1.5}return r}function G(t,s,h){const i=k.createLinearGradient(s[0],s[1],2*t[0]-s[0],2*t[1]-s[1]),e=`rgba(0,0,0,${h})`;return i.addColorStop(0,e),i.addColorStop(.5,"rgba(0,0,0,0)"),i.addColorStop(1,e),i}H.width|=0;const U=[t=>{const i=j(0,t,.3,0,.9,0,.5),e=2*i,n=[Math.ceil(f.m(1,Math.max(2,i/2))),Math.ceil(f.m(1,Math.max(2,i/2)))],o=Math.min(n[0],n[1])*f.m(.1,1.2),a=[n[0]+2*o,n[1]+2*o],c=[Math.ceil(e/a[0]),Math.ceil(e/a[1])],r=[Math.round(c[0]*a[0]/2),Math.round(c[1]*a[1]/2)],M=l(),u=h(M,f.m(.4,1)),d=h(M,f.m(.4,1));k.fillStyle=`rgba(0,0,0,${f.m(0,.25)})`,k.fillRect(t[0]-r[0]-1,t[1]-r[1]-1,a[0]*c[0]+2,a[1]*c[1]+2),k.fillStyle=d,k.fillRect(t[0]-r[0],t[1]-r[1],a[0]*c[0],a[1]*c[1]),k.fillStyle=u;for(let s=0;c[0]>s;s++){const h=t[0]+o+s*a[0]-r[0];for(let s=0;c[1]>s;s++)k.fillRect(h,t[1]+o+s*a[1]-r[1],n[0],n[1])}f.v(s(i/8*(.6*L/F+.3),0,.98))&&(k.fillStyle=G(t,[t[0]+r[0],t[1]],f.m(0,.9)),k.fillRect(t[0]-r[0],t[1]-r[1],a[0]*c[0],a[1]*c[1]))},t=>{const i=j(1,t,.2,.3,1,0,.6);let n=Math.ceil(f.m(.8,2)*i);const o=Math.ceil(f.m(.8,2)*i),a=f.p(3,Math.max(4,n)),c=Math.max(1,Math.round(n/a));n=c*a;const r=h(l(),f.m(.5,1)),M=f.m(.3,.9);if(f.v(s(e.g(-.2,1.2,"com1 hchance"),0,1))){const s=[t[0]-Math.floor(n/2),t[1]-Math.floor(o/2)];k.fillStyle=`rgba(0,0,0,${f.m(0,.25)})`,k.fillRect(s[0]-1,s[1]-1,n+2,o+2),k.fillStyle=r,k.fillRect(s[0],s[1],n,o);for(let h=0;c>h;h++)k.fillStyle=G([s[0]+(h+.5)*a,t[1]],[s[0]+h*a,t[1]],M),k.fillRect(s[0]+h*a,s[1],a,o)}else{const s=[t[0]-Math.floor(o/2),t[1]-Math.floor(n/2)];k.fillStyle=`rgba(0,0,0,${f.m(0,.25)})`,k.fillRect(s[0]-1,s[1]-1,o+2,n+2),k.fillStyle=r,k.fillRect(s[0],s[1],o,n);for(let h=0;c>h;h++)k.fillStyle=G([t[0],s[1]+(h+.5)*a],[t[0],s[1]+h*a],M),k.fillRect(s[0],s[1]+h*a,n,a)}},t=>{const i=j(2,t,.05,0,1,0,.9),n=Math.ceil(f.m(.6,1.4)*i),o=Math.ceil(f.m(1,2)*i),a=[Math.ceil(s(n*f.m(.7,1)/2,1,n)),Math.ceil(s(n*f.m(.8,1)/2,1,n))],c=[Math.floor(s(n*f.m(.05,.25),1,o)),Math.floor(s(n*f.m(.1,.3),1,o))],r=c[0]+c[1],M=f.v(e.g(0,1,"com2 oddchance")**.5),u=s(Math.floor(o/r),1,o),d=u*r+(M?c[0]:0),m=l(),b=f.m(.6,1),p=f.m(.6,1),w=[h(m,b),h(m,p)],v=1-f.m(.5,.95),x=[h(m,v*b),h(m,v*p)];if(f.v(e.g(0,1,"com2 verticalchance")**.1)){const s=k.createLinearGradient(t[0]-a[0],t[1],t[0]+a[0],t[1]),h=k.createLinearGradient(t[0]-a[1],t[1],t[0]+a[1],t[1]),i=Math.floor(t[1]-d/2);s.addColorStop(0,x[0]),s.addColorStop(.5,w[0]),s.addColorStop(1,x[0]),h.addColorStop(0,x[1]),h.addColorStop(.5,w[1]),h.addColorStop(1,x[1]);for(let e=0;u>e;e++)k.fillStyle=s,k.fillRect(t[0]-a[0],i+e*r,2*a[0],c[0]),k.fillStyle=h,k.fillRect(t[0]-a[1],i+e*r+c[0],2*a[1],c[1]);M&&(k.fillStyle=s,k.fillRect(t[0]-a[0],i+u*r,2*a[0],c[0]))}else{const s=k.createLinearGradient(t[0],t[1]-a[0],t[0],t[1]+a[0]),h=k.createLinearGradient(t[0],t[1]-a[1],t[0],t[1]+a[1]),i=Math.floor(t[0]-d/2);s.addColorStop(0,x[0]),s.addColorStop(.5,w[0]),s.addColorStop(1,x[0]),h.addColorStop(0,x[1]),h.addColorStop(.5,w[1]),h.addColorStop(1,x[1]);for(let e=0;u>e;e++)k.fillStyle=s,k.fillRect(i+e*r,t[1]-a[0],c[0],2*a[0]),k.fillStyle=h,k.fillRect(i+e*r+c[0],t[1]-a[1],c[1],2*a[1]);M&&(k.fillStyle=s,k.fillRect(i+u*r,t[1]-a[0],c[0],2*a[0]))}},t=>{if(f.v(N(t)-.3)||I(t[0],t[1]+6*1.2)||I(t[0],t[1]+10.8))for(let s=0;100>s;s++){const s=f.D(a);if(3!=s)return void U[s](t)}const s=j(3,t,.1,.6,1,.3,.8),i=f.m(1,2)*s;let n=Math.ceil(f.m(.3,1)*s);const o=i*f.m(.25,.6),M=(i+o)/2/2,l=[Math.max(1,Math.ceil(n*f.m(.08,.25))),Math.max(1,Math.ceil(n*f.m(.03,.15)))],u=l[0]+l[1],d=Math.ceil(n/u);n=d*u+l[0];const m=c[e.K(r,"com3 basecolor")],b=e.g(.5,.8,"com3 lightness0 mid"),p=b-e.g(.2,.4,"com3 lightness0 edge"),w=e.g(0,.2,"com3 lightness1 edge"),v=[k.createLinearGradient(t[0]-M,t[1],t[0]+M,t[1]),k.createLinearGradient(t[0]-M,t[1],t[0]+M,t[1])],x=Math.ceil(t[1]-n/2),g=[x+l[0],x+u];v[0].addColorStop(0,h(m,p)),v[0].addColorStop(.5,h(m,b)),v[0].addColorStop(1,h(m,p)),v[1].addColorStop(0,h(m,w)),v[1].addColorStop(.5,h(m,1)),v[1].addColorStop(1,h(m,w)),k.fillStyle=v[0],k.beginPath(),k.moveTo(t[0]-o/2,x),k.lineTo(t[0]+o/2,x),k.lineTo(t[0]+i/2,x+n),k.lineTo(t[0]-i/2,x+n),k.fill(),k.fillStyle=v[1];for(let s=0;d>s;s++){const h=[s*u+l[0],(s+1)*u],e=[g[0]+s*u,g[1]+s*u],a=[(o+h[0]/n*(i-o))/2,(o+h[1]/n*(i-o))/2];k.beginPath(),k.moveTo(t[0]-a[0],e[0]),k.lineTo(t[0]+a[0],e[0]),k.lineTo(t[0]+a[1],e[1]),k.lineTo(t[0]-a[1],e[1]),k.fill()}},t=>{const s=Q(t,!1),i=f.m(.7,1),n=f.m(0,.2),a=l(),c=h(a,i),r=h(a,n),M=Math.max(3,Math.ceil(o*f.m(.4,1)**2*e.g(.02,.1,"com4 maxwidth"))),u=Math.floor(M/2),d=M%2,m=e.g(0,1,"com4 directionc0")**4,p=.1*e.g(0,1,"com4 directionc1")**4,w=.2*e.g(0,1,"com4 directionc2")**4,x=f.D([m*(2-s),p,w*(1+s)]);let g;if(x)if(2>x){const s=Math.min(Math.max(8,v-t[1]-f.p(0,16)),Math.floor(.6*o*f.m(0,1)**e.g(2,7,"com4 hpower1"))),h=t[0]-u,i=t[1],n=k.createLinearGradient(h,i,t[0]+u+d,i);n.addColorStop(0,r),n.addColorStop(.5,c),n.addColorStop(1,r),k.fillStyle=n,k.fillRect(h,i,M,s),g=[t[0],t[1]+s]}else{const s=k.createLinearGradient(t[0],t[1]-u,t[0],t[1]+u+d);s.addColorStop(0,r),s.addColorStop(.5,c),s.addColorStop(1,r),k.fillStyle=s,k.fillRect(t[0],t[1]-u,Math.ceil(b-t[0])+1,M),g=[b,t[1]]}else{const s=Math.min(Math.max(8,t[1]-f.p(0,16)),Math.floor(.7*o*f.m(0,1)**e.g(2,6,"com4 hpower0"))),h=t[0]-u,i=t[1]-s,n=k.createLinearGradient(h,i,t[0]+u+d,i);n.addColorStop(0,r),n.addColorStop(.5,c),n.addColorStop(1,r),k.fillStyle=n,k.fillRect(h,i,M,s),g=[t[0],t[1]-s]}const y=[.6*e.g(0,1,"com4 covercomc0")**2,.2*e.g(0,1,"com4 covercomc1")**2,e.g(0,1,"com4 covercomc2")**2];if(U[f.D(y)](t),I(g[0],g[1])){const t=[g[0]+Math.round(6*f.m(-1,1)),g[1]+Math.round(6*f.m(-1,1))];U[f.D(y)](I(t[0],t[1])?t:g)}},t=>{const s=j(5,t,.1,0,.9,0,.8),i=f.m(.75,1),n=f.m(0,.25),o=l(),a=h(o,i),c=h(o,n),r=1+f.B(e.g(0,1,"com5 multxc"),Math.floor(1.2*(s/8)**.6)),M=1+f.B(e.g(0,1,"com5 multyc"),Math.floor(1.2*(s/8)**.6)),u=f.m(.5,1)*s/Math.max(r,M),d=u+.5,m=u+1,b=u/5,p=[t[0]-u*r,t[1]-u*M];k.fillStyle=`rgba(0,0,0,${f.m(0,.2)})`;for(let t=0;r>t;t++){const s=p[0]+(2*t+1)*u;for(let t=0;M>t;t++){const h=p[1]+(2*t+1)*u;k.beginPath(),k.arc(s,h,m,0,7),k.fill()}}for(let t=0;r>t;t++){const s=p[0]+(2*t+1)*u;for(let t=0;M>t;t++){const h=p[1]+(2*t+1)*u,i=k.createRadialGradient(s,h,b,s,h,d);i.addColorStop(0,a),i.addColorStop(1,c),k.fillStyle=i,k.beginPath(),k.arc(s,h,d,0,7),k.fill()}}},t=>{if(0>=$||f.v(N(t)))return void U[f.D(a.slice(0,6))](t);const s=j(6,t,.05,0,.9,0,.8),i=Math.ceil(2*s*f.m(.6,1)),n=Math.floor(i/2),o=i%2,c=i*f.m(e.g(0,.8,"com6 h1min")**.5,.9)**e.g(.5,1.5,"com6 h1power"),r=Math.floor(c/2),M=Math.max((c-i)/2,i*(f.m(0,.45)+f.m(0,.45))*(e.k(.8,"com6 backnesstype")?e.g(.2,.9,"com6 backness#pos"):e.g(-.2,-.05,"com6 backness#neg"))),u=Math.ceil(s*f.m(.7,1)*e.g(.1,3.5,"com6 width")**.5),d=Math.floor(u/2),m=u%2,b=[[t[0]-d,t[1]+M-r],[t[0]+d+m,t[1]-n],[t[0]+d+m,t[1]+n+o],[t[0]-d,t[1]+M+r+i%2]],p=l();k.fillStyle=`rgba(0,0,0,${f.m(0,.2)})`,k.beginPath(),k.moveTo(b[0][0]-1,b[0][1]),k.lineTo(b[1][0]-1,b[1][1]),k.lineTo(b[2][0]-1,b[2][1]),k.lineTo(b[3][0]-1,b[3][1]),k.fill(),k.fillStyle=h(p,f.m(.7,1)),k.beginPath(),k.moveTo(b[0][0],b[0][1]),k.lineTo(b[1][0],b[1][1]),k.lineTo(b[2][0],b[2][1]),k.lineTo(b[3][0],b[3][1]),k.fill()}];let Y=0,$=0,z=0,L=0;for(;;){let t;if(A>$)K.length>z?(t=K[z],z++):($++,t=K[0],z=1);else{if(Y>=C)break;t=K[f.p(0,K.length-1)],Y++}let s=[t.x,t.y];for(let h=0;10>h;h++){const h=[t.x+f.p(-6,6),t.y+f.p(-6,6)];if(!(0>h[0]||h[0]>m||0>h[1]||h[1]>v)&&S(h[0],h[1])){s=h;break}}6>Math.abs(s[0]-b)&&f.v(e.g(0,1,"com middleness"))&&(s[0]=b),U[f.D(a)](s),L++}return k.clearRect(b+m%2,0,m,v),k.scale(-1,1),k.drawImage(H,-m,0),H})(e,n,o)}function n(t){const s=((t,s,h)=>{const i=Math.floor(t/h),e=Math.floor(s/h),n=[],o=Math.floor(s/(2*e));for(let h=0;e>h;h++){const a=h%2==0?i:i-1,c=Math.floor(t/((2-h%2)*i));for(let r=0;a>r;r++)n.push([c+(r+(Math.random()-.5))*t/i,o+(h+(Math.random()-.5))*s/e])}return n})(t.width,t.height,Math.max(12,Math.floor(Math.min(t.width,t.height)/12))),h=t.getContext("2d"),i=t.width,e=t.height,n=h.getImageData(0,0,i,e),o=s.map(t=>({I:1e9,N:1e9,j:0,G:0,U:t,Y:[]}));for(let t=0;e>t;t++)for(let h=0;i>h;h++){const e=4*(t*i+h);if(0===n.data[e+3])continue;let a,c=1e9;for(let i=0;s.length>i;i++){const e=Math.hypot(s[i][0]-h,s[i][1]-t);c>e&&(c=e,a=i)}const r=o[a];r.I>h&&(r.I=h),h>r.j&&(r.j=h),r.N>t&&(r.N=t),t>r.G&&(r.G=t),r.Y.push([h,t,n.data[e],n.data[e+1],n.data[e+2],n.data[e+3]])}const a=[];return o.forEach(t=>{if(1e9>t.I){const s=t.j-t.I+1,h=t.G-t.N+1,i=document.createElement("canvas");i.width=s,i.height=h;const e=i.getContext("2d"),n=e.createImageData(s,h);t.Y.forEach(h=>{const i=4*((h[1]-t.N)*s+(h[0]-t.I));n.data[i]=h[2],n.data[i+1]=h[3],n.data[i+2]=h[4],n.data[i+3]=h[5]}),e.putImageData(n,0,0),a.push({U:t.U,canvas:i,$:[t.I,t.N]})}}),a}function o(t,s,h){const i=1.5+1.5*Math.random(),e=t.U[0]-s/2,n=t.U[1]-h/2,o=Math.hypot(e,n),a=o*o,c=o*i;t.L=(c-o)*((a-n*n)/a)**.5*(e>0?1:-1),t.P=(c-o)*((a-e*e)/a)**.5*(n>0?1:-1),t.angle=(720*Math.random()-360)/((Math.random()+2)*t.canvas.width)*10*(Math.PI/180)}function a(t,s){const h=document.createElement("canvas");return h.width=t,h.height=s,h}function c(t){const s=t.getContext("2d"),h=s.getImageData(0,0,t.width,t.height),i=[],e=[];for(let t=0;h.width>t;t++)for(let s=0;h.height>s;s++)h.data[4*(s*h.width+t)+3]&&(i.push(t),e.push(s));const n=Math.min(...i),o=Math.min(...e),a=s.getImageData(n,o,1+Math.max(...i)-n,1+Math.max(...e)-o);t.width=a.width,t.height=a.height,s.putImageData(a,0,0)}const r=new(window.AudioContext||webkitAudioContext),M=44100,f=(t=1,s=.05,h=220,i=0,e=0,n=.1,o=0,a=1,c=0,f=0,l=0,u=0,d=0,m=0,b=0,p=0,w=0,v=1,x=0,g=0)=>{let y,H,k,q,B=2*Math.PI,S=c*=500*B/M/M,D=h*=(1+2*s*Math.random()-s)*B/M,K=[],O=0,A=0,C=0,F=1,I=0,N=0,Q=0;for(f*=500*B/M**3,b*=B/M,l*=B/M,u*=M,d=d*M|0,H=(i=i*M+9)+(x*=M)+(e*=M)+(n*=M)+(w*=M)|0;H>C;K[C++]=Q)++N%(100*p|0)||(Q=o?o>1?o>2?o>3?Math.sin((O%B)**3):Math.max(Math.min(Math.tan(O),1),-1):1-(2*O/B%2+2)%2:1-4*Math.abs(Math.round(O/B)-O/B):Math.sin(O),Q=(d?1-g+g*Math.sin(B*C/d):1)*(Q>0?1:-1)*Math.abs(Q)**a*t*.3*(i>C?C/i:i+x>C?1-(C-i)/x*(1-v):i+x+e>C?v:H-w>C?(H-C-w)/n*v:0),Q=w?Q/2+(w>C?0:(H-w>C?1:(H-C)/w)*K[C-w|0]/2):Q),y=(h+=c+=f)*Math.cos(b*A++),O+=y-y*m*(1-1e9*(Math.sin(C)+1)%2),F&&++F>u&&(h+=l,D+=l,F=0),!d||++I%d||(h=D,c=S,F||=1);return k=r.createBuffer(1,H,M),k.getChannelData(0).set(K),q=r.createBufferSource(),q.buffer=k,q.connect(r.destination),q.start(),q};function l(){f(...[.1,,467,,.06,.14,4,.1,,,,,,.5,303,.4,,.58,.02,.02])}function u(t){f(...[t,,274,,.03,.67,4,1.11,,,,,.04,.8,,.5,.25,.63,.02])}function d(){f(...[.3,,279,.02,.09,.09,3,1.2,-4.9,-.6,,,,,,,.05,.89,.04,.02])}const m=["#9af","#abf","#ccf","#fef","#fee","#fc9","#fc6"];function b(t){const s=t.width,h=t.height,i=a(s,h),e=t.getContext("2d").getImageData(0,0,s,h),n=e.data;for(let t=0;n.length>t;t+=4){const s=n[t+0],h=n[t+1],i=n[t+2];n[t+0]=255-(.393*s+.769*h+.189*i),n[t+1]=255-(.349*s+.686*h+.168*i),n[t+2]=255-(.272*s+.534*h+.131*i)}return i.getContext("2d").putImageData(e,0,0),i}function p(t){const s=a(20,20),h=s.getContext("2d"),i=h.createRadialGradient(10,10,0,10,10,10);return i.addColorStop(t,"yellow"),i.addColorStop(1,"red"),h.fillStyle=i,h.beginPath(),h.arc(10,10,10,0,7),h.fill(),s}function w(t){const s=a(t.width,t.height),h=s.getContext("2d");return h.scale(1,-1),h.drawImage(t,0,0,t.width,-t.height),s}const v=480,x=700,g=240,y=350;let H,k,q=!1,B=!1,S=-1,D=-1,K=[],O=!1,A=document.getElementById("a");const C=e(new t("piBbgDn4CZqlkqiF"),"ie7jMyCFouoUjkVs",60);c(C);const F=n(C),I=C.width,N=C.height,Q=C.getContext("2d").getImageData(0,0,I,N).data;let j,G,U,Y,$,z=[H,k,I,N,Q];(t=>{const s=a(32,32),h=s.getContext("2d");let i=32,e=32;t.width>t.height?e*=t.height/t.width:i*=t.width/t.height,h.drawImage(t,0,0,i,e);const n=document.createElement("link");n.setAttribute("rel","icon"),n.setAttribute("href",s.toDataURL()),document.head.appendChild(n)})(C);const L=(()=>{const t=[C];for(let s=0;10>s;s++){const h=a(2*I,2*N),i=h.getContext("2d");for(let s=0;3>s;s++)for(let h=0;3>h;h++)i.drawImage(t[0],Math.floor(I/2)-t.length-1+h,Math.floor(N/2)-t.length-1+s);i.globalCompositeOperation="source-in",i.fillStyle=s>5?"cyan":"blue",i.fillRect(0,0,h.width,h.height),i.globalCompositeOperation="source-over",i.drawImage(t[0],Math.floor(I/2)-t.length,Math.floor(N/2)-t.length),c(h),t.unshift(h)}return t.pop(),t.map(s=>{const h=s.getContext("2d");h.globalCompositeOperation="destination-out",h.globalAlpha=.2;for(let i=5;10>i;i++)h.drawImage(t[i],Math.floor((s.width-t[i].width)/2),Math.floor((s.height-t[i].height)/2))}),t.length=5,t})(),P=[],[X,Z]=(()=>{const t=a(20,60),s=t.getContext("2d");return s.fillStyle="yellow",s.beginPath(),s.moveTo(10,60),s.lineTo(20,10),s.arc(10,10,10,0,Math.PI,!0),s.lineTo(10,60),s.fill(),s.strokeStyle="cyan",s.shadowColor="blue",s.globalCompositeOperation="source-atop",s.shadowBlur=4,s.lineWidth=10,s.beginPath(),s.moveTo(10,70),s.lineTo(23,10),s.arc(10,10,13,0,Math.PI,!0),s.lineTo(10,70),s.stroke(),[t,s.getImageData(0,0,t.width,t.height).data]})(),J=(()=>{const t=[];for(let s=0;9>s;s++)t.unshift(p(s/10)),t.push(p(s/10));return t})(),T=J[0].getContext("2d").getImageData(0,0,J[0].width,J[0].height).data,[V,W]=(()=>{const t=a(60,60),s=t.getContext("2d"),h=s.createRadialGradient(30,30,0,30,30,30);return h.addColorStop(.6,"navy"),h.addColorStop(1,"blue"),s.fillStyle=h,s.beginPath(),s.arc(30,30,30,0,7),s.fill(),[t,s.getImageData(0,0,t.width,t.height).data]})();let E,R,_,tt=performance.now(),st=0;const ht=JSON.parse(self.localStorage.pnf_highscores||0)||[];let it=-1;const et=(()=>{const t=a(100,100),s=t.getContext("2d");s.font="bold 20px Helvetica",s.translate(50,50),s.rotate(-Math.PI/2),s.fillStyle="red",s.fillStyle="#fff",s.textAlign="center",s.textBaseline="middle",s.fillText("NEW!",0,0),c(t);const h=a(t.width+10,t.height+10),i=h.getContext("2d");return i.fillStyle="red",i.fillRect(0,0,h.width,h.height),i.drawImage(t,5,5),h})();function nt(t){R+=t,_=(new Intl.NumberFormat).format(R)}function ot(){const t=Math.max(400,1e3-25*E);Dt+=Bt.p(t,t+400)}let at,ct,rt,Mt;function ft(t){const s=t[0];c(s);const h=s.getContext("2d").getImageData(0,0,s.width,s.height).data,i=b(s),e=n(s);t[1]=h,t[2]=i,t[3]=e}const lt=[["c4pf4K5xHzu4CyZM","Wl9w64KNQvFNbbbU",50,10,.35,0,[]],["VTjHVRDIYTbXk766","a3QM5c7MnbQlWns3",80,30,.27,0,[]],["1fOXvyryYCvwBWPL","I4xttvPYWxB1So2A",230,80,.2,6,[]],["VsM4qdcBSiuCPDGJ","q4D72OvJMb23kSZC",60,20,.4,0,[]],["l4pyu8yF0mt84Q4u","jPU5GcKNpf2JMgoG",100,40,.35,0,[[y]]],["NMp3mtsPHIwzMKYk","dBzvSKo7wpema3S5",220,90,.22,9,[]],["o67yOby6izpasGgo","fyKKupDEId96qQHu",70,20,.5,0,[[y]]],["IU7xqL8UqZIXJQDQ","aVBO8buAfBbQ4DOY",100,40,.35,0,[[y,6]]],["LP6kUeGMn7S5xZzi","p5O7jAQK67mDULTD",230,100,.25,14,[]],["SsSvCKpjLVTGITYH","aOEjI2Owpqpl06ex",65,30,.5,0,[[y]]],["AGUwhB1E94wgKe49","pwUtokX7oS7ZKFK1",110,50,.35,6,[[y,6]]],["qRF6GA3xnzX0lMcH","RIdNudvB6T2ro7C3",240,120,.3,22,[]]];function ut(t,s){const h=s[0]-s[2]/2>t[0]-t[2]/2?[t,s]:[s,t],i=s[1]-s[3]/2>t[1]-t[3]/2?[t,s]:[s,t];if(h[0][0]+h[0][2]/2>h[1][0]-h[1][2]/2&&i[0][1]+i[0][3]/2>i[1][1]-i[1][3]/2){const e=Math.floor(h[1][0]-h[1][2]/2),n=Math.floor(i[1][1]-i[1][3]/2),o=Math.floor(Math.min(h[0][0]+h[0][2]/2,h[1][0]+h[1][2]/2))-e,a=Math.floor(Math.min(i[0][1]+i[0][3]/2,i[1][1]+i[1][3]/2))-n,c=e-Math.floor(t[0]-t[2]/2),r=n-Math.floor(t[1]-t[3]/2),M=e-Math.floor(s[0]-s[2]/2),f=n-Math.floor(s[1]-s[3]/2);for(let h=0;a>h;h++)for(let i=0;o>i;i++)if(t[4][4*((r+h)*t[2]+c+i)+3]>0&&s[4][4*((f+h)*s[2]+M+i)+3]>0)return!0}return!1}function dt(){$?($--,f(...[.9,,119,,,.44,,.09,5.3,-4.2,,,,.7,-340,.1,.01,.85,.08])):j||(u(1),j=!0)}const mt=[["F","orange",t=>{U=t+6500}],["S","cyan",()=>{f(...[.5,,505,.21,.12,.46,2,1.67,,,58,.02,.28,,,,,.69,.03]),$++}],["B","red",t=>{u(1.5),Y=t+1e3,Dt+=1500}]];class bt{constructor(t,s,h,i){this.x=t,this.y=s,this.type=h,this.X=i,this.Z=0,this.J=!0}T(t,s,h){if(this.y+=5*(h-this.X)/32,this.Z=(this.Z+1)%50,!j&&ut(z,[this.x,this.y,V.width,V.height,W]))return mt[this.type][2](h),!1;if(this.y-Math.floor(V.height/2)>x)return!1;this.X=h,s.save(),s.translate(this.x,this.y),s.drawImage(V,-Math.floor(V.width/2),-Math.floor(V.height/2)),s.textAlign="center",s.textBaseline="top";let i=65;i+=25>this.Z?this.Z:50-this.Z,s.font="700 "+Math.floor(i/2)+"px Helvetica";const e=s.measureText(mt[this.type][0]),n=e.actualBoundingBoxDescent-e.actualBoundingBoxAscent;return s.fillStyle=mt[this.type][1],s.fillText(mt[this.type][0],0,-Math.floor(n/2)),s.restore(),!0}}class pt{constructor(t,s,h){this.x=t,this.y=s,this.X=h,this.V=10}T(t,s,h){this.y-=20*(h-this.X)/32;const i=[this.x,this.y,X.width,X.height,Z];for(let s=0;t.length>s;s++){const e=t[s];if(ut(i,e.W))return e.R(this.V,h),!1}return this.y+Math.floor(X.height/2)>=0&&(this.X=h,s.drawImage(X,this.x-Math.floor(X.width/2),this.y-Math.floor(X.height/2)),!0)}}class wt{constructor(t,s,h,i,e){this.time=e,this.U=t.U,this.canvas=t.canvas,this.$=t.$,this.L=t.L,this.P=t.P,this.angle=t.angle,this._=s,this.tt=h,this.st=i}T(t,s,h){const i=h-this.time;if(i>this.st)return!1;const e=this._+this.U[0]+this.L*Math.min(i,this.st)/this.st,n=this.tt+this.U[1]+this.P*Math.min(i,this.st)/this.st;return s.save(),s.globalAlpha=1-(Math.min(i,this.st)/this.st)**2,s.translate(e,n),s.rotate(this.angle*Math.min(i,this.st)/this.st),s.drawImage(this.canvas,this.$[0]-this.U[0],this.$[1]-this.U[1]),s.restore(),!0}}class vt{constructor(t,s,h,i,e,n){this.width=J[0].width,this.height=J[0].height,this.x=t,this.y=s;const o=Math.hypot(h-t,i-s);this.ht=(h-t)/o,this.it=(i-s)/o,this.X=n,this.speed=e,this.Z=0,this.J=!0,this.et()}T(t,s,h){if(Y>h)return!1;const i=h-this.X;return this.y+=i*this.speed*this.it,this.x+=i*this.speed*this.ht,this.et(),!(ut(z,this.W)&&(dt(),!j)||this.y-Math.floor(this.height/2)>x||0>this.y+Math.floor(this.height/2)||this.x-Math.floor(this.width/2)>v||0>this.x+Math.floor(this.width/2)||(this.X=h,this.Z=(this.Z+1)%J.length,s.drawImage(J[this.Z],this.x-Math.floor(this.width/2),this.y-Math.floor(this.height/2),this.width,this.height),0))}et(){this.W=[this.x,this.y,this.width,this.height,T]}}function xt(t,s,h,i,e,n){const o=[];for(let a=0;t>a;a++){const c=i+2*a*Math.PI/t;o.push(new vt(s,h,s+Math.round(100*Math.cos(c)),h+Math.round(100*Math.sin(c)),e,n))}return o}class gt{constructor(t,s,h,i,e,n,o,a,c,r,M,f){this.nt=Bt.m(0,2*Math.PI),this.canvas=t,this.ot=s,this.at=h,this.width=t.width,this.height=t.height,this.ct=a,this.x=e,this.y=n,this.X=f,this.rt=0,this.Mt=i,this.speed=o,this.ft=c,this.lt=r,this.ut=M,this.et()}T(t,s,h){const i=this.y;let e=!1;if(0>=this.ct||Y>h?e=!0:(this.y+=(h-this.X)*this.speed,this.et(),ut(z,this.W)&&(dt(),j||(e=!0))),e)return u(this.width/275),nt(this.ft),(this.lt>0?xt(this.lt,this.x,this.y+Math.round(17*this.speed),this.nt,.45,h):[]).concat(this.Mt.map(t=>(o(t,this.width,this.height),new wt(t,this.x-Math.floor(this.width/2),this.y-Math.floor(this.height/2),500,h))));if(this.y-Math.floor(this.height/2)>x)return!1;this.X=h;const n=h-this.rt;let a=0;if(400>n&&(a=(400-n)/400),s.save(),s.drawImage(this.canvas,this.x-Math.floor(this.width/2),this.y-Math.floor(this.height/2),this.width,this.height),a>0&&(s.globalAlpha=a,s.drawImage(this.at,this.x-Math.floor(this.width/2),this.y-Math.floor(this.height/2),this.width,this.height)),s.restore(),!j)for(let t=0;this.ut.length>t;t++){const s=this.ut[t][0];if(s>i&&this.y>s){d();const s=this.ut[t][1],i=this.y+Math.round(17*this.speed);return s?[this,...xt(s,this.x,i,this.nt,.3,h)]:[this,new vt(this.x,i,H,k,.3,h)]}}return!0}et(){this.W=[this.x,this.y,this.width,this.height,this.ot]}R(t,s){this.rt=s,this.ct-=t,this.ct>0&&l()}}class yt{constructor(t,s){this.F=0,this.dt=s+2e3,this.ct=Number.MAX_SAFE_INTEGER,this.X=s,this.width=at.width,this.height=at.height,this.x=g,this.y=-this.height/2,this.direction=0,this.rt=0,this.bt=t,this.et()}T(t,s,h){let i=!1;if(this.ct>0){const t=h-this.X;0===this.F?h>this.dt&&(this.F=1):1===this.F?(this.y+=.15*t,this.y>150&&(this.y=150,this.ct=100+250*this.bt,this.F=2,this.wt=h,this.vt=0)):0===this.direction?(this.x+=.1*t,this.x+Math.floor(this.width/2)>v&&(this.x=v-Math.floor(this.width/2),this.direction=1)):(this.x-=.1*t,0>this.x-Math.floor(this.width/2)&&(this.x=Math.floor(this.width/2),this.direction=0)),this.et(),ut(z,this.W)&&(j=!0)}else i=!0;if(i)return f(...[1.1,,369,,.1,1,2,.05,.4,,,,,.7,-1.3,.8,.37,.77,.04]),nt(500*E),Ct=!1,Kt=h+1e4,Dt=500+h,ot(),Ot=500+h,Mt.map(t=>(o(t,this.width,this.height),new wt(t,this.x-Math.floor(this.width/2),this.y-Math.floor(this.height/2),500,h)));this.X=h;const e=h-this.rt;let n=0;if(400>e&&(n=(400-e)/400),s.save(),s.drawImage(at,this.x-Math.floor(this.width/2),this.y-Math.floor(this.height/2),this.width,this.height),n>0&&(s.globalAlpha=n,s.drawImage(rt,this.x-Math.floor(this.width/2),this.y-Math.floor(this.height/2),this.width,this.height)),s.restore(),!j&&2===this.F&&h>this.wt){d();const t=[];if(5*this.bt>this.vt){let s,i;switch(Math.floor(this.vt/this.bt)){case 0:s=28,i=119;break;case 1:s=42,i=123;break;case 2:s=108,i=94;break;case 3:s=121,i=80;break;default:s=143,i=50}t.push(new vt(this.x-s,this.y+i,this.x-s,this.y+i+100,.5,h)),t.push(new vt(this.x+s,this.y+i,this.x+s,this.y+i+100,.5,h))}else t.push(new vt(this.x,this.y+125,H,k,.3,h));return this.vt++,10*this.bt>this.vt?this.wt=this.vt>5*this.bt?h+200:this.vt===5*this.bt?h+800:this.vt%this.bt?h+180:h+500:(this.vt=0,this.wt=h+800),[this,...t]}return!0}et(){this.W=[this.x,this.y,this.width,this.height,ct]}R(t,s){this.rt=s,this.ct-=t,this.ct>0&&l()}}let Ht,kt,qt,Bt,St,Dt,Kt,Ot,At,Ct,Ft,It=5;function Nt(t){let s,h,i,e;t.preventDefault(),A.offsetWidth/A.offsetHeight>.6857142857142857?(h=0,e=A.offsetHeight,i=e*v/x,s=Math.floor(A.offsetWidth-i)/2):(s=0,i=A.offsetWidth,e=i*x/v,h=Math.floor(A.offsetHeight-e)/2);let n={};n=t.changedTouches?t.changedTouches[0]:t,S=Math.floor((n.pageX-s)*v/i),D=Math.floor((n.pageY-h)*x/e)}self.ontouchstart=self.onpointerdown=t=>{q=!0,Nt(t)},self.ontouchmove=self.onpointermove=Nt,self.ontouchend=self.onpointerup=t=>{t.preventDefault(),q=!1},self.onkeydown=self.onkeyup=t=>{O=K[t.keyCode]=t.type[5]},A.width=v,A.height=x,A.getContext("2d"),requestAnimationFrame(function s(h){(s=>{switch(st){case 0:case 1:(s=>{const h=A.getContext("2d");h.fillStyle="#000",h.fillRect(0,0,v,x);let i=(s-tt)/3e3;h.save();for(let t=200;t--;){h.fillStyle=m[t%m.length];let s=50/(6-(i+t/13)%6);h.globalAlpha=Math.min(s/100,1),h.beginPath(),h.arc(Math.cos(t)*s+g,Math.sin(t*t)*s+y,s/200,0,7),h.fill()}if(h.restore(),h.fillStyle="#fff",h.textBaseline="middle",h.textAlign="center",1===st){if(h.font="italic small-caps 40px Futura-CondensedMedium,sans-serif-condensed,sans-serif",0===ht.length)h.fillText("Planet Not Found",g,y);else{h.fillText("High Scores",g,100),h.save(),h.textAlign="start",h.textBaseline="top";for(let t=0;ht.length>t;t++){t===it?(h.save(),h.translate(90,185+80*t),h.drawImage(et,-Math.floor(et.width/2),-Math.floor(et.height/2)),h.restore(),h.fillStyle="gold"):h.fillStyle="#fff";const s=Intl.NumberFormat().format(ht[t][0]),i=new Date(ht[t][1]).toLocaleString();h.font="50px Helvetica",h.fillText(t+1+"",115,160+80*t),h.font="60px Helvetica",h.fillText("{",145,150+80*t),h.font="25px Helvetica",h.fillText(s+" points",170,160+80*t),h.font="15px Helvetica",h.fillText(i,170,190+80*t)}h.restore()}h.font="20px Helvetica",h.fillText("<Press anywhere or any key to play>",g,670),q||O?B||(st=2,E=0,Bt=new t("enemy"),St=new t("powerup"),Dt=1e3,Kt=5e3,Ot=9e3,At=0,qt=0,Ht=[],kt=[],tt=performance.now(),Ft=performance.now(),R=0,nt(0),j=!1,H=g,k=630,U=0,Y=0,$=1,Ct=!1,it=-1):B=!1}else if(h.font="italic 30px Helvetica",h.fillText("Loading…",g,y),at)if(lt.length>P.length)P.push(((s,h,i,...n)=>[w(e(new t(s),h,i)),void 0,void 0,void 0,...n])(...lt[P.length]));else{let t=!0;for(let s=0;t&&P.length>s;s++)P[s][1]||(t=!1,ft(P[s]));t&&(st=1)}else at=w(e(new t("HYj7ADLjQr6icLtO"),"CdiB9N2ZoQWuAxur",270)),c(at),rt=b(at),Mt=n(at),ct=at.getContext("2d").getImageData(0,0,at.width,at.height).data})(s);break;case 2:(t=>{const s=t-Ft;if(Ft=t,s>160)return tt+=s,void(K=[]);if(!j){const t=.6*s,h=K[38]||K[90],i=K[40]||K[83],e=K[37]||K[65],n=K[39]||K[68];if(h||i||e||n){const s=t/((h||i)&&(e||n)?2**.5:1);h&&(k-=s),i&&(k+=s),e&&(H-=s),n&&(H+=s),S=H,D=k}else{const s=S-H,h=D-k,i=Math.hypot(s,h);t>i?(H=S,k=D):(H+=s/i*t,k+=h/i*t)}Math.floor(I/2)>H?H=Math.floor(I/2):H>v-Math.floor(I/2)&&(H=v-Math.floor(I/2)),Math.floor(N/2)>k?k=Math.floor(N/2):k>x-Math.floor(N/2)&&(k=x-Math.floor(N/2)),z=[H,k,I,N,Q]}const h=A.getContext("2d");h.fillStyle="#000",h.fillRect(0,0,v,x);for(let s,i=100;i--;h.fillStyle=m[i%m.length],h.beginPath(),h.arc(Math.floor(-60*(100-i)*(H-I/2)/(100*(v-I)))+102797*(1+Math.sin(s))*i%540,x*(Math.tan(i/9)+s*(t-tt)/3e3)%x,3.3*(s-.3),0,7),h.fill())s=150/(3*i+200);const i=j,e=[],n=[],a=[];function c(s){const i=s.T(kt,h,t-tt);"boolean"==typeof i?i&&(s.J?n.push(s):e.push(s),s.R&&a.push(s)):Array.isArray(i)&&i.forEach(t=>{s===t?i&&(s.J?n.push(s):e.push(s),s.R&&a.push(s)):c(t)})}if(Ht.forEach(c),!i&&j&&(G=t-tt,F.map(s=>(o(s,I,N),new wt(s,H-Math.floor(I/2),k-Math.floor(N/2),1500,t-tt))).forEach(c)),Ht=e.concat(n),kt=a,h.fillStyle="#fff",h.textAlign="center",j)h.save(),h.globalAlpha=Math.min(1,(t-tt-G)/2e3),h.textBaseline="middle",h.font="40px Helvetica",h.fillText("Game Over",g,y),h.restore();else{if($){const t=L[Math.max(0,L.length-$)];h.drawImage(t,H-Math.floor(t.width/2),k-Math.floor(t.height/2))}h.drawImage(C,H-Math.floor(I/2),k-Math.floor(N/2))}Y>t-tt&&(h.save(),h.globalAlpha=(Y-t+tt)/1e3,h.fillRect(0,0,v,x),h.restore()),h.textBaseline="top",h.font="16px Helvetica",h.fillText(_,g,5);const r=U>t-tt;if(!j&&t-tt>qt+(r?100:200)&&(It=-It,Ht.push(new pt(H+(r?It:0),k-Math.floor(N/2),t-tt)),qt=Math.max(t-tt),f(...[.04,,292,.02,.01,.08,3,.1,-3.9,,,,,,,,,.74,.04,.43])),t-tt>Kt&&!Ct&&(E++,E%5?Kt=t-tt+1e4:(Ct=!0,Ht.push(new yt(Math.floor(E/5),t-tt)))),t-tt>Ot&&!Ct&&(Ht.push(new bt(St.p(30,450),Math.floor(-V.height/2),At,t-tt)),At=(At+1)%mt.length,Ot=t-tt+9e3),t-tt>Dt&&!Ct){const s=Bt.p(Math.min(Math.max(E-2,0),P.length-3),Math.min(E,P.length-1)),[h,i,e,n,o,a,c,r]=P[s];Ht.push(new gt(h,i,e,n,Bt.p(30,450),Math.floor(-h.height/2),a,o,50*(s+1),c,r,t-tt)),ot()}j&&t-tt>G+3500&&((()=>{if(R){const t=[R,Date.now()];ht.push(t),ht.sort((t,s)=>{const h=s[0]-t[0];return 0===h?s[1]-t[1]:h}),ht.length=Math.min(ht.length,5),it=ht.indexOf(t),self.localStorage.pnf_highscores=JSON.stringify(ht)}})(),st=1,B=q)})(s)}O=!1})(h),requestAnimationFrame(s)})}();
