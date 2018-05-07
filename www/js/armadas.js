$(document).ready( function(){
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
        "<p class='kontak'>"+armada.telp+"</p>"+
        "</div>"
      );
    });
  });
});
