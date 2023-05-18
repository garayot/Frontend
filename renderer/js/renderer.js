const form = document.getElementById("form_ingredients");
const clearButton = document.getElementById("clearButton"); // Get the clear button element

if (form) {
  form.onsubmit = async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    let ingredient = formData.get("ingredients");

    if (ingredient.length <= 8) {
      alertMessage("error", "Please input at least 8 characters!");
      return;
    }

    const response = await window.axios.openAI(formData.get("ingredients"));

    const responseData = {
      choices: [{
        text: response.choices[0].text
      }]
    };

    const ingredientsList = responseData.choices[0].text
      .split('- ')
      .map((ingredient) => ingredient.trim())
      .filter((ingredient) => ingredient !== '');

    const ingredientsText = ingredientsList.join('\n');

    document.getElementById("recipe").textContent = ingredientsText;
    alertMessage("success", "Outline generated!"); // Show success alert message
  };
}

if (clearButton) {
  clearButton.onclick = function () {
    document.getElementById("form_ingredients").reset(); // Reset the form
    document.getElementById("recipe").textContent = ""; // Clear the recipe textarea
    alertMessage("success", "Text cleared!"); // Show success alert message
  };
}

function alertMessage(status, sentence) {
  window.Toastify.showToast({
    text: sentence,
    duration: 5000,
    stopOnFocus: true,
    style: {
      textAlign: "center",
      background: status == "error" ? "red" : "green",
      color: "white",
      padding: "5px",
      marginTop: "2px"
    }
  });
}
