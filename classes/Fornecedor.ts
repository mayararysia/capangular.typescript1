import { FornecedorInterface } from "../interfaces/FornecedorInterface";

export class Fornecedor {
    private nomeFornecedor: string ='';
    private cnpj: string ='';

    constructor(fornecedorInterface: FornecedorInterface) {
        this.nomeFornecedor = fornecedorInterface.nomeFornecedor;
        this.cnpj = fornecedorInterface.cpnj;
    }

    obterNome(): string{
        return this.nomeFornecedor;
    }

    atualizarNome(nome: string): void{
        this.nomeFornecedor = nome;
    }

    obterCnpj(): string{
        return this.cnpj;
    }

    atualizarCnpj(cnpj: string): void{
        this.cnpj = cnpj;
    }

    toString(): string {
        return ` Nome: ${this.nomeFornecedor} \n `+
            `Cnpj: ${this.cnpj} \n `;
    }
}
