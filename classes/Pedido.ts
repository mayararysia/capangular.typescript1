import { Produto } from "../classes/Produto";
import { PedidoInterface } from "../interfaces/PedidoInterface";

export class Pedido {
    private listaProdutos?:Array<Produto>;
    private TAXA_ALIQUOTA = 0.08;
    private TAXA_FRETE = 0.15;
    private freteTarifado: boolean = false;
   

    constructor(pedidoInterface: PedidoInterface) {
        this.listaProdutos = pedidoInterface.listaProdutos;
        this.freteTarifado = pedidoInterface.freteTarifado;
    }

    obterValorTotalPedido(): number {
        const handler = (acumulador, produto:Produto) => acumulador + produto.obterPreco();
        const totalSemImposto = this.listaProdutos.reduce(handler, 0);
        const totalComAliquota = totalSemImposto * (1 + this.TAXA_ALIQUOTA);
        let total = totalComAliquota;

        if(this.freteTarifado){
            total = totalComAliquota * (1 + this.TAXA_FRETE);
        }
        return total;
    }
}