$(document).ready( function(){
  // are we running in native app or in a browser?
  window.isphone = false;
  if(document.URL.indexOf("http://") === -1
      && document.URL.indexOf("https://") === -1) {
      window.isphone = true;
  }
  console.log(window.isphone);
  if( window.isphone ) {
      document.addEventListener("deviceready", this.onDeviceReady, false);
      console.log('native app');

  } else {
      onDeviceReady();

      console.log('browser');
  }

  $.post('https://klubaners.web.id/sibulan/resi/users.php',{
    'op' : 'armadas'
  }, function(armadas){
    var armadas = JSON.parse(armadas);
    console.log(armadas);

    $('#dftArmada li').remove();
    $.each(armadas, function(i,armada){
      $('#dftArmada').append(
        "<li class='list-group-item'>"+
        "<div class='nmLambung'>"+armada.nmLambung+"</div>"+
        "<div class='infoArmada'>"+
        "<p class='organisasi'>"+armada.organisasi+"</p>"+
        "<p class='alamat'>"+armada.alamat+" "+armada.kota+"</p>"+
        "<p class='kontak'><a href='#' onClick=dialin('"+armada.telp+"')>"+armada.telp+"</a></p>"+
        "</div>"
      );
    });
  });


});

function onDeviceReady() {
  document.addEventListener("backbutton", onBackKeyDown, false);
}

function onBackKeyDown(){
  window.location='index.html';
}
function dialin(nomor){
  window.plugins.CallNumber.callNumber(onSuccess, onError, nomor, bypassAppChooser);
}
function onSuccess(result){
  console.log("Success:"+result);
}

function onError(result) {
  console.log("Error:"+result);
}
