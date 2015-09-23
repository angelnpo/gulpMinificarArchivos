var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');


// Tarea de prueba
gulp.task('myTask', function(){
    console.log('Ejecutando task gulp...');
});

// Minificar y unir archivos js
gulp.task('pluginsJs', function(){
    gulp.src('src/**/*.js')
    .pipe(plumber())
    .pipe(concat('myScript.js'))
    .pipe(uglify())
    //manejo de errores con eventos gulp
    //.on('error', console.log.bind(console))
    .pipe(gulp.dest('dist/js'));
});

// Permite ver cambios automaticamente
gulp.task('watch', function(){
    browserSync({
        server:{
            baseDir: 'src/'
        }
    });
    gulp.watch('src/**/*.js', ['pluginsJs', 'watch-browser']);
    gulp.watch('src/*.html', ['watch-browser']);
    gulp.watch('src/**/*.css', ['watch-browser']);
});

gulp.task('watch-browser', ['watch'], browserSync.reload);

//Ejecutar grupo de tareas
gulp.task('default', ['myTask', 'pluginsJs']);