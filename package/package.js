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
    api.versionsFrom('1.1.0.2');
    api.use(['react@0.1.3', 'cosmos:browserify@0.5.0'], 'client');
    api.addFiles(['mui.browserify.options.json', 'mui.browserify.js'], 'client');
    api.export(['MUI', 'injectTapEventPlugin'], 'client');
});
