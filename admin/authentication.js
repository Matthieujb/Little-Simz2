import config from '../config.js';

// Initialisation de Firebase
firebase.initializeApp(config);


const newville = document.getElementById('city')
const newstade = document.getElementById('stade')
const newpays = document.getElementById('pays')
const newdate = document.getElementById('date')
const submit = document.getElementById('btn')
const newcomplet = document.getElementById('complet')
const newincomplet = document.getElementById('incomplet')



// --------------------------------------------
// Initialisation des gestionnaires d'événement
// --------------------------------------------


$('#loginForm').on('submit', emailPasswordLogin);

// ----------------------------------------
// Définition des gestionnaires d'événement
// ----------------------------------------


// -- Pour pouvoir utiliser cette fonction, il ne faut pas oublier d'ajouter un utilisateur directement sur firebase

function emailPasswordLogin(event) {
    event.preventDefault();

    // -- .val permet d'obtenir le contenue(valeur) de notre id 
    const email = $('#emailField').val();
    const password = $('#passwordField').val();

    // Utilisez les variables 'email' et 'password' pour les transmettre à Firebase via le provider "Email/Password"
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (result) {
            console.log('Succès de l\'authentification', result);

            $('section#results').html(`
                <h3>Vous êtes bien connecté ${email} !</h3>
            `);
        })
        .catch(function (error) {
            console.log("Une erreur s'est produite", error.message);

            $('section#results').html(`
                <div class="alert alert-danger">${error.message}</div>
            `);
        });
}



const DateRef = firebase.firestore().collection('Date');

// -- Récupérer les données de nos consoles 
DateRef.get().then(function (querySnapshot) {

    

    querySnapshot.forEach(function (doc) {
        const { complet, date, city, pays, stade } = doc.data()


        // -- variables de nos éléments(consoles) qui sont dans l'élément doc.date()


        console.log(complet);


        // -- on append nos éléments


        submit.addEventListener('click', e => {
           
            DateRef.doc().set({
                city: newville.value,
                date: newdate.value,
                pays: newpays.value,
                stade: newstade.value,
                complet: newcomplet.value,
                incomplet: newincomplet.value,
                
            })
        

    })

});
})

const newDateRef = firebase.firestore().collection('Date').getElementById('.list');

