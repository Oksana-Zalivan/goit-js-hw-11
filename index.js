import{a as f,S as g,i as a}from"./assets/vendor-CNqCr-V-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="53371972-407ae4137ffe2ff2cf6f525d2";f.defaults.baseURL="https://pixabay.com/api/";function h(i){const r={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get("/",{params:r}).then(o=>o.data)}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),b=new g(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:p,downloads:m})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${n}">
            <img class="gallery-image" src="${o}" alt="${e}" />
            </a>
            <div class="info">
            <p><b>Likes</b> ${t}</p>
            <p><b>Views</b> ${s}</p>
            <p><b>Comments</b> ${p}</p>
            <p><b>Downloads</b> ${m}</p>
            </div>
        </li>`).join("");u.insertAdjacentHTML("beforeend",r),b.refresh()}function l(){u.innerHTML=""}function v(){d.classList.remove("is-hidden")}function w(){d.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",async i=>{i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(!r){a.warning({title:"Увага",message:"Введи, будь ласка, пошуковий запит 🙂",position:"topRight"});return}l(),v();try{const o=await h(r);if(!o.hits.length===0){l(),a.info({title:"Нічого не знайдено",message:"Спробуй інший запит 😉",position:"topRight"});return}L(o.hits)}catch(o){console.error(o),a.error({title:"Помилка",message:"Сталася помилка під час завантаження. Спробуй ще раз пізніше.",position:"topRight"})}finally{w(),c.reset()}});
//# sourceMappingURL=index.js.map
