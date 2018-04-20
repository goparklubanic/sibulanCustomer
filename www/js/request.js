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
  /*
  $("#submit").click( function(){
    // telp,rt,rw,ds,kc,kt,go,tujuan,tipe,score
    var nmTelp = localStorage.getItem("nmTelp");
    var namane = localStorage.getItem("namane");
    var jmp_rt = $("#pprt").val();
    var jmp_rw = $("#pprw").val();
    var jmp_ds = $("#ppds").val();
    var jmp_kc = $("#ppkc").val();
    var jmp_kt = $("#ppkt").val();
    var tujuan = $("#tujuan").val();
    var ablScore = localStorage.getItem('ablScore');

    var data = {"nmTelp":nmTelp,"nama":namane,"pprt":jmp_rt,"pprw":jmp_rw,
                "ppds":jmp_ds,"ppkc":jmp_kc,"ppkt":jmp_kt, "tujuan":tujuan,
                "score":ablScore };
    console.log(data);
//    console.log(kupri);
//    console.log(kumum);

  });
  */
});
