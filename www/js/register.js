var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.getElementById('submit').addEventListener('click', this.RegisterMe, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'

    RegisterMe: function (){
      var nmTelp = document.getElementById('nmTelp').value;
      var passwd = document.getElementById('password').value;
      var alamat = document.getElementById('alamat').value;
      var kotane = document.getElementById('kota').value;
      var namane = document.getElementById('nama').value;
      $.post(
        'https://klubaners.web.id/sibulan/resi/users.php',{
          op : 'regme',
          hp : nmTelp,
          ps : passwd,
          nm : namane,
          kt : kotane,
          al : alamat
        },function(response){
          document.getElementById('responses').innerHTML = response;
        });
    }
};
