LZ-String-Meteor
================

LZ-based compression algorithm for Meteor

## Install

  meteor add nunohvidal:lz-string

## Usage

```javascript
/***** Compressing Strings *****/

var lorem_data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius est hendrerit nisl sollicitudin hendrerit. Nunc gravida lobortis mauris, ut dignissim tellus lacinia eu. Vivamus metus urna, fringilla blandit iaculis sit amet, hendrerit posuere magna. Duis ultricies ex nunc, in lobortis nibh convallis sed. Nam sed venenatis neque. Nullam id interdum urna, eu dapibus est. Sed et justo eget lectus sollicitudin vehicula. Nullam sed lorem eget dui vestibulum malesuada. Maecenas suscipit eget nulla ut pretium. Curabitur eu dictum elit. Nam rhoncus ac est et pulvinar. Maecenas ut ipsum vel felis hendrerit ultrices id a ipsum.';

var compressed_lorem = LZString.compress(lorem_data);
// ... here do what ever you want with the compressed data - send to client/server, etc...
console.log('Source : ' + lorem_data.length + ' | Compressed : ' + compressed_lorem.length);


/***** Uncompressing Strings *****/

var uncompressed_lorem = LZString.decompress(compressed_lorem)

console.log(uncompressed_lorem);


/****** Compressing Array or JSON - first need to use JSON.stringify *****/

var api_url = 'http://api.openweathermap.org/data/2.5/history/city?id=2885679&type=hour&start=1369000000&end=1370000000'

function compressOnSuccess(weather_json) { 
  var weather_str = JSON.stringify(weather_json);
  var compressed_weather = LZString.compress(weather_str);
  // ... here do what ever you want with the compressed data - send to client/server, etc...
  console.log('Source : ' + weather_str.length + ' | Compressed : ' + compressed_weather.length);
};

$.get(api_url, compressOnSuccess);

// Output : Source : 42725 | Compressed : 4578

```

## More info

### Home page
Home page for this program with examples, documentation and a live demo: http://pieroxy.net/blog/pages/lz-string/index.html

### Source lz-string 
Original git repository: https://github.com/pieroxy/lz-string/
