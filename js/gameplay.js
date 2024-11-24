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

        // Gestion des onglets
        const tabs = document.querySelectorAll('.tab');

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Retire la classe 'tab-active' de tous les onglets
                tabs.forEach(t => t.classList.remove('tab-active'));
                // Retire la classe 'active' de tous les contenus
                const contents = document.querySelectorAll('.content');
                contents.forEach(content => content.classList.remove('active'));
                // Ajoute la classe 'tab-active' à l'onglet cliqué
                this.classList.add('tab-active');
                // Affiche le contenu correspondant à l'onglet cliqué
                if (this.classList.contains('tab-content1')) {
                    document.querySelector('.content1').classList.add('active');
                } else if (this.classList.contains('tab-content2')) {
                    document.querySelector('.content2').classList.add('active');
                } else if (this.classList.contains('tab-content3')) {
                    document.querySelector('.content3').classList.add('active');
                }
            });
        });