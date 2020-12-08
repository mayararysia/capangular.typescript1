import { Fornecedor } from '../classes/Fornecedor';
import { Categoria } from './../classes/Categoria';
import { FornecedorInterface } from './FornecedorInterface';

export interface ProdutoInterface extends FornecedorInterface{
    nome?: string;
    preco?: number;
    codigo?: string;
    categoria?: Categoria;
}