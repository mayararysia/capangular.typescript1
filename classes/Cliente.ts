import { ClienteInterface } from "../interfaces/ClienteInterface";
import { PessoaInterface } from "../interfaces/PessoaInterface";
import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";


export class Cliente extends Pessoa{
    private senha: string ='';
    private usuario: string ='';
    private endereco: Endereco;

    constructor(clienteInterface: ClienteInterface) {
        super({
            nome: clienteInterface.nome,
            cpf: clienteInterface.cpf
        });
        
        this.usuario = clienteInterface.usuario;
        this.senha = clienteInterface.senha;
        this.endereco = clienteInterface.endereco;
    }

    obterSenha(): string{
        return this.senha;
    }

    atualizarSenha(senha: string): void{
        this.senha = senha;
    }

    obterUsuario(): string{
        return this.usuario;
    }

    obterEndereco(): Endereco{
        return this.endereco;
    }

    atualizarUsuario(usuario: string): void{
        this.usuario = usuario;
    }

    toString(): string {
        return ` Usuário: ${this.usuario} \n `+
            `Senha: ${this.senha} \n ` +
            `Endereço: ${this.endereco.toString} \n `;
    }
}
