
import * as _ from 'lodash';
import { paths } from './gulp/gulp-conf';

let gulp = require('gulp');
let del = require('del');
let typescript = require('gulp-typescript');
let typings = require('gulp-typings');
let install = require('gulp-install');
let server = require('gulp-server-livereload');

gulp.task('copy:libs', copyLibs);
gulp.task('copy:assets', copyAssets);

gulp.task('clean:node_modules', _.partial(clean, paths.node_modules));
gulp.task('clean:typings', _.partial(clean, paths.typings));
gulp.task('clean', _.partial(clean, paths.dist));

gulp.task('aux:clean', _.partial(clean, ''));


gulp.task('build:node_modules', gulp.series('clean:node_modules', buildNodeModules));
gulp.task('build:typings', gulp.series('clean:typings', buildTypings));

gulp.task('build', gulp.parallel('copy:libs', 'copy:assets', build));
gulp.task('build:prod', gulp.series(gulp.parallel('clean', 'build:node_modules', 'build:typings'), 'build'));
gulp.task('build:dev', gulp.series('clean', 'build'));

// gulp.task('serve:prod', gulp.series('build:dev', serve));
gulp.task('serve:dev', gulp.series('build:dev', serve));

gulp.task('watch', watch);

gulp.task('serve', gulp.parallel('serve:dev', 'watch'));

function watch(){
  return gulp.watch([
    `${paths.src}/**/*`,
    `index.html`,
    `systemjs.config.js`,
    `styles.css`,
    `!${paths.src}/**/*.spec.ts`
  ], gulp.series('build:dev'));
}

function serve() {
  return gulp.src('./dist/') // This indicates the root of our server
    .pipe(server({
      livereload: {
        enable: false, // enables live-reload
        filter: function(filePath, cb) { // this function tells livereload what to ignore
          cb( !(/node_modules/.test(filePath)) &&  // ignore anything in node_modules
              !(/.*ts$/.test(filePath)) && // ignore changes to *.ts-files
              !(/gulpfile.js$/.test(filePath)) ); // ignore changes to gulpfile.js
        }
      },
      defaultFile: 'index.html',
      open: true
    }));
}

function copyAssets() {
  return gulp.src([`${paths.src}/**/*`, `index.html`, `systemjs.config.js`, `styles.css`, `!${paths.src}/**/*.ts`], { base : `./` })
    .pipe(gulp.dest(paths.dist))
}

function copyLibs() {
  return gulp.src(['node_modules/**/*'])
    .pipe(gulp.dest(`${paths.dist}/node_modules`))
}

function clean(path) {
  return del([path]);
}

function build() {
  let tsProject = typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
  });

  return gulp.src([`${paths.src}/**/*.ts`])
      .pipe(typescript(tsProject))
      .pipe(gulp.dest(`${paths.dist}/app`));
}

function buildTypings(){
  return gulp.src('typings.json')
      .pipe(typings());
}

function buildNodeModules(){
  return gulp.src('package.json')
      .pipe(install());
}
