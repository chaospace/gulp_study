var gulp = require("gulp");
var uglify = require("gulp-uglify");
var minifyCss = require("gulp-minify-css");

// hello task
gulp.task("hello", function(){
  return console.log("Gulp Hello~?^^");
});

// js 코드 압축
gulp.task("uglify-js", function(){
  gulp.src("js/*.js")
  .pipe(uglify())
  .pipe(gulp.dest("build/js"));
});


// css 최소화
gulp.task("minify-css", function(){
  gulp.src("css/*.css")
  .pipe(minifyCss({compatibility:"ie8"}))
  .pipe(gulp.dest("build/css"));
});

// 기본 실행 task
gulp.task("default", ["hello"]);
