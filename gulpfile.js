//http://www.slideshare.net/meadunhansa/gulp-48608642
var gulp = require("gulp");
var uglify = require("gulp-uglify");
var minifyCss = require("gulp-minify-css");
var concat  = require("gulp-concat");
var plumber = require('gulp-plumber');
var autoPreFixer = require("gulp-autoprefixer");

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

// file merge
gulp.task("merge-js", function(){
  gulp.src("js/*.js")
  .pipe(concat("merge.js"))
  .pipe(gulp.dest("build/js"));
});

// plumber 테스트
gulp.task("plumber-test", function(){
  gulp.src("js/throwError.js")
  .pipe( plumber({
    erorHandler:onErrorHandler
  }))
  .pipe(uglify());
});

// error handler 정의
function onErrorHandler( error ){
  console.log( erorr );
}

// autoPreFixer
gulp.task("css-auto-prefix", function(){
  gulp.src("css/*.css")
  .pipe(autoPreFixer({
    browsers:["last 3 versions"],
    cascade:false
  }))
  .pipe( gulp.dest("build/css"));
});


// 기본 실행 task
gulp.task("default", ["hello"]);
