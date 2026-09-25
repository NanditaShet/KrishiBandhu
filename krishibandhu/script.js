function continueToProfile() {
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;

    if (mobile === "" || password === "") {
        alert("Please enter your mobile number and password.");
        return;
    }

    window.location.href = "profile.html";
}