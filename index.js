$(function() {
  $.getJSON('https://api.ipify.org?format=json', function(data) {
		console.log(data)
    //document.write(data.ip)
  });
  
  $.getJSON('https://json.geoiplookup.io', function(data) {
		console.log(data)
    document.write(data.ip)
  });
  
});