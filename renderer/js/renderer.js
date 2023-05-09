const form = document.getElementById("ingredients");

if (form) {
  form.onsubmit = async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const response = await window.axios.openAI(formData.get("ingredients"));

    const ingredientsList = response.choices[0].text
      .split('- ') // Split the response into separate ingredients
      .map((ingredient) => ingredient.trim()) // Remove leading/trailing whitespace from each ingredient
      .filter((ingredient) => ingredient !== ''); // Remove any empty lines

    const ingredientsText = ingredientsList.join('\n'); // Join the ingredients together with line breaks

    document.getElementById("recipe").textContent = ingredientsText;
  };
}
