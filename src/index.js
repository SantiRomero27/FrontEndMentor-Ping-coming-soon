// Validate mail function
function validateMail(mail) {
    // Valid Regex
    const reg = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;

    if (mail.match(reg)) {
        return true;
    }

    return false;
}

// Main function
(function () {
    // Aux elements
    const formEl = document.querySelector(".page-form");
    const inputContEl = document.querySelector(".page-form__input-container");
    const inputEl = document.querySelector(".page-form__input");
    const inputMessageEl = document.querySelector(
        ".page-form__input-container__message"
    );

    // Event listener
    formEl.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get the value, and trim it
        const value = inputEl.value.trim();

        // Check if it is correct
        const isValid = validateMail(value);

        if (isValid) {
            inputContEl.classList.remove("email-error");
            inputContEl.classList.add("email-success");

            inputMessageEl.textContent = "Thanks for subscribing!";
        } else {
            inputContEl.classList.remove("email-success");
            inputContEl.classList.add("email-error");

            inputMessageEl.textContent = "Please provide a valid email address";
        }
    });
})();
