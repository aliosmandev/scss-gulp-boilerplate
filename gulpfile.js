"use strict";
var gulp = require("gulp"),
  browserSync = require("browser-sync").create(),
  sass = require("gulp-sass")(require("sass"));

gulp.task("sass", () =>
  gulp
    .src("./src/scss/**/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
        noCache: true,
      })
    )
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream())
);

gulp.task("watch", () => {
  browserSync.init({
    server: "./",
    startPath: "/index.html",
  });
  gulp.watch("src/scss/**/*.scss", gulp.series("sass"));
  gulp.watch("*.html").on("change", browserSync.reload);
});
