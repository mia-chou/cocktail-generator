function displayRecipe(response) {
    console.log("recipe-generated");

    new Typewriter("#recipe", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generate(event) {
    event.preventDefault();
    let instructionsInput = document.querySelector("#user-instructions");

    let apiKey = "03ob1b49a93e50d82f3dta0c9ad62afc";

    let context = `Please generate a recipe based on ${instructionsInput.value}`;

    let prompt =
        "You are a highly skilled AI Bartender that knows a range of different cocktail recipes from just one ingredient. Your mission is to generate a 6-line recipe in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the recipe. Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";

  
  
  function generateRecipe(event) {
    event.preventDefault();
  
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "03ob1b49a93e50d82f3dta0c9ad62afc";
    let context = "You are a highly skilled AI Bartender that knows a range of different cocktail recipes from just one ingredient. Your mission is to generate a 6-line recipe in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the recipe. Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";

    let prompt = `User instructions: Generate a cocktail recipe about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let poemElement = document.querySelector("#recipe");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ Generating a cocktail recipe about ${instructionsInput.value}</div>`;
  
    axios.get(apiURL).then(displayRecipe);
  }
  
  let poemFormElement = document.querySelector("#recipe-generator-form");
  poemFormElement.addEventListener("submit", generateRecipe);
}