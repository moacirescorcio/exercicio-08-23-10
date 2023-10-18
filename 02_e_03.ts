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

    calcularSalarioPrimeiraParcela(): Number{
        return this._salario * 60/100;
    }

    calcularSalarioSegundaParcela(): Number{
        return this._salario * 40/100;
    }
}

let pessoa1: Pessoa = new Pessoa('Moacir', 'Escórcio');
console.log(pessoa1.nome_completo);


