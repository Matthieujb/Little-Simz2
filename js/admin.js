const email = document.getElementById('adminid');
const password = document.getElementById('passwordid');
const button = document.getElementById('submitid');

console.log('test')
button.addEventListener('click', e => {

  const logemail = email;
  const passwordv = password;

  firebase.auth().signInWithEmailAndPassword(logemail, passwordv).then(function () {

    console.log('test')


  }).catch(function (error) {
    // Handle Errors here.

    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(error);



    // ...
  });

})





