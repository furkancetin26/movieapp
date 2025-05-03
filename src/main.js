// api key buraya al
const apikey = "52238d7fab5c2c01b99e751619dd16ec";

// hangi api url'e istek atmam gerekioyr
const apidil = "tr-TR"
const apiurl = `https://api.themoviedb.org/3/movie/popular?page=1&api_key=${apikey}&language=${apidil}`;

const imageBase = "https://image.tmdb.org/t/p/w500";


// api'a istek atıcaz -- fetch -- promise
function filmListesi(apiurl) {
  return fetch(apiurl)
  .then(response => response.json())
  .then(data => data.results)
  .catch(err => console.log(err));
}

function ekranaBas(data) {
  const appEl = document.querySelector("#app");
  appEl.innerHTML = "";

  data.forEach(item => {

    const {poster_path, id, title} = item;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("movie-item")

    itemDiv.innerHTML = `
      <img src="${imageBase + poster_path}" alt="${title}" />
      <h2>${title}</h2>
      <a href="movie.html?id=${id}">İncele</a>
    `
    appEl.appendChild(itemDiv)

  });


}




filmListesi(apiurl).then(data => {

  ekranaBas(data);

})






// ekrana bas