document.addEventListener("DOMContentLoaded", function() {
    let acc = document.getElementById("not_account");

    acc.addEventListener('click', function() {
        document.location.href = "http://localhost/BiblioNest/Coding/HTML/inscription.html";
    });

    let inputs = document.querySelectorAll('input[required]');
            inputs.forEach(function(input) {
                input.addEventListener('invalid', function(event) {
                    event.preventDefault(); // Empêche le message d'erreur par défaut
                });
            });
});