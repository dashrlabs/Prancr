import gulp from 'gulp';

import babel from 'gulp-babel';
import browserify from 'gulp-browserify';
import browserSyncController from 'browser-sync';
import concat from 'gulp-concat';
import less from 'gulp-less';

const browserSync = browserSyncController.create();

const files = {
  html: './src/**/*.html',
  less: './src/less/**/*.less',
  rawJS: './src/**/*.js',
};

gulp.task('transpile', () =>
  gulp.src(files.rawJS)
    .pipe(babel())
    .pipe(gulp.dest('./build'))
);

gulp.task('browserify', ['transpile'], () =>
  gulp.src('./build/index.js')
    .pipe(browserify())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream())
);

gulp.task('html', () =>
  gulp.src(files.html)
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream())
);

gulp.task('less', () =>
  gulp.src(files.less)
    .pipe(less())
    .pipe(concat('widget.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream())
);

gulp.task('uikit-css', () =>
  gulp.src('./node_modules/uikit/dist/css/*.css')
    .pipe(gulp.dest('./dist'))
);

gulp.task('uikit-css-advanced', () =>
  gulp.src('./node_modules/uikit/dist/css/components/*.almost-flat.min.css')
    .pipe(concat('advanced.css'))
    .pipe(gulp.dest('./dist'))
);

gulp.task('uikit-fonts', () =>
  gulp.src('./node_modules/uikit/dist/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'))
);

gulp.task('uikit-jquery', () =>
  gulp.src('./node_modules/jquery/dist/jquery.js')
    .pipe(gulp.dest('./dist'))
);

gulp.task('uikit-js', () =>
  gulp.src('./node_modules/uikit/dist/js/uikit.js')
    .pipe(gulp.dest('./dist'))
);

gulp.task('uikit', ['uikit-css', 'uikit-css-advanced', 'uikit-fonts', 'uikit-jquery', 'uikit-js']);

gulp.task('build', ['uikit', 'html', 'browserify', 'less']);

gulp.task('watch', ['build'], () => {
  gulp.watch(files.rawJS, ['browserify']);
  gulp.watch(files.html, ['html']);
  gulp.watch(files.less, ['less']);
});

// Browser Sync
gulp.task('browser-sync', ['watch'], () => {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
  });
});

gulp.task('start', ['browser-sync']);
