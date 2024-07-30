document.addEventListener('DOMContentLoaded', function() {
    let burgerMenu = document.getElementById('burgerMenu');
    let sidebar = document.querySelector('#sidebar');
    let overlay = document.getElementById('overlay');
    let ajout = document.getElementById('ajout');
    let accueil = document.getElementById('accueil');
    let nousC = document.getElementById('nous-contacter');

    nousC.addEventListener('click', function() {
        document.location.href = "http://localhost/BiblioNest/Coding/HTML/contact.html";
    });

    accueil.addEventListener('click', function() {
        document.location.href = "http://localhost/BiblioNest/Coding/HTML/accueil.html";
    });

    ajout.addEventListener('click', function() {
        document.location.href = "http://localhost/BiblioNest/Coding/HTML/ajout.html";
    });

    burgerMenu.addEventListener('click', function() {
        sidebar.classList.toggle('show');
        overlay.classList.toggle('show');
        burgerMenu.classList.toggle('open');

        if (sidebar.classList.contains('show')) {
            window.scrollTo(0, 0); // Scroller vers le haut
            document.body.classList.add('no-scroll'); // Désactiver le défilement
        } else {
            document.body.classList.remove('no-scroll'); // Activer le défilement
        }
    });

    overlay.addEventListener('click', function() {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
        burgerMenu.classList.remove('open');

        if (document.body.classList == 'no-scroll') {
            document.body.classList.remove('no-scroll'); // Activer le défilement
        }
    });

    // Définir le nom d'utilisateur dans une variable
    const username = "julien"; // Remplacez par le nom d'utilisateur réel

    // Sélectionner les éléments du DOM
    const profileLogo = document.getElementById("profileLogo");
    const usernameDiv = document.getElementById("username");

    // Vérifier que les éléments existent
    if (!profileLogo || !usernameDiv) {
        console.error('Les éléments du DOM ne sont pas trouvés.');
        return;
    }

    // Supprimer les espaces en début de chaîne et obtenir le premier caractère
    const trimmedUsername = username.trimStart();
    const firstChar = trimmedUsername.charAt(0).toUpperCase();

    // Mettre à jour le nom d'utilisateur et le logo de profil
    usernameDiv.textContent = username;
    profileLogo.textContent = firstChar;

    // Ajuster la taille de la police en fonction de la longueur du nom d'utilisateur
    if (username.length > 15) {
        usernameDiv.style.fontSize = "10px"; // Réduire la taille de la police à 10px
    } else if (username.length > 8) {
        usernameDiv.style.fontSize = "16px"; // Réduire la taille de la police à 16px
    } else {
        usernameDiv.style.fontSize = "20px"; // Taille de police par défaut
    }
});

let deco = document.getElementById("deco");

deco.addEventListener('click', function() {
    fetch('../PHP/deco.php', {
        method: 'POST',
        credentials: 'same-origin'
    }).then(response => {
        if (response.redirected) {
            window.location.href = response.url; // Redirection en cas de succès
        }
    }).catch(error => {
        console.error('Erreur lors de la déconnexion:', error);
    });
})