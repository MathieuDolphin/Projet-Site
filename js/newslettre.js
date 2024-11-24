let form = document.querySelector('form');
let pseudo = document.querySelector('#pseudo');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');
let errorList = document.querySelector('.error-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Envoi du form détecté !');

    // Réinitialiser les messages d'erreur et les styles
    errorList.innerHTML = '';
    [pseudo, email, password, confirmPassword].forEach(input => {
        input.classList.remove('success', 'error');
    });

    let isValid = true;

    // Validation du pseudo
    if (pseudo.value.length < 6) {
        isValid = false;
        pseudo.classList.add('error');
        let err = document.createElement('li');
        err.innerText = "Le champ pseudo doit contenir au moins 6 caractères";
        errorList.appendChild(err);
    } else {
        pseudo.classList.add('success');
    }

    // Validation de l'email
    if (email.value == '') {
        isValid = false;
        email.classList.add('error');
        let err = document.createElement('li');
        err.innerText = "Email invalide";
        errorList.appendChild(err);
    } else {
        email.classList.add('success');
    }

    // Validation du mot de passe
    if (password.value.length < 8) {
        isValid = false;
        password.classList.add('error');
        let err = document.createElement('li');
        err.innerText = "Mot de passe invalide (trop court)";
        errorList.appendChild(err);
    } else {
        password.classList.add('success');
    }

    // Validation de la vérification du mot de passe
    if (password.value !== confirmPassword.value) {
        isValid = false;
        confirmPassword.classList.add('error');
        let err = document.createElement('li');
        err.innerText = "Les mots de passe ne correspondent pas";
        errorList.appendChild(err);
    } else {
        confirmPassword.classList.add('success');
    }

    // Si tout est valide, afficher la fenêtre contextuelle et vider les champs
    if (isValid) {
        console.log("Formulaire soumis avec succès !");
        alert("Le formulaire a été rempli avec succès !");
        form.reset();
    }
});


