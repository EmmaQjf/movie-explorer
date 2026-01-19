const input = document.getElementById('input');
const searchBtn = document.getElementById('searchBtn');
const movieList = document.getElementById('movieList');

let allMovies = []
const searchMovies = async() =>{
    const query = input.value;
    const response = await fetch("https://www.omdbapi.com/?s=batman&apikey=YOUR_API_KEY")
    const moviesArray = await response.json().Search
    allMovies = moviesArray.filter((movie) => 
       movie.Title.includes(query))
}



//render movies 
const renderMovies = () => {
    movieList.innerHTML = "";
    allMovies.forEach((movie, index) => {
    const li = document.createElement("li")
    index += 1; 
    li.textContent = `${index} ${movie.Title} is made in year of ${movie.Year}`
    const img = document.createElement("img")
    img.src = `${movie.Poster}`
    movieList.appendChild(li)
    li.appendChild(img)
})
}

searchBtn.addEventListener("click", (e)=>{
    searchMovies()
    renderMovies()

})
