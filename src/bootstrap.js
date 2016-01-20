//es5 file to bootstrap our application
System.config({
  packages: {
    app: {
      defaultExtension: 'js'
    }
  }
});

System.import('./app.js').catch(function(err){
  console.error(err);
});
