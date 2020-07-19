let data = [
    [
     
    ["Kuwait", 112, 112, 112, ""],
  
  
  navigator.geolocation.getCurrentPosition(function (position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
  
    let country_link =
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
      lat +
      "," +
      lon+
      "&radius=5000&&type=" + type[0] + "&key=AIzaSyCak9WzbgJfGqd-GEsHNRKu6w8BtsduyLA";
  
    $.getJSON(country_link, function (json) {
      let country;
      for (let j = 0; j < json.results[0].address_components.length; j++) {
        if (json.results[0].address_components[j].types.indexOf("country") > -1) {
          country = json.results[0].address_components[j].long_name;
        }
      }
  
      for (let i = 0; i < data.length; i++) {
        if (data[i][0] == country) {
          $("#location").html(country);
          $("#police_number").html(
            '<a href="tel:' + data[i][1] + '">' + data[i][1] + "</a>"
          );
          $("#ambulance_number").html(
            '<a href="tel:' + data[i][2] + '">' + data[i][2] + "</a>"
          );
          $("#fire_number").html(
            '<a href="tel:' + data[i][3] + '">' + data[i][3] + "</a>"
          );
  
         let notes = data[i][4];
         let string = "";
         let num = "";
         let inNum = false;
  
          for (let k = 0; k < notes.length; k++) {
           let char = notes[k];
  
            if (!isNaN(char) && !inNum && char != " ") {
              inNum = true;
              string += '<a href="tel:';
              num += char;
            } else if (!isNaN(char) && inNum) {
              num += char;
            } else if (isNaN(char) && inNum) {
              inNum = false;
              string += '">' + num + "</a>";
              num = "";
            }
            string += char;
          }
          if (inNum) {
            string += '">' + num + "</a>";
          }
  
          console.log(string);
          $("#notes_content").html(string);
        }
      }
    });

    
  });
  