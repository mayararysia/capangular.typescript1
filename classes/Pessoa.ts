import { PessoaInterface } from './../interfaces/PessoaInterface';

export class Pessoa{
    private nome: string;
    private cpf: string;

    constructor(pessoaInterface: PessoaInterface) {
        this.nome = pessoaInterface.nome;
        this.cpf = pessoaInterface.cpf;
    }

    obterNome(): string{
        return this.nome;
    }

    atualizarNome(nome: string): void{
        this.nome = nome;
    }

    obterCpf(): string{
        return this.cpf;
    }

    atualizarCpf(cpf: string): void{
        this.cpf = cpf;
    }

    toStringPessoa(): string {
        return ` Nome: ${this.nome} \n `+
            `CPF: ${this.cpf} \n `;
    }
    
}