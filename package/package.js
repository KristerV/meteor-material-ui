Package.describe({
  name: 'kristerv:material-ui',
  version: '0.1.0',
  summary: 'material-ui.com with official react',
  git: '',
  documentation: 'README.md'
});

Npm.depends({
    'material-ui': "0.10.1",
    "externalify": "0.1.0",
    "react-tap-event-plugin": "0.1.7",
})

Package.onUse(function(api) {
    var both = ['client', 'server'];
    api.versionsFrom('1.1.0.2');
    api.use('meteorhacks:npm@1.3.0', both);
    api.use(['cosmos:browserify@0.4.0'], 'client');
    api.addFiles(['lib/mui.browserify.options.json', 'mui.browserify.js'], 'client');
    api.export('MUI', 'client');
});
