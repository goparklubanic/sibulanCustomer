$(document).ready(function(){

  var nmTelp = localStorage.getItem("nmTelp");
  var passwd = localStorage.getItem("passwd");
  var namane = localStorage.getItem("namane");
  var alamat = localStorage.getItem("alamat");

  if( nmTelp == null || passwd == null){
    window.location="login.html";
  }else{
    $("#namane").html(namane);
    $("#alamat").html(alamat);
    $("#nmTelp").html(nmTelp);
  }

  $("#ambDarurat").click(function(){
    localStorage.setItem('ambType','Darurat');
    window.location='request.html'
  });
  $("#ambJenazah").click(function(){
    localStorage.setItem('ambType','Jenazah');
    window.location='request.html'
  });

});
