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

# Gulp plug-in 설치
