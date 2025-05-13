import"./style-D_UDf5iA.js";const d="52238d7fab5c2c01b99e751619dd16ec",l="tr-TR",m=`https://api.themoviedb.org/3/movie/popular?page=1&api_key=${d}&language=${l}`,p="https://image.tmdb.org/t/p/w500",h="https://image.tmdb.org/t/p/original";function f(t){return fetch(t).then(e=>e.json()).then(e=>e.results).catch(e=>console.log(e))}function v(t){const e=document.querySelector("#app"),c=document.querySelector("#first");if(e.innerHTML="",t.length>0){const{backdrop_path:r,id:a,title:o,overview:s,vote_average:i}=t[0],n=document.createElement("div");n.classList.add("featured-movie"),n.innerHTML=`
  <div class="featured-content">
    <a href="movie.html?id=${a}">
      <img src="${h+r}" alt="${o}" class="featured-img"/>
    </a>
    <div class="featured-overlay">
      <h2 class="featured-title">${o}</h2>
      <p class="featured-overview">${s}</p>
      <p class="featured-rating">IMDb: ${i}</p>
      <a href="movie.html?id=${a}" class="more-info-btn">More Info</a>
    </div>
  </div>
`,c.appendChild(n)}t.forEach(r=>{const{poster_path:a,id:o,title:s}=r,i=document.createElement("div");i.classList.add("movie-item"),i.innerHTML=`
      <a href="movie.html?id=${o}"><img src="${p+a}" alt="${s}" /></a>
      
    `,e.appendChild(i)})}f(m).then(t=>{v(t)});
