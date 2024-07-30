document.addEventListener("DOMContentLoaded", (event) => {
    const but = document.getElementById("commencer");

    but.addEventListener("click", () => {
        window.location.href = "http://localhost/BiblioNest/Coding/PHP/connect.php";
    });
});
