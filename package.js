Package.describe({
  name: 'ffxsam:xregexp',
  version: '3.0.0',
  // Brief, one-line summary of the package.
  summary: 'Augmented and extensible JavaScript regex',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ffxsam/meteor-xregexp',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.addFiles('xregexp/xregexp-all.js');
  api.export('XRegExp');
});
