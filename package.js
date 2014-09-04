Package.describe({
  summary: "LZ-based compression algorithm for Meteor",
  version: "1.3.3",
  git: "https://github.com/nunohvidal/LZ-String-Meteor.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files(['lz-string.js'], ['server', 'client']);
  if(api.export)
    api.export('LZString');
});
