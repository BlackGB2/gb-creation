const header = document.getElementById("site-header");
const footer = document.getElementById("site-footer");
const links = [
  ["Home","index.html"],["Projects","projects.html"],["Portfolio","portfolio.html"],["About","about.html"],["Contact","contact.html"]
];
const current = location.pathname.split("/").pop() || "index.html";
if(header){
  header.innerHTML = `<header class="site-header"><div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10"><a href="index.html" class="flex items-center gap-3"><span class="brand-mark">GB</span><span class="brand-name text-lg">GB <span class="text-lime-300">Creation</span></span></a><nav class="hidden items-center gap-8 md:flex">${links.map(([name,url])=>`<a class="nav-link ${current===url?'active':''}" href="${url}">${name}</a>`).join("")}</nav><a href="contact.html" class="btn-primary hidden !px-5 !py-3 md:inline-flex">Let's talk ↗</a><button id="menu-toggle" class="text-2xl text-white md:hidden" aria-label="Open menu">☰</button></div><nav id="mobile-menu" class="mobile-menu flex-col gap-5 border-t border-white/10 px-6 py-5 md:hidden">${links.map(([name,url])=>`<a class="nav-link ${current===url?'active':''}" href="${url}">${name}</a>`).join("")}</nav></header>`;
  const toggle=document.getElementById("menu-toggle");
  toggle?.addEventListener("click",()=>document.getElementById("mobile-menu").classList.toggle("open"));
}
if(footer){
  footer.innerHTML = `<footer class="site-footer"><div class="mx-auto max-w-7xl px-6 py-12 lg:px-10"><div class="grid gap-10 md:grid-cols-[1fr_auto] md:items-end"><div><a href="index.html" class="brand-name text-2xl">GB <span class="text-lime-300">Creation.</span></a><p class="mt-3 max-w-sm text-sm leading-6 text-zinc-500">Independent graphic design, visual ideas and creative exploration by Gihan.</p></div><div class="flex flex-wrap gap-x-7 gap-y-3">${links.slice(1).map(([name,url])=>`<a class="footer-link" href="${url}">${name}</a>`).join("")}</div></div><div class="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-zinc-600 sm:flex-row sm:justify-between"><span>© <span id="year"></span> GB Creation. All rights reserved.</span><span>Designed with creativity in Sri Lanka.</span></div></div></footer>`;
  document.getElementById("year").textContent=new Date().getFullYear();
}
const form=document.getElementById("contact-form");
form?.addEventListener("submit",(e)=>{
  e.preventDefault();
  const data=new FormData(form);
  const subject=encodeURIComponent(`GB Creation enquiry — ${data.get("service")}`);
  const body=encodeURIComponent(`Hello Gihan,\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\nMessage:\n${data.get("message")}`);
  window.location.href=`mailto:gihanonline2005@gmail.com?subject=${subject}&body=${body}`;
});