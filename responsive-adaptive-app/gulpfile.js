// IMPORTS

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const minify = require("gulp-minify");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify-es").default;
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
// const pipeline = require("readable-stream").pipeline;

// GULP FUNCTIONS

function concatHtml() {
  return gulp
    .src("./src/*.html")
    .pipe(concat("index.html"))
    .pipe(gulp.dest("./dist/"))
    .pipe(browserSync.stream());
}

function style() {
  return gulp
    .src("./src/assets/sass/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .on("error", sass.logError)
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("./dist/assets/css/"))
    .pipe(browserSync.stream());
}

function minifyJs() {
  return gulp
    .src("./src/assets/js/*.js")
    .pipe(uglify())
    .pipe(minify())
    .pipe(gulp.dest("./dist/assets/js/"))
    .pipe(browserSync.stream());
}

function imageMin() {
  gulp
    .src("src/assets/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/assets/images"));
}

function serve() {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
  gulp.watch("./src/assets/sass/**/*.scss", style);
  gulp.watch("./src/*.html", concatHtml);
  gulp.watch("./src/assets/js/*.js", minifyJs);
}

// GULP TASKS

gulp.task("concat-html", concatHtml);
gulp.task("image-min", imageMin);
gulp.task("compile-sass", style);
gulp.task("minify-js", minifyJs);
gulp.task("serve", serve);
gulp.task(
  "default",
  gulp.parallel(
    "image-min",
    "concat-html",
    "compile-sass",
    "minify-js",
    "serve"
  )
);
