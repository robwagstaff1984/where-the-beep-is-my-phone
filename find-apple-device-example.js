var ICloud = require('./node_modules/find-apple-device/index');

var email = "robwagstaff1984@gmail.com";
var password = "";
var robsiPhone6sID = "4TLKGaG870VQhqFWBK81+nlo/J1uM2c/sEPv+UYVF36O6onJlsfFReHYVNSUzmWV"

var iCloud = new ICloud(email, password);

console.log("started");
iCloud.getDevices(function(err, devices) {
  if (err) return console.error('Error',err);
  if (devices.length === 0) return console.log("No devices found!");


  for (var i = 0; i < devices.length; i++) {

    if (devices[i].id == robsiPhone6sID) {
      console.log("robs phone" + devices[i])
      iCloud.alertDevice(devices[i].id, "This is a test alert!", function(err) {
        if (err) return console.err(err);
        console.log("Successfully alerted device!");
      });
    }
  }



});
