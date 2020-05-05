function uploadFunction(){
  var x = document.getElementById("myProposal");
  var txt = "";
  if ('files' in x) {
    if (x.files.length == 0) {
      txt = "Select one.";
    } else {
      for (var i = 0; i < x.files.length; i++) {
        txt += "<br><strong>" + (i+1) + " Archivo</strong><br>";
        var file = x.files[i];
        if ('name' in file) {
          txt += "Nombre: " + file.name + "<br>";
        }
        if ('size' in file) {
          txt += "Tamaño: " + file.size + " bytes <br>";
        }
      }
    }
  } 
  else {
    if (x.value == "") {
      txt += "Select one.";
    } else {
      txt += "The files property is not supported by your browser!";
      txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
    }
  }
  document.getElementById("uploadFile").innerHTML = txt;
}