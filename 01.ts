class Empregado{
    salario: number = 500;

    calcularSalario(): number{
        return this.salario;
    }
}

class Diarista extends Empregado{
    calcularSalario(): number {
        return (super.calcularSalario()/30);
    }
}

class Horista extends Diarista{
    calcularSalario(): number {
        return (super.calcularSalario()/24)
    }
}

//teste
let empregado1: Empregado = new Empregado();
let diarista1: Diarista = new Diarista();
let horista1: Horista = new Horista();
console.log(empregado1.calcularSalario());
console.log(diarista1.calcularSalario());
console.log(horista1.calcularSalario());
