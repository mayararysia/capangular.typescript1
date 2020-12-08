import { Produto } from "../classes/Produto";

export interface PedidoInterface {
    listaProdutos?:Array<Produto>;
    freteTarifado: boolean;
}