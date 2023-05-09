const form = document.getElementById("form_ingredients");

if (form) {
  form.onsubmit = async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const response = await window.axios.openAI(formData.get("ingredients"));

    const responseData = {
      choices: [{
        text: response.choices[0].text
      }]
    }; // Create a new object with only the relevant data from the response

    const ingredientsList = responseData.choices[0].text
      .split('- ') // Split the response into separate ingredients
      .map((ingredient) => ingredient.trim()) // Remove leading/trailing whitespace from each ingredient
      .filter((ingredient) => ingredient !== ''); // Remove any empty lines

    const ingredientsText = ingredientsList.join('\n'); // Join the ingredients together with line breaks

    document.getElementById("recipe").textContent = ingredientsText;
  };
}
