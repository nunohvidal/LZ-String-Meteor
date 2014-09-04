LZ-String-Meteor
================

LZ-based compression algorithm for Meteor

## Install

  meteor add nunohvidal:lz-string

## Usage

#### Compressing Strings
```javascript
var lorem_data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet elementum mollis. Aenean tellus justo, venenatis eget efficitur sed, vulputate sed urna. Maecenas volutpat ultrices nisl, vitae vehicula nunc malesuada id.';

var compressed_lorem = LZString.compress(lorem_data);
// ... here do what ever you want with the compressed data - send to client/server, etc...
console.log('Source : ' + lorem_data.length + ' | Compressed : ' + compressed_lorem.length);
// Output - Source : 13525 | Compressed : 2776
```

#### Decompressing Strings
```javascript
var uncompressed_lorem = LZString.decompress(compressed_lorem);

console.log(uncompressed_lorem);
```

#### Compressing Arrays or JSON - use JSON.stringify() before LZString.compress()
```javascript
var json_data = [
  {
    "_id": "5408556ea56684da445c6298",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "name": {      "first": "Ray",      "last": "Moon"    },
    "about": "Pariatur sint voluptate commodo qui anim nostrud tempor deserunt in consequat cupidatat veniam irure proident. Excepteur ut consequat eiusmod exercitation. Fugiat occaecat labore aliquip nulla nostrud cillum magna magna.\r\nAmet esse aliquip veniam non nostrud et minim. Ad exercitation do amet aliqua ex ad ad cillum nisi et officia non non. Magna qui aliquip nisi minim sunt labore ipsum consectetur minim ut veniam. Aliqua elit cillum labore nulla exercitation ex do commodo dolore tempor excepteur exercitation anim ad. Lorem aliquip dolor culpa fugiat. Voluptate culpa mollit eu nulla. Amet nostrud commodo incididunt eu Lorem fugiat labore sunt nostrud.\r\nDo dolor anim ipsum laboris veniam deserunt sunt ut aliquip ullamco veniam. Pariatur reprehenderit occaecat commodo non. Ad adipisicing mollit aute in. Cillum esse sunt do pariatur occaecat nostrud do nisi occaecat non adipisicing veniam duis officia. Anim et quis laborum sunt ad.\r\nId consectetur quis ad pariatur ut. Incididunt consequat do sit Lorem proident ullamco cupidatat elit tempor magna adipisicing magna est. Adipisicing et minim esse deserunt esse consequat qui officia. Laborum minim consectetur ipsum est labore nulla nisi sit. Ipsum nostrud in ex aliquip enim consectetur eu aliquip labore amet eiusmod mollit et.\r\nSunt ea reprehenderit nulla aliquip nostrud amet Lorem nostrud dolore sit cupidatat cillum elit. Quis aute mollit consequat voluptate sunt enim dolor proident ea id labore. Officia cupidatat in laboris eu incididunt ipsum ea ullamco culpa sunt consequat proident minim.\r\n"
  },
  {
    "_id": "5408556ed9b3c8664c61a901",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "name": {      "first": "Kelly",      "last": "Holt"    },
    "about": "Ut occaecat dolor voluptate anim consequat sunt id ut ipsum aute Lorem. Anim Lorem cupidatat ea minim eiusmod anim sit irure mollit. Qui exercitation laborum et commodo in.\r\nIncididunt voluptate sunt enim enim ut proident tempor voluptate officia mollit esse laboris. Est ea est ea velit dolore qui culpa. Consequat do id amet nostrud minim consectetur cillum aute exercitation do. Fugiat dolor quis duis dolor nostrud adipisicing eu proident pariatur eiusmod sint.\r\nLorem reprehenderit fugiat magna nisi velit esse exercitation quis sint fugiat veniam id tempor. Non velit reprehenderit irure non. Est sit commodo incididunt duis sint adipisicing sunt veniam adipisicing quis dolor proident consequat labore. Officia magna consectetur ipsum magna dolor. Ipsum sunt incididunt sint non. Enim voluptate officia deserunt labore id ut. Commodo consectetur proident cupidatat aliqua labore eiusmod dolor voluptate dolore voluptate consectetur irure.\r\nLorem duis consequat pariatur in. Sunt in do nostrud voluptate non nostrud esse sit magna incididunt sint excepteur velit. Voluptate commodo aute excepteur mollit velit velit eiusmod quis id. Magna aliqua veniam eu minim Lorem sunt incididunt nisi. In qui aute nisi dolore elit commodo pariatur nostrud mollit dolor. Non pariatur proident nostrud culpa eu id ullamco elit excepteur exercitation ex nostrud in.\r\nLaboris aliqua et eiusmod ut non labore occaecat. Commodo consectetur occaecat dolor adipisicing nulla exercitation voluptate nisi amet elit. Aliqua culpa tempor ipsum nostrud aliqua elit exercitation magna reprehenderit consequat veniam. Cillum eiusmod incididunt est qui aliquip commodo dolor consectetur cupidatat velit. Et amet ad eu duis nisi fugiat deserunt do enim ea commodo laboris.\r\n"
  }
];

var stringified = JSON.stringify(json_data);
var compressed_object = LZString.compress(stringified);

// ... here do what ever you want with the compressed data - send to client/server, etc...
console.log('Source : ' + stringified.length + ' | Compressed : ' + compressed_object.length);

// Output - Source : 10871 | Compressed : 2005
```

#### Decompressing back to Array and/or JSON - use JSON.parse() after LZString.decompress()
```javascript
var decompressed_object = LZString.decompress(compressed_object);

var resulting_object = JSON.parse(decompressed_object);
```

## More info

### Home page
Home page for this program with examples, documentation and a live demo: http://pieroxy.net/blog/pages/lz-string/index.html

### Source lz-string 
Original git repository: https://github.com/pieroxy/lz-string/
