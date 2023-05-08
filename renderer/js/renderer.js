const form = document.getElementById("ingredients");
if(form){
    form.onsubmit = function(e){
        e.preventDefault();

        const formData = new FormData(form);

        for (const [key, value] of formData) {
            console.log(`${key}: ${value}\n`);
          }
    };
}