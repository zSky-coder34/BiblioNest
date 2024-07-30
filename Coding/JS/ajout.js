function triggerFileInput() {
    document.getElementById('image').click();
}

function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const preview = document.getElementById('image-preview');
        preview.src = reader.result;
        preview.style.display = 'block';
        document.querySelector('.image-upload-placeholder').style.display = 'none';
    }
    reader.readAsDataURL(event.target.files[0]);
}

document.getElementById('X').addEventListener('click', function() {
    document.getElementById('image').value = null;
    var preview = document.getElementById('image-preview');
    preview.style.display = 'none';
    
    var placeholder = document.querySelector('.image-upload-placeholder');
    placeholder.style.display = 'flex';
});

document.addEventListener('DOMContentLoaded', function() {
    let burgerMenu = document.getElementById('burgerMenu');
    let sidebar = document.querySelector('#sidebar');
    let overlay = document.getElementById('overlay');
    let accueil = document.getElementById('accueil');
    let profil = document.getElementById('profill');
    let nous_contacter = document.getElementById('nous-contacter');
    let mesLivre = document.getElementById('mes-livres');

    if (!profil) {
        console.error('Le bouton profil ne se trouve pas dans le DOM.');
        return;
    }

    mesLivre.addEventListener('click', function() {
        document.location.href = "http://localhost/BiblioNest/Coding/PHP/mes%20livres.php";
    });

    nous_contacter.addEventListener('click', function() {
        document.location.href = "http://localhost/BiblioNest/Coding/HTML/contact.html";
    })

    accueil.addEventListener('click', function() {
        document.location.href = "http://localhost/BiblioNest/Coding/HTML/accueil.html";
    })

    profil.addEventListener('click', function() {
        console.log('Profil clicked'); // Message de débogage
        document.location.href = "http://localhost/BiblioNest/Coding/HTML/profil.html";
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