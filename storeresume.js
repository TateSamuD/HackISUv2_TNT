firebase.firestore().collection('resumes').add({
    filename: filename,
    uploadedBy: userId,
    uploadTimestamp: firebase.firestore.FieldValue.serverTimestamp()
  });
  