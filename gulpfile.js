//dependencies
var gulp = require('gulp');
var util = require('gulp-util');
var SystemBuilder = require('systemjs-builder');
var watch = require('gulp-watch');
var ts = require('gulp-typescript');
var tsConfig = require('./tsconfig.json');
var connect = require('gulp-connect');
var rimraf = require('gulp-rimraf');

//Typescript Config;
var tsProject = ts.createProject(tsConfig.compilerOptions);

//copy dependencies to dist folder
gulp.task('copy:deps', function(){
  return gulp.src([
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular2/bundles/http.js',
    'node_modules/angular2/bundles/router.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/systemjs/dist/system.js',
  ]).pipe(gulp.dest('dist/vendor'));
});

//copy html/css/js files
gulp.task('copy:src', function(){
  return gulp.src([
    'src/bootstrap.js',
    'src/index.html',
    'src/**/*.html',
    'src/**/*.css'
  ])
  .pipe(gulp.dest('dist'))
  .pipe(connect.reload());
});

//clean the dist folder
gulp.task('clean', function(cb){
  rimraf('./dist', cb);
})

//compile app typescript files
gulp.task('compile:app', function(){
  return gulp.src('src/**/*.ts')
    .pipe(ts(tsProject))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

//live reload server
gulp.task('server', ['copy:deps', 'copy:src','compile:app'], function() {
  connect.server({
    root: 'dist',
    livereload: true,
    fallback: 'dist/index.html'
  });
});


//default task
gulp.task('default', ['server'], function(){
  gulp.watch(['src/**/*.ts'], ['compile:app']);
  gulp.watch(['src/**/.js', 'src/**/*.html'], ['copy:src']);
});
