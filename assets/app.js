const mb=document.querySelector('.menu-btn'),ul=document.querySelector('nav ul');
if(mb){mb.addEventListener('click',()=>{ul.classList.toggle('open');mb.setAttribute('aria-expanded',ul.classList.contains('open'))});ul.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>ul.classList.remove('open')))}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const y=document.getElementById('y');if(y)y.textContent=new Date().getFullYear();
