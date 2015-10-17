var path    = require('path');

var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');
var rimraf  = require('gulp-rimraf');
var sass    = require('gulp-sass');
var webpack = require('webpack-stream');

var webpackConfigPath = './webpack.config.js';

gulp.task('default', ['clean', 'nodemon:app', 'watch:sass', 'build-cli-dev']);

gulp.task('clean', ['clean:js', 'clean:css']);

gulp.task('clean:js', function(cb) {
  return gulp.src('build/js/**/*', { read: false })
        .pipe(rimraf());
});

gulp.task('clean:css', function(cb) {
  return gulp.src('build/css/**/*', { read: false })
        .pipe(rimraf());
});

gulp.task('nodemon:app', ['clean:js'], function () {
  return nodemon({
    script: './index.js',
    ignore: ['build/**', 'node_modules/**'],
    ext: 'js',
    env: {
      NODE_PATH: __dirname
    }
  });
});

gulp.task('webpack:dev', ['clean:js'], function() {
  var webpackConfig = require(webpackConfigPath);

  return gulp.src(webpackConfig.entry)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('build/js'));
});

gulp.task('build-cli-dev', ['webpack:dev'], function() {
  return gulp.watch([
    './app/actions/**/*.js',
    './app/components/**/*.js',
    './app/constants/**/*.js',
    './app/stores/**/*.js'
  ], ['webpack:dev']);
});

gulp.task('sass', ['clean:css'], function() {
  return gulp.src('./app/stylesheets/style.scss')
      .pipe(sass({
        includePaths: [path.resolve('./node_modules')]
      }).on('error', sass.logError))
      .pipe(gulp.dest('./build/css'))
});

gulp.task('watch:sass', ['sass'], function() {
  return gulp.watch('./app/stylesheets/**/*.scss', ['sass']);
});
