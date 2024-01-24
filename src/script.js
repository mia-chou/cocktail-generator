function generate(event) {
    event.preventDefault();
    

    let recipeElement=document.querySelector("#recipe");

    new Typewriter("#recipe", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
    }
    

    recipeElement.innerHTML = `<span class="blink">⏳</span> Please wait a moment...`;


   





let recipeForm = document.querySelector("#recipe-generator");
recipeForm.addEventListener("submit", generate);
