firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(function(error) {
    console.error("Error signing in: ", error);
  });
