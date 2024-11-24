        // Gestion du mode sombre et clair
        document.getElementById('DarkMode').addEventListener('click', function() {
            // Active le mode sombre
            document.body.classList.add('dark-mode');
            // Cache le bouton DarkMode et affiche le bouton LightMode
            this.style.display = 'none';
            document.getElementById('LightMode').style.display = 'block';
        });

        document.getElementById('LightMode').addEventListener('click', function() {
            // Désactive le mode sombre
            document.body.classList.remove('dark-mode');
            // Affiche le bouton DarkMode et cache le bouton LightMode
            document.getElementById('DarkMode').style.display = 'block';
            this.style.display = 'none';
        });