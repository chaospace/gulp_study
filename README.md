# Gulp 사용법 학습

 **1. Gulp설치**
```{.javascript}
  npm install -g gulp-cli
```

 **2. gulpfile.js 파일 만들기**

```{.javascript}
 // hello task
  gulp.task("hello", function(){
    return console.log("Gulp Hello~?^^");
});
```

  **3. 콘솔을 통한 실행**
```{.javascript}
  gulp hello
```
  **4. default task작성**
```{.javascript}
  //default task작성
  gulp.task("default", ["hello"]);
```

# JS 압축

  **1. gulp uglify 설치**
  ```{.javascript}
    npm install --save-dev gulp-uglify
  ```

  **2. task 작성**
  ```{.javascript}
  var uglify = require("gulp-uglify");
  // js 코드 압축
  gulp.task("uglify-js", function(){
    gulp.src("js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("build/js"));
  });
  ```

# CSS 압축
**1. gulp uglify 설치**
```{.javascript}
  npm install --save-dev gulp-minify-css
```

**2. task 작성**
```{.javascript}
var minifyCss = require("gulp-minify-css");
// css 압축
gulp.task("minify-css", function(){
  gulp.src("css/*.css")
  .pipe(minifyCss({compatibility:"ie8"}))
  .pipe(gulp.dest("build/css"));
});
```

# 파일 통합( js, css ... )
**1. gulp concat 설치**
```{.javascript}
  npm install --save-dev gulp-concat
```
**2. task 작성**
```{.javascript}
// file merge
  var concat  = require("gulp-concat");
  gulp.task("merge-js", function(){
    gulp.src("js/*.js")
    .pipe(concat("merge.js"))
    .pipe(gulp.dest("build/js"));
  });
  // 원하는 파일만 배열로 작성 가능
  // gulp.src(['foo.js', 'file1.js', 'file2.js'])
```

# error 핸들링
**1. gulp plumber설치**
```{.javascript}
  npm install --save-dev gulp-plumber
```
**2. task 작성**
```{.javascript}
var plumber = require('gulp-plumber');

// plumber 테스트
gulp.task("plumber-test", function(){
  gulp.src("js/throwError.js") // js파일에는 문법오류를 넣어줌
  .pipe( plumber({
    erorHandler:onErrorHandler
  }))
  .pipe(uglify());
});

// error handler 정의
function onErrorHandler( error ){
  console.log( erorr );
}
```
