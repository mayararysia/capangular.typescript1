import { DescontoInterface } from "../interfaces/DescontoInterface";

export class Desconto {
    private porcentagem : number = 0;

    constructor(descontoInterface: DescontoInterface) {
        this.porcentagem = descontoInterface.porcentagem;
    }

    obterDescontoTecnologia(): number{
        return this.porcentagem = 0.10;
    }

    obterDescontoEsporte(): number{
        return this.porcentagem = 0.02;
    }

    obterDescontoAlimentos(): number{
        return this.porcentagem = 0.20;
    }

    atualizarDesconto(porcentagem: number): void{
        this.porcentagem = porcentagem;
    }

    calcularDesconto(preco: number){
        return preco * (1-this.porcentagem);
    }
}
