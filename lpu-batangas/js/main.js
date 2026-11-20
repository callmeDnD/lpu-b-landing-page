(function(){
const page=document.body.dataset.page;
const logo=`<img src="images/logo-shield.png" alt="LPU Batangas logo">`;
const links=[['home','index.html','Home'],['about','about.html','About Us'],['programs','programs.html','Programs'],['contact','contact.html','Contact Us']];
document.body.insertAdjacentHTML('afterbegin',`<header><div class="wrap"><a class="brand" href="index.html">${logo}<span><b>Lyceum of the Philippines University</b><small>Batangas</small></span></a><nav><ul>${links.map(l=>`<li><a href="${l[1]}" class="${l[0]===page?'on':''}">${l[2]}</a></li>`).join('')}</ul></nav></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer><div class="wrap"><div class="cols"><div><h4>Lyceum of the Philippines University – Batangas</h4><p>Pro Deo et Patria. Forming competent, ethical and globally competitive graduates.</p></div><div><h4>Quick Links</h4>${links.map(l=>`<a href="${l[1]}">${l[2]}</a>`).join('')}</div><div><h4>Contact</h4><p>Capitol Site, Batangas City, Batangas 4200, Philippines<br>admissions@lpubatangas.edu.ph<br>0936 566 6217 / 0947 962 9987<br>www.lpubatangas.edu.ph</p></div></div><p class="copy">&copy; ${new Date().getFullYear()} LPU Batangas. Student website project.</p></div></footer>`);


document.querySelectorAll('.grid,.gallery').forEach(g=>[...g.children].forEach((c,i)=>c.style.transitionDelay=(i%3)*.12+'s'));
// scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);setTimeout(()=>e.target.style.transitionDelay='',1000)}}),{threshold:.12});
document.querySelectorAll('.card,.slider,.map,figure,.photo,.banner,.logo-full').forEach(el=>{el.classList.add('rv');io.observe(el)});

// testimonials slider
const slides=document.querySelectorAll('.slide');
if(slides.length){const dots=document.querySelector('.dots');let i=0,t;
slides.forEach((_,n)=>{const b=document.createElement('button');b.setAttribute('aria-label','Testimonial '+(n+1));b.onclick=()=>{show(n);restart()};dots.appendChild(b)});
function show(n){i=n;slides.forEach((s,k)=>s.classList.toggle('on',k===n));dots.querySelectorAll('button').forEach((b,k)=>b.classList.toggle('on',k===n))}
function restart(){clearInterval(t);t=setInterval(()=>show((i+1)%slides.length),6000)}
show(0);restart();}

// contact form (client-side only)
const f=document.getElementById('contactForm');
if(f){f.addEventListener('submit',e=>{e.preventDefault();let ok=true;
f.querySelectorAll('[required]').forEach(el=>{const er=el.parentElement.querySelector('.err');let m='';
if(!el.value.trim())m='This field is required.';else if(el.type==='email'&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value))m='Enter a valid email address.';
er.textContent=m;if(m)ok=false});
if(ok){document.getElementById('okMsg').style.display='block';f.reset();}});}
// scroll progress bar + back to top
document.body.insertAdjacentHTML('beforeend','<div id="prog"></div><button class="totop" aria-label="Back to top">&uarr;</button>');
const bar=document.getElementById('prog'),top=document.querySelector('.totop');
function sc(){const h=document.documentElement,p=h.scrollTop/(h.scrollHeight-h.clientHeight||1);bar.style.width=(p*100)+'%';document.querySelector('header').classList.toggle('solid',h.scrollTop>30);top.classList.toggle('show',h.scrollTop>400)}
addEventListener('scroll',sc,{passive:true});sc();top.onclick=()=>scrollTo({top:0,behavior:'smooth'});
})();