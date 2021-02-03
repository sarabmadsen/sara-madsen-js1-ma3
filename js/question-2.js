//Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results-container");

async function makeApiCall() {

    try {

        const response = await fetch(url);

        const data = await response.json();
    
        const results = data.results;
    
        console.log(results);
    
        resultsContainer.innerHTML = "";
    
        for (let i = 0; i < results.length; i++) {
    
            if (i === 8) {
                break;
            }
    
            resultsContainer.innerHTML += `
            <div class="results">
            <p>Name: ${results[i].name}</p>
            <p>Rating: ${results[i].rating}</p>
            <p>Tags: ${results[i].tags.length}</p>
            </div>`;

        }
    } catch (error) {
        console.log("an error has occured");
        resultsContainer.innerHTML = displayError("An error occured when calling the API");
    }
}

function displayError(message = "Unknown error") {
    return `<div class="error">${message}</div>`;
}

makeApiCall();


