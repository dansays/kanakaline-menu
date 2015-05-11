var gulp 				= require('gulp')
	, gutil 			= require('gulp-util')
	, concat 			= require('gulp-concat')
	, compass			= require('gulp-compass')
	, browserify	= require('gulp-browserify')
;

var sources = {
	sass: [
		'builds/development/menu/sass/styles.scss'
	]
};

gulp.task('watch', function() {
	gulp.watch('builds/development/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
	gulp.src('builds/development/menu/sass/styles.scss')
		.pipe(compass({
			sass: 'builds/development/menu/sass',
			image: 'builds/development/menu/assets/images',
			style: 'expanded'
		}).on('error', gutil.log))
		.pipe(gulp.dest('builds/development/menu'));
});

gulp.task('js', function() {

});