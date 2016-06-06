//http://www.slideshare.net/meadunhansa/gulp-48608642
var gulp = require("gulp");
//var uglify = require("gulp-uglify");
//var minifyCss = require("gulp-minify-css");
//var concat  = require("gulp-concat");
//var plumber = require('gulp-plumber');
//var autoPreFixer = require("gulp-autoprefixer");
var plugins = require("gulp-load-plugins")();

// hello task
gulp.task("hello", function(){
  return console.log("Gulp Hello~?^^");
});

// js 코드 압축
gulp.task("uglify-js", function(){
  gulp.src(["js/file_1.js", "js/foo.js"])
  .pipe(plugins.uglify())
  .pipe(gulp.dest("build/js"));
});


// css 최소화
gulp.task("minify-css", function(){
  gulp.src("css/*.css")
  .pipe(plugins.minifyCss({compatibility:"ie8"}))
  .pipe(gulp.dest("build/css"));
});

// file merge
gulp.task("merge-js", function(){
  gulp.src("js/*.js")
  .pipe(plugins.concat("merge.js"))
  .pipe(gulp.dest("build/js"));
});

// plumber 테스트
gulp.task("plumber-test", function(){
  gulp.src("js/throwError.js")
  .pipe( plugins.plumber({
    erorHandler:onErrorHandler
  }))
  .pipe(plugins.uglify());
});

// error handler 정의
function onErrorHandler( error ){
  console.log( erorr );
}

// autoPreFixer
gulp.task("css-auto-prefix", function(){
  gulp.src("css/*.css")
  .pipe(plugins.autoprefixer({
    // 브라우저 대응 옵션 자세한 내용은 git페이지 참조
    browsers:["last 3 versions"],
    cascade:false
  }))
  .pipe( gulp.dest("build/css"));
});

var sassOpt ={
  errLogToConsole:true,
  outputStyle:"expaned"
}

// sass task
gulp.task( "sass", function(){
  gulp.src("css/*.scss")
  .pipe( plugins.sass(sassOpt).on("error", plugins.sass.logError) )
  .pipe( gulp.dest("build/css"));
});

// watch
gulp.task( "watch", function(){
  // scss파일 변경 시 실행 할 task설정
  gulp.watch("css/*.scss", ["sass"])
});

// 기본 실행 task
gulp.task("default", ["hello"]);
