var ambClient = {
    // Application Constructor
    initialize: function() {
        console.log('initialize');
        this.bindEvents();
    },

    bindEvents: function() {
      document.addEventListener('deviceready', this.onDeviceReady, false);
      console.log('bindEvents');
    },

    onDeviceReady: function() {
        console.log('ready');
        this.setOptions();
        this.getCoord();
    }

    getCoord: function() {
      var geopsi = {
        enableHighAccuracy: true,
        timeout : 100000,
        maximumAge: 3600000
      }

      var geoSuccess = function(posisi){
        var titikJemput = posisi.coords.latitude+","+posisi.coords.longitude;
        documnent.getElementById('geol').value = titikJemput;
      }

      var geoWurung = function(rusak){
        var ecode = rusak.code;
        var mksud = rusak.message;

        document.getElementById('ecode').value=ecode;
        document.getElementById('edesc').value=mksud;
      }

      navigator.geolocation.getCurrentPosition(geoSuccess,geoWurung,geopsi);

    },

    setOptions: function(){
      localStorage.setItem("ablScore",0);
      var ambType = localStorage.getItem('ambType');
      $("#ambType").html(ambType);
      if(ambType == 'Jenazah') {
        $("#opsi-darurat").css("display","none");
      }
    }
};
