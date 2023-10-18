class Pessoa{
    private _nome: String;
    private _sobrenome: String;

    constructor(nome: String, sobrenome: String){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){
        return this._nome
    }

    get sobrenome(){
        return this._sobrenome
    }

    get nome_completo(): String{
        return this._nome + ' ' + this._sobrenome
    }
}

class Funcionario extends Pessoa{
    private _matricula: String;
    private _salario: number;

    constructor(nome: String, sobrenome: String, matricula: String, salario: number){
        super(nome, sobrenome);
        this._matricula = matricula;
        this._salario = salario;
    }

    calcularSalarioPrimeiraParcela(): number{
        return this._salario * 60/100;
    }

    calcularSalarioSegundaParcela(): number{
        return this._salario * 40/100;
    }
}

class Professor extends Funcionario{
    private _titulacao: String;

    constructor(nome: String, sobrenome: String, matricula: String, salario: number, titulacao: String){
        super(nome, sobrenome, matricula,salario);
        this._titulacao = titulacao;
    }

    calcularSalarioPrimeiraParcela(): number {
        return (super.calcularSalarioPrimeiraParcela() + super.calcularSalarioSegundaParcela());
    }

    calcularSalarioSegundaParcela(): number {
        return 0;
    }
}

let pessoa1: Pessoa = new Pessoa('Moacir', 'Escórcio');
console.log(pessoa1.nome_completo);

//teste funcionario
let funcionario_1: Funcionario = new Funcionario("João", "Silva", "001", 1000);
console.log(`\nNome completo do funcionário 1: ${funcionario_1.nome_completo}`);
console.log(`Primeira Parcela do salário: R$${funcionario_1.calcularSalarioPrimeiraParcela()}`);
console.log(`Segunda Parcelo do salário: R$${funcionario_1.calcularSalarioSegundaParcela()}`);

//testando professor
let professor1: Professor = new Professor('Maria', 'Clara', "002", 2000, "Metre");
console.log(`\nNome do Professor: ${professor1.nome_completo}`);
console.log(`Primeira parcela do salário: R$${professor1.calcularSalarioPrimeiraParcela()}`);
console.log(`Segunda parcela do salário: ${professor1.calcularSalarioSegundaParcela()}`);





