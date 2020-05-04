const myMovies = {
    "movieList": [{
        "Title": "Shrek",
        "YoutubeId": "oW-vf54cUes",
        //"url": "http://www.omdbapi.com/?t=shrek&apikey=ebbc5a90&y=2010"
    },
    {
        "Title": "Ice Age",
        "YoutubeId": "0jUTl0TkmX8",
        //"url": "http://www.omdbapi.com/?t=Ice%20age&apikey=ebbc5a90&y=2016"

    },
    {
        "Title": "Madagascar",
        "YoutubeId": "U0rmYUlDPxg",
       // "url": "http://www.omdbapi.com/?t=Madagascar&apikey=ebbc5a90&y=2013"
    },
    {
        "Title": "UP",
        "YoutubeId": "yADAYe9efE0",
        //"url": "http://www.omdbapi.com/?t=Ice%20age&apikey=ebbc5a90"
    },
    {
        "Title": "Ratatouille",
        "YoutubeId": "fIjHfW6y4Mg",
        //"url": "http://www.omdbapi.com/?t=ratatouille&apikey=ebbc5a90"
    },
    {
        "Title": "Checkered Ninja",
        "YoutubeId": "JomgeiCFJ6E",
        //"url": "http://www.omdbapi.com/?t=Checkered%20Ninja&apikey=ebbc5a90"
    }
]
};


//finding the root element
const app = document.getElementById('root');

//creating an element for the logo
const logo = document.createElement('img');
logo.src = 'logo.png';

//creating a container element
const container = document.createElement('div');
container.setAttribute('class', 'container');

//attaching the logo and the container to the root element
app.appendChild(logo);
app.appendChild(container);


//the url is our endpoint and contains the data that we want to work with
let proxyUrl = 'https://cors-anywhere.herokuapp.com/';


myMovies.movieList.forEach(movie=> {
    console.log(movie.Title);
    let url = "http://www.omdbapi.com/?t="+movie.Title+"&apikey=ebbc5a90";

//The endpoint is passed into the call of the fetch function. The call of the fetch returns a promise
fetch(proxyUrl + url)
    //when the promise is resolved we extract the JSON part of the response object
    .then(response => {
        return response.json();
    })
    //then we can work with the JSON data
    .then(movie => {
        // We iterate through all the objects

            //Create a div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            //Create an h1 and set the text content to the movie's title
            const h1 = document.createElement('h1');
            //h1.textContent = movie.title;
            h1.textContent = movie.Title + ' ' + '(' + movie.Year + ')';


            //const h2 = document.createElement('h2');
            //h2.textContent = movie.release_date;

            //const h3 = document.createElement('h3');
            //h3.textContent = movie.Year;


           // dynamically get values about the movies from OMDB api show plot, imdbrating and age of movie


            // Create a p and set the text content to the movie's plot
            //********OUT//const p = document.createElement('p');
           //********OUT// p.textContent = movie.plot;


 //let youtube ={

    // getIdFromUrl: function (videoIdOrUrl) {
            //  if videoIdOrUrl.indexOf('http')===0){

            //     return videoIdOrUrl.split('v=')[1];
            //  } else {
            //        return videoIdOrUrl;
                //     }
            //},
            //  generateThumbnailUrl: function(videoIdOrUrl){
            //     return
            //   }


            // Each card will contain an h1 and a p and (logo=img)
            //********OUT//card.appendChild(logo);
            card.appendChild(h1);
            //card.appendChild(h2);
            //card.appendChild(h3);
            //********OUT// card.appendChild(p);
            container.appendChild(card);


    })
    .catch(err => {
        // Do something for an error here
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    })
})


