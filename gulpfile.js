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
  html: "./src/**/*.html", // 👈 Add this line
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

  // Skip image optimization on Vercel to avoid EPIPE errors
  if (process.env.VERCEL || process.env.NODE_ENV === "production") {
    console.log("Ambiente Vercel detectado - copiando imagens sem otimização");
    return gulp.src(paths.images).pipe(gulp.dest(paths.dest.images));
  }

  console.log("Ambiente local - otimizando imagens...");
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

// 👈 ADD THIS NEW TASK
function copyHTML() {
  return gulp.src(paths.html).pipe(gulp.dest("./dist"));
}

function watchFiles() {
  gulp.watch(paths.styles, styles);
  gulp.watch(paths.scripts, minifyJS);
  gulp.watch(paths.images, images);
  gulp.watch(paths.html, copyHTML); // 👈 Add this line
  console.log("Assistindo alterações...");
}

// --- EXPORTA TASKS ---
exports.styles = styles;
exports.scripts = scripts;
exports.minify = minifyJS;
exports.bundle = bundleJS;
exports.images = images;
exports.copyHTML = copyHTML; // 👈 Add this
exports.watch = watchFiles;

// --- BUILDS ---
// 👈 Update all build tasks to include copyHTML
gulp.task("build", gulp.parallel(styles, minifyJS, images, copyHTML));
gulp.task("build-bundle", gulp.parallel(styles, bundleJS, images, copyHTML));
gulp.task("build-dev", gulp.parallel(styles, scripts, images, copyHTML));
gulp.task("dev", gulp.series("build-dev", watchFiles));
gulp.task("default", gulp.series("build"));
