document.addEventListener("DOMContentLoaded",(function(){var e,t=document.getElementById("scrollBothWaysButton"),o=document.getElementById("scrollDownButton"),n=document.getElementById("header"),d=document.getElementById("footer");o.classList.remove("hidden"),t&&o&&n&&d?(t.style.display="none",window.addEventListener("scroll",(function(){clearTimeout(e);var s=d.getBoundingClientRect(),i=n.getBoundingClientRect(),l=window.innerHeight;window.pageYOffset>window.innerHeight?t.querySelector("svg").style.transform="rotate(180deg)":t.querySelector("svg").style.transform="rotate(0deg)",window.pageYOffset>100&&s.top>l&&i.bottom<0?(t.style.display="block",o.classList.add("hidden")):(t.style.display="none",window.pageYOffset<100&&o.classList.remove("hidden")),e=setTimeout((function(){(s.top<=l||i.bottom>=0||!1===o.classList.contains("hidden"))&&(t.style.display="none")}),3e3)})),t.addEventListener("click",(function(){window.pageYOffset>window.innerHeight?window.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}))):console.error("Element #scrollBothWaysButton, #scrollDownButton, #header, or #footer not found in the DOM.")}));
//# sourceMappingURL=index.62bccc46.js.map