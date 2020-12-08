import { CategoriaInterface } from './../interfaces/CategoriaInterface';
import { Desconto } from "./Desconto";

export class Categoria  {
    private nomeCategoria: string = '';

    constructor(categoriaInterface: CategoriaInterface){
        this.nomeCategoria = categoriaInterface.nome;
    }

    obterNome(): string {
        return this.nomeCategoria;
    }

}