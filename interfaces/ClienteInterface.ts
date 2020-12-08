import { PessoaInterface } from "./PessoaInterface";

import { Endereco } from './../classes/Endereco';
export interface ClienteInterface extends PessoaInterface{
    senha?: string;
    usuario?: string;
    endereco: Endereco;
}