$(document).ready( function(){
  localStorage.setItem("ablScore",0);
  var ambType = localStorage.getItem('ambType');
  $("#ambType").html(ambType);
  if(ambType == 'Jenazah') {
    $("#opsi-darurat").css("display","none");
  }

  $("#header-logo img").click( function(){
    window.location='index.html';
  });

  $(".ablScore").change( function(){
    var ablScore = localStorage.getItem('ablScore');
    var index = $( ".ablScore" ).index( this );
    var abScr = $(".ablScore").eq(index).val();
    if( $(".ablScore").eq(index).prop("checked") == true ){
      ablScore = parseInt(ablScore) + parseInt(abScr);
      localStorage.setItem("ablScore",ablScore);

    }else{
      ablScore = parseInt(ablScore) - parseInt(abScr);
      localStorage.setItem("ablScore",ablScore);
    }

  });
  
});

function goHome(){
  window.location="index.html";
}
