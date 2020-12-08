import { ProdutoInterface } from './../interfaces/ProdutoInterface';
import { CategoriaInterface } from './../interfaces/CategoriaInterface';
import { Fornecedor } from './../classes/Fornecedor';
import { Categoria } from './../classes/Categoria';

export class Produto extends Fornecedor {

   cat: CategoriaInterface = {nome: '', codigoCategoria:''};

   private  nome: string = '';
   private  preco: number = 0.0;
   private  codigo: string = '';
   public   categoria = new Categoria(this.cat);

   constructor(produtoInterface:ProdutoInterface) {
        super(produtoInterface);
        this.nome = produtoInterface.nome;
        this.preco = produtoInterface.preco;
        this.codigo = produtoInterface.codigo;
        this.categoria = produtoInterface.categoria;

    }

    obterPreco(): number {
        return this.preco;
    }

    atualizarPreco(preco: number): void {
        this.preco = preco;
    }

    obterCategoria(): Categoria{
       return this.categoria;
    }

    toString(): string {
        return `Nome: ${this.nome} \n`+
            `Preço: ${this.preco} \n `+
            `Código: ${this.codigo} \n`+
            `Categoria: ${this.categoria.obterNome} \n`;
    }
}