
// =====================================================
// VELA VIBE - SISTEMA COMPLETO
// Produtos | Carrinho | Frete | Atacado | Personalização
// Quiz | Finalização | Acompanhamento de pedidos
// =====================================================


// =====================================================
// 1. CONFIGURAÇÕES COMERCIAIS
// =====================================================

const PRECO_VELA_NORMAL = 30.00;
const PRECO_VELA_ATACADO = 25.00;
const QUANTIDADE_ATACADO = 12;

// Peso estimado por vela, incluindo pote e embalagem
const PESO_VELA_GRAMAS = 500;
const PESO_MAXIMO_FRETE = 20000;

// Valores acadêmicos: não são cotações oficiais dos Correios.

const FRETES_REGIOES = {

    "sudeste": [
        { limite: 2000, valor: 20 },
        { limite: 5000, valor: 28 },
        { limite: 10000, valor: 40 },
        { limite: 15000, valor: 52 },
        { limite: 20000, valor: 64 }
    ],

    "sul": [
        { limite: 2000, valor: 25 },
        { limite: 5000, valor: 36 },
        { limite: 10000, valor: 52 },
        { limite: 15000, valor: 68 },
        { limite: 20000, valor: 84 }
    ],

    "centro-oeste": [
        { limite: 2000, valor: 28 },
        { limite: 5000, valor: 40 },
        { limite: 10000, valor: 60 },
        { limite: 15000, valor: 80 },
        { limite: 20000, valor: 100 }
    ],

    "nordeste": [
        { limite: 2000, valor: 34 },
        { limite: 5000, valor: 48 },
        { limite: 10000, valor: 72 },
        { limite: 15000, valor: 96 },
        { limite: 20000, valor: 120 }
    ],

    "norte": [
        { limite: 2000, valor: 40 },
        { limite: 5000, valor: 60 },
        { limite: 10000, valor: 88 },
        { limite: 15000, valor: 116 },
        { limite: 20000, valor: 144 }
    ]

};


// =====================================================
// 2. CADASTRO DOS PRODUTOS
// =====================================================

const produtos = {

    // COLEÇÃO TRADICIONAL

    baunilha: {
        nome: "Vela de Baunilha",
        imagem: "img/baunilha.jpg",
        descricao: "Nossa vela artesanal com aroma suave de baunilha é perfeita para deixar o ambiente mais aconchegante e agradável, exalando a vibe de calmaria. A doçura clássica da fava de baunilha reinterpretada em uma fragrância madura, sofisticada e envolvente. Esta vela foi desenhada para quem busca elevar a atmosfera da casa através de notas gourmands que equilibram perfeitamente o dulçor cremoso com uma presença marcante e elegante."
    },

    lavanda: {
        nome: "Vela de Lavanda",
        imagem: "img/lavanda.jpg",
        descricao: "Nossa vela artesanal com aroma suave de lavanda traz suavidade e a magia de um momento consigo. Sabe aquele momento do dia em que tudo o que você precisa é desacelerar e respirar fundo? A nossa vela de Lavanda é o convite perfeito para criar o seu próprio ritual de paz. Com notas florais suaves e um toque herbáceo fresco, ela recria a sensação de caminhar por campos tranquilos ao pôr do sol. Quando acesa, sua luz suave e o aroma reconfortante ajudam a criar uma atmosfera tranquila. Transforme sua casa em um refúgio de serenidade. Ideal para o quarto, um banho relaxante ou momentos de leitura."
    },

    rosas: {
        nome: "Vela de Rosas",
        imagem: "img/rosas.jpg",
        descricao: "Nossa vela artesanal com aroma de rosas traz o toque de leveza que seu ambiente precisa. Na aromaterapia, o aroma de rosas é valorizado por suas características florais e delicadas. Uma presença marcante, mas perfeitamente equilibrada, que decora e perfuma com absoluta distinção. Sensação da fragrância: floral marcante, fresca e elegante."
    },

    canela: {
        nome: "Vela de Canela",
        imagem: "img/canela.jpg",
        descricao: "Com a nossa vela de Canela, transforme a atmosfera do seu lar com a presença marcante de seu aroma estimulante e picante. Feita de forma artesanal com ceras vegetais, ela proporciona uma experiência aromática intensa e aconchegante. Acenda e aproveite a presença envolvente das especiarias."
    },

    coco: {
        nome: "Vela de Coco",
        imagem: "img/coco.jpg",
        descricao: "Transforme a atmosfera da sua casa com o perfume envolvente e tropical da nossa Vela Aromática de Coco. Sua fragrância cremosa e refrescante traz uma sensação de paz, leveza e bem-estar. Feita de forma artesanal com um blend de ceras vegetais. Sensação da fragrância: cremosa, frutada e levemente adocicada."
    },

    jasmim: {
        nome: "Vela de Jasmim",
        imagem: "img/jasmim.jpg",
        descricao: "Existem aromas que desaceleram o tempo e acalmam o coração. A nossa vela de Jasmim captura a essência dessa flor, trazendo para o seu lar uma atmosfera de paz e delicadeza. Com notas florais intensas e delicadamente adocicadas, é uma escolha sofisticada para quem deseja uma casa perfumada com personalidade e frescor. Ideal para momentos de leitura, meditação ou descanso."
    },


    // COLEÇÃO ESTAÇÕES

    verao: {
        nome: "Vela Verão",
        imagem: "img/velaverão.jpg",
        descricao: "A Vela Verão, com aroma de Flor de Laranjeira, traz energia, leveza e frescor para iluminar seus dias. Uma fragrância especial para deixar o ambiente mais agradável e cheio de vitalidade."
    },

    outono: {
        nome: "Vela Outono",
        imagem: "img/velaoutono.jpg",
        descricao: "A Vela Outono combina Canela e Cravo em uma fragrância que transmite aconchego, equilíbrio e transformação. Uma combinação de especiarias para tornar seus momentos ainda mais acolhedores."
    },

    inverno: {
        nome: "Vela Inverno",
        imagem: "img/veladeinverno.jpg",
        descricao: "A Vela Inverno, com aroma de Lavanda, proporciona conforto, calma e momentos de tranquilidade. Uma fragrância delicada para acompanhar seus momentos de descanso."
    },

    primavera: {
        nome: "Vela Primavera",
        imagem: "img/velaprimavera.jpg",
        descricao: "A Vela Primavera traz o aroma de Flor de Cerejeira, inspirado na renovação, na alegria e na beleza de florescer. Uma fragrância floral para deixar o ambiente mais leve e especial."
    }

};


// =====================================================
// 3. FUNÇÕES GERAIS
// =====================================================

function formatarPreco(valor) {

    return "R$ " +
        Number(valor).toFixed(2).replace(".", ",");

}


function obterCarrinho() {

    try {

        const carrinho =
            JSON.parse(localStorage.getItem("carrinho"));

        return Array.isArray(carrinho) ? carrinho : [];

    } catch (erro) {

        return [];

    }

}


function salvarCarrinho(carrinho) {

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

}


function calcularQuantidadeTotal(carrinho) {

    return carrinho.reduce(function(total, item) {

        return total + Math.max(
            0,
            Number(item.quantidade) || 0
        );

    }, 0);

}


function calcularPrecoUnitario(quantidade) {

    return quantidade >= QUANTIDADE_ATACADO
        ? PRECO_VELA_ATACADO
        : PRECO_VELA_NORMAL;

}


function calcularSubtotal(carrinho) {

    const quantidade =
        calcularQuantidadeTotal(carrinho);

    const preco =
        calcularPrecoUnitario(quantidade);

    return quantidade * preco;

}


function atualizarPrecosCarrinho(carrinho) {

    const quantidade =
        calcularQuantidadeTotal(carrinho);

    const preco =
        calcularPrecoUnitario(quantidade);

    carrinho.forEach(function(item) {

        item.valor = preco;
        item.preco = formatarPreco(preco);

    });

    salvarCarrinho(carrinho);

}


// =====================================================
// 4. CÁLCULO DO PESO E DO FRETE
// =====================================================

function normalizarRegiao(regiao) {

    return String(regiao || "")
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

}


function calcularPesoTotal(carrinho) {

    return calcularQuantidadeTotal(carrinho) *
        PESO_VELA_GRAMAS;

}


function formatarPeso(gramas) {

    return (gramas / 1000)
        .toFixed(2)
        .replace(".", ",") + " kg";

}


function calcularFrete(regiao, carrinho) {

    const regiaoNormalizada =
        normalizarRegiao(regiao);

    const tabela =
        FRETES_REGIOES[regiaoNormalizada];

    if (!tabela || !carrinho || carrinho.length === 0) {
        return null;
    }

    const pesoTotal =
        calcularPesoTotal(carrinho);

    if (pesoTotal > PESO_MAXIMO_FRETE) {
        return null;
    }

    const faixa =
        tabela.find(function(item) {

            return pesoTotal <= item.limite;

        });

    return faixa ? faixa.valor : null;

}


function regiaoValida(regiao) {

    return Boolean(
        FRETES_REGIOES[normalizarRegiao(regiao)]
    );

}


function obterRegiaoSalva() {

    return normalizarRegiao(
        localStorage.getItem("regiaoEntrega")
    );

}


// =====================================================
// 5. PÁGINA DE COMPRA
// =====================================================

const parametros =
    new URLSearchParams(window.location.search);

const produtoSelecionado =
    parametros.get("produto") || "baunilha";

// Se a página for aberta sem produto na URL,
// a vela de Baunilha será exibida como padrão.

const produto =
    produtos[produtoSelecionado] || produtos.baunilha;

const idProdutoAtual =
    produtos[produtoSelecionado]
        ? produtoSelecionado
        : "baunilha";


const nomeProduto =
    document.getElementById("nome-produto");

const precoProduto =
    document.getElementById("preco-produto");

const descricaoProduto =
    document.getElementById("descricao-produto");

const imagemProduto =
    document.getElementById("imagem-produto-img");

const campoQuantidade =
    document.getElementById("quantidade");

const botaoAdicionarCompra =
    document.getElementById("adicionar-carrinho");

const subtotalProduto =
    document.getElementById("subtotal-produto");

const mensagemDescontoCompra =
    document.getElementById("mensagem-desconto");


if (nomeProduto) {
    nomeProduto.textContent = produto.nome;
}


if (descricaoProduto) {
    descricaoProduto.textContent = produto.descricao;
}


if (imagemProduto) {

    imagemProduto.src = produto.imagem;
    imagemProduto.alt = produto.nome;

}


if (campoQuantidade) {

    campoQuantidade.min = 1;

    if (!campoQuantidade.value || Number(campoQuantidade.value) < 1) {
        campoQuantidade.value = 1;
    }

}


// ATUALIZAR PREÇO, SUBTOTAL E DESCONTO

function atualizarPrecoPaginaCompra() {

    if (!campoQuantidade) return;

    const quantidadeEscolhida =
        Math.max(1, Number(campoQuantidade.value) || 1);

    const carrinho = obterCarrinho();

    const quantidadeNoCarrinho =
        calcularQuantidadeTotal(carrinho);

    const quantidadeProjetada =
        quantidadeNoCarrinho + quantidadeEscolhida;

    const preco =
        calcularPrecoUnitario(quantidadeProjetada);

    const subtotal =
        quantidadeEscolhida * preco;


    if (precoProduto) {
        precoProduto.textContent = formatarPreco(preco);
    }

    if (subtotalProduto) {
        subtotalProduto.textContent = formatarPreco(subtotal);
    }

    if (mensagemDescontoCompra) {

        if (quantidadeProjetada >= QUANTIDADE_ATACADO) {

            mensagemDescontoCompra.textContent =
                "Preço especial aplicado: R$ 25,00 por vela!";

        } else {

            const faltam =
                QUANTIDADE_ATACADO - quantidadeProjetada;

            mensagemDescontoCompra.textContent =
                "Adicione mais " + faltam +
                " vela(s) ao pedido para alcançar o preço especial.";

        }

    }

}


if (campoQuantidade) {

    campoQuantidade.addEventListener(
        "input",
        atualizarPrecoPaginaCompra
    );

    atualizarPrecoPaginaCompra();

}


// ADICIONAR PRODUTO AO CARRINHO

if (botaoAdicionarCompra) {

    botaoAdicionarCompra.addEventListener(
        "click",
        function() {

            const quantidade =
                Number(campoQuantidade ? campoQuantidade.value : 1);

            if (!Number.isInteger(quantidade) || quantidade < 1) {

                alert("Escolha uma quantidade válida.");

                return;

            }

            const carrinho = obterCarrinho();

            const existente =
                carrinho.find(function(item) {

                    return item.id === idProdutoAtual &&
                        !item.personalizada;

                });

            if (existente) {

                existente.quantidade =
                    Number(existente.quantidade) + quantidade;

            } else {

                carrinho.push({

                    id: idProdutoAtual,
                    nome: produto.nome,
                    imagem: produto.imagem,
                    quantidade: quantidade,
                    personalizada: false,
                    tamanho: "150 ml"

                });

            }

            atualizarPrecosCarrinho(carrinho);

            alert(
                produto.nome +
                " foi adicionado ao carrinho!"
            );

        }
    );

}



// =====================================================
// 6. CARRINHO DE COMPRAS
// =====================================================

const listaCarrinho =
    document.getElementById("lista-carrinho");

const subtotalCarrinho =
    document.getElementById("subtotal");

const totalCarrinho =
    document.getElementById("total");

const campoRegiao =
    document.getElementById("regiao-frete");

const valorFrete =
    document.getElementById("valor-frete");

const mensagemDesconto =
    document.getElementById("mensagem-desconto");


function renderizarCarrinho() {

    if (!listaCarrinho) return;

    const carrinho = obterCarrinho();

    listaCarrinho.innerHTML = "";

    // CARRINHO VAZIO

    if (carrinho.length === 0) {

        listaCarrinho.innerHTML = `
            <div class="carrinho-vazio">
                <h2>Seu carrinho está vazio</h2>
                <p>Que tal escolher uma vela para deixar seu ambiente ainda mais especial?</p>
                <a href="Produtos.html">Explorar produtos</a>
            </div>
        `;

        if (subtotalCarrinho) {
            subtotalCarrinho.textContent = "R$ 0,00";
        }

        if (totalCarrinho) {
            totalCarrinho.textContent = "R$ 0,00";
        }

        if (valorFrete) {
            valorFrete.textContent = "R$ 0,00";
        }

        const pesoExibido =
            document.getElementById("peso-estimado");

        if (pesoExibido) {
            pesoExibido.textContent = "0,00 kg";
        }

        if (mensagemDesconto) {
            mensagemDesconto.textContent = "";
        }

        return;
    }


    // CÁLCULOS

    const quantidadeTotal =
        calcularQuantidadeTotal(carrinho);

    const precoUnitario =
        calcularPrecoUnitario(quantidadeTotal);

    const subtotal =
        quantidadeTotal * precoUnitario;

    const regiao =
        campoRegiao
            ? campoRegiao.value
            : obterRegiaoSalva();

    const frete =
        calcularFrete(regiao, carrinho);

    const pesoTotal =
        calcularPesoTotal(carrinho);

    const total =
        frete !== null
            ? subtotal + frete
            : null;


    // ATUALIZAR PREÇOS SALVOS

    atualizarPrecosCarrinho(carrinho);


    // CRIAR CARTÕES DOS PRODUTOS

    carrinho.forEach(function(item, indice) {

        const cartao = document.createElement("article");

        cartao.classList.add("item-carrinho");


        // IMAGEM

        const imagem = document.createElement("img");

        imagem.classList.add("imagem-item-carrinho");

        imagem.src = item.imagem || "img/logo.jpg";

        imagem.alt = item.nome;

        imagem.onerror = function() {
            imagem.src = "img/logo.jpg";
        };


        // INFORMAÇÕES

        const informacoes = document.createElement("div");

        informacoes.classList.add("informacoes-item-carrinho");


        const nome = document.createElement("h2");

        nome.textContent = item.nome;


        const tamanho = document.createElement("p");

        tamanho.textContent =
            "Tamanho: " + (item.tamanho || "150 ml");


        const preco = document.createElement("p");

        preco.classList.add("preco-item-carrinho");

        preco.textContent =
            "Preço unitário: " + formatarPreco(precoUnitario);


        // DETALHES DA PERSONALIZAÇÃO

        if (item.personalizada) {

            const aroma = document.createElement("p");

            aroma.textContent = "Aroma: " + item.aroma;


            const cor = document.createElement("p");

            cor.textContent = "Cor: " + item.cor;


            const nomePote = document.createElement("p");

            nomePote.textContent =
                "Nome no pote: " + item.nomePote;


            informacoes.append(
                aroma,
                cor,
                nomePote
            );

        }


        // SUBTOTAL DO ITEM

        const subtotalItem = document.createElement("p");

        subtotalItem.classList.add("subtotal-item-carrinho");

        subtotalItem.textContent =
            "Subtotal: " +
            formatarPreco(precoUnitario * item.quantidade);


        // CONTROLES DE QUANTIDADE

        const controles = document.createElement("div");

        controles.classList.add("controle-quantidade");


        const diminuir = document.createElement("button");

        diminuir.type = "button";

        diminuir.textContent = "−";

        diminuir.setAttribute("aria-label", "Diminuir quantidade");


        const quantidade = document.createElement("span");

        quantidade.textContent = item.quantidade;


        const aumentar = document.createElement("button");

        aumentar.type = "button";

        aumentar.textContent = "+";

        aumentar.setAttribute("aria-label", "Aumentar quantidade");


        controles.append(
            diminuir,
            quantidade,
            aumentar
        );


        // REMOVER

        const remover = document.createElement("button");

        remover.type = "button";

        remover.classList.add("remover-item-carrinho");

        remover.textContent = "Remover";


        // MONTAR CARTÃO

        informacoes.append(
            nome,
            tamanho,
            preco,
            subtotalItem,
            controles,
            remover
        );

        cartao.append(
            imagem,
            informacoes
        );

        listaCarrinho.appendChild(cartao);


        // AUMENTAR QUANTIDADE

        aumentar.addEventListener("click", function() {

            carrinho[indice].quantidade++;

            salvarCarrinho(carrinho);

            renderizarCarrinho();

        });


        // DIMINUIR QUANTIDADE

        diminuir.addEventListener("click", function() {

            if (carrinho[indice].quantidade > 1) {

                carrinho[indice].quantidade--;

                salvarCarrinho(carrinho);

                renderizarCarrinho();

            }

        });


        // REMOVER PRODUTO

        remover.addEventListener("click", function() {

            carrinho.splice(indice, 1);

            salvarCarrinho(carrinho);

            renderizarCarrinho();

        });

    });


    // SUBTOTAL GERAL

    if (subtotalCarrinho) {
        subtotalCarrinho.textContent = formatarPreco(subtotal);
    }


    // FRETE

    if (valorFrete) {

        if (!regiao) {

            valorFrete.textContent = "Selecione sua região";

        } else if (frete === null) {

            valorFrete.textContent = "Frete indisponível";

        } else {

            valorFrete.textContent = formatarPreco(frete);

        }

    }


    // PESO

    const pesoExibido =
        document.getElementById("peso-estimado");

    if (pesoExibido) {
        pesoExibido.textContent = formatarPeso(pesoTotal);
    }


    // TOTAL

    if (totalCarrinho) {

        totalCarrinho.textContent =
            total !== null
                ? formatarPreco(total)
                : "Aguardando cálculo do frete";

    }


    // DESCONTO

    if (mensagemDesconto) {

        mensagemDesconto.textContent =
            quantidadeTotal >= QUANTIDADE_ATACADO

                ? "Você recebeu o preço especial de R$ 25,00 por vela!"

                : "Faltam " +
                  (QUANTIDADE_ATACADO - quantidadeTotal) +
                  " vela(s) para alcançar o preço especial.";

    }

}


// SELEÇÃO DA REGIÃO

if (campoRegiao) {

    const regiaoSalva = obterRegiaoSalva();

    if (regiaoSalva && regiaoValida(regiaoSalva)) {
        campoRegiao.value = regiaoSalva;
    }

    campoRegiao.addEventListener("change", function() {

        const regiaoSelecionada =
            normalizarRegiao(campoRegiao.value);

        localStorage.setItem(
            "regiaoEntrega",
            regiaoSelecionada
        );

        renderizarCarrinho();

    });

}


// RENDERIZAR CARRINHO

if (listaCarrinho) {
    renderizarCarrinho();
}


// =====================================================
// 7. ADICIONAR PRODUTOS NA PÁGINA INICIAL
// =====================================================

const botoesAdicionar =
    document.querySelectorAll(
        ".adicionar-carrinho:not(#adicionar-carrinho)"
    );


botoesAdicionar.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const idProduto =
            botao.getAttribute("data-produto");

        const produtoSelecionado =
            produtos[idProduto];

        if (!produtoSelecionado) {

            alert("Produto não encontrado.");

            return;

        }

        const carrinho = obterCarrinho();

        const existente =
            carrinho.find(function(item) {

                return item.id === idProduto &&
                    !item.personalizada;

            });

        if (existente) {

            existente.quantidade++;

        } else {

            carrinho.push({

                id: idProduto,
                nome: produtoSelecionado.nome,
                imagem: produtoSelecionado.imagem,
                quantidade: 1,
                personalizada: false,
                tamanho: "150 ml"

            });

        }

        atualizarPrecosCarrinho(carrinho);

        alert(
            produtoSelecionado.nome +
            " foi adicionado ao carrinho!"
        );

    });

});


// =====================================================
// 8. CRIE SUA VELA
// Todas as velas possuem 150 ml.
// =====================================================

const botoesAroma =
    document.querySelectorAll(".selecionar-aroma");

const botoesCor =
    document.querySelectorAll(".selecionar-cor");

const aromaEscolhido =
    document.getElementById("aroma-escolhido");

const corEscolhida =
    document.getElementById("cor-escolhida");

const nomeEscolhido =
    document.getElementById("nome-escolhido");

const precoVela =
    document.getElementById("preco-vela");

const nomePersonalizado =
    document.getElementById("nome-personalizado");

const botaoAdicionarVela =
    document.getElementById("adicionar-vela-personalizada");


let aromaSelecionado = "";
let corSelecionada = "";


if (precoVela) {

    precoVela.textContent =
        formatarPreco(PRECO_VELA_NORMAL);

}


// ESCOLHER AROMA

botoesAroma.forEach(function(botao) {

    botao.addEventListener("click", function() {

        botoesAroma.forEach(function(outro) {
            outro.classList.remove("selecionado");
        });

        botao.classList.add("selecionado");

        aromaSelecionado =
            botao.getAttribute("data-aroma");

        if (aromaEscolhido) {
            aromaEscolhido.textContent = aromaSelecionado;
        }

    });

});


// ESCOLHER COR

botoesCor.forEach(function(botao) {

    botao.addEventListener("click", function() {

        botoesCor.forEach(function(outro) {
            outro.classList.remove("selecionado");
        });

        botao.classList.add("selecionado");

        corSelecionada =
            botao.getAttribute("data-cor");

        if (corEscolhida) {
            corEscolhida.textContent = corSelecionada;
        }

    });

});


// PERSONALIZAR NOME

if (nomePersonalizado) {

    nomePersonalizado.addEventListener("input", function() {

        if (nomeEscolhido) {

            nomeEscolhido.textContent =
                nomePersonalizado.value.trim() ||
                "Nenhum nome informado";

        }

    });

}


// ADICIONAR VELA PERSONALIZADA

if (botaoAdicionarVela) {

    botaoAdicionarVela.addEventListener(
        "click",
        function() {

            if (!aromaSelecionado) {

                alert("Escolha o aroma da vela.");

                return;

            }

            if (!corSelecionada) {

                alert("Escolha a cor da vela.");

                return;

            }

            const nomePote =
                nomePersonalizado &&
                nomePersonalizado.value.trim()
                    ? nomePersonalizado.value.trim()
                    : "Sem nome";


            const velaPersonalizada = {

                id: "vela-personalizada-" + Date.now(),

                nome: "Vela personalizada",

                quantidade: 1,

                valor: PRECO_VELA_NORMAL,

                preco: formatarPreco(PRECO_VELA_NORMAL),

                personalizada: true,

                tamanho: "150 ml",

                aroma: aromaSelecionado,

                cor: corSelecionada,

                nomePote: nomePote

            };


            const carrinho = obterCarrinho();

            carrinho.push(velaPersonalizada);

            atualizarPrecosCarrinho(carrinho);

            alert(
                "Sua vela personalizada foi adicionada ao carrinho!"
            );

            window.location.href = "Carrinho.html";

        }
    );

}


// =====================================================
// 9. RESUMO DA FINALIZAÇÃO
// =====================================================

const resumoProdutos =
    document.getElementById("resumo-produtos");

const subtotalFinal =
    document.getElementById("subtotal-final");

const freteFinal =
    document.getElementById("frete-final");

const totalFinal =
    document.getElementById("total-final");


function renderizarResumoFinal() {

    if (!resumoProdutos) return;

    const carrinho = obterCarrinho();

    resumoProdutos.innerHTML = "";


    if (carrinho.length === 0) {

        resumoProdutos.textContent =
            "Seu carrinho está vazio.";

        if (subtotalFinal) {
            subtotalFinal.textContent = "R$ 0,00";
        }

        if (freteFinal) {
            freteFinal.textContent = "R$ 0,00";
        }

        if (totalFinal) {
            totalFinal.textContent = "R$ 0,00";
        }

        return;

    }


    atualizarPrecosCarrinho(carrinho);

    const quantidade =
        calcularQuantidadeTotal(carrinho);

    const preco =
        calcularPrecoUnitario(quantidade);

    const subtotal =
        calcularSubtotal(carrinho);

    const regiao =
        obterRegiaoSalva();

    const frete =
        calcularFrete(regiao, carrinho);

    const total =
        frete !== null
            ? subtotal + frete
            : null;

    const pesoTotal =
        calcularPesoTotal(carrinho);


    // PRODUTOS DO PEDIDO

    carrinho.forEach(function(item) {

        const linha = document.createElement("div");

        const nome = document.createElement("p");
        nome.textContent = item.nome;

        const quantidadeItem = document.createElement("p");

        quantidadeItem.textContent =
            "Quantidade: " + item.quantidade;

        const valorItem = document.createElement("p");

        valorItem.textContent =
            "Subtotal: " +
            formatarPreco(item.quantidade * preco);

        linha.append(
            nome,
            quantidadeItem,
            valorItem
        );


        if (item.personalizada) {

            const detalhes = document.createElement("p");

            detalhes.textContent =
                "150 ml | Aroma: " +
                item.aroma +
                " | Cor: " +
                item.cor +
                " | Nome: " +
                item.nomePote;

            linha.appendChild(detalhes);

        }

        resumoProdutos.appendChild(linha);

    });


    // SUBTOTAL

    if (subtotalFinal) {

        subtotalFinal.textContent =
            formatarPreco(subtotal);

    }


    // FRETE

    if (freteFinal) {

        freteFinal.textContent =
            frete !== null
                ? formatarPreco(frete)
                : "Frete indisponível";

    }


    // TOTAL

    if (totalFinal) {

        totalFinal.textContent =
            total !== null
                ? formatarPreco(total)
                : "Frete pendente";

    }


    // PESO ESTIMADO

    const pesoFinal =
        document.getElementById("peso-final");

    if (pesoFinal) {

        pesoFinal.textContent =
            formatarPeso(pesoTotal);

    }

}


if (resumoProdutos) {
    renderizarResumoFinal();
}


// =====================================================
// 10. FINALIZAÇÃO E REGISTRO DO PEDIDO
// =====================================================

const formularioCompra =
    document.getElementById("formulario-compra");


function gerarNumeroPedido() {

    return "VV2026-" +
        Date.now().toString().slice(-8);

}


if (formularioCompra) {

    formularioCompra.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const carrinho = obterCarrinho();

            if (carrinho.length === 0) {

                alert("Seu carrinho está vazio.");

                return;

            }


            const regiao =
                obterRegiaoSalva();

            if (!regiaoValida(regiao)) {

                alert(
                    "Selecione a região de entrega no carrinho antes de finalizar."
                );

                window.location.href = "Carrinho.html";

                return;

            }


            const quantidade =
                calcularQuantidadeTotal(carrinho);

            const preco =
                calcularPrecoUnitario(quantidade);

            const subtotal =
                calcularSubtotal(carrinho);

            const frete =
                calcularFrete(regiao, carrinho);


            if (frete === null) {

                alert(
                    "Não foi possível calcular o frete. " +
                    "Verifique a região e o peso do pedido."
                );

                window.location.href = "Carrinho.html";

                return;

            }


            const pesoTotal =
                calcularPesoTotal(carrinho);

            const total =
                subtotal + frete;


            const pedido = {

                numero: gerarNumeroPedido(),

                data: new Date().toISOString(),

                produtos: carrinho,

                quantidade: quantidade,

                precoUnitario: preco,

                subtotal: subtotal,

                regiao: regiao,

                pesoGramas: pesoTotal,

                frete: frete,

                total: total,

                status: 0

            };


            localStorage.setItem(
                "pedidoAtual",
                JSON.stringify(pedido)
            );


            localStorage.setItem(
                "numeroPedidoVelaVibe",
                pedido.numero
            );


            localStorage.removeItem("carrinho");


            alert(
                "Pedido registrado com sucesso!\n\n" +
                "Número do pedido: " + pedido.numero +
                "\nTotal: " + formatarPreco(total)
            );


            window.location.href = "Sucesso.html";

        }
    );

}


// =====================================================
// 11. BOTÃO FINALIZAR COMPRA
// =====================================================

const botaoFinalizar =
    document.getElementById("finalizar-compra");


if (botaoFinalizar) {

    botaoFinalizar.addEventListener("click", function() {

        const carrinho = obterCarrinho();

        if (carrinho.length === 0) {

            alert("Seu carrinho está vazio.");

            return;

        }


        const regiao =
            obterRegiaoSalva();

        if (!regiaoValida(regiao)) {

            alert("Selecione a região de entrega.");

            if (campoRegiao) {
                campoRegiao.focus();
            }

            return;

        }


        const frete =
            calcularFrete(regiao, carrinho);

        if (frete === null) {

            alert(
                "O frete não está disponível para esse peso. " +
                "Verifique seu carrinho."
            );

            return;

        }


        window.location.href = "Finalizar.html";

    });

}


// =====================================================
// 12. QUIZ - DESCUBRA SUA VIBE
// =====================================================

const quizIniciar =
    document.getElementById("iniciar-quiz");

const quizContainer =
    document.getElementById("quiz-container");

const quizResultado =
    document.getElementById("quiz-resultado");

const quizPergunta =
    document.getElementById("quiz-pergunta");

const quizOpcoes =
    document.getElementById("quiz-opcoes");

const quizNumero =
    document.getElementById("quiz-numero");

const quizProgresso =
    document.getElementById("progresso-quiz");

const quizProxima =
    document.getElementById("proxima-pergunta");

const quizRefazer =
    document.getElementById("refazer-quiz");

const resultadoTitulo =
    document.getElementById("resultado-titulo");

const resultadoImagem =
    document.getElementById("resultado-imagem");

const resultadoDescricao =
    document.getElementById("resultado-descricao");

const resultadoLink =
    document.getElementById("resultado-link");


const perguntasQuiz = [

    {
        pergunta: "Qual ambiente combina mais com você?",
        opcoes: [
            { texto: "Um lugar tranquilo e relaxante", vela: "lavanda" },
            { texto: "Um espaço delicado e romântico", vela: "rosas" },
            { texto: "Um cantinho quente e aconchegante", vela: "canela" },
            { texto: "Um ambiente leve e alegre", vela: "coco" }
        ]
    },

    {
        pergunta: "Qual sensação você gostaria de trazer para o ambiente?",
        opcoes: [
            { texto: "Calma e tranquilidade", vela: "lavanda" },
            { texto: "Delicadeza e carinho", vela: "rosas" },
            { texto: "Aconchego e calor", vela: "canela" },
            { texto: "Leveza e frescor", vela: "coco" }
        ]
    },

    {
        pergunta: "Escolha uma vibe para o seu momento.",
        opcoes: [
            { texto: "Relaxar depois de um dia cheio", vela: "lavanda" },
            { texto: "Criar um momento especial", vela: "rosas" },
            { texto: "Curtir um momento aconchegante", vela: "baunilha" },
            { texto: "Deixar tudo mais leve", vela: "jasmim" }
        ]
    },

    {
        pergunta: "Qual dessas palavras mais combina com você?",
        opcoes: [
            { texto: "Tranquilidade", vela: "lavanda" },
            { texto: "Delicadeza", vela: "rosas" },
            { texto: "Aconchego", vela: "baunilha" },
            { texto: "Leveza", vela: "jasmim" }
        ]
    }

];


const resultadoVelasQuiz = {

    baunilha: {
        nome: "Vela de Baunilha",
        imagem: "img/baunilha.jpg",
        descricao: "Uma escolha aconchegante e delicada, perfeita para quem gosta de criar um ambiente acolhedor.",
        link: "Compra.html?produto=baunilha"
    },

    lavanda: {
        nome: "Vela de Lavanda",
        imagem: "img/lavanda.jpg",
        descricao: "Uma escolha suave para quem busca momentos de tranquilidade e relaxamento.",
        link: "Compra.html?produto=lavanda"
    },

    rosas: {
        nome: "Vela de Rosas",
        imagem: "img/rosas.jpg",
        descricao: "Uma escolha delicada e especial para quem gosta de ambientes florais.",
        link: "Compra.html?produto=rosas"
    },

    canela: {
        nome: "Vela de Canela",
        imagem: "img/canela.jpg",
        descricao: "Uma escolha marcante e aconchegante para quem gosta de aromas quentes.",
        link: "Compra.html?produto=canela"
    },

    coco: {
        nome: "Vela de Coco",
        imagem: "img/coco.jpg",
        descricao: "Uma escolha leve e agradável para quem gosta de frescor.",
        link: "Compra.html?produto=coco"
    },

    jasmim: {
        nome: "Vela de Jasmim",
        imagem: "img/jasmim.jpg",
        descricao: "Uma escolha floral para quem gosta de ambientes delicados.",
        link: "Compra.html?produto=jasmim"
    }

};


let perguntaAtualQuiz = 0;
let respostasQuiz = [];
let opcaoSelecionadaQuiz = null;


function mostrarPerguntaQuiz() {

    if (!quizPergunta || !quizOpcoes) return;

    const pergunta =
        perguntasQuiz[perguntaAtualQuiz];

    if (!pergunta) {

        mostrarResultadoQuiz();

        return;

    }


    if (quizNumero) {

        quizNumero.textContent =
            "Pergunta " +
            (perguntaAtualQuiz + 1) +
            " de " +
            perguntasQuiz.length;

    }


    if (quizProgresso) {

        quizProgresso.style.width =
            ((perguntaAtualQuiz + 1) /
            perguntasQuiz.length * 100) + "%";

    }


    quizPergunta.textContent = pergunta.pergunta;

    quizOpcoes.innerHTML = "";

    opcaoSelecionadaQuiz = null;


    if (quizProxima) {
        quizProxima.disabled = true;
    }


    pergunta.opcoes.forEach(function(opcao) {

        const botao = document.createElement("button");

        botao.type = "button";
        botao.classList.add("quiz-opcao");
        botao.textContent = opcao.texto;


        botao.addEventListener("click", function() {

            quizOpcoes.querySelectorAll(".quiz-opcao")
                .forEach(function(outro) {

                    outro.classList.remove("selecionada");

                });

            botao.classList.add("selecionada");

            opcaoSelecionadaQuiz = opcao.vela;

            if (quizProxima) {
                quizProxima.disabled = false;
            }

        });

        quizOpcoes.appendChild(botao);

    });

}


function mostrarResultadoQuiz() {

    if (respostasQuiz.length === 0) return;

    const contagem = {};

    respostasQuiz.forEach(function(vela) {

        contagem[vela] =
            (contagem[vela] || 0) + 1;

    });


    let vencedora = respostasQuiz[0];

    Object.keys(contagem).forEach(function(vela) {

        if (contagem[vela] > contagem[vencedora]) {
            vencedora = vela;
        }

    });


    const resultado =
        resultadoVelasQuiz[vencedora];

    if (!resultado) return;


    if (resultadoTitulo) {
        resultadoTitulo.textContent = resultado.nome;
    }

    if (resultadoImagem) {

        resultadoImagem.src = resultado.imagem;
        resultadoImagem.alt = resultado.nome;

    }

    if (resultadoDescricao) {
        resultadoDescricao.textContent = resultado.descricao;
    }

    if (resultadoLink) {
        resultadoLink.href = resultado.link;
    }

    if (quizContainer) {
        quizContainer.style.display = "none";
    }

    if (quizResultado) {

        quizResultado.style.display = "block";

        quizResultado.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}


if (quizIniciar) {

    quizIniciar.addEventListener("click", function() {

        quizIniciar.style.display = "none";

        if (quizContainer) {
            quizContainer.style.display = "block";
        }

        if (quizResultado) {
            quizResultado.style.display = "none";
        }

        perguntaAtualQuiz = 0;
        respostasQuiz = [];

        mostrarPerguntaQuiz();

    });

}


if (quizProxima) {

    quizProxima.addEventListener("click", function() {

        if (!opcaoSelecionadaQuiz) return;

        respostasQuiz.push(opcaoSelecionadaQuiz);

        perguntaAtualQuiz++;

        if (perguntaAtualQuiz < perguntasQuiz.length) {

            mostrarPerguntaQuiz();

        } else {

            mostrarResultadoQuiz();

        }

    });

}


if (quizRefazer) {

    quizRefazer.addEventListener("click", function() {

        perguntaAtualQuiz = 0;
        respostasQuiz = [];
        opcaoSelecionadaQuiz = null;

        if (quizResultado) {
            quizResultado.style.display = "none";
        }

        if (quizContainer) {
            quizContainer.style.display = "block";
        }

        if (quizIniciar) {
            quizIniciar.style.display = "none";
        }

        mostrarPerguntaQuiz();

    });

}


// =====================================================
// 13. ACOMPANHAMENTO DE PEDIDOS
// =====================================================

const campoNumeroPedido =
    document.getElementById("numero-pedido");

const botaoConsultarPedido =
    document.getElementById("consultar-pedido");

const mensagemPedido =
    document.getElementById("mensagem-pedido");

const informacoesPedido =
    document.getElementById("informacoes-pedido");

const numeroPedidoExibido =
    document.getElementById("numero-pedido-exibido");

const statusAtual =
    document.getElementById("status-atual");

const produtoPedidoNome =
    document.getElementById("produto-pedido-nome");

const produtoPedidoDetalhes =
    document.getElementById("produto-pedido-detalhes");

const mensagemEntregaTexto =
    document.getElementById("mensagem-entrega-texto");

const botaoAvancarStatus =
    document.getElementById("avancar-status");


const etapasEntrega = [

    {
        status: "Pedido realizado",
        mensagem: "Seu pedido foi registrado com sucesso."
    },

    {
        status: "Pedido confirmado",
        mensagem: "Seu pedido foi confirmado."
    },

    {
        status: "Preparando sua vela",
        mensagem: "Estamos preparando seu pedido."
    },

    {
        status: "Pedido enviado",
        mensagem: "Seu pedido foi marcado como enviado."
    },

    {
        status: "Pedido entregue",
        mensagem: "Seu pedido foi marcado como entregue. Obrigada por comprar na Vela Vibe!"
    }

];


let pedidoConsultado = null;


function atualizarRastreamento() {

    if (!pedidoConsultado) return;

    const etapaAtual =
        Number(pedidoConsultado.status) || 0;


    for (let i = 1; i <= 5; i++) {

        const etapa =
            document.getElementById("etapa-" + i);

        if (!etapa) continue;

        etapa.classList.remove("ativa", "concluida");

        if (i - 1 < etapaAtual) {

            etapa.classList.add("concluida");

        } else if (i - 1 === etapaAtual) {

            etapa.classList.add("ativa");

        }

    }


    for (let i = 1; i <= 4; i++) {

        const linha =
            document.getElementById("linha-" + i);

        if (!linha) continue;

        linha.classList.toggle(
            "concluida",
            i <= etapaAtual
        );

    }


    const etapa =
        etapasEntrega[etapaAtual];

    if (!etapa) return;


    if (statusAtual) {
        statusAtual.textContent = etapa.status;
    }

    if (mensagemEntregaTexto) {
        mensagemEntregaTexto.textContent = etapa.mensagem;
    }


    if (botaoAvancarStatus) {

        if (etapaAtual === etapasEntrega.length - 1) {

            botaoAvancarStatus.textContent = "Pedido entregue";

            botaoAvancarStatus.disabled = true;

            botaoAvancarStatus.classList.add("finalizado");

        } else {

            botaoAvancarStatus.textContent = "Avançar status";

            botaoAvancarStatus.disabled = false;

            botaoAvancarStatus.classList.remove("finalizado");

        }

    }

}


// CONSULTAR PEDIDO

if (botaoConsultarPedido) {

    botaoConsultarPedido.addEventListener("click", function() {

        const digitado =
            campoNumeroPedido
                ? campoNumeroPedido.value.trim().toUpperCase()
                : "";


        if (!digitado) {

            if (mensagemPedido) {
                mensagemPedido.textContent =
                    "Digite o número do seu pedido.";
            }

            if (informacoesPedido) {
                informacoesPedido.style.display = "none";
            }

            return;

        }


        let pedido = null;

        try {

            pedido = JSON.parse(
                localStorage.getItem("pedidoAtual")
            );

        } catch (erro) {

            pedido = null;

        }


        if (!pedido || digitado !== String(pedido.numero).toUpperCase()) {

            if (mensagemPedido) {
                mensagemPedido.textContent =
                    "Pedido não encontrado. Verifique o número informado.";
            }

            if (informacoesPedido) {
                informacoesPedido.style.display = "none";
            }

            return;

        }


        pedidoConsultado = pedido;


        if (mensagemPedido) {
            mensagemPedido.textContent = "Pedido encontrado!";
        }

        if (numeroPedidoExibido) {
            numeroPedidoExibido.textContent = "#" + pedido.numero;
        }


        if (produtoPedidoNome) {

            produtoPedidoNome.textContent =
                pedido.produtos.map(function(item) {

                    return item.nome;

                }).join(", ");

        }


        if (produtoPedidoDetalhes) {

            produtoPedidoDetalhes.textContent =
                "Quantidade: " + pedido.quantidade +
                " | Região: " + pedido.regiao +
                " | Peso estimado: " +
                formatarPeso(pedido.pesoGramas || 0) +
                " | Frete: " + formatarPreco(pedido.frete) +
                " | Total: " + formatarPreco(pedido.total);

        }


        if (informacoesPedido) {
            informacoesPedido.style.display = "block";
        }

        atualizarRastreamento();


        if (informacoesPedido) {

            informacoesPedido.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}


// AVANÇAR STATUS

if (botaoAvancarStatus) {

    botaoAvancarStatus.addEventListener("click", function() {

        if (!pedidoConsultado) return;

        if (pedidoConsultado.status < etapasEntrega.length - 1) {

            pedidoConsultado.status++;

            localStorage.setItem(
                "pedidoAtual",
                JSON.stringify(pedidoConsultado)
            );

            atualizarRastreamento();

        }

    });

}


// =====================================================
// 14. FIM DO SISTEMA VELA VIBE
// =====================================================
