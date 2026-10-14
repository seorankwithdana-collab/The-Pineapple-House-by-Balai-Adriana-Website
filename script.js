(()=>{const V=window.VILLA;if(!V)return;document.documentElement.style.setProperty('--villa','url("'+V+'")');document.querySelectorAll('img').forEach(i=>{if(/villa\.jpg/.test(i.getAttribute('src')))i.src=V})})();
(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const nav=$('#nav'),menu=$('#menu'),burger=$('#burger');
addEventListener('scroll',()=>nav.classList.toggle('solid',scrollY>40),{passive:true});
const toggle=o=>{menu.classList.toggle('open',o);burger.setAttribute('aria-expanded',o)};
burger.onclick=()=>toggle(!menu.classList.contains('open'));
$$('#menu a').forEach(a=>a.onclick=()=>toggle(false));
$('#yr').textContent=new Date().getFullYear();
// scroll reveal + stat counters
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
$$('.rev').forEach((el,i)=>{el.style.transitionDelay=(i%3)*90+'ms';io.observe(el)});
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);
 const b=e.target.querySelector('b'),n=+b.dataset.n,s=b.dataset.s||'',t0=performance.now();
 (function f(t){const p=Math.min((t-t0)/1200,1);b.textContent=Math.round(n*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)})(t0)}),{threshold:.6});
$$('.stats .glass').forEach(el=>co.observe(el));
// hero tilt (desktop pointer only)
const tilt=$('#tilt');
if(matchMedia('(hover:hover) and (min-width:861px)').matches)
 tilt.addEventListener('pointermove',e=>{const r=tilt.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;tilt.style.transform=`perspective(900px) rotateY(${x*8}deg) rotateX(${-y*8}deg)`}),
 tilt.addEventListener('pointerleave',()=>tilt.style.transform='');
// testimonials
const qs=$$('#slider blockquote'),dots=$('#dots');let i=0,timer;
qs.forEach((_,k)=>{const d=document.createElement('button');d.setAttribute('aria-label','Review '+(k+1));d.onclick=()=>{go(k);auto()};dots.appendChild(d)});
function go(k){i=k;qs.forEach((q,j)=>q.classList.toggle('on',j===k));[...dots.children].forEach((d,j)=>d.classList.toggle('on',j===k))}
function auto(){clearInterval(timer);timer=setInterval(()=>go((i+1)%qs.length),6000)}
go(0);auto();
// contact form: no backend, opens the visitor's email app
$('#form').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);
 const body=`Name: ${f.get('name')}\nContact: ${f.get('contact')}\nCheck-in: ${f.get('in')}\nGuests: ${f.get('guests')}\n\n${f.get('msg')}`;
 $('#note').textContent='Opening your email app. Your inquiry is ready to send.';
 location.href='mailto:hello@example.com?subject='+encodeURIComponent('Booking inquiry - The Pineapple House')+'&body='+encodeURIComponent(body)});
})();

(()=>{const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
// FAQ accordion (one open at a time)
$$('.qa button').forEach(b=>b.onclick=()=>{const open=b.getAttribute('aria-expanded')==='true';
 $$('.qa button').forEach(x=>{x.setAttribute('aria-expanded','false');$('#'+x.getAttribute('aria-controls')).classList.remove('open')});
 if(!open){b.setAttribute('aria-expanded','true');$('#'+b.getAttribute('aria-controls')).classList.add('open')}});
// tabs
const tabs=$$('[role=tab]');tabs.forEach(t=>t.onclick=()=>tabs.forEach(x=>{const on=x===t;x.setAttribute('aria-selected',on);$('#'+x.getAttribute('aria-controls')).hidden=!on}));
// lightbox
const lb=$('#lb'),li=lb.querySelector('img'),lp=lb.querySelector('p');
const show=g=>{const i=g.querySelector('img');li.src=i.src;li.alt=i.alt;li.style.objectPosition=i.style.getPropertyValue('--p');lp.textContent=g.querySelector('figcaption').textContent;lb.showModal()};
$$('.g').forEach(g=>{g.onclick=()=>show(g);g.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show(g)}}});
lb.querySelector('.x').onclick=()=>lb.close();lb.onclick=e=>{if(e.target===lb)lb.close()};
// parallax drift on the about photo
const ph=$('.photo');if(ph&&!matchMedia('(prefers-reduced-motion:reduce)').matches)
 addEventListener('scroll',()=>{const r=ph.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;ph.style.objectPosition='60% '+(60+(r.top/innerHeight)*35)+'%'},{passive:true});
})();
