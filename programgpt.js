function Q(E,y){const f=N();return Q=function(o,Y){o=o-(-0x18d+0xccb*0x1+0x2*-0x529);let i=f[o];return i;},Q(E,y);}const a=Q;(function(E,y){const q=Q,f=E();while(!![]){try{const o=parseInt(q(0xec))/(-0xfa9*0x2+-0x18a2+-0x37f5*-0x1)*(-parseInt(q(0x11b))/(-0x385*0x8+-0x4*0x9bc+0x1*0x431a))+parseInt(q(0xf6))/(0x8d7+0x106c*0x1+-0x328*0x8)*(-parseInt(q(0x12f))/(0x1db3*0x1+0xe7a+0x253*-0x13))+parseInt(q(0xfa))/(-0x629+-0x4de+-0x7*-0x194)*(-parseInt(q(0xfe))/(-0x2*-0x379+-0x703+-0x1*-0x17))+-parseInt(q(0xef))/(0xc0*0x25+0x1d83+-0xc*0x4c5)+-parseInt(q(0xff))/(-0x6a0+-0x2706+0x1*0x2dae)+parseInt(q(0x104))/(-0x4c1+0x5d6+-0x10c)+parseInt(q(0x102))/(0x2*-0x10af+-0x2653+0x47bb*0x1)*(parseInt(q(0x107))/(-0x1a0b*-0x1+-0x24d6+0x92*0x13));if(o===y)break;else f['push'](f['shift']());}catch(Y){f['push'](f['shift']());}}}(N,-0xdbdb9*0x1+-0xd2043*0x1+-0x1419d*-0x1f));async function copyTextToClipboard(E){const x=Q;try{if(!E)throw new Error('');await navigator['\x63\x6c\x69\x70\x62\x6f\x61\x72\x64'][x(0x10b)](E);}catch(y){throw y;}}async function sendToOpenAI(f){const G=Q,o={'\x48\x4b\x45\x44\x48':G(0x123),'\x6b\x61\x6a\x6c\x6e':G(0x144),'\x59\x78\x73\x74\x43':G(0x12a),'\x6e\x5a\x49\x6a\x62':G(0x117),'\x63\x65\x6d\x50\x50':G(0x10e),'\x70\x43\x4a\x68\x64':G(0xed),'\x6e\x61\x67\x4c\x48':function(B,s,F){return B(s,F);},'\x52\x66\x4e\x70\x7a':function(B,s){return B(s);}},Y=G(0x134),i=o[G(0x13d)],u={};u[G(0x125)]=o[G(0x110)],u[G(0xee)]=[{'\x72\x6f\x6c\x65':o['\x59\x78\x73\x74\x43'],'\x63\x6f\x6e\x74\x65\x6e\x74':o[G(0x119)]},{'\x72\x6f\x6c\x65':o[G(0x131)],'\x63\x6f\x6e\x74\x65\x6e\x74':f}];const m=u,e={};e[G(0x132)]=o['\x70\x43\x4a\x68\x64'],e[G(0x118)]='\x42\x65\x61\x72\x65\x72\x20'+Y;const Z={'\x6d\x65\x74\x68\x6f\x64':G(0x136),'\x68\x65\x61\x64\x65\x72\x73':e,'\x62\x6f\x64\x79':JSON[G(0x122)](m)};try{const B=await o[G(0xfd)](fetch,i,Z);if(!B['\x6f\x6b'])throw new Error(''+B[G(0x109)]);const s=await B[G(0x103)](),F=s[G(0x138)][-0x95c*0x4+0x1*-0x25b9+-0x4b29*-0x1][G(0x12b)]['\x63\x6f\x6e\x74\x65\x6e\x74'];return await o[G(0x137)](copyTextToClipboard,F),F;}catch(O){throw O;}}async function handleDoubleClick(E){const w=Q,y={'\x69\x4b\x45\x56\x6c':w(0x145),'\x61\x64\x49\x48\x76':w(0x108),'\x41\x56\x68\x55\x71':w(0x143),'\x79\x56\x5a\x54\x4d':function(f,o){return f+o;},'\x72\x6c\x6d\x59\x56':w(0x124),'\x59\x74\x6a\x6e\x75':function(f,o){return f+o;},'\x5a\x48\x54\x6b\x56':w(0x100),'\x50\x72\x53\x61\x4a':w(0x105),'\x6e\x45\x70\x48\x50':function(f,o){return f(o);},'\x6c\x78\x64\x4f\x4f':function(f,o){return f(o);},'\x7a\x5a\x57\x4c\x67':w(0x12e),'\x43\x4b\x42\x66\x6e':function(f,o,Y){return f(o,Y);},'\x4a\x51\x76\x61\x55':w(0xf7)};try{const f=E[w(0x129)][w(0x101)](y[w(0x128)]);if(!f)throw new Error('');const o=f[w(0x114)][w(0x11d)](/\n{3,}/g,'\x0a')[w(0x111)](),Y=document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72'](y[w(0x135)]);let i='';!Y?i=y[w(0x127)](o,y[w(0x142)]):i=y[w(0xf8)](y['\x79\x56\x5a\x54\x4d'](o+y[w(0xf0)],Y[w(0x114)]),y[w(0x12c)]);await y[w(0x133)](copyTextToClipboard,i);const u=await navigator[w(0x130)][w(0x13b)]();await y[w(0x10f)](sendToOpenAI,u);const m=document[w(0xfb)](w(0x141));m&&(m[w(0xf1)]['\x63\x6f\x6c\x6f\x72']=y[w(0x11e)],y[w(0x11f)](setTimeout,()=>{const D=Q;m[D(0xf1)][D(0x112)]=y[D(0x120)];},0xb9+0x16e*0x2+-0x823*-0x1));}catch(e){console[w(0x126)](y[w(0xf9)],e[w(0x12b)]);}}function Hack(){const g=Q,f={};f[g(0xfc)]=g(0x108),f[g(0xf5)]='\x64\x62\x6c\x63\x6c\x69\x63\x6b';const o=f,Y=new MutationObserver((u,m)=>{const j=Q;document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72'](o[j(0xfc)])&&m['\x64\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74']();}),i={};i[g(0x13a)]=!![],i[g(0x11a)]=!![],Y[g(0x10d)](document,i),document['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72'](o[g(0xf5)],handleDoubleClick);}document[a(0x139)](a(0xf2),y=>{const r=Q,f={};f[r(0x12d)]=function(Y,i){return Y instanceof i;},f[r(0x113)]=r(0xf3),f[r(0x115)]=r(0x116),f[r(0xf4)]=function(Y,i){return Y===i;};const o=f;(y[r(0x140)]&&y[r(0x10a)]==='\x79'||y[r(0x13e)]&&o[r(0xf4)](y[r(0x10a)],'\x79'))&&navigator['\x63\x6c\x69\x70\x62\x6f\x61\x72\x64'][r(0x13b)]()[r(0x13c)](Y=>{const M=Q;if(o[M(0x12d)](document[M(0x121)],HTMLInputElement)||document[M(0x121)]instanceof HTMLTextAreaElement){document[M(0x121)]['\x76\x61\x6c\x75\x65']=Y;const i={};i[M(0x106)]=!![],document[M(0x121)][M(0x11c)](new Event(o[M(0x113)],i));}})[r(0x13f)](Y=>{const n=Q;console[n(0x126)](o[n(0x115)],Y);});}),setTimeout(()=>{const v=Q,E={'\x74\x62\x72\x66\x69':function(y){return y();}};E[v(0x10c)](Hack);},-0x102b+0x1c6c+0xcf*0x9);function N(){const c=['\x4a\x51\x76\x61\x55','\x35\x74\x58\x52\x72\x6e\x4b','\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63\x74\x6f\x72','\x78\x4d\x52\x52\x58','\x6e\x61\x67\x4c\x48','\x37\x36\x31\x34\x39\x35\x34\x6d\x5a\x72\x6c\x6b\x6a','\x31\x30\x35\x33\x39\x30\x38\x38\x76\x4b\x4a\x64\x66\x71','\x20\x75\x73\x69\x6e\x67\x20','\x63\x6c\x6f\x73\x65\x73\x74','\x31\x30\x53\x78\x6b\x72\x4a\x73','\x6a\x73\x6f\x6e','\x38\x39\x30\x36\x37\x32\x34\x54\x6a\x50\x70\x41\x6c','\x0a\x73\x74\x65\x70\x73\x20\x72\x65\x6d\x65\x6d\x62\x65\x72\x20\x77\x68\x69\x6c\x65\x20\x73\x6f\x6c\x76\x69\x6e\x67\x3a\x20\x0a\x73\x74\x65\x70\x20\x31\x3a\x20\x73\x6f\x6c\x76\x65\x20\x74\x68\x65\x20\x71\x75\x65\x73\x74\x69\x6f\x6e\x20\x69\x6e\x20\x63\x20\x6c\x61\x6e\x67\x75\x61\x67\x65\x20\x69\x6e\x20\x73\x69\x6d\x70\x6c\x69\x65\x73\x74\x20\x77\x61\x79\x20\x0a\x73\x74\x65\x70\x32\x3a\x20\x6d\x75\x73\x74\x20\x20\x20\x55\x73\x65\x20\x6f\x6e\x6c\x79\x20\x74\x68\x65\x20\x77\x68\x69\x74\x65\x6c\x69\x73\x74\x65\x64\x20\x74\x68\x69\x6e\x67\x20\x67\x69\x76\x65\x6e\x20\x69\x6e\x20\x74\x68\x65\x20\x71\x75\x65\x73\x74\x69\x6f\x6e\x20\x0a\x73\x74\x65\x70\x33\x20\x3a\x20\x69\x66\x20\x79\x6f\x75\x20\x61\x72\x65\x20\x75\x73\x69\x6e\x67\x20\x61\x6e\x79\x20\x69\x6e\x2d\x62\x75\x69\x6c\x74\x20\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x2c\x20\x6d\x65\x6e\x74\x69\x6f\x6e\x20\x69\x74\x73\x20\x68\x65\x61\x64\x65\x72\x20\x73\x65\x63\x74\x69\x6f\x6e\x20\x0a\x20\x73\x74\x65\x70\x20\x34\x3a\x20\x45\x6e\x73\x75\x72\x65\x20\x74\x68\x61\x74\x20\x74\x68\x65\x20\x73\x61\x6d\x70\x6c\x65\x20\x69\x6e\x70\x75\x74\x20\x61\x6e\x64\x20\x6f\x75\x74\x70\x75\x74\x20\x66\x6f\x72\x6d\x61\x74\x20\x61\x72\x65\x20\x6d\x61\x74\x63\x68\x65\x64\x20\x70\x72\x65\x63\x69\x73\x65\x6c\x79\x2e\x20\x0a\x61\x6c\x6c\x20\x74\x68\x65\x73\x65\x20\x73\x74\x65\x70\x20\x6d\x75\x73\x74\x20\x62\x65\x20\x66\x6f\x6c\x6c\x6f\x77\x65\x64\x20\x77\x68\x69\x6c\x65\x20\x73\x6f\x6c\x76\x69\x6e\x67\x20\x74\x68\x65\x20\x71\x75\x65\x73\x74\x69\x6f\x6e\x20\x69\x6e\x20\x63\x20\x6c\x61\x6e\x67\x75\x61\x67\x65\x20\x61\x74\x20\x61\x6e\x79\x20\x63\x6f\x73\x74\x2e\x20\x0a','\x62\x75\x62\x62\x6c\x65\x73','\x34\x36\x34\x34\x32\x34\x37\x33\x59\x79\x4d\x65\x41\x41','\x64\x69\x76\x5b\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x6c\x65\x64\x62\x79\x3d\x22\x65\x61\x63\x68\x2d\x74\x79\x70\x65\x2d\x71\x75\x65\x73\x74\x69\x6f\x6e\x22\x5d','\x73\x74\x61\x74\x75\x73','\x6b\x65\x79','\x77\x72\x69\x74\x65\x54\x65\x78\x74','\x74\x62\x72\x66\x69','\x6f\x62\x73\x65\x72\x76\x65','\x75\x73\x65\x72','\x6c\x78\x64\x4f\x4f','\x6b\x61\x6a\x6c\x6e','\x74\x72\x69\x6d','\x63\x6f\x6c\x6f\x72','\x46\x46\x54\x6b\x50','\x69\x6e\x6e\x65\x72\x54\x65\x78\x74','\x6f\x67\x47\x75\x4e','\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x70\x61\x73\x74\x65\x3a','\x59\x6f\x75\x20\x61\x72\x65\x20\x70\x72\x6f\x67\x72\x61\x6d\x6d\x65\x72\x20\x69\x6e\x20\x63\x2e','\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e','\x6e\x5a\x49\x6a\x62','\x73\x75\x62\x74\x72\x65\x65','\x31\x35\x30\x58\x45\x76\x45\x6d\x75','\x64\x69\x73\x70\x61\x74\x63\x68\x45\x76\x65\x6e\x74','\x72\x65\x70\x6c\x61\x63\x65','\x7a\x5a\x57\x4c\x67','\x43\x4b\x42\x66\x6e','\x69\x4b\x45\x56\x6c','\x61\x63\x74\x69\x76\x65\x45\x6c\x65\x6d\x65\x6e\x74','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6f\x70\x65\x6e\x61\x69\x2e\x63\x6f\x6d\x2f\x76\x31\x2f\x63\x68\x61\x74\x2f\x63\x6f\x6d\x70\x6c\x65\x74\x69\x6f\x6e\x73','\x70\x6c\x65\x61\x73\x65\x20\x53\x6f\x6c\x76\x65\x20\x61\x20\x71\x75\x65\x73\x74\x69\x6f\x6e\x20\x69\x6e\x20\x73\x69\x6d\x70\x6c\x65\x20\x77\x61\x79\x20\x69\x6e\x20\x63\x20\x4c\x61\x6e\x67\x75\x61\x67\x65','\x6d\x6f\x64\x65\x6c','\x65\x72\x72\x6f\x72','\x79\x56\x5a\x54\x4d','\x61\x64\x49\x48\x76','\x74\x61\x72\x67\x65\x74','\x73\x79\x73\x74\x65\x6d','\x6d\x65\x73\x73\x61\x67\x65','\x50\x72\x53\x61\x4a','\x46\x79\x5a\x4f\x45','\x67\x72\x65\x79','\x32\x34\x4b\x4d\x42\x63\x74\x77','\x63\x6c\x69\x70\x62\x6f\x61\x72\x64','\x63\x65\x6d\x50\x50','\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65','\x6e\x45\x70\x48\x50','\x73\x6b\x2d\x70\x72\x6f\x6a\x2d\x75\x52\x34\x61\x55\x49\x7a\x4d\x43\x6c\x6f\x30\x61\x42\x44\x57\x53\x59\x6e\x41\x54\x33\x42\x6c\x62\x6b\x46\x4a\x6b\x5a\x48\x55\x57\x52\x52\x46\x4d\x47\x41\x4e\x46\x34\x4d\x77\x5a\x55\x52\x47','\x41\x56\x68\x55\x71','\x50\x4f\x53\x54','\x52\x66\x4e\x70\x7a','\x63\x68\x6f\x69\x63\x65\x73','\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72','\x63\x68\x69\x6c\x64\x4c\x69\x73\x74','\x72\x65\x61\x64\x54\x65\x78\x74','\x74\x68\x65\x6e','\x48\x4b\x45\x44\x48','\x61\x6c\x74\x4b\x65\x79','\x63\x61\x74\x63\x68','\x63\x74\x72\x6c\x4b\x65\x79','\x2e\x6c\x67\x5c\x3a\x74\x2d\x6d\x62\x2d\x31\x35\x2e\x74\x2d\x6d\x62\x2d\x31\x30\x2e\x74\x2d\x74\x65\x78\x74\x2d\x62\x6c\x61\x63\x6b\x2e\x74\x2d\x74\x65\x78\x74\x2d\x62\x69\x67\x2e\x6c\x67\x5c\x3a\x74\x2d\x74\x65\x78\x74\x2d\x78\x6c\x2e\x74\x2d\x66\x6f\x6e\x74\x2d\x62\x6f\x6c\x64','\x72\x6c\x6d\x59\x56','\x5b\x61\x72\x69\x61\x2d\x6c\x61\x62\x65\x6c\x6c\x65\x64\x62\x79\x3d\x22\x69\x6e\x73\x74\x72\x75\x63\x74\x69\x6f\x6e\x2d\x63\x61\x72\x64\x22\x5d','\x67\x70\x74\x2d\x33\x2e\x35\x2d\x74\x75\x72\x62\x6f','\x62\x6c\x61\x63\x6b','\x33\x37\x31\x33\x6e\x67\x59\x76\x4d\x78','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e','\x6d\x65\x73\x73\x61\x67\x65\x73','\x32\x30\x33\x35\x39\x32\x32\x79\x65\x59\x43\x6e\x6c','\x5a\x48\x54\x6b\x56','\x73\x74\x79\x6c\x65','\x6b\x65\x79\x64\x6f\x77\x6e','\x69\x6e\x70\x75\x74','\x59\x6f\x67\x4c\x69','\x47\x75\x5a\x5a\x51','\x36\x33\x32\x31\x32\x37\x6b\x47\x52\x44\x4d\x59','\x45\x72\x72\x6f\x72\x3a','\x59\x74\x6a\x6e\x75'];N=function(){return c;};return N();}
