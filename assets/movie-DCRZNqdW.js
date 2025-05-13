import"./style-D_UDf5iA.js";const i="52238d7fab5c2c01b99e751619dd16ec",g=new URLSearchParams(window.location.search),s=g.get("id"),u=`https://api.themoviedb.org/3/movie/${s}?language=tr-TR&api_key=${i}`,$=`https://api.themoviedb.org/3/movie/${s}/credits?api_key=${i}`,f=`https://api.themoviedb.org/3/movie/${s}/videos?api_key=${i}`,y="https://image.tmdb.org/t/p/original";async function w(){try{const[a,r,c]=await Promise.all([fetch(u).then(e=>e.json()),fetch($).then(e=>e.json()),fetch(f).then(e=>e.json())]),{title:t,poster_path:k,backdrop_path:n,overview:l,release_date:m,vote_average:p,genres:d}=a,v=r.cast.slice(0,5),o=c.results.find(e=>e.type==="Trailer"&&e.site==="YouTube"),h=l||"Açıklama mevcut değil.",b=document.querySelector("#movie");b.innerHTML=`
      <div class="movie-container">
        <div class="movie-banner">
          <img class="backdrop-img" src="${y+n}" alt="${t}">
        </div>
        <div class="movie-info">
          
          <div class="movie-details">
            <h1>${t}</h1>
            <p class="rating">IMDB: ⭐ ${p}</p>
            <p class="release-date">Yayın Tarihi: ${m}</p>
            <p class="overview">${h}</p>
            <p class="genres">Türler: ${d.map(e=>e.name).join(", ")}</p>
            <p class="cast">Oyuncular: ${v.map(e=>e.name).join(", ")}</p>
            ${o?`<iframe class="trailer" src="https://www.youtube.com/embed/${o.key}" frameborder="0" allowfullscreen></iframe>`:'<p class="notrailer">Trailer bulunamadı.</p>'}
            <a class="more-info" href="https://www.imdb.com/find?q=${encodeURIComponent(t)}" target="_blank">More on IMDb</a>
          </div>
        </div>
      </div>
    `}catch(a){console.error("Hata:",a),document.querySelector("#movie").innerHTML="<p>Film detayları yüklenemedi.</p>"}}w();
