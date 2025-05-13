(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const l="52238d7fab5c2c01b99e751619dd16ec",d="tr-TR",f=`https://api.themoviedb.org/3/movie/popular?page=1&api_key=${l}&language=${d}`,u="https://image.tmdb.org/t/p/w500",p="https://image.tmdb.org/t/p/original";function m(i){return fetch(i).then(r=>r.json()).then(r=>r.results).catch(r=>console.log(r))}function h(i){const r=document.querySelector("#app"),c=document.querySelector("#first");if(r.innerHTML="",i.length>0){const{backdrop_path:s,id:e,title:t,overview:o,vote_average:n}=i[0],a=document.createElement("div");a.classList.add("featured-movie"),a.innerHTML=`
  <div class="featured-content">
    <a href="movie.html?id=${e}">
      <img src="${p+s}" alt="${t}" class="featured-img"/>
    </a>
    <div class="featured-overlay">
      <h2 class="featured-title">${t}</h2>
      <p class="featured-overview">${o}</p>
      <p class="featured-rating">IMDb: ${n}</p>
      <a href="movie.html?id=${e}" class="more-info-btn">More Info</a>
    </div>
  </div>
`,c.appendChild(a)}i.forEach(s=>{const{poster_path:e,id:t,title:o}=s,n=document.createElement("div");n.classList.add("movie-item"),n.innerHTML=`
      <a href="movie.html?id=${t}"><img src="${u+e}" alt="${o}" /></a>
      
    `,r.appendChild(n)})}m(f).then(i=>{h(i)});
