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

  ** 1. gulp uglify 설치
  ```{.javascript}
    npm install --save-dev gulp-uglify
  ```

  ** 2. task 작성
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
** 1. gulp uglify 설치
```{.javascript}
  npm install --save-dev gulp-minify-css
```

** 2. task 작성
```{.javascript}
var minifyCss = require("gulp-minify-css");
// css 압축
gulp.task("minify-css", function(){
  gulp.src("css/*.css")
  .pipe(minifyCss({compatibility:"ie8"}))
  .pipe(gulp.dest("build/css"));
});
```
