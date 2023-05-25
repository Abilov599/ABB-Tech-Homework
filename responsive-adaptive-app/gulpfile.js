const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");

function concatHtml() {
  return gulp
    .src("./src/*.html")
    .pipe(concat("index.html"))
    .pipe(gulp.dest("./dist/"));
}

function style() {
  return gulp
    .src("./src/assets/sass/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .on("error", sass.logError)
    .pipe(gulp.dest("./dist/assets/css"));
}

function watchSass() {
  gulp.watch("./src/assets/sass/**/*.scss", style);
}

gulp.task("concat-html", concatHtml);
gulp.task("compile-sass", style);
gulp.task("watch-sass", watchSass);
gulp.task("default", gulp.parallel("concat-html", "compile-sass", "watchSass"));
