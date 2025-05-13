const apikey = "52238d7fab5c2c01b99e751619dd16ec";
const params = new URLSearchParams(window.location.search);
const filmID = params.get("id");

const movieUrl = `https://api.themoviedb.org/3/movie/${filmID}?language=tr-TR&api_key=${apikey}`;
const castUrl = `https://api.themoviedb.org/3/movie/${filmID}/credits?api_key=${apikey}`;
const videoUrl = `https://api.themoviedb.org/3/movie/${filmID}/videos?api_key=${apikey}`;
const imageBase = "https://image.tmdb.org/t/p/original";

async function filmDetay() {
  try {
    const [movieRes, castRes, videoRes] = await Promise.all([
      fetch(movieUrl).then(r => r.json()),
      fetch(castUrl).then(r => r.json()),
      fetch(videoUrl).then(r => r.json())
    ]);

    const { title, poster_path, backdrop_path, overview, release_date, vote_average, genres } = movieRes;
    const castList = castRes.cast.slice(0, 5); // İlk 5 oyuncu
    const trailer = videoRes.results.find(v => v.type === "Trailer" && v.site === "YouTube");
    const overviewContent = overview || "Açıklama mevcut değil.";
    const movieEl = document.querySelector("#movie");
    movieEl.innerHTML = `
      <div class="movie-container">
        <div class="movie-banner">
          <img class="backdrop-img" src="${imageBase + backdrop_path}" alt="${title}">
        </div>
        <div class="movie-info">
          
          <div class="movie-details">
            <h1>${title}</h1>
            <p class="rating">IMDB: ⭐ ${vote_average}</p>
            <p class="release-date">Yayın Tarihi: ${release_date}</p>
            <p class="overview">${overviewContent}</p>
            <p class="genres">Türler: ${genres.map(g => g.name).join(', ')}</p>
            <p class="cast">Oyuncular: ${castList.map(actor => actor.name).join(', ')}</p>
            ${
              trailer
                ? `<iframe class="trailer" src="https://www.youtube.com/embed/${trailer.key}" frameborder="0" allowfullscreen></iframe>`
                : `<p class="notrailer">Trailer bulunamadı.</p>`
            }
            <a class="more-info" href="https://www.imdb.com/find?q=${encodeURIComponent(title)}" target="_blank">More on IMDb</a>
          </div>
        </div>
      </div>
    `;
    
  } catch (err) {
    console.error("Hata:", err);
    document.querySelector("#movie").innerHTML = "<p>Film detayları yüklenemedi.</p>";
  }
}

filmDetay();
