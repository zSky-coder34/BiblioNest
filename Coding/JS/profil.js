function triggerFileInput() {
    document.getElementById('image').click();
}

function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const preview = document.getElementById('image-preview');
        preview.src = reader.result;
        preview.style.display = 'block';
        document.getElementById('image-upload-placeholder').classList.add('hidden');
    }
    reader.readAsDataURL(event.target.files[0]);
}

document.getElementById('X').addEventListener('click', function() {
    document.getElementById('image').value = null;
    const preview = document.getElementById('image-preview');
    preview.style.display = 'none';
    document.getElementById('image-upload-placeholder').classList.remove('hidden');
});

document.addEventListener('DOMContentLoaded', function() {
    let burgerMenu = document.getElementById('burgerMenu');
    let sidebar = document.querySelector('#sidebar');
    let overlay = document.getElementById('overlay');
    let accueil = document.getElementById('accueil');
    let ajout = document.getElementById('ajout');
    let mesLivre = document.getElementById('mes-livres');
    let nousC = document.getElementById('nous-contacter');
    let del = document.getElementById('del');
    let fond = document.getElementById('fond');
    let non = document.getElementById('non');

    non.addEventListener('click', function() {
        fond.style.visibility = 'hidden';
    });

    del.addEventListener('click', function(event) {
        if (fond.style.visibility === 'hidden') {
            fond.style.visibility = 'visible';
        } else {
            fond.style.visibility = 'hidden';
        }

        event.stopPropagation(); // Empêche la propagation du clic vers le document
    });

    document.addEventListener('click', function() {
        fond.style.visibility = 'hidden';
    });

    document.getElementById('fond').addEventListener('click', function(event) {
        event.stopPropagation();
    });

    accueil.addEventListener('click', function() {
        document.location.href = "http://localhost/BiblioNest/Coding/HTML/accueil.html";
    });

    nousC.addEventListener('click', function() {
        document.location.href = "http://localhost/BiblioNest/Coding/HTML/contact.html";
    });

    mesLivre.addEventListener('click', function() {
        document.location.href = "http://localhost/BiblioNest/Coding/PHP/mes%20livres.php";
    });

    ajout.addEventListener('click', function() {
        document.location.href = "http://localhost/BiblioNest/Coding/HTML/ajout.html";
    });

    burgerMenu.addEventListener('click', function() {
        sidebar.classList.toggle('show');
        overlay.classList.toggle('show');
        burgerMenu.classList.toggle('open');
    });

    overlay.addEventListener('click', function() {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
        burgerMenu.classList.remove('open');
    });

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

    const username = "julien";
    const profileLogo = document.getElementById("profileLogo");
    const usernameDiv = document.getElementById("username");

    if (!profileLogo || !usernameDiv) {
        console.error('Les éléments du DOM ne sont pas trouvés.');
        return;
    }

    const trimmedUsername = username.trimStart();
    const firstChar = trimmedUsername.charAt(0).toUpperCase();

    usernameDiv.textContent = username;
    profileLogo.textContent = firstChar;

    if (username.length > 15) {
        usernameDiv.style.fontSize = "10px";
    } else if (username.length > 8) {
        usernameDiv.style.fontSize = "16px";
    } else {
        usernameDiv.style.fontSize = "20px";
    }

    let form = document.getElementById("form");
    let error = document.getElementById("error");
    let submitButton = document.getElementById("subm");

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("mail").value;
        let password = document.getElementById("mdp").value;
        let valid = true;

        if (name.length > 20 || /\s/.test(name)) {
            valid = false;
        }

         // Validation de l'email seulement s'il n'est pas vide
         let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
         if (email !== "" && (email.length > 40 || !emailPattern.test(email))) {
             valid = false;
         }
 
         // Validation du mot de passe seulement s'il n'est pas vide
         let passwordPattern = /^(?=.*[0-9])(?=.*[@#$%&*!]).{8,20}$/;
         if (password !== "" && !passwordPattern.test(password)) {
             valid = false;
         }

        if (!valid) {
            error.style.visibility = "visible";
            setTimeout(function() {
                error.style.visibility = "hidden";
            }, 6000);
        } else {
            error.style.visibility = "hidden";
            form.submit();
        }
    });

    document.getElementById('image').addEventListener('change', previewImage);
});

let deco = document.getElementById("deco");

deco.addEventListener('click', function() {
    fetch('../PHP/deco.php', {
        method: 'POST',
        credentials: 'same-origin'
    }).then(response => {
        if (response.redirected) {
            window.location.href = response.url;
        }
    }).catch(error => {
        console.error('Erreur lors de la déconnexion:', error);
    });
});