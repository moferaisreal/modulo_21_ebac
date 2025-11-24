const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");

// --- CONFIGURAÇÃO DE PASTAS ---
const paths = {
  styles: "./src/styles/**/*.scss",
  scripts: "./src/js/**/*.js",
  images: "./src/images/**/*.{jpg,jpeg,png,gif,svg}",
  dest: {
    css: "./dist/css",
    js: "./dist/js",
    images: "./dist/images",
  },
};

// --- TASKS ---

function styles() {
  return gulp
    .src(paths.styles)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest(paths.dest.css));
}

function scripts() {
  return gulp.src(paths.scripts).pipe(gulp.dest(paths.dest.js));
}

function minifyJS() {
  return gulp
    .src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest(paths.dest.js));
}

function bundleJS() {
  return gulp
    .src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(concat("bundle.min.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest(paths.dest.js));
}

function images() {
  console.log("Otimizando imagens...");
  return gulp
    .src(paths.images)
    .pipe(
      imagemin(
        [
          imagemin.mozjpeg({ quality: 80, progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [{ name: "cleanupIDs", active: false }],
          }),
        ],
        {
          verbose: true,
        }
      )
    )
    .pipe(gulp.dest(paths.dest.images))
    .on("end", () => console.log("Imagens otimizadas!"));
}

function watchFiles() {
  gulp.watch(paths.styles, styles);
  gulp.watch(paths.scripts, minifyJS);
  gulp.watch(paths.images, images);
  console.log("Assistindo alterações...");
}

// --- EXPORTA TASKS ---
exports.styles = styles;
exports.scripts = scripts;
exports.minify = minifyJS;
exports.bundle = bundleJS;
exports.images = images;
exports.watch = watchFiles;

// --- BUILDS ---
gulp.task("build", gulp.parallel(styles, minifyJS, images)); // Produção
gulp.task("build-bundle", gulp.parallel(styles, bundleJS, images));
gulp.task("build-dev", gulp.parallel(styles, scripts, images)); // Sem minify
gulp.task("dev", gulp.series("build-dev", watchFiles));
gulp.task("default", gulp.series("build"));
