/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                          'static/scripts/js',
    'rxjs':                         'static/scripts/vendor/ang/rxjs',
    'angular2':                     'static/scripts/vendor/ang/angular2',
    'symbol-observable':            'static/scripts/vendor/ang/symbol-observable'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                          { main: 'main.js',  defaultExtension: 'js', format: 'register' },
    'rxjs':                         { defaultExtension: 'js', format: 'cjs' },
    'angular2':                     { defaultExtension: 'js', format: 'cjs' },
    'symbol-observable':            { defaultExtension: 'js', main: 'index.js' }
  };

  var config = {
    map:                            map,
    packages:                       packages,
    defaultJSExtension:             true
  };

  System.config(config);

})(this);

System.import('app/main').catch(function (err) {
    console.error(err);
});
