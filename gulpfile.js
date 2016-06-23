"use strict";
var _ = require('lodash');
var gulp_conf_1 = require('./gulp/gulp-conf');
var gulp = require('gulp');
var del = require('del');
var typescript = require('gulp-typescript');
var typings = require('gulp-typings');
var install = require('gulp-install');
var server = require('gulp-server-livereload');
gulp.task('copy:libs', copyLibs);
gulp.task('copy:assets', copyAssets);
gulp.task('clean:node_modules', _.partial(clean, gulp_conf_1.paths.node_modules));
gulp.task('clean:typings', _.partial(clean, gulp_conf_1.paths.typings));
gulp.task('clean', _.partial(clean, gulp_conf_1.paths.dist));
gulp.task('build:node_modules', gulp.series('clean:node_modules', buildNodeModules));
gulp.task('build:typings', gulp.series('clean:typings', buildTypings));
gulp.task('build', gulp.parallel('copy:libs', 'copy:assets', build));
gulp.task('build:prod', gulp.series(gulp.parallel('clean', 'build:node_modules', 'build:typings'), 'build'));
gulp.task('build:dev', gulp.series('clean', 'build'));
// gulp.task('serve:prod', gulp.series('build:dev', serve));
gulp.task('serve:dev', gulp.series('build:dev', serve));
gulp.task('watch', watch);
gulp.task('serve', gulp.parallel('serve:dev', 'watch'));
function watch() {
    return gulp.watch([
        (gulp_conf_1.paths.src + "/**/*"),
        "index.html",
        "systemjs.config.js",
        "styles.css",
        ("!" + gulp_conf_1.paths.src + "/**/*.spec.ts")
    ], gulp.series('build:dev'));
}
function serve() {
    return gulp.src('./dist/') // This indicates the root of our server
        .pipe(server({
        livereload: {
            enable: false,
            filter: function (filePath, cb) {
                cb(!(/node_modules/.test(filePath)) &&
                    !(/.*ts$/.test(filePath)) &&
                    !(/gulpfile.js$/.test(filePath))); // ignore changes to gulpfile.js
            }
        },
        defaultFile: 'index.html',
        open: true
    }));
}
function copyAssets() {
    return gulp.src([(gulp_conf_1.paths.src + "/**/*"), "index.html", "systemjs.config.js", "styles.css", ("!" + gulp_conf_1.paths.src + "/**/*.ts")], { base: "./" })
        .pipe(gulp.dest(gulp_conf_1.paths.dist));
}
function copyLibs() {
    return gulp.src(['node_modules/**/*'])
        .pipe(gulp.dest(gulp_conf_1.paths.dist + "/node_modules"));
}
function clean(path) {
    return del([path]);
}
function build() {
    var tsProject = typescript.createProject('tsconfig.json', {
        typescript: require('typescript')
    });
    return gulp.src([(gulp_conf_1.paths.src + "/**/*.ts")])
        .pipe(typescript(tsProject))
        .pipe(gulp.dest(gulp_conf_1.paths.dist + "/app"));
}
function buildTypings() {
    return gulp.src('typings.json')
        .pipe(typings());
}
function buildNodeModules() {
    return gulp.src('package.json')
        .pipe(install());
}
//# sourceMappingURL=gulpfile.js.map