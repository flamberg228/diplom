!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=()=>{const e=/[^0-9\+]/,t=document.querySelector(".distance"),r=/[^0-9]/;document.querySelector("body").addEventListener("input",n=>{"user_phone"===n.target.name&&(n.target.value=n.target.value.replace(e,"")),n.target===t&&(n.target.value=n.target.value.replace(r,""))})};var o=()=>{const e=/[^А-Яа-яёЁ ]/;document.querySelector("body").addEventListener("input",t=>{"user_name"!==t.target.name&&"user_quest"!==t.target.name||(t.target.value=t.target.value.replace(e,""))})};var l=()=>{const e=document.querySelector("body"),t=document.querySelectorAll(".panel");document.querySelectorAll(".panel-heading").forEach(e=>{e.style.cursor="pointer"}),e.addEventListener("click",e=>{let r=e.target;if(r=r.closest(".panel-heading"),r){e.preventDefault();let n=r.parentNode;n.children[1].classList.toggle("in");for(let e=0;e<t.length;e++)t[e]!==n&&t[e].children[1].classList.contains("in")&&t[e].children[1].classList.remove("in")}})};var c=()=>{const e=document.querySelectorAll(".form-control")[0],t=document.querySelectorAll(".form-control")[1],r=document.querySelectorAll(".form-control")[2],n=document.querySelectorAll(".form-control")[3],o=(document.querySelectorAll(".onoffswitch-inner")[1],document.querySelectorAll(".onoffswitch-inner")[0],document.querySelector(".distance")),l=document.querySelector(".payment"),c=document.getElementById("calc-result"),d=document.querySelectorAll(".onoffswitch-label"),u=document.querySelector(".popup-discount"),s=document.querySelectorAll(".panel");c.value="",e.selectedIndex=0,t.selectedIndex=0,r.selectedIndex=0,n.selectedIndex=0,o.value="";const i=()=>{let o=0,l=1e4;d[0].matches(".two")&&(l=15e3),o=l,1===e.selectedIndex&&(o+=l/100*20),1===t.selectedIndex?o+=l/100*30:2===t.selectedIndex&&(o+=l/100*50),1===r.selectedIndex&&(o+=l/100*20),1===n.selectedIndex?o+=l/100*30:2===n.selectedIndex&&(o+=l/100*50),!d[1].classList.contains("two")&&d[0].classList.contains("two")?o+=2e3:d[1].classList.contains("two")||d[0].classList.contains("two")||(o+=1e3),c.value=o};document.querySelector(".constructor").addEventListener("click",e=>{let t=e.target;if(t=t.closest(".onoffswitch-label"),t&&(document.querySelector(".second-well").classList.toggle("empty"),t.classList.toggle("two"),i()),t=e.target,t=t.closest(".construct-btn"),t){e.preventDefault(),i();let r=t.parentNode.parentNode.parentNode,n=0;r.children[1].classList.remove("in");for(let e=0;e<s.length;e++)if(s[e]===r){n=e;break}s[n+1].children[1].classList.add("in"),s[4].children[1].classList.remove("in")}}),document.querySelector(".constructor").addEventListener("change",e=>{const t=e.target;"SELECT"!==t.tagName&&"SPAN"!==t.tagName||i()}),l.addEventListener("click",()=>{i(),u.style.display="block"})};var d=()=>{const e=document.querySelector(".main-form"),t=document.createElement("div"),r=document.querySelectorAll(".capture-form"),n=document.querySelector(".director-form"),o=document.querySelector(".popup-consultation");e.children[3].removeAttribute("required"),e.children[3].value="",e.children[3].addEventListener("input",()=>{e.children[3].setAttribute("required","")}),e.addEventListener("submit",r=>{if(r.preventDefault(),""===e.children[3].value)return void e.children[3].setAttribute("required","");e.appendChild(t),t.style.cssText="font-size: 2rem;\n                                  color: #85be32;\n                                  font-weight: bold;";const n=new XMLHttpRequest;n.addEventListener("readystatechange",()=>{t.textContent="Идет загрузка...",4===n.readyState&&(4===n.readyState&&200===n.status?(t.textContent="Данные успешно отправлены",e.children[3].value="",e.children[3].removeAttribute("required")):t.textContent="Произошла ошибка")}),n.open("POST","./server.php",!0),n.setRequestHeader("Content-Type","application/json");const o=new FormData(e);let l={};o.forEach((e,t)=>{l[t]=e}),n.send(JSON.stringify(l))}),r.forEach(e=>{e.children[1].removeAttribute("required"),e.children[1].value="",e.children[3].removeAttribute("required"),e.children[3].value="",e.children[1].addEventListener("input",()=>{e.children[1].setAttribute("required","")}),e.children[3].addEventListener("input",()=>{e.children[3].setAttribute("required","")}),e.addEventListener("submit",r=>{if(r.preventDefault(),""===e.children[3].value||""===e.children[1].value)return e.children[1].setAttribute("required",""),void e.children[3].setAttribute("required","");e.appendChild(t),t.style.cssText="font-size: 2rem;\n                                    color: #85be32;\n                                    font-weight: bold;";const n=new XMLHttpRequest;n.addEventListener("readystatechange",()=>{t.textContent="Идет загрузка...",4===n.readyState&&(4===n.readyState&&200===n.status?(t.textContent="Данные успешно отправлены",e.children[1].value="",e.children[3].value="",e.children[1].removeAttribute("required"),e.children[3].removeAttribute("required")):t.textContent="Произошла ошибка")}),n.open("POST","./server.php",!0),n.setRequestHeader("Content-Type","application/json");const o=new FormData(e);let l={};""!==document.getElementById("calc-result").value&&(l.diameter=document.querySelectorAll(".form-control")[0].value,l.rings=document.querySelectorAll(".form-control")[1].value,document.querySelectorAll(".onoffswitch-label")[0].classList.contains("two")&&(l.diameter2=document.querySelectorAll(".form-control")[2].value,l.rings2=document.querySelectorAll(".form-control")[3].value),l.result=document.getElementById("calc-result").value,l.distance=document.querySelector(".distance").value,document.querySelectorAll(".form-control")[0].selectedIndex=0,document.querySelectorAll(".form-control")[1].selectedIndex=0,document.querySelectorAll(".form-control")[2].selectedIndex=0,document.querySelectorAll(".form-control")[3].selectedIndex=0,document.querySelector(".distance").value=""),o.forEach((e,t)=>{l[t]=e}),n.send(JSON.stringify(l))})}),n.children[0].removeAttribute("required"),n.children[0].value="",n.children[0].addEventListener("input",()=>{n.children[0].setAttribute("required","")}),n.addEventListener("submit",()=>{if(event.preventDefault(),""===n.children[0].value)return void n.children[0].setAttribute("required","");n.appendChild(t),t.style.cssText="font-size: 2rem;\n                                  color: #85be32;\n                                  font-weight: bold;";const e=new XMLHttpRequest;e.addEventListener("readystatechange",()=>{t.textContent="Идет загрузка...",4===e.readyState&&(4===e.readyState&&200===e.status?(t.textContent="Данные успешно отправлены",o.style.display="block",n.children[0].value="",n.children[0].removeAttribute("required")):t.textContent="Произошла ошибка")}),e.open("POST","./server.php",!0),e.setRequestHeader("Content-Type","application/json");const r=new FormData(n);let l={};r.forEach((e,t)=>{l[t]=e}),e.send(JSON.stringify(l))})};(()=>{const e=document.querySelector(".popup-call"),t=document.querySelector(".popup-discount"),r=document.querySelector(".popup-check"),n=(document.querySelector(".popup-consultation"),document.querySelector("body")),o=document.querySelectorAll(".call-popup"),l=(document.querySelectorAll(".popup-close"),document.querySelector(".add-sentence-btn"));document.querySelectorAll(".check-btn");let c=document.querySelectorAll(".sentence > .container > .text-center > .row > .col-xs-12");n.addEventListener("click",n=>{const d=n.target;d!==o[0]&&d!==o[1]||(n.preventDefault(),e.style.display="block"),d.classList.contains("popup-close")&&(d.parentNode.parentNode.parentNode.parentNode.style.display="none"),d.classList.contains("popup")&&document.querySelectorAll(".popup").forEach(e=>{e.style.display="none"}),d.classList.contains("discount-btn")&&(t.style.display="block"),d===l&&(c[3].classList.toggle("visible-sm-block"),c[5].classList.toggle("hidden"),c[4].classList.toggle("hidden"),l.setAttribute("style","display: none;")),d.classList.contains("check-btn")&&(r.style.display="block")})})(),n(),o(),l(),c(),d()}]);