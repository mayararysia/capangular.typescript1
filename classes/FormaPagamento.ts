import { FormaPagamentoInterface } from "../interfaces/FormaPagamentoInterface";

export class FormaPagamento {
    private modoPagamento: string = "";

    constructor(forma:FormaPagamentoInterface){
        this.modoPagamento = forma.modoPagamento;
    }

    atualizarModoPagamento(pagamento: string): void{
        this.modoPagamento = pagamento;
    }

    obterModoPagamento(): string{
        return this.modoPagamento;
    }

    public pagarPorBoleto(): string {
        this.modoPagamento = 'boleto';
        return `Pagamento via ${this.modoPagamento} ...`;
    }

    public pagarPorCartaoCredito(): string {
        this.modoPagamento = 'cartão de crédito';
        return `Pagamento via ${this.modoPagamento} ...`;
    }

    public pagarPorCartaoDebito(): string {
        this.modoPagamento = 'débito';
        return `Pagamento via ${this.modoPagamento} ...`;
    }
}