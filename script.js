const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});
const menu=document.querySelector('.menu'); const mobile=document.querySelector('.mobile-menu');
menu?.addEventListener('click',()=>{const open=mobile.classList.toggle('open'); menu.setAttribute('aria-expanded',open); mobile.setAttribute('aria-hidden',!open)});
mobile?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobile.classList.remove('open');menu.setAttribute('aria-expanded','false');mobile.setAttribute('aria-hidden','true')}));
const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');reveal.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.section,.project,.timeline-item,.recognition-grid>div,.education-card').forEach(el=>{el.classList.add('reveal');reveal.observe(el)});
