var gulp = require('gulp');
var util = require('gulp-util');
var SystemBuilder = require('systemjs-builder');
var watch = require('gulp-watch');
var ts = require('gulp-typescript');
var tsConfig = require('./tsconfig.json');

function getBuilder(configPath){
	var builder = new SystemBuilder();
	return builder.loadConfig(configPath)
	  .then(function(){
			return builder;
		});
}

var tsProject = ts.createProject(tsConfig.compilerOptions);

gulp.task('copy', function(){
	return gulp.src([
		'node_modules/angular2/bundles/angular2-polyfills.js',
		'node_modules/angular2/bundles/angular2.dev.js',
		'node_modules/angular2/bundles/http.js',
		'node_modules/angular2/bundles/router.js',
		'node_modules/rxjs/bundles/Rx.js',
		'node_modules/systemjs/dist/system.js',
		'src/bootstrap.js',
		'src/index.html',
		'src/**/*.html',
		'src/**/*.css'
	]).pipe(gulp.dest('dist'));
});

gulp.task('compile:app', function(){
	return gulp.src('src/**/*.ts')
	  .pipe(ts(tsProject))
		.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['compile:dependencies', 'copy'], function(){
	gulp.watch(['src/**/*.ts'], ['compile:app']);
	gulp.watch(['src/**/.js', 'src/index.html'], ['copy']);
})