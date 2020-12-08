import { EnderecoInterface } from "../interfaces/EnderecoInterface";

export class Endereco {

    private rua: string;
    private cep: string;
    private estado: string;
    private cidade: string;

    constructor(enderecoInterface: EnderecoInterface){
        this.rua = enderecoInterface.rua;
        this.cep = enderecoInterface.cep;
        this.estado = enderecoInterface.estado;
        this.cidade = enderecoInterface.cidade;
    }

    atualizarRua(rua: string): void{
        this.rua = rua;
    }

    obterRua(): string{
        return this.rua;
    }

    atualizarCep(cep: string): void{
        this.cep = cep;
    }

    obterCep(): string{
        return this.cep;
    }

    atualizarEstado(estado: string): void{
        this.estado = estado;
    }

    obterEstado(): string{
        return this.estado;
    }

    atualizarCidade(cidade: string): void{
        this.cidade = cidade;
    }

    obterCidade(): string{
        return this.cidade;
    }

    toString(): string {
        return ` Rua: ${this.rua} \n `+
            `CEP: ${this.cep} \n `+
            `Estado: ${this.estado} \n`+
            `Cidade: ${this.cidade} \n`;
    }

}
