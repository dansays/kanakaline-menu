var gulp 				= require('gulp')
	, gutil 			= require('gulp-util')
	, concat 			= require('gulp-concat')
	, compass			= require('gulp-compass')
	, browserify	= require('gulp-browserify')
;

gulp.task('watch', function() {
	gulp.watch('app/**/*.scss', ['sass']);
	gulp.watch('app/**/scripts/*.js', ['js']);
});

var apps = ['menu', 'controller'];

gulp.task('sass', function() {
	apps.forEach(function(app) {
		gulp.src('app/' + app + '/sass/styles.scss')
			.pipe(compass({
				sass: 'app/' + app + '/sass',
				image: 'app/' + app + '/assets/images',
				style: 'expanded'
			}).on('error', gutil.log))
			.pipe(gulp.dest('app/' + app));
	});
});

gulp.task('js', function() {
	apps.forEach(function(app) {
		gulp.src('app/' + app + '/scripts/*.js')
			.pipe(concat('script.js'))
			.pipe(browserify())
			.pipe(gulp.dest('app/' + app));
	});
});

gulp.task('default', ['sass', 'js', 'watch']);