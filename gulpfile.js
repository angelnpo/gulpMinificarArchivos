var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');

// Tarea de prueba
gulp.task('myTask', function(){
    console.log('Ejecutando task gulp...');
});

// Minificar y unir archivos js
gulp.task('pluginsJs', function(){
    gulp.src('js/*.js')
    .pipe(plumber())
    .pipe(concat('myScript.js'))
    .pipe(uglify())
    //manejo de errores con eventos gulp
    //.on('error', console.log.bind(console))
    .pipe(gulp.dest('dist/js'));
});

// Permite ver cambios automaticamente
gulp.task('watch', function(){
    gulp.watch('js/*.js', ['myTask', 'pluginsJs']);
});

//Ejecutar grupo de tareas
gulp.task('default', ['myTask', 'pluginsJs']);