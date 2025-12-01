import gulp from "gulp";
import * as sass from "sass";
import gulpSass from "gulp-sass";

import imagemin from "gulp-imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminOptipng from "imagemin-optipng";
import imageminSvgo from "imagemin-svgo";

import uglify from "gulp-uglify";
import concat from "gulp-concat";
import cleanCSS from "gulp-clean-css";
import sourcemaps from "gulp-sourcemaps";
import rename from "gulp-rename";

const sassCompiler = gulpSass(sass);

// --- CONFIGURAÇÃO DE PASTAS ---
const paths = {
  styles: "./src/styles/**/*.scss",
  scripts: "./src/js/**/*.js",
  images: "./src/images/**/*.{jpg,jpeg,png,gif,svg}",
  html: "./src/**/*.html",
  dest: {
    css: "./dist/css",
    js: "./dist/js",
    images: "./dist/images",
  },
};

// --- TASKS ---

export function styles() {
  return gulp
    .src(paths.styles)
    .pipe(sourcemaps.init())
    .pipe(
      sassCompiler({ outputStyle: "compressed" }).on(
        "error",
        sassCompiler.logError
      )
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest(paths.dest.css));
}

export function scripts() {
  return gulp.src(paths.scripts).pipe(gulp.dest(paths.dest.js));
}

export function minifyJS() {
  return gulp
    .src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest(paths.dest.js));
}

export function bundleJS() {
  return gulp
    .src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(concat("bundle.min.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest(paths.dest.js));
}

export function images() {
  console.log("Otimizando imagens...");
  console.log("Ambiente local - otimizando imagens...");

  return gulp
    .src(paths.images, { allowEmpty: true })
    .pipe(
      imagemin(
        [
          imageminMozjpeg({ quality: 80, progressive: true }),
          imageminOptipng({ optimizationLevel: 5 }),
          imageminSvgo(),
        ],
        { verbose: true }
      )
    )
    .pipe(
      rename(function (path) {
        path.dirname = path.dirname.toLowerCase();
        path.basename = path.basename.toLowerCase();
        path.extname = path.extname.toLowerCase();
      })
    )
    .pipe(gulp.dest(paths.dest.images))
    .on("end", () => console.log("Imagens otimizadas!"));
}

export function copyHTML() {
  return gulp.src(paths.html).pipe(gulp.dest("./dist"));
}

export function watchFiles() {
  gulp.watch(paths.styles, styles);
  gulp.watch(paths.scripts, minifyJS);
  gulp.watch(paths.images, images);
  gulp.watch(paths.html, copyHTML);
  console.log("Assistindo alterações...");
}

// --- BUILD TASKS ---
gulp.task("build", gulp.parallel(styles, minifyJS, images, copyHTML));
gulp.task("build-bundle", gulp.parallel(styles, bundleJS, images, copyHTML));
gulp.task("build-dev", gulp.parallel(styles, scripts, images, copyHTML));
gulp.task("dev", gulp.series("build-dev", watchFiles));
gulp.task("default", gulp.series("build"));
