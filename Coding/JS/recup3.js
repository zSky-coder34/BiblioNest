document.addEventListener("DOMContentLoaded", function() {
    let inputs = document.querySelectorAll('input[required]');
    inputs.forEach(function(input) {
        input.addEventListener('invalid', function(event) {
            event.preventDefault(); // Empêche le message d'erreur par défaut
        });
    });

    let voirMdpButton = document.getElementById("voir_mdp");
    let voirMdpButton2 = document.getElementById("voir_mdp2");
    let passwordField = document.getElementById("new_password");
    let passwordField2 = document.getElementById("confirm_password");

    voirMdpButton.addEventListener("click", function() {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            voirMdpButton.textContent = "Masquez";
        } else {
            passwordField.type = "password";
            voirMdpButton.textContent = "Affichez";
        }
    });

    voirMdpButton2.addEventListener("click", function() {
        if (passwordField2.type === "password") {
            passwordField2.type = "text";
            voirMdpButton2.textContent = "Masquez";
        } else {
            passwordField2.type = "password";
            voirMdpButton2.textContent = "Affichez";
        }
    });

    let error = document.getElementById("error");
    let submitButton = document.getElementById("sub");
    let form = document.querySelector("form");

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du bouton de soumission

        let mdp = document.getElementById("new_password").value;
        let c_password = document.getElementById("confirm_password").value;
        let valid = true;

        // Vérification du mot de passe
        let passwordPattern = /^(?=.*[0-9])(?=.*[@#$%&*!]).{8,20}$/;
        if (!passwordPattern.test(mdp)) {
            valid = false;
        }

        // Vérification du mot de passe
        let passwordPatternn = /^(?=.*[0-9])(?=.*[@#$%&*!]).{8,20}$/;
        if (!passwordPatternn.test(c_password)) {
            valid = false;
        }

        if (c_password != mdp) {
            valid = false;
        }

        // Affichage du message d'erreur
        if (!valid) {
            error.style.visibility = "visible";
            setTimeout(function() {
                error.style.visibility = "hidden";
            }, 6000); // Masquer le message d'erreur après 6 secondes
        } else {
            error.style.visibility = "hidden";
            form.submit(); // Soumettre le formulaire si toutes les validations passent
        }
    });
});