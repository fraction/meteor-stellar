Package.describe({
  summary: 'Stellar.js - Parallax scrolling made easy'
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files(['stellar/jquery.stellar.js'], 'client');
});