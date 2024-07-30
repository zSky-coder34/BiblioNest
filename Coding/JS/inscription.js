document.addEventListener('DOMContentLoaded', function() {
    let infoic = document.getElementById("info-icon");
    let infoC = document.getElementById("info");

    let voirMdpButton = document.getElementById("voir_mdp");
    let passwordField = document.getElementById("mdp");

    voirMdpButton.addEventListener("click", function() {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            voirMdpButton.textContent = "Masquez";
        } else {
            passwordField.type = "password";
            voirMdpButton.textContent = "Affichez";
        }
    });

    infoic.addEventListener('click', function(event) {
        event.stopPropagation();
        if (infoC.style.visibility === "hidden") {
            infoC.style.visibility = "visible";
        } else {
            infoC.style.visibility = "hidden";
        }
    });

    document.addEventListener('click', function() {
        if (infoC.style.visibility === "visible") {
            infoC.style.visibility = "hidden";
        }
    });

    let inputs = document.querySelectorAll('input[required]');
    inputs.forEach(function(input) {
        input.addEventListener('invalid', function(event) {
            event.preventDefault(); // Empêche le message d'erreur par défaut
        });
    });

    let form = document.getElementById("form");
    let error = document.getElementById("error");
    let submitButton = document.getElementById("subm");

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du bouton de soumission

        let name = document.getElementById("name").value;
        let email = document.getElementById("mail").value;
        let password = document.getElementById("mdp").value;
        let valid = true;

        // Vérification du nom d'utilisateur
        if (name.length > 20 || name.length === 0 || /\s/.test(name)) {
            valid = false;
        }

        // Vérification de l'email
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email.length > 40 || email.length === 0 || !emailPattern.test(email)) {
            valid = false;
        }

        // Vérification du mot de passe
        let passwordPattern = /^(?=.*[0-9])(?=.*[@#$%&*!]).{8,20}$/;
        if (!passwordPattern.test(password)) {
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
