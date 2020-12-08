import { Categoria } from './classes/Categoria';
import { Fornecedor } from './classes/Fornecedor';
import { Produto } from './classes/Produto';
import { Cliente } from './classes/Cliente';
import { Desconto } from './classes/Desconto';
import { Endereco } from './classes/Endereco';
import { Pedido } from './classes/Pedido';
import { FormaPagamento } from './classes/FormaPagamento';

import { CategoriaInterface } from './interfaces/CategoriaInterface';
import { FornecedorInterface } from './interfaces/FornecedorInterface';
import { ProdutoInterface } from './interfaces/ProdutoInterface';
import { PedidoInterface } from './interfaces/PedidoInterface';
import { ClienteInterface } from './interfaces/ClienteInterface';
import { DescontoInterface } from './interfaces/DescontoInterface';
import { EnderecoInterface } from './interfaces/EnderecoInterface';
import { FormaPagamentoInterface } from './interfaces/FormaPagamentoInterface';

function log(message: any){
    console.log(message);
}
log("Hello World Typescript - E-commerce!");
log(2020);

// xxxx Sistema compra produtos do fornecedor
console.log("E-commerce realiza compra de produtos do fornecedor...");
var IFornecedor: FornecedorInterface = {
    nomeFornecedor: "Fornecedor A",
    cpnj: "28.553.531/0001-20"
}
var fornecedor1 = new Fornecedor(IFornecedor);
console.log(fornecedor1.toString());

//xxxxxx Criar produtos: // Produto tem Categoria
console.log("Criando interface de desconto...\n");
//xxxxxxO desconto é dado por categoria
var IDesconto: DescontoInterface = {
    porcentagem: 0
}
console.log("Criando categoria tecnologia...\n");
var desconto = new Desconto(IDesconto);
desconto.obterDescontoTecnologia();
// Criando categorias
var ICategoriaTecnologia: CategoriaInterface = {
    nome: "tecnologia",
    codigoCategoria: "tec",
    desconto: desconto
}

console.log("Criando categoria esporte...\n");
desconto.obterDescontoEsporte();
var ICategoriaEsporte: CategoriaInterface = {
    nome: "esporte",
    codigoCategoria: "esp",
    desconto: desconto
}

console.log("Criando categoria alimentos...\n");
desconto.obterDescontoAlimentos();
var ICategoriaAlimentos: CategoriaInterface = {
    nome: "alimentos",
    codigoCategoria: "al",
    desconto: desconto
}
// xxx Classes Categoria:
var categoriaTec = new Categoria(ICategoriaTecnologia);
var categoriaAlimentos = new Categoria(ICategoriaAlimentos);
var categoriaEsporte = new Categoria(ICategoriaEsporte);

// Abastecendo o Estoque de Produtos:
console.log("Criando abastecimento de estoque de produtos...\n");
var IProdutoA: ProdutoInterface = {
    nome: "Produto Tec",
    preco: 500.0,
    codigo: "PT",
    categoria: categoriaTec
}

var IProdutoB: ProdutoInterface = {
    nome: "Produto Esporte",
    preco: 200.0,
    codigo: "PE",
    categoria: categoriaEsporte
}

var IProdutoC: ProdutoInterface = {
    nome: "Produto Alimentos",
    preco: 600.0,
    codigo: "PA",
    categoria: categoriaAlimentos
}

//xxx Classes Produto:
var produtoA = new Produto(IProdutoA);
var produtoB = new Produto(IProdutoB);
var produtoC = new Produto(IProdutoC);

console.log("Produtos....\n");
console.log(produtoA.toString());
console.log("\n");
console.log(produtoB.toString());
console.log("\n");
console.log(produtoC.toString());

// xxx Processo de Compra do Cliente -- Preencher dados do sistema
// Preenche o Endereço:
var IEndereco: EnderecoInterface = {
    rua: "Rua A",
    cep: "5700-0000",
    estado: "AL",
    cidade: "Maceió"
}

//Classe endereço:
var enderecoMaria = new Endereco(IEndereco);

console.log("Criando conta do cliente ...\n");
var ICliente: ClienteInterface = {
    nome: "Maria",
    cpf: "977.201.270-72",
    senha: "123",
    usuario: "maria",
    endereco: enderecoMaria
}

var cliente = new Cliente(ICliente);
console.log(cliente.toStringPessoa() + cliente.toString());

// xxx Cliente tem lista de Produtos
console.log(cliente.obterNome()+" tem lista de produtos...\n");
var lista = [produtoA, produtoB, produtoC];
//xxxx Cliente faz pedido ao E-commerce
var IPedido: PedidoInterface = {
    listaProdutos: [produtoA, produtoB, produtoC],
    freteTarifado: true
}

var pedido = new Pedido(IPedido);

console.log("Total do pedido: R$" + pedido.obterValorTotalPedido());
// Forma de  Pagamento
console.log("Forma de Pagamento...");

var IFormaPagamento: FormaPagamentoInterface = {
    modoPagamento: 'boleto'
}
var forma = new FormaPagamento(IFormaPagamento);

console.log("Forma de Pagamento: "+ forma.obterModoPagamento());
console.log(forma.pagarPorBoleto());
