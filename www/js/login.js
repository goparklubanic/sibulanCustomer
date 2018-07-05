$(document).ready(function(){

  $("#submit").click(function(){
    $.post("https://sibulan.id/resi/users.php",
        {
           op: "login",
           hp: $("#nmTelp").val(),
           ps: $("#password").val()
        },function(response){
          var resp=JSON.parse(response);
          console.log(resp);
          var data = resp.data;
          if(resp.exist == '1'){
            localStorage.setItem("nmTelp",data.nmTelp);
            localStorage.setItem("passwd",data.password);
            localStorage.setItem("namane",data.namaLengkap);
            localStorage.setItem("alamat",data.alamat+", "+data.kota);
            window.location="index.html";
          }else{
            var resp=JSON.parse(response);
            console.log(resp);
            window.location='register.html';
          }

        }
    );
  });
});
