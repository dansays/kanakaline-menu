var gulp 				= require('gulp')
	, gutil 			= require('gulp-util')
	, concat 			= require('gulp-concat')
	, compass			= require('gulp-compass')
	, browserify	= require('gulp-browserify')
;

gulp.task('watch', function() {
	gulp.watch('builds/development/**/*.scss', ['sass']);
	gulp.watch('builds/development/**/scripts/*.js', ['js']);
});

gulp.task('sass', function() {
	gulp.src('builds/development/menu/sass/styles.scss')
		.pipe(compass({
			sass: 'builds/development/menu/sass',
			image: 'builds/development/menu/assets/images',
			style: 'expanded'
		}).on('error', gutil.log))
		.pipe(gulp.dest('builds/development/menu'));
		
	gulp.src('/builds/development/controller/sass/styles.scss')
		.pipe(compass({
			sass: 'builds/development/controller/sass',
			image: 'builds/development/controller/assets/images',
			style: 'expanded'
		}).on('error', gutil.log))
		.pipe(gulp.dest('builds/development/controller'));	
});

gulp.task('js', function() {
	gulp.src('builds/development/menu/scripts/*.js')
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/menu'));

	gulp.src('builds/development/controller/scripts/*.js')
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/controller'));
});

gulp.task('default', ['sass', 'js', 'watch']);