var storageRef = firebase.storage().ref();
var resumeRef = storageRef.child('resumes/' + filename);

var uploadTask = resumeRef.put(file);  // 'file' is the actual File object from an input field
