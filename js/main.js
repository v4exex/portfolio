/* ---- particle infinity (lemniscate) ---- */
(function(){
  const cv=document.getElementById('cv'),ctx=cv.getContext('2d');
  const W=cv.width,H=cv.height,N=7000;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const P=[];
  for(let i=0;i<N;i++){
    const t=Math.random()*Math.PI*2;
    P.push({t,s:Math.random(),r:Math.pow(Math.random(),.6),a:Math.random()*Math.PI*2,sp:.15+Math.random()*.5,sz:Math.random()<.12?2.4:1.4});
  }
  function frame(time){
    ctx.clearRect(0,0,W,H);
    const T=reduce?0:time/1000;
    const A=330,cx=W/2,cy=H/2+10;
    for(const p of P){
      const t=p.t+T*.12*p.sp;
      const d=1+Math.sin(t)**2;
      let x=A*Math.cos(t)/d, y=A*Math.sin(t)*Math.cos(t)/d;
      // right side thinner/drier, left side thicker (like the reference)
      const side=(Math.cos(t)+1)/2;            // 0 left .. 1 right
      const spread=(1-side*.45)*58*p.r;
      x+=Math.cos(p.a+T*.3*p.sp)*spread;
      y+=Math.sin(p.a+T*.3*p.sp)*spread*.85;
      // lower-right gets dissolved into pixel-ish bits
      const fade=1-Math.max(0,(x/A)-.2)*(y>0?.55:.25);
      const bright=.35+.65*(1-p.r);
      const a=Math.max(0,Math.min(1,bright*fade))*(.55+.45*p.s);
      const g=210+45*p.s;
      ctx.fillStyle=`rgba(${g},${g-8},${g+10},${a})`;
      ctx.fillRect(cx+x*1.0,cy+y*1.0,p.sz,p.sz);
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

/* ---- reveal ---- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
