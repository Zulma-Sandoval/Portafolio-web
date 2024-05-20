/* Mi primer archivo de JS */

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Zulma Sandoval Dominguez')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Estudiante en ingeniería Mecatrónica</strong>')
    .pauseFor(1500)
    .start();