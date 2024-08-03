const gonzalo = {
    name: "Gonzalo",
    age: 18,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS"
    ],

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};

// Curso de Responsive Design: Maquetación Mobile First

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

const rodrigo = new Student(
    "Rodrigo",
    21,
    [
        "Curso de PHP",
        "Curso de Docker"
    ]
)

// Prototipos con la sintaxis de clases
class Student2 {
    constructor(name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const diego = new Student2(
    'Diego',
    19,
    [
        "Curso de leyes nacionales y autonómicas",
        "Curso de análisis científico",
        "Curso de armamento policial"
    ]
)

class Student3 {
    constructor({
        name,
        age,
        cursosAprobados = [],
        email
    }) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const paco = new Student3({
    name: "Paco",
    age: 33,
    cursosAprobados: [
        "Curso básico de detección de fisuras en cañerías",
        "Curso intermedio de montaje de cañerías domésticas",
        "Curso avanzado de diseño de alcantarillas a nivel industrial"
    ]
})

const cristiano = new Student3({
    name: "Cristiano",
    age: 39,
    email: "Cristiano Ronaldo dos Santos Aveiro"
})

