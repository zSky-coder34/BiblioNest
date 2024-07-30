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