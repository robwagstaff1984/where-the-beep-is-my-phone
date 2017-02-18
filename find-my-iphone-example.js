var icloud = require("find-my-iphone").findmyphone;

    icloud.apple_id = "robwagstaff1984@gmail.com";
    icloud.password = "Enter password";
    console.log("started ");
    icloud.getDevices(function(error, devices) {
        var device;
        console.log("1 ");
        if (error) {
            throw error;
        }
        //pick a device with location and findMyPhone enabled
        devices.forEach(function(d) {
            if (device == undefined && d.location && d.lostModeCapable) {
                device = d;
            }
        });
        console.log("2 ");
        if (device) {
            console.log("3 " + icloud);
            //gets the distance of the device from my location
            var myLatitude = 38.8977;
            var myLongitude = -77.0366;



            icloud.getDistanceOfDevice(device, myLatitude, myLongitude, function(err, result) {

                console.log("Distance: " + result);
                console.log("Driving time: " + result);
            });

            icloud.alertDevice(device.id, function(err) {
                console.log("Beep Beep!");
            });

            icloud.getLocationOfDevice(device, function(err, location) {
                console.log(location);
            });
        }
    });
