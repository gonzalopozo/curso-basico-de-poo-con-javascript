/*

const gonzalo1 = {
    name: "gonzalo_pozo",
    username: "gonzalopozo",
    points: 5708,
    socialMedia: {
        twitter: "gonzaloP",
        instagram: "gonzaloP",
        facebook: undefined
    },
    approvedCourses : [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS"
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Responsive Design"
            ]
        },
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso de Introducción a la Producción de Videojuegos",
                "Curso de Unreal Engine",
                "Curso de Unity 3D"
            ]
        }
    ]
};

const rodrigo1 = {
    name: "rodrigo_pozo",
    username: "rodrigopozo",
    points: 1000,
    socialMedia: {
        twitter: "rodrigoP",
        instagram: "rodrigo_P",
        facebook: undefined
    },
    approvedCourses : [
        "Curso de Data Bussiness",
        "Curso de Data Visualization"
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso de Responsive Design",
                "Curso de Sistemas de Diseño"
            ]
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "Curso de Data Bussiness",
                "Curso de Data Visualization",
                "Curso de Tableau"
            ]
        }
    ]
};

*/

function videoPlay(id) {
    const urlSecreta = `https://platziultrasecretomasquelanasa.com/${id}`; 

    console.log(`Se está reproduciento desde la url ${urlSecreta}`);
}

function videoStop(id) {
    const urlSecreta = `https://platziultrasecretomasquelanasa.com/${id}`; 

    console.log(`Pausamos la url ${urlSecreta}`);
}

export class PlatziClass {
    constructor({
        name,
        videoID
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoStop(this.videoID);
    }

}











class Course {
    constructor({
        name,
        classes = []
    }) {
        this._name = name;
        this.classes = classes;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (name === "Curso Malito de Programación Básica") {
            console.error("Web... no");
        } else {
            this._name = name;
        }
    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica"
});

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS"
});

const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS"
});

class LearningPath {
    constructor({
        name,
        courses = []
    }) {
        this.name = name;
        this.courses = courses;
    }

    changeLearningPathName(newName) {
        this.name = newName;
    }

    addCourse(course) {
        this.courses.push(course);
    }

    deleteCourse(course) {
        let courseIndex = this.courses.indexOf(course);

        if (courseIndex >= 0){
            this.courses.splice(courseIndex, 1);
        }
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
        "Curso de Responsive Design",
        "Curso de Sistemas de Diseño"
    ]
});

const escuelaDataScience = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso de Data Bussiness",
        "Curso de Data Visualization",
        "Curso de Tableau"
    ]
});

const escuelaVideogames = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        "Curso de Introducción a la Producción de Videojuegos",
        "Curso de Unreal Engine",
        "Curso de Unity 3D"
    ]
});


class Student {
    constructor ({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined, 
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {
        this._name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}

const gonzalo2 = new Student({
    name: "Gonzalo",
    username: "ganster",
    email: "gonzalopozo2005@gmail.com",
    twitter: "gonza12345",
    learningPaths: [
        escuelaWeb,
        escuelaDataScience
    ]
});

const rodrigo2 = new Student({
    name: "Rodrigo",
    username: "degryh",
    email: "rodrigopozo2003@gmail.com",
    instagram: "rodri12345", 
    learningPaths: [
        escuelaWeb,
        escuelaVideogames
    ]
});