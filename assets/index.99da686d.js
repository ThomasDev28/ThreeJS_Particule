import{T as e,S as n,A as t,P as a,M as i,B as o,F as d,a as s,V as w,b as r,G as l,L as p,c,d as h,e as m,f as g,W as u,O as v,C as x}from"./vendor.8e70f312.js";const A=new e;A.load("/circle.png");const M=A.load("/alphamap.png"),P=new n;P.add(new t);const W=new a(75,window.innerWidth/window.innerHeight,.01,1e3);W.position.z=2,W.position.y=.5,W.position.x=.5,P.add(W);const f=new Float32Array(300),y=new Float32Array(300);for(let S=0;S<f.length;S++)f[S]=i.randFloatSpread(8),y[S]=.5*Math.random()+.5;const z=new o;z.setAttribute("position",new d(f,3)),z.setAttribute("color",new d(y,3));const C=new r(z,new s({size:.2,vertexColors:w,alphaTest:.5,alphaMap:M,transparent:!0}));P.add(C);const E=new l;E.add(C);const F=new c(z,new p({color:0,opacity:.05,depthWrite:!1}));E.add(F),E.add(new h(new m(1,32),new g)),P.add(E);const b=new u({antialias:!0,alpha:!0});b.setClearColor(0,0),b.setSize(window.innerWidth,window.innerHeight),b.setPixelRatio(Math.min(window.devicePixelRatio,2)),document.body.appendChild(b.domElement);const H=new v(W,b.domElement),R=new x;window.addEventListener("mousemove",(e=>{})),function e(){R.getElapsedTime(),b.render(P,W),H.update(),requestAnimationFrame(e)}(),window.addEventListener("resize",(()=>{W.aspect=window.innerWidth/window.innerHeight,W.updateProjectionMatrix(),b.setSize(window.innerWidth,window.innerHeight),b.setPixelRatio(Math.min(window.devicePixelRatio,2))}));
