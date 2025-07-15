const submitForm = document.getElementById("submitForm");
submitForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userName = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const checkBox = document.getElementById("checkbox").value.trim();

    const nameError = document.getElementById("nameError");
    const passwordError = document.getElementById("passwordError");
    const checkError = document.getElementById("checkError");

    nameError.textContent = "";
    passwordError.textContent = "";
    checkError.textContent = "";

    let valid = true;

    if (userName == "") {
        nameError.textContent = "Name or Email is requerd";
        return false;
    }

    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        return false;
    }

    if (!checkBox) {
        checkError.textContent = "You must agree to the terms and conditions.";
        return false;
    }

    if (valid) {
        alert("Form submitted successfully!");
        console.log({ userName, password, checkBox });
        form.reset();
    }
});



