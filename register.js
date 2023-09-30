firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    console.error("Error registering: ", error);
  });
