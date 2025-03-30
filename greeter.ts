class Student implements Person {
    fullName: string;
    altura:number;
    constructor(public firstName: string, public middleInitial: string, public lastName: string, public edad:number) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
        this.altura = 183;
    }
}

class EstudianteCiclo extends Student { 
   public fct:boolean;

    constructor( firstName:string, middleInitial:string,lastName:string,edad:number, fct:boolean) {
        super(firstName,middleInitial,lastName,edad);
        this.fct= true; // fct;
    }

    toString(){
        return this.firstName + " " + this.middleInitial + " " + this.lastName + " " + this.edad;
    }
}

interface Person {
    firstName: string;
    lastName: string;
    edad:number;
    altura:number;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName + " " + person.edad;
}

let user = new Student("Jane", "M.", "User",30);
let userCiclo=new EstudianteCiclo("Pedro", "J." , "Smith", 25, true);

let nombre:string;
nombre="Fco Javier"; //48;

let apellido:string="Soldado";

let direccion:string="c/ San Juan bosco";


//document.body.innerHTML = greeter(user);
document.body.innerHTML=greeter(userCiclo);