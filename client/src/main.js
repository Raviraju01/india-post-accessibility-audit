const list=document.querySelector("#service-list"), search=document.querySelector("#service-search"), count=document.querySelector("#result-count");
let services=[];
function render(items){list.replaceChildren();for(const s of items){const li=document.createElement("li"),h=document.createElement("h3"),p=document.createElement("p"),a=document.createElement("a");h.textContent=s.name;p.textContent=s.description;a.href=s.url;a.textContent=`Visit ${s.name}`;li.append(h,p,a);list.append(li);}count.textContent=`${items.length} services found`;}
async function load(){try{const response=await fetch("/api/services");if(!response.ok)throw Error();services=await response.json();render(services);}catch{count.textContent="Services could not be loaded. Please try again later.";}}
search.addEventListener("input",()=>{const q=search.value.toLowerCase().trim();render(services.filter(s=>(s.name+" "+s.description).toLowerCase().includes(q)));});load();
