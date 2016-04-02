console.log('working');

var weatherBtn = document.getElementById('weatherBtn');

  weatherBtn.addEventListener('click', function (event){
  event.preventDefault();
  console.log('clicked');

  var cityName = document.getElementById('target').value;
  console.log("CITY NAME", cityName);
  var weatherBtn = new XMLHttpRequest();
  weatherBtn.addEventListener('load', loadData);

  weatherBtn.open('GET', "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + ",us&mode=JSON&APPID=083b7efd3f8a68a79dddd14da50be4a4");

  weatherBtn.send();



});

  function loadData() {
    var cityData = JSON.parse(this.responseText).list;

    var weatherData = [];
     cityData.forEach(function(element, index) {
      weatherData.push(element.weather[0].description);
      weatherData.push(element.dt_txt);
    });
    console.log(cityData);

    // var displayDiv = document.getElementById('display');
    // displayDiv.innerHTML += (weatherData);

    // weatherData.forEach(function(element, index) {
    //   if(element.dt_txt)
    // })

      var d = new Date(cityData[0].dt_txt);
      var dayOneDiv = document.getElementById('day1');
      dayOneDiv.innerHTML += ('Month: '+ d.getMonth()+ ' Date: '+ d.getDate());
      for(i = 0; i< 6; i++) {
      dayOneDiv.innerHTML += '<br>' + ' we will be experiencing : ' + cityData[i].weather[0].description;
      }



      var e = new Date(cityData[7].dt_txt);
      var dayTwoDiv = document.getElementById('day2');
      dayTwoDiv.innerHTML += ('Month: '+ e.getMonth()+ ' Date: '+ e.getDate());
      for(i = 0; i< 6; i++) {
      dayTwoDiv.innerHTML += '<br>' + ' we will be experiencing : ' + cityData[i].weather[0].description;
      }

      var f = new Date(cityData[15].dt_txt);
      var dayThreeDiv = document.getElementById('day3');
      dayThreeDiv.innerHTML += ('Month: '+ f.getMonth()+ ' Date: '+ f.getDate());
      for(i = 0; i< 6; i++) {
      dayThreeDiv.innerHTML += '<br>' + ' we will be experiencing : ' + cityData[i].weather[0].description;
      }



      var g = new Date(cityData[21].dt_txt);
      var dayFourDiv = document.getElementById('day4');
      dayFourDiv.innerHTML += ('Month: '+ g.getMonth()+ ' Date: '+ g.getDate());
      for(i = 0; i< 6; i++) {
      dayFourDiv.innerHTML += '<br>' + ' we will be experiencing : ' + cityData[i].weather[0].description;
      }

      var h = new Date(cityData[28].dt_txt);
      var dayFiveDiv = document.getElementById('day5');
      dayFiveDiv.innerHTML += ('Month: '+ h.getMonth()+ ' Date: '+ h.getDate());
      for(i = 0; i< 6; i++) {
      dayFiveDiv.innerHTML += '<br>' + ' we will be experiencing : ' + cityData[i].weather[0].description;
      }






    // var dayTwoDiv = document.getElementById('day2');
    // dayTwoDiv.innerHTML += (cityData[1].dt_txt);

    // var dayThreeDiv = document.getElementById('day3');
    // dayThreeDiv.innerHTML += (cityData[2].dt_txt);

    // var dayFourDiv = document.getElementById('day4');
    // dayFourDiv.innerHTML += (cityData[3].dt_txt);

    // var dayFiveDiv = document.getElementById('day5');
    // dayFiveDiv.innerHTML += (cityData[4].dt_txt);



//
  }