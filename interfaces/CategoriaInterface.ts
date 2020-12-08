import { Desconto } from './../classes/Desconto';

export interface CategoriaInterface {
    nome?: string;
    codigoCategoria?: string;
    desconto?: Desconto;
}