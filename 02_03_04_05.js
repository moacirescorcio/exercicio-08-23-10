"use strict";
class Pessoa {
    constructor(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    get nome() {
        return this._nome;
    }
    get sobrenome() {
        return this._sobrenome;
    }
    get nome_completo() {
        return this._nome + ' ' + this._sobrenome;
    }
}
class Funcionario extends Pessoa {
    constructor(nome, sobrenome, matricula, salario) {
        super(nome, sobrenome);
        this._matricula = matricula;
        this._salario = salario;
    }
    calcularSalarioPrimeiraParcela() {
        return this._salario * 60 / 100;
    }
    calcularSalarioSegundaParcela() {
        return this._salario * 40 / 100;
    }
}
class Professor extends Funcionario {
    constructor(nome, sobrenome, matricula, salario, titulacao) {
        super(nome, sobrenome, matricula, salario);
        this._titulacao = titulacao;
    }
    calcularSalarioPrimeiraParcela() {
        return (super.calcularSalarioPrimeiraParcela() + super.calcularSalarioSegundaParcela());
    }
    calcularSalarioSegundaParcela() {
        return 0;
    }
}
class FolhaDePagamento {
    constructor() {
        this.pessoas = [];
    }
    inserir(p) {
        this.pessoas.push(p);
        console.log("Inserido!");
    }
    calcularPagamentos() {
        let somatorio_salarios = 0;
        for (let item of this.pessoas) {
            if (item instanceof Funcionario || item instanceof Professor) {
                somatorio_salarios += item.calcularSalarioPrimeiraParcela() + item.calcularSalarioSegundaParcela();
            }
        }
        return somatorio_salarios;
    }
}
//folha de pagamento
let FolhaDePagamento1 = new FolhaDePagamento();
let pessoa1 = new Pessoa('Moacir', 'Escórcio');
console.log(pessoa1.nome_completo);
//teste funcionario
let funcionario_1 = new Funcionario("João", "Silva", "001", 1000);
console.log(`\nNome completo do funcionário 1: ${funcionario_1.nome_completo}`);
console.log(`Primeira Parcela do salário: R$${funcionario_1.calcularSalarioPrimeiraParcela()}`);
console.log(`Segunda Parcelo do salário: R$${funcionario_1.calcularSalarioSegundaParcela()}`);
//testando professor
let professor1 = new Professor('Maria', 'Clara', "002", 2000, "Metre");
console.log(`\nNome do Professor: ${professor1.nome_completo}`);
console.log(`Primeira parcela do salário: R$${professor1.calcularSalarioPrimeiraParcela()}`);
console.log(`Segunda parcela do salário: ${professor1.calcularSalarioSegundaParcela()}`);
//inserindo no array
FolhaDePagamento1.inserir(pessoa1);
FolhaDePagamento1.inserir(funcionario_1);
FolhaDePagamento1.inserir(professor1);
console.log(`O total dos salários é de R$${FolhaDePagamento1.calcularPagamentos()}`);
