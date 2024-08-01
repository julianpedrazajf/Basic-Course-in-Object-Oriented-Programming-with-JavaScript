const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    aprobarCursos(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
};

// Hacer que natalia apruebe otro curso

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.ege = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCursos = function (nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curos Introduccion a la produccion de Videojuegos",
        "Curso de Creacion de Personajes",
    ],
);

// Prototipos  con la sintaxis de clases

class Student2 { 
    constructor({
        name, 
        age, 
        email,
        cursosAprobados = [],
    }) {
        this.name = name;
        this.email = email;
        this.ege = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCursos(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2({
    name: "Miguel",
    age: 28,
    email: "miguelito@platzi.com",
});

// ventajas de la POO class 7
// objetos literales

const jua1 = {
    name: "JuanDC",
    username: "juandc",
    points: 100,
    socialMedia: {  
        twitter: "fjuandc",
        instagram: "fjuandc",
        facebook: undefined,
    },
    approvedCourses: [
        "Cursos Definitivos de HTML y CSS",
        "Cursos practico de HTML y CSS",
    ],
    learningPaths: [
        {
            name: "Escula de Desarrollo web",
            courses: [
                "Cursos Definitivos de HTML y CSS",
                "Cursos practico de HTML y CSS",
                "Curso de Responsive Design",
            ],
        },
        {
            name: "Escula de videjuegos",
            courses: [
                "Cursos introduccion de videojuegos",
                "Cursos practico real engine",
                "Curso de unity 3D",
            ],
        }
    ],
};

const miguelito1 = {
    name: "Miguelito",
    username: "miguelitofeliz",
    points: 1000,
    socialMedia: {  
        twitter: "miguelitofeliz",
        instagram: "miguelitofeliz_feliz",
        facebook: undefined,
    },
    approvedCourses: [
        "Cursos Database",
        "Cursos de dataViz",
    ],
    learningPaths: [
        {
            name: "Escula de Desarrollo web",
            courses: [
                "Cursos Definitivos de HTML y CSS",
                "Cursos practico de HTML y CSS",
                "Curso de Responsive Design",
            ],
        },
        {
            name: "Escula de Data Science",
            courses: [
                "Cursos introduccion de videojuegos",
                "Cursos practico real engine",
                "Curso de unity 3D",
            ],
        }
    ],
};

// programacion orientada a objetos
function videoPlay(id){
    const urlSecreta = "http://platziultrasecreto.com/" + id;
    console.log("Se esta produciendo desde la url " + urlSecreta);
}
function videoStop(id){
    const urlSecreta = "http://platziultrasecreto.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
}

export class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }
    pausar() {
        videoStop(this.videoID);
    }
}
class Course {
    constructor({
        name,
        classes = [],
    }){
        this._name = name;
        this.course = classes;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombrecito) {
        if (nuevoNombrecito === "Curso Malito de Programacion Basica") {
            console.error("Web... no");
        } else {
            this._name = nuevoNombrecito;
        }  
    }
}

const cursoProgBasica = new Course ({
    name: "Curso Gratis de Programacion Basica",
});


const cursoDefinitivoHTML = new Course ({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course ({
    name: "Curso Practico de HTML y CSS",
});

class LearningPaths{
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.course = courses;
    }
}

const escuelaWeb = new LearningPaths({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});

const escuelaData = new LearningPaths({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso DataBusiness",
        "Curso Dataviz",
    ],
});
const escuelaVgs = new LearningPaths({
    name: "Escula de videjuegos",
    courses: [
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unreal",
    ],
});

class student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [], 
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths; 
    }
}

const juan2 = new student({
    name: "JuanDC",
    username: "JuanDC",
    email: "juanito@juanito.com",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ],
});

const miguelito2 = new student({
    name: "miguelito",
    username: "miguelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "miguelito_feliz",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});