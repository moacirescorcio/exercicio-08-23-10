"use strict";
class Empregado {
    constructor() {
        this.salario = 500;
    }
    calcularSalario() {
        return this.salario;
    }
}
class Diarista extends Empregado {
    calcularSalario() {
        return (super.calcularSalario() / 30);
    }
}
class Horista extends Diarista {
    calcularSalario() {
        return (super.calcularSalario() / 24);
    }
}
//teste
let empregado1 = new Empregado();
let diarista1 = new Diarista();
let horista1 = new Horista();
console.log(empregado1.calcularSalario());
console.log(diarista1.calcularSalario());
console.log(horista1.calcularSalario());
