const apikey = "52238d7fab5c2c01b99e751619dd16ec";

const params = new URLSearchParams(window.location.search)
const filmID = params.get("id");

const apiUrl = `https://api.themoviedb.org/3/movie/${filmID}?language=tr-TR&api_key=${apikey}`

const imageBase = "https://image.tmdb.org/t/p/w500";


function filmDetay(apiUrl) {

    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {

        const {release_date, poster_path, title, overview} = data;
        
        const movieEl = document.querySelector("#movie")
        movieEl.innerHTML = "";

        movieEl.innerHTML = `
            <img src="${imageBase + poster_path}" alt="${title}">
            <h1>${title}</h1>
            <p>${overview}</p>
            <em>${release_date}</em>
        `;

    })
    .catch(err => console.log("err: ",err))

}

filmDetay(apiUrl)