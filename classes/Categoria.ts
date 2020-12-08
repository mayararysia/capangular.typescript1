import { CategoriaInterface } from './../interfaces/CategoriaInterface';
import { Desconto } from "./Desconto";

export class Categoria  {
    private nomeCategoria: string = '';
    private codigoCategoria: string = '';
    private desconto: Desconto = new Desconto({});

    constructor(categoriaInterface: CategoriaInterface){
        this.nomeCategoria = categoriaInterface.nome;
        this.codigoCategoria = categoriaInterface.codigoCategoria;
        this.desconto = categoriaInterface.desconto;
    }

    obterNome(): string {
        return this.nomeCategoria;
    }

    obterDesconto(): Desconto {
        return this.desconto;
    }

}