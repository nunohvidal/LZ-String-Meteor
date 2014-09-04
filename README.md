LZ-String-Meteor
================

LZ-based compression algorithm for Meteor

## Install

  meteor add nunohvidal:lz-string

## Usage

#### Compressing Strings
```javascript
var lorem_data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet elementum mollis. Aenean tellus justo, venenatis eget efficitur sed, vulputate sed urna. Maecenas volutpat ultrices nisl, vitae vehicula nunc malesuada id. Sed rhoncus, eros quis placerat mollis, urna neque elementum lacus, sagittis feugiat purus nibh vel diam. Maecenas orci leo, egestas eget mauris ac, consectetur ultrices nisl. Sed velit metus, rutrum eget libero at, ornare commodo magna. Sed in nisi nibh. Sed lacinia id metus nec euismod. Maecenas non felis maximus, pellentesque quam nec, commodo nibh.Nunc mattis dapibus nunc. Pellentesque facilisis tincidunt massa, in venenatis tortor pellentesque et. Ut suscipit dapibus metus, a viverra ante lobortis sed. Donec a aliquet arcu. Aliquam a convallis diam. Duis vel nunc vulputate, euismod mauris nec, rutrum odio. Fusce ut convallis dui, quis sodales nibh. Sed condimentum fermentum dolor sit amet rhoncus. Cras at vestibulum ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Duis eu cursus tortor. Vivamus magna ex, tincidunt nec euismod id, congue at ipsum. Duis eget viverra ante. Fusce tortor libero, tristique a posuere et, tincidunt id tortor. Nunc sit amet justo eros. Suspendisse convallis orci tortor. In consectetur iaculis posuere.Integer pulvinar justo nec posuere pretium. Aenean commodo nisi eu lectus aliquet dignissim. Nunc iaculis tempor mattis. Quisque a iaculis dui. Suspendisse urna nisl, accumsan fermentum commodo posuere, convallis at elit. Etiam vestibulum malesuada tortor varius dapibus. Curabitur ut massa purus. Donec et sollicitudin leo, eu luctus diam. Nam sollicitudin erat volutpat iaculis cursus. Curabitur justo justo, ultrices ut dignissim vel, luctus eget purus. Nulla aliquet suscipit augue quis efficitur. Phasellus velit est, aliquam quis orci sed, mollis venenatis diam. Donec id ligula vehicula tortor gravida consequat vitae eget dui. Nullam laoreet, elit ac fringilla bibendum, lectus ex auctor metus, vel lacinia quam lectus a augue. Quisque magna nunc, lacinia a efficitur quis, ultrices sit amet turpis.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ac congue elit. Vivamus dapibus auctor justo. Mauris quis risus vitae ex sollicitudin porttitor id ac metus. Mauris tristique auctor sem, ac tempus tellus viverra sed. Nulla sit amet lorem faucibus, venenatis tortor tristique, tincidunt sem. Sed at commodo massa, et maximus leo. Sed consequat diam nisi, at varius turpis facilisis a. Mauris at feugiat quam. Nam at nulla lacus. Pellentesque euismod quis magna vel pulvinar. Integer erat enim, feugiat in tellus faucibus, placerat interdum elit. Nam at mauris nibh. Ut dolor justo, luctus eu velit nec, bibendum tincidunt dolor.Aliquam erat volutpat. Vestibulum gravida dui nec est congue, id ultricies tellus egestas. Integer posuere vitae velit quis malesuada. Quisque laoreet, arcu id bibendum gravida, ante turpis dictum ipsum, a viverra est diam eu nunc. Ut at sollicitudin dui. Vivamus volutpat diam ut magna pellentesque, vitae placerat lacus pharetra. Mauris ac arcu ac sapien aliquet blandit eu eu nunc. Proin varius metus nisi, sit amet porta sem imperdiet in. Proin id felis vel metus consectetur placerat. Curabitur ac mattis libero. Sed tempus ex vitae tortor ultricies molestie. Sed posuere dignissim libero in placerat.Sed feugiat mauris id erat efficitur consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Integer sed laoreet tortor, a placerat sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eget mauris eu mi sollicitudin accumsan. Cras efficitur volutpat nibh sit amet placerat. Curabitur eu iaculis nulla, et consequat dolor. Vestibulum ultricies nibh auctor sodales tincidunt. Etiam scelerisque bibendum congue. Nunc nec lorem in mi eleifend vehicula. Pellentesque molestie velit malesuada felis posuere, vitae efficitur leo placerat. Aliquam in fringilla enim. Ut sed elementum lacus, non laoreet nisi. Etiam ac erat condimentum, rutrum justo nec, laoreet nisi. Aliquam luctus orci ac massa tincidunt vehicula.Cras velit nisi, suscipit eu ornare quis, ullamcorper ac risus. Nullam sit amet gravida turpis. Maecenas iaculis suscipit leo, a vestibulum felis interdum vel. Ut commodo velit a tincidunt porta. In nec feugiat libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam sem felis, eget tempus est sodales a.Maecenas nulla tellus, facilisis vel orci id, iaculis imperdiet mauris. Aliquam non nunc rhoncus, pretium ante at, congue dui. Nam quis risus a quam ullamcorper porta. Vivamus efficitur elit fermentum commodo elementum. Aenean quis rhoncus enim, a condimentum metus. Proin et odio non nisl suscipit iaculis laoreet sed massa. Donec eget eros vel justo rutrum dictum id sit amet nisi. Aliquam erat volutpat. Donec eleifend ipsum vel dolor tincidunt finibus. Nunc rhoncus nisi nec lorem facilisis, vel tincidunt neque pretium. Mauris accumsan ex eget magna mattis, quis suscipit massa accumsan.Fusce lorem metus, eleifend vitae odio in, venenatis tempus felis. Sed molestie justo at tempus lobortis. Sed vitae diam orci. Suspendisse tincidunt gravida pharetra. Vestibulum nisi nulla, lacinia non erat in, rhoncus congue tortor. Suspendisse mattis est viverra lobortis rutrum. Sed pulvinar tempor mi, maximus convallis lacus pharetra in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam ac sem placerat, mattis ligula non, pharetra quam.Vestibulum congue tristique dui sit amet placerat. Aliquam a vulputate elit. Nullam vitae magna felis. Vestibulum commodo laoreet blandit. Nulla faucibus, sem quis maximus tristique, velit lectus condimentum magna, eget commodo leo erat vitae mi. Aenean urna eros, consequat eget convallis vel, sodales eget lorem. Nullam dignissim nunc purus, vel lobortis lectus mollis vitae. Vivamus venenatis, turpis ac fringilla tempus, lorem dui tristique dolor, maximus egestas tellus nulla id odio. Nunc quis odio tortor.Vestibulum tristique mollis nisl, ut iaculis nisl. Mauris luctus risus sed turpis volutpat hendrerit. Duis ultrices enim quis dolor lacinia consequat. Praesent viverra efficitur ex, vel tristique ligula fringilla in. Pellentesque posuere et ligula et euismod. Maecenas vel fermentum ex, sit amet consequat arcu. Pellentesque sed sem ut sem lobortis porttitor. Maecenas in purus iaculis, consequat nibh et, molestie urna.Nam pretium ligula vitae velit tincidunt egestas. Sed aliquam magna sit amet metus porta posuere nec ut ante. Quisque vulputate odio et maximus elementum. Proin blandit lectus nec elit malesuada faucibus. Aliquam vulputate dapibus sollicitudin. Quisque id tempor odio. Aliquam sagittis mollis porttitor.Maecenas ac lacus in justo maximus porttitor quis ac tellus. Curabitur semper sagittis erat a vulputate. Cras rhoncus nisi felis, vel blandit urna tempus vitae. Fusce semper posuere odio. Proin eleifend viverra mauris quis suscipit. Donec consequat consectetur justo, a malesuada arcu dapibus nec. Cras finibus arcu ante, quis laoreet ipsum venenatis sed. Integer feugiat felis quis dui commodo varius quis a mauris. Vestibulum hendrerit maximus neque id condimentum. Nulla facilisi. Sed egestas rutrum mauris sed dictum. Mauris elementum aliquam justo, a consectetur eros sollicitudin eu. Aenean laoreet ultrices felis sit amet rhoncus. Sed aliquet vestibulum tortor, quis gravida mi tincidunt non.Donec eu hendrerit justo. Vestibulum non sapien sed elit dignissim faucibus eu aliquam neque. Ut sagittis sit amet risus quis malesuada. Praesent pharetra, orci nec faucibus ornare, massa velit scelerisque est, in porttitor mauris odio nec nisl. Aenean ut nibh et diam tincidunt consectetur. Donec vitae laoreet justo, sit amet sollicitudin nibh. Pellentesque efficitur consequat nunc eget fermentum. Aenean id commodo enim, a porta nunc.Cras at mauris quis orci cursus imperdiet. Donec quis est nisi. Fusce commodo nulla porta odio vulputate, vitae feugiat ipsum porttitor. Aliquam finibus elit id nisi dignissim hendrerit. Nullam pharetra venenatis nisi quis blandit. Duis pretium massa vel magna pretium, ut tincidunt mauris finibus. Nulla facilisi. Nam facilisis pulvinar porttitor. Praesent auctor at lorem blandit molestie. Phasellus libero neque, lobortis sed dignissim ut, auctor et risus.Cras et fermentum risus. Aliquam scelerisque maximus tincidunt. Vestibulum consectetur ut dolor sit amet dapibus. Phasellus pulvinar massa nec tincidunt imperdiet. Curabitur eleifend, justo vitae pulvinar consectetur, augue odio lobortis sapien, quis aliquam risus odio ut turpis. Quisque varius sem vitae luctus rhoncus. Nam nec enim quam. Fusce sed urna enim.Suspendisse pulvinar odio tortor, eu euismod sapien tincidunt vel. Quisque id nulla ipsum. Nullam semper placerat erat vitae hendrerit. Donec tortor orci, semper sed ante ac, sagittis vulputate arcu. Nullam fringilla quis neque sit amet pellentesque. Suspendisse vitae ultricies purus. Nullam id auctor felis, elementum tempor tellus. Quisque porta imperdiet egestas. In vel justo auctor, sagittis metus ac, convallis ante. Morbi ut efficitur mauris. In hac habitasse platea dictumst. Vestibulum turpis lectus, ullamcorper eu bibendum sed, convallis nec velit. Mauris non semper quam, sed efficitur lectus. Vestibulum lectus orci, accumsan at dolor at, congue fringilla urna. Proin facilisis diam odio, et dignissim tortor ultricies quis. Etiam mollis volutpat lobortis.Cras vitae libero at arcu dapibus tincidunt id id risus. Praesent dolor tellus, dapibus ornare tortor eget, facilisis ultricies ante. Pellentesque tincidunt placerat mi, id facilisis urna dictum eu. Duis vehicula tellus ac scelerisque tempus. Pellentesque et consequat enim. Integer pretium aliquet arcu vitae tristique. Nullam leo tortor, suscipit sit amet leo ac, aliquet tempor lacus. Vestibulum semper venenatis bibendum. Nulla mauris est, efficitur nec pulvinar sit amet, lacinia quis justo. Morbi feugiat sapien sed convallis lobortis. Etiam efficitur mattis odio, sed vehicula turpis aliquam at. Ut in rutrum elit. Duis venenatis volutpat nunc.Cras a dolor tincidunt, efficitur ipsum nec, sodales orci. Donec consequat turpis in lacus volutpat elementum. Maecenas quis sem erat. Ut eget sollicitudin orci. Suspendisse potenti. Curabitur placerat enim a dui mattis ultricies. Phasellus non vestibulum neque. Pellentesque vitae erat suscipit enim hendrerit tincidunt. Vestibulum eu metus et libero consequat fringilla at eu tortor. Donec pulvinar in odio sed varius. In facilisis consequat feugiat. Nam tincidunt faucibus lectus, quis volutpat magna consequat convallis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla luctus nulla non nisi malesuada luctus. Nam commodo magna vitae turpis fringilla, ac vehicula neque ultricies. Nunc sagittis, eros ac imperdiet tempor, risus quam suscipit libero, non auctor sapien eros eget odio.Nam sed suscipit velit. Nam quis imperdiet nibh, eget consectetur elit. Vivamus ultrices iaculis eros et varius. Suspendisse quis tellus et dolor tincidunt tempor. Nulla nec placerat magna. Aliquam et magna dictum, fermentum nisi sit amet, pellentesque nisi. Nunc quis sem eu leo sollicitudin placerat. Praesent suscipit odio et facilisis viverra.Integer dignissim eget nisi vitae facilisis. Pellentesque quis elit in dolor aliquet vestibulum vel ut purus. Sed in dolor felis. Nunc iaculis ante eget urna posuere laoreet. Phasellus id vestibulum ligula. Integer a commodo est. Aliquam fringilla, diam quis porta dignissim, turpis ipsum placerat tellus, nec cursus nisi nulla sed odio. Proin pulvinar, magna sed finibus dictum, orci ligula egestas purus, ut consequat leo neque eget dui.Suspendisse potenti. Nam malesuada est ut convallis pharetra. Sed et enim vehicula, dignissim velit ut, gravida ante. Proin a consequat quam, sed volutpat tellus. Morbi urna justo, condimentum non vulputate lobortis, posuere sed mauris. Suspendisse potenti. Quisque pellentesque feugiat enim, non consectetur enim condimentum quis. Sed in magna ornare, finibus mauris et, sollicitudin tortor. Etiam risus elit, feugiat vel velit ac, blandit convallis justo. Nullam tellus eros, elementum vel augue eget, scelerisque tristique massa. Morbi congue varius quam ut lacinia. Donec finibus venenatis tellus. Vestibulum eget diam orci.Nam eu pharetra mauris. Praesent at arcu diam. Nullam lacus purus, pharetra ut lacus eu, sodales fringilla nisl. Nam tincidunt dolor est, vel malesuada justo feugiat ut. Quisque sit amet ipsum a sapien gravida tristique nec et sapien. Aenean id cursus tellus. Mauris imperdiet nulla at velit efficitur, pellentesque posuere sem blandit. Sed laoreet metus eu pulvinar ullamcorper. Pellentesque sagittis bibendum pharetra. Integer tempus auctor arcu, nec condimentum turpis porta nec. Mauris suscipit eget magna sit amet posuere. Etiam ac fringilla orci.Aenean condimentum, lacus eget commodo dictum, nibh diam ullamcorper felis, id ultrices dolor purus in nisl. Vivamus egestas diam non lectus posuere, ut fermentum dui congue. Praesent interdum lacus elit, et pretium augue accumsan sed. Vivamus in urna in nisl egestas tincidunt a nec quam. Praesent scelerisque elit a eros ullamcorper, pellentesque auctor ante porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut neque tempus, imperdiet sem id, ornare lectus. Fusce blandit malesuada tristique.';

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
  },
  {
    "_id": "5408556e97544acbf6b3e199",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "name": {      "first": "Payne",      "last": "Ramos"    },
    "about": "Ea voluptate esse mollit cillum esse excepteur minim consequat esse. In irure non reprehenderit est ut et. Laborum culpa dolore nulla et officia est et ut. Anim do sint dolore voluptate eiusmod dolor do ipsum labore elit. Sint aliquip occaecat id aliqua ipsum dolor in sunt. Dolor veniam consequat eu Lorem consectetur voluptate veniam aute aliquip fugiat ullamco ad duis. Minim pariatur in fugiat amet officia et id velit laborum fugiat cupidatat pariatur ut voluptate.\r\nDeserunt esse eu est ex laboris sunt eu. Ut quis duis tempor elit magna id consectetur velit. Enim elit ullamco labore ea labore veniam. Nisi laboris dolore ipsum minim non nulla.\r\nCupidatat reprehenderit cillum ad quis enim sint non officia id est. Eiusmod ipsum ea tempor consequat dolore reprehenderit anim. Occaecat adipisicing Lorem nisi id ut qui deserunt ea pariatur tempor amet cillum tempor nostrud.\r\nDo ea ad do irure sint. Est mollit aliqua incididunt id. Proident proident voluptate sunt adipisicing cillum occaecat laborum minim. Mollit dolor voluptate irure et eu dolor. Amet officia ea dolor exercitation Lorem. Sint officia nostrud esse ea culpa adipisicing voluptate aliquip irure veniam nisi occaecat.\r\nCommodo velit duis reprehenderit laborum mollit dolore non veniam. Nisi dolore laboris exercitation duis et voluptate mollit occaecat. Officia minim nostrud fugiat do pariatur irure duis velit quis elit tempor proident ullamco. Eu consectetur adipisicing dolor officia sunt. Nostrud elit non et fugiat anim. Incididunt cupidatat dolor non aute officia elit proident sint et tempor laboris voluptate proident quis.\r\n"
  },
  {
    "_id": "5408556e6c85c0b0a8465db8",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "name": {      "first": "Ines",      "last": "Noble"    },
    "about": "Duis eu Lorem aliquip aliquip sit consequat eu occaecat culpa id dolor veniam ullamco ex. Dolor fugiat nostrud ex veniam qui mollit veniam Lorem incididunt nostrud et consectetur qui deserunt. Magna excepteur id elit sunt ad ea ut voluptate consectetur dolor laborum.\r\nLabore deserunt pariatur officia commodo nulla est nisi in ex tempor sint esse. Ullamco minim tempor quis commodo laborum voluptate mollit minim nostrud culpa est. Sunt ut quis sint dolore eiusmod et occaecat esse incididunt veniam deserunt laboris sit. Sint sit excepteur adipisicing nostrud consectetur cupidatat minim cillum anim.\r\nEx elit sint consequat ea laboris ex ipsum sunt ullamco velit tempor duis proident dolor. Exercitation do sunt occaecat ut. In ex ea officia ipsum. Deserunt ipsum adipisicing irure nisi ullamco exercitation eu. Irure nulla ex excepteur nostrud eu incididunt consequat ea in ipsum.\r\nIn anim nulla culpa exercitation sunt dolor velit duis. Minim anim sint nisi eiusmod commodo anim minim. Irure eiusmod magna labore aliqua duis quis nostrud reprehenderit anim ea anim. Mollit do tempor anim anim laboris eu ipsum Lorem sunt culpa id dolor. Exercitation quis occaecat ullamco do consectetur incididunt fugiat dolore ea amet eiusmod reprehenderit.\r\nDo qui tempor fugiat nulla. Duis elit aliqua elit tempor esse. Et adipisicing exercitation excepteur mollit aute id velit deserunt veniam elit. Aliqua ipsum sunt amet cupidatat ad excepteur enim pariatur eiusmod minim magna ipsum. Ex minim in esse qui laboris dolor sint laborum aute ea magna tempor excepteur voluptate. Ex id velit magna quis tempor cupidatat occaecat elit consectetur eiusmod laborum. Aliqua excepteur ex do ut ipsum sunt ad reprehenderit tempor sint et aliquip voluptate et.\r\n"
  },
  {
    "_id": "5408556e20898c1e3bd720aa",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "name": {      "first": "Dennis",      "last": "Briggs"    },
    "about": "Laborum aute voluptate eiusmod ipsum id et anim aute qui laboris id adipisicing incididunt. Et dolor commodo sunt ullamco nisi culpa mollit tempor. Minim cupidatat exercitation nisi laboris excepteur commodo eiusmod Lorem. Sit sunt ad nostrud sint proident velit mollit in ut laborum incididunt deserunt sit.\r\nDolor aute Lorem reprehenderit esse exercitation labore velit. Aute commodo non mollit velit laborum esse. Labore ut cillum esse enim deserunt culpa adipisicing eiusmod sit exercitation non. Tempor est consectetur do eiusmod. Quis nisi adipisicing cillum eiusmod est ex quis laboris labore.\r\nNostrud cillum consectetur officia commodo ut labore sit ullamco proident. Magna cupidatat mollit eiusmod minim non velit. Tempor laborum enim adipisicing in. In irure ea elit deserunt Lorem nisi nisi aute eu est. Ad deserunt mollit exercitation est cillum velit ex irure. Eiusmod amet id duis exercitation labore exercitation consequat non quis.\r\nUt Lorem id minim mollit ex. Adipisicing cillum occaecat adipisicing excepteur sit quis. Laborum eiusmod incididunt labore dolore quis sit enim consequat ea. Velit qui quis nostrud nulla quis aute consectetur quis sunt. Laborum occaecat laborum deserunt ad nostrud ad ut nostrud ad eiusmod fugiat. Anim proident nostrud sit enim consectetur consectetur in.\r\nNulla aliqua laboris amet officia enim occaecat id nostrud. Ex nisi in exercitation tempor reprehenderit aliqua proident elit. Ad ullamco ipsum nulla in fugiat exercitation deserunt Lorem ad amet nulla laboris irure voluptate. Ad anim culpa do irure aliqua cillum elit commodo deserunt eu. Nulla ad sint anim mollit proident ea ipsum eu.\r\n"
  },
  {
    "_id": "5408556e6e1ce9b5626a3856",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "name": {      "first": "Judith",      "last": "Wooten"    },
    "about": "Adipisicing dolore ad qui id aute enim anim sit consectetur voluptate quis commodo ea. Laborum ipsum exercitation eiusmod proident sit sit aliqua minim id culpa exercitation. Est id aute velit officia consequat ipsum ex ullamco. Cupidatat velit nisi enim consequat Lorem minim qui eiusmod irure magna non duis amet ut. Labore officia ut fugiat esse Lorem magna aute sint ullamco veniam esse. Deserunt do occaecat non qui do culpa commodo magna.\r\nIn eu magna occaecat nulla. Reprehenderit reprehenderit officia elit ut ullamco anim elit consectetur in quis. Et cupidatat enim laboris ipsum incididunt.\r\nLaborum nisi deserunt elit ex exercitation anim commodo. Exercitation incididunt commodo nisi est sint ipsum nisi commodo. Cillum duis culpa do consectetur. Occaecat occaecat quis excepteur eu aliqua ut magna id. Cupidatat incididunt dolore quis eiusmod excepteur dolor pariatur nisi sint occaecat nulla. Consequat deserunt ex duis anim consequat amet sit Lorem exercitation. Aliquip Lorem nisi est id enim.\r\nCulpa ut incididunt sit do ipsum esse non cupidatat excepteur ad fugiat. Magna mollit laborum do sint nostrud tempor proident aliquip quis exercitation amet velit elit. Do incididunt deserunt nulla laborum ea pariatur dolore in consectetur ex ex aliquip sint occaecat.\r\nId Lorem minim duis reprehenderit aliqua ad irure ex. Ex dolore labore cupidatat excepteur ad minim do aliquip eiusmod adipisicing elit labore nisi aute. Lorem anim veniam deserunt cupidatat mollit nostrud irure laboris. Incididunt pariatur id duis occaecat excepteur incididunt. Qui consequat excepteur irure amet cillum dolor. Eu laborum excepteur voluptate ut aute consectetur proident consectetur ut labore mollit.\r\n"
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
