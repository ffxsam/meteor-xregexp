Package.describe({
  name: 'ffxsam:xregexp',
  version: '3.0.1',
  summary: 'Augmented and extensible JavaScript regex',
  git: 'https://github.com/ffxsam/meteor-xregexp',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.addFiles('xregexp/xregexp-all.js');
  api.export('XRegExp');
});
