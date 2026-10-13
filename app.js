document.getElementById("Button").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    if (name === "" || document.getElementById("age").value === "") {
        document.getElementById("message").innerHTML = '<span style="color:red;">Please enter your name and age.</span>';
    }
    else if (age < 0 ) {
        document.getElementById("message").innerHTML = "Please enter valid age.";

    }
    else if (age <= 3) {
        document.getElementById("message").innerHTML = name + ", your ticket is Free!";

    }
    else if (age <= 12) {
        document.getElementById("message").innerHTML = name + ", your ticket costs $10.";
    }
    else if (age <= 64) {
        document.getElementById("message").innerHTML = name + ", your ticket costs $20.";

    }
    else {
        document.getElementById("message").innerHTML = name + ", your ticket costs $12.";
    }
});