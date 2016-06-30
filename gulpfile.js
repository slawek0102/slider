var gulp = require("gulp");
var sass = require('gulp-sass'); //kompiluje sass do css
var autoprefixer = require('gulp-autoprefixer');  // dodaje prefixy dla strszych pregladarek
var plumber = require('gulp-plumber');   //nie kompiluje jesli w kodzie jest blad
var browserSync = require('browser-sync'); //odswieza przegladarke


gulp.task('css', function () {
    gulp.src("styles.scss")
        .pipe(plumber())
        .pipe(sass.sync())
        .pipe(autoprefixer({
            browsers: ["last 3 version"]
        }))
        .pipe(gulp.dest('./compiled_src'))
        .pipe(browserSync.stream());
});

gulp.task("browser-sync", function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("watch", function () {
    gulp.watch("*.scss", ["css"]);
    gulp.watch(["./*.html", "./*.js"], browserSync.reload);
});

gulp.task('default', ['css', "browser-sync", "watch"]);

