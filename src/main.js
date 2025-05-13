// api key buraya al
const apikey = "52238d7fab5c2c01b99e751619dd16ec";

// hangi api url'e istek atmam gerekioyr
const apidil = "tr-TR"
const apiurl = `https://api.themoviedb.org/3/movie/popular?page=1&api_key=${apikey}&language=${apidil}`;

const imageBase = "https://image.tmdb.org/t/p/w500";
const original_img = "https://image.tmdb.org/t/p/original"


// api'a istek atıcaz -- fetch -- promise
function filmListesi(apiurl) {
  return fetch(apiurl)
  .then(response => response.json())
  .then(data => data.results)
  .catch(err => console.log(err));
}

function ekranaBas(data) {
  const appEl = document.querySelector("#app");
  const first = document.querySelector('#first')
  appEl.innerHTML = "";
  if (data.length > 0) {
    const { backdrop_path, id, title, overview, vote_average } = data[0];

    const featuredDiv = document.createElement("div");
    featuredDiv.classList.add("featured-movie");

    featuredDiv.innerHTML = `
  <div class="featured-content">
    <a href="movie.html?id=${id}">
      <img src="${original_img + backdrop_path}" alt="${title}" class="featured-img"/>
    </a>
    <div class="featured-overlay">
      <h2 class="featured-title">${title}</h2>
      <p class="featured-overview">${overview}</p>
      <p class="featured-rating">IMDb: ${vote_average}</p>
      <a href="movie.html?id=${id}" class="more-info-btn">More Info</a>
    </div>
  </div>
`;


    first.appendChild(featuredDiv);
  }
  
  data.forEach(item => {

    const {poster_path, id, title} = item;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("movie-item")

    itemDiv.innerHTML = `
      <a href="movie.html?id=${id}"><img src="${imageBase + poster_path}" alt="${title}" /></a>
      
    `
    appEl.appendChild(itemDiv)

  });


}




filmListesi(apiurl).then(data => {

  ekranaBas(data);

})






// ekrana bas