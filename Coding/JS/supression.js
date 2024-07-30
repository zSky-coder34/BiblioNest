document.addEventListener('DOMContentLoaded', function() {
    let delButton = document.getElementById('oui');

    delButton.addEventListener('click', function() {
        let deco = document.getElementById("deco");

        deco.addEventListener('click', function() {
            fetch('../PHP/delete.php', {
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
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let delButton = document.getElementById('oui');

    delButton.addEventListener('click', function() {
        fetch('../PHP/delete.php', {
            method: 'POST',
            credentials: 'same-origin'
        }).then(response => {
            if (response.redirected) {
                window.location.href = response.url; // Rediriger si la réponse est redirigée
            } else if (response.ok) {
                alert('Compte supprimé avec succès.');
                window.location.href = 'http://localhost/BiblioNest/Coding/HTML/index.html'; // Rediriger après suppression
            } else {
                throw new Error('Erreur lors de la requête: ' + response.statusText);
            }
        }).catch(error => {
            console.error('Erreur lors de la suppression:', error); // Log l'erreur pour plus de détails
            alert("Erreur lors de la suppression du compte !");
        });
    });
});
