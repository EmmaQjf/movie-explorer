# Movie Explorer

A simple web app to search for movies using the OMDb API and display results as cards. Built with **HTML, CSS, and JavaScript** using DOM manipulation and `fetch`.  

---

## Features

- **Search Bar**  
  - User can type a movie name in the input field.  
  - Input is cleared after submitting a request.  

- **Fetch Data from API**  
  - Sends a request to the **OMDb API** based on the user query.  
  - Handles network errors or API errors gracefully.  

- **Render Results**  
  - Movie data is displayed dynamically in a `<ul>` as individual cards.  
  - Previous results are cleared before displaying new results.  
  - Posters use placeholders if missing.  

- **Edge Cases & Error Handling**  
  - Empty input → alerts the user, does not fetch.  
  - No results → displays “No results found.”  
  - Network errors → caught and logged, prevents page crash.  

- **Loading State
  - Shows a loading message or spinner while fetching data.  

---

## Tech Stack

- **HTML** – Structure: search bar, submit button, results container  
- **CSS** – Styling: responsive grid layout, cards, uniform poster sizes  
- **JavaScript** – Functionality:  
  - DOM manipulation (`getElementById`, `createElement`)  
  - `fetch` to get API data  
  - Async/await with `try/catch` for error handling  
  - Render function to dynamically display movie cards  

---

## File Structure

