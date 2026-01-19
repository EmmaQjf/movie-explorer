    console.log("JS file loaded");

const input = document.getElementById('input');
const searchBtn = document.getElementById('searchBtn');
const movieList = document.getElementById('movieList');
const loading= document.getElementById('loading');
const form = document.getElementById('form');

console.log(searchBtn);
console.log(input);
console.log(movieList);

let allMovies = []
const searchMovies = async() =>{
    try {
        const query = input.value.trim();
        console.log(query)

         // Show loading
        loading.style.display = 'block';
           searchBtn.disabled = true;
        //egge case; no input 
        if (!query){
            alert("Please enter a movie name")
            return;
        }

        const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=6e478129`)
        const data = await response.json();

        // Hide loading
        loading.style.display = 'none';
        // edge case; no results found
        if (data.Response === "False") {
        allMovies = [];
        movieList.innerHTML = "<li>No results found</li>";
        return;
        }
        allMovies = data.Search;
        console.log(allMovies) 
         searchBtn.disabled = false;
        renderMovies()
    } catch(error){
        console.log(error)
    } 
}



//render movies 
const renderMovies = () => {
    movieList.innerHTML = "";
    allMovies.forEach((movie, index) => {
    const li = document.createElement("li")
    li.classList.add('card')
    index += 1; 
    // li.innerHTML = `<div class="card">
    //       <img src=${movie.Poster}>
    //     <h3>${movie.Title}</h3>
    //     <p>${movie.Year}</p>
    //    </div>`
     const img = document.createElement("img")
    //  img.src= `${movie.Poster}`
    //edge case, some posters are not available
     img.src =
      movie.Poster !== "N/A"
        ? movie.Poster
        : "https://via.placeholder.com/150";
     img.classList.add('imgStyle')
    const title = document.createElement("h3")
    title.textContent = `${movie.Title}`
     const year = document.createElement("p")
     year.textContent = `${movie.Year}`
    movieList.appendChild(li)
    li.appendChild(img)
    li.appendChild(title)
    li.appendChild(year)
})
}

form.addEventListener("submit",async (e)=>{

     e.preventDefault(); 
   await searchMovies() 

})