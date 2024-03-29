const gulp = require('gulp');
const zip = require('gulp-zip');
const manifestFile = require('./manifest.json');

const distFolder = 'dist';

function taskZip () {
    gulp.src(distFolder + '/**/*')
        .pipe(zip('App.v' + manifestFile.version + '.zip'))
        .pipe(gulp.dest('./'));

    return gulp.src(['js/*', 'css/*', 'html/*', 'icons/*', '*.js*', '!package-lock.json', 'README.md'], {base: './'})
        .pipe(zip('AppSource.zip'))
        .pipe(gulp.dest('./'));
}

gulp.task('zip', taskZip);
gulp.task('default', taskZip);
