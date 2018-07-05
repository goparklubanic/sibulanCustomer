$(document).ready(function() {
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
        getCoord();
        setOptions();
    } else {
        onDeviceReady();
        getCoord();
        setOptions();
        console.log('browser');
    }

    localStorage.setItem('ablScore',0);

    $.post('https://sibulan.id/resi/users.php',{
      op : 'ticket'
    },function(tiket){
      $('#ticketId').val(tiket);
    });

    $(".ablScore").click( function(){
      var ablScore = localStorage.getItem('ablScore');
      var oldScore = parseInt(ablScore);

      var index = $( ".ablScore" ).index( this );
      var score = $( ".ablScore" ).eq(index).val();

      if($( ".ablScore").eq(index).is(':checked') ){
        var newScore = oldScore + parseInt(score);
      }else{
        var newScore = oldScore - parseInt(score);
      }

      console.log('skor',newScore);
      localStorage.setItem('ablScore',newScore);
    });
});



function onDeviceReady() {
    // do everything here.
    console.log('onDeviceReady');
    getCoord();
}

function getCoord(){
  console.log('getCoord');
  var geopsi = {
    enableHighAccuracy: true,
    timeout : 100000,
    maximumAge: 3600000
  }

  navigator.geolocation.getCurrentPosition(geoSuccess,geoWurung,geopsi);
}

var geoSuccess = function(posisi){
  var titikJemput = posisi.coords.latitude+","+posisi.coords.longitude;
  localStorage.setItem('geol',titikJemput);
  alert(titikJemput);
  // documnent.getElementById('geol').value = localStorage.getItem('geol');
  putLocation();
}

var geoWurung = function(rusak){
  var ecode = rusak.code;
  var mksud = rusak.message;

  document.getElementById('ecode').value=ecode;
  document.getElementById('edesc').value=mksud;
}

function putLocation(){
  var pos = localStorage.getItem('geol');
  document.getElementById('geol').value=pos;
}

function  setOptions(){
    localStorage.setItem("ablScore",0);
    var ambType = localStorage.getItem('ambType');
    $("#ambType").html(ambType);
    if(ambType == 'Jenazah') {
      $("#opsi-darurat").css("display","none");
    }
}
