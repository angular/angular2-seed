var gulp = require('gulp');
var util = require('gulp-util');
var SystemBuilder = require('systemjs-builder');
var watch = require('gulp-watch');

function getBuilder(configPath){
	var builder = new SystemBuilder();
	return builder.loadConfig(configPath)
	  .then(function(){
			return builder;
		});
}

gulp.task('copy', function(){
	return gulp.src([
		'node_modules/angular2/bundles/angular2-polyfills.js',
		'node_modules/systemjs/dist/system.js',
		'src/bootstrap.js',
		'src/index.html',
		'src/**/*.html',
		'src/**/*.css'
	]).pipe(gulp.dest('dist'));
});

gulp.task('compile:dependencies', function(){
	return getBuilder('./system.config.js')
	  .then(function(builder){
			return builder.bundle('app - [app/**/*]', 'dist/vendor.js', { minify: util.env.production });
		});
});

gulp.task('compile:app', function(){
	return getBuilder('./system.config.js')
	  .then(function(builder){
			return builder.bundle('app - dist/vendor.js', 'dist/app.js', { minify: util.env.production });
		});
});

gulp.task('default', ['compile:dependencies'], function(){
	gulp.watch(['src/**/*.ts'], ['compile:app']);
	gulp.watch(['src/**/.js', 'src/index.html'], ['copy']);
})