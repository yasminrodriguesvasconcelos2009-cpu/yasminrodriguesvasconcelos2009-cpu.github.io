const produtos = {

    baunilha: {
        nome: "Vela de Baunilha",
        preco: "R$ 29,90",
        valor: 29.90,
        imagem: "img/baunilha.jpg",
        descricao: "Nossa vela artesanal com aroma suave de baunilha, é perfeita para deixar o ambiente mais aconchegante e agradável, exalando a vibe de calmaria. A doçura clássica da fava de baunilha reinterpretada em uma fragrância madura, sofisticada e envolvente. Esta vela foi desenhada para quem busca elevar a atmosfera da casa através de notas gourmands que equilibram perfeitamente o dulçor cremoso com uma presença marcante e elegante."
    },

    lavanda: {
        nome: "Vela de Lavanda",
        preco: "R$ 34,90",
        valor: 34.90,
        imagem: "img/lavanda.jpg",
        descricao: "Nossa vela artesanal com aroma suave de lavanda, tras suavidade e a magia de um momento sonsigo.Sabe aquele momento do dia em que tudo o que você precisa é desacelerar e respirar fundo?A nossa vela de Lavanda é o convite perfeito para criar o seu próprio ritual de paz. Com notas florais suaves e um toque herbáceo fresco,ela recria a sensação de caminhar por campos tranquilos ao pôr do sol.Quando acesa, sua luz suave e o aroma reconfortante ajudam a acalmar os pensamentos,aliviar o estresse da rotina e preparar a mente para uma noite de sono verdadeiramente reparadora.Transforme sua casa em um refúgio de serenidade.Ideal para: O quarto antes de dormir, um banho relaxante ou momentos de leitura e meditação."
    },

    rosas: {
        nome: "Vela de Rosas",
        preco: "R$ 32,90",
        valor: 32.90,
        imagem: "img/rosas.jpg",
        descricao: "Nossa vela artesanal com aroma de Rosas,tras o toque de leveza que seu ambiente pecisa. Na aromaterapia, o aroma de rosas é amplamente valorizado por suas propriedades que ajudam a aliviar a tensão emocional, suavizar o humor e abrir o coração para o bem-estar.Uma presença marcante, mas perfeitamente equilibrada, que decora e perfuma com absoluta distinção.Sensação da fragrância: Floral marcante, fresca, elegante e de altíssima fixação."
    },

    canela: {
        nome: "Vela de Canela",
        preco: "R$ 31,90",
        valor: 31.90,
        imagem: "img/canela.jpg",
        descricao: "Com a nossa vela de Canela, transforme a atmosfera do seu lar com a presença marcante e seu aroma estimulante e picante que desperta os sentidos, renova as energias do ambiente e traz uma deliciosa sensação de vigor e prosperidade. Feita de forma 100% artesanal com ceras vegetais, ela garante uma queima limpa e um perfume intenso que preenche o espaço com sofisticação. Acenda e sinta o poder do fogo e das especiarias"
    },

    coco: {
        nome: "Vela de Coco",
        preco: "R$ 36,90",
        valor: 36.90,
        imagem: "img/coco.jpg",
        descricao: "Transforme a atmosfera da sua casa com o perfume envolvente e tropical da nossa Vela Aromática de Coco. Sua fragrância cremosa e refrescante afasta o estresse diário, trazendo uma deliciosa sensação de paz, leveza e bem-estar, como um dia de descanso sob o sol. Feita de forma 100% artesanal com um blend de ceras vegetais para garantir uma queima limpa e um aroma duradouro. Permita-se viajar sem sair do lugar.Na aromaterapia, o aroma de coco ajuda a aliviar o cansaço mental, estimula o bom humor e promove um ambiente acolhedor e receptivo. Uma presença suave e sofisticada que abraça os sentidos e complementa a estética do seu espaço com muita elegância.Sensação da fragrância: Cremosa, frutada, levemente lactônica e altamente revigorante."
    },

    jasmim: {
        nome: "Vela de Jasmim",
        preco: "R$ 33,90",
        valor: 33.90,
        imagem: "img/jasmim.jpg",
        descricao: "Existem aromas que desaceleram o tempo e acalmam o coração. A nossa vela de Jasmim captura a essência mágica dessa flor que desabrocha ao anoitecer, trazendo para o seu lar uma atmosfera de paz profunda e mistério sutil.Na aromaterapia, o jasmim é celebrado por suas propriedades que estimulam o otimismo, a autoconfiança e a criatividade, além de atuar como um suave revigorante emocional. Uma escolha sofisticada para quem deseja uma casa perfumada com personalidade, frescor e distinção. Com notas florais intensas e delicadamente adocicadas, ela purifica a energia do ambiente e renova os sentidos.Perfeita para os momentos em que você precisa se desligar do barulho do mundo exterior. Deixe que o perfume inebriante do jasmim envolva seu espaço, aliviando o estresse acumulado e preparando sua mente para um descanso merecido e revigorante.Ideal para: Rituais noturnos, momentos de meditação, um banho calmo ou para perfumar o quarto antes de dormir."
    }

};


// ===============================
// PRODUTO SELECIONADO
// ===============================

const parametros = new URLSearchParams(
    window.location.search
);

const produtoSelecionado = parametros.get("produto");

const produto = produtoSelecionado
    ? produtos[produtoSelecionado]
    : null;


// ===============================
// PÁGINA DE COMPRA
// ===============================

const nomeProduto =
    document.getElementById("nome-produto");

if (nomeProduto && produto) {

    document.getElementById("nome-produto").textContent =
        produto.nome;

    document.getElementById("preco-produto").textContent =
        produto.preco;

    document.getElementById("descricao-produto").textContent =
        produto.descricao;

    const imagemProduto =
        document.getElementById("imagem-produto-img");

    if (imagemProduto) {

        imagemProduto.src =
            produto.imagem;

        imagemProduto.alt =
            produto.nome;
    }
}


// ===============================
// ADICIONAR PRODUTO NORMAL AO CARRINHO
// ===============================

const botaoCarrinho =
    document.getElementById("adicionar-carrinho");

if (botaoCarrinho && produto) {

    botaoCarrinho.addEventListener("click", function() {

        const quantidade =
            Number(
                document.getElementById("quantidade").value
            );

        if (quantidade < 1) {

            alert("Escolha uma quantidade válida.");

            return;
        }


        const carrinho =
            JSON.parse(
                localStorage.getItem("carrinho")
            ) || [];


        const produtoExistente =
            carrinho.find(function(item) {

                return item.id === produtoSelecionado;

            });


        if (produtoExistente) {

            produtoExistente.quantidade += quantidade;

        } else {

            carrinho.push({

                id: produtoSelecionado,

                nome: produto.nome,

                preco: produto.preco,

                valor: produto.valor,

                quantidade: quantidade

            });
        }


        localStorage.setItem(
            "carrinho",
            JSON.stringify(carrinho)
        );


        alert(
            produto.nome +
            " foi adicionado ao carrinho!"
        );

    });

}


// ===============================
// MOSTRAR CARRINHO
// ===============================

const listaCarrinho =
    document.getElementById("lista-carrinho");

const subtotalCarrinho =
    document.getElementById("subtotal");

const totalCarrinho =
    document.getElementById("total");

const paginaProdutos =
    "Produtos.html";


if (listaCarrinho) {

    const carrinho =
        JSON.parse(
            localStorage.getItem("carrinho")
        ) || [];


    if (carrinho.length === 0) {

        listaCarrinho.innerHTML = `

            <p>
                O seu carrinho está vazio :(
            </p>

            <br>

            <a href="${paginaProdutos}">
                Ver produtos
            </a>

        `;

    } else {

        listaCarrinho.innerHTML = "";

        let total = 0;


        carrinho.forEach(function(item) {

            const produtoHTML =
                document.createElement("div");


            produtoHTML.classList.add(
                "item-carrinho"
            );


            const subtotal =
                item.valor *
                item.quantidade;


            total += subtotal;


            let detalhesPersonalizados = "";


            if (item.personalizada) {

                detalhesPersonalizados = `

                    <p>
                        <strong>Tamanho:</strong>
                        ${item.tamanho}
                    </p>

                    <p>
                        <strong>Aroma:</strong>
                        ${item.aroma}
                    </p>

                    <p>
                        <strong>Cor:</strong>
                        ${item.cor}
                    </p>

                    <p>
                        <strong>Nome no pote:</strong>
                        ${item.nomePote}
                    </p>

                `;
            }


            produtoHTML.innerHTML = `

                <h3>
                    ${item.nome}
                </h3>

                ${detalhesPersonalizados}

                <p>
                    Preço unitário:
                    ${item.preco}
                </p>


                <div class="controle-quantidade">

                    <button class="diminuir">
                        −
                    </button>

                    <span>
                        ${item.quantidade}
                    </span>

                    <button class="aumentar">
                        +
                    </button>

                </div>


                <p>
                    Subtotal:
                    R$ ${subtotal
                .toFixed(2)
                .replace(".", ",")}
                </p>


                <button class="remover">
                    Remover
                </button>

            `;


            listaCarrinho.appendChild(
                produtoHTML
            );


            // AUMENTAR QUANTIDADE

            const botaoAumentar =
                produtoHTML.querySelector(
                    ".aumentar"
                );


            botaoAumentar.addEventListener(
                "click",
                function() {

                    item.quantidade += 1;


                    localStorage.setItem(
                        "carrinho",
                        JSON.stringify(carrinho)
                    );


                    location.reload();

                }
            );


            // DIMINUIR QUANTIDADE

            const botaoDiminuir =
                produtoHTML.querySelector(
                    ".diminuir"
                );


            botaoDiminuir.addEventListener(
                "click",
                function() {

                    if (item.quantidade > 1) {

                        item.quantidade -= 1;


                        localStorage.setItem(
                            "carrinho",
                            JSON.stringify(carrinho)
                        );


                        location.reload();
                    }

                }
            );


            // REMOVER PRODUTO

            const botaoRemover =
                produtoHTML.querySelector(
                    ".remover"
                );


            botaoRemover.addEventListener(
                "click",
                function() {

                    const novoCarrinho =
                        carrinho.filter(
                            function(produto) {

                                return produto.id !== item.id;

                            }
                        );


                    localStorage.setItem(
                        "carrinho",
                        JSON.stringify(novoCarrinho)
                    );


                    location.reload();

                }
            );

        });


        const totalFormatado =
            "R$ " +
            total
                .toFixed(2)
                .replace(".", ",");


        if (subtotalCarrinho) {

            subtotalCarrinho.textContent =
                totalFormatado;

        }


        if (totalCarrinho) {

            totalCarrinho.textContent =
                totalFormatado;

        }

    }

}


// ===============================
// RESUMO DA FINALIZAÇÃO
// ===============================

const resumoProdutos =
    document.getElementById("resumo-produtos");

const subtotalFinal =
    document.getElementById("subtotal-final");

const totalFinal =
    document.getElementById("total-final");


if (resumoProdutos) {

    const carrinho =
        JSON.parse(
            localStorage.getItem("carrinho")
        ) || [];


    if (carrinho.length === 0) {

        resumoProdutos.innerHTML = `

            <p>
                O seu carrinho está vazio.
            </p>

        `;

    } else {

        resumoProdutos.innerHTML = "";

        let total = 0;


        carrinho.forEach(function(item) {

            const subtotal =
                item.valor *
                item.quantidade;


            total += subtotal;


            const produtoResumo =
                document.createElement("div");


            let detalhesPersonalizados = "";


            if (item.personalizada) {

                detalhesPersonalizados = `

                    <p>
                        Tamanho: ${item.tamanho}
                    </p>

                    <p>
                        Aroma: ${item.aroma}
                    </p>

                    <p>
                        Cor: ${item.cor}
                    </p>

                    <p>
                        Nome no pote: ${item.nomePote}
                    </p>

                `;
            }


            produtoResumo.innerHTML = `

                <p>
                    <strong>
                        ${item.nome}
                    </strong>
                </p>

                ${detalhesPersonalizados}

                <p>
                    Quantidade:
                    ${item.quantidade}
                </p>

                <p>
                    Subtotal:
                    R$ ${subtotal
                .toFixed(2)
                .replace(".", ",")}
                </p>

                <hr>

            `;


            resumoProdutos.appendChild(
                produtoResumo
            );

        });


        const totalFormatado =
            "R$ " +
            total
                .toFixed(2)
                .replace(".", ",");


        if (subtotalFinal) {

            subtotalFinal.textContent =
                totalFormatado;

        }


        if (totalFinal) {

            totalFinal.textContent =
                totalFormatado;

        }

    }

}


// ===============================
// CONFIRMAR PEDIDO
// ===============================

const formularioCompra =
    document.getElementById(
        "formulario-compra"
    );


if (formularioCompra) {

    formularioCompra.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const carrinho =
                JSON.parse(
                    localStorage.getItem("carrinho")
                ) || [];


            if (carrinho.length === 0) {

                alert(
                    "Seu carrinho está vazio."
                );

                return;
            }


            alert(
                "Pedido realizado com sucesso! 🕯️\n\n" +
                "Obrigada por comprar na Vela Vibe!"
            );


            localStorage.removeItem(
                "carrinho"
            );


            window.location.href =
                "Sucesso.html";

        }
    );

}


// ===============================
// IR PARA FINALIZAR COMPRA
// ===============================

const botaoFinalizar =
    document.getElementById(
        "finalizar-compra"
    );


if (botaoFinalizar) {

    botaoFinalizar.addEventListener(
        "click",
        function() {

            const carrinho =
                JSON.parse(
                    localStorage.getItem("carrinho")
                ) || [];


            if (carrinho.length === 0) {

                alert(
                    "Seu carrinho está vazio."
                );

                return;
            }


            window.location.href =
                "Finalizar.html";

        }
    );

}


// ===============================
// ADICIONAR AO CARRINHO - PÁGINA INICIAL
// ===============================

const botoesAdicionar =
    document.querySelectorAll(
        ".adicionar-carrinho"
    );


botoesAdicionar.forEach(
    function(botao) {

        botao.addEventListener(
            "click",
            function() {

                const idProduto =
                    botao.getAttribute(
                        "data-produto"
                    );


                const produtoSelecionado =
                    produtos[idProduto];


                if (!produtoSelecionado) {

                    alert(
                        "Produto não encontrado."
                    );

                    return;
                }


                let carrinho =
                    JSON.parse(
                        localStorage.getItem(
                            "carrinho"
                        )
                    ) || [];


                const produtoExistente =
                    carrinho.find(
                        function(item) {

                            return item.id ===
                                idProduto;

                        }
                    );


                if (produtoExistente) {

                    produtoExistente.quantidade += 1;

                } else {

                    carrinho.push({

                        id: idProduto,

                        nome:
                        produtoSelecionado.nome,

                        preco:
                        produtoSelecionado.preco,

                        valor:
                        produtoSelecionado.valor,

                        quantidade: 1

                    });

                }


                localStorage.setItem(
                    "carrinho",
                    JSON.stringify(carrinho)
                );


                alert(
                    produtoSelecionado.nome +
                    " foi adicionado ao carrinho! 🛒"
                );

            }
        );

    }
);
// =========================
// CRIE SUA VELA
// =========================

const botoesTamanho =
    document.querySelectorAll(".selecionar-tamanho");

const botoesAroma =
    document.querySelectorAll(".selecionar-aroma");

const botoesCor =
    document.querySelectorAll(".selecionar-cor");

const tamanhoEscolhido =
    document.getElementById("tamanho-escolhido");

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
    document.getElementById(
        "adicionar-vela-personalizada"
    );


// =========================
// PREÇOS
// =========================

const precosTamanho = {
    "Mini / Pequena": 24.90,
    "Media": 34.90,
    "Grande": 44.90
};


// =========================
// VARIÁVEIS
// =========================

let tamanhoSelecionado = "";
let aromaSelecionado = "";
let corSelecionada = "";


// =========================
// FORMATAR PREÇO
// =========================

function formatarPreco(valor) {

    return "R$ " +
        valor.toFixed(2).replace(".", ",");

}


// =========================
// ATUALIZAR PREÇO
// =========================

function atualizarPrecoVela() {

    if (!precoVela) {
        return;
    }

    const valor =
        precosTamanho[tamanhoSelecionado];

    if (valor !== undefined) {

        precoVela.textContent =
            formatarPreco(valor);

    } else {

        precoVela.textContent =
            "R$ 0,00";

    }

}


// =========================
// ESCOLHER TAMANHO
// =========================

botoesTamanho.forEach(function(botao) {

    botao.addEventListener("click", function() {

        botoesTamanho.forEach(function(outroBotao) {

            outroBotao.classList.remove(
                "selecionado"
            );

        });

        botao.classList.add(
            "selecionado"
        );

        tamanhoSelecionado =
            botao.getAttribute(
                "data-tamanho"
            );

        if (tamanhoEscolhido) {

            tamanhoEscolhido.textContent =
                tamanhoSelecionado;

        }

        atualizarPrecoVela();

    });

});


// =========================
// ESCOLHER AROMA
// =========================

botoesAroma.forEach(function(botao) {

    botao.addEventListener("click", function() {

        botoesAroma.forEach(function(outroBotao) {

            outroBotao.classList.remove(
                "selecionado"
            );

        });

        botao.classList.add(
            "selecionado"
        );

        aromaSelecionado =
            botao.getAttribute(
                "data-aroma"
            );

        if (aromaEscolhido) {

            aromaEscolhido.textContent =
                aromaSelecionado;

        }

    });

});


// =========================
// ESCOLHER COR
// =========================

botoesCor.forEach(function(botao) {

    botao.addEventListener("click", function() {

        botoesCor.forEach(function(outroBotao) {

            outroBotao.classList.remove(
                "selecionado"
            );

        });

        botao.classList.add(
            "selecionado"
        );

        corSelecionada =
            botao.getAttribute(
                "data-cor"
            );

        if (corEscolhida) {

            corEscolhida.textContent =
                corSelecionada;

        }

    });

});


// =========================
// NOME NO POTE
// =========================

if (nomePersonalizado) {

    nomePersonalizado.addEventListener(
        "input",
        function() {

            const nome =
                nomePersonalizado.value.trim();

            if (nomeEscolhido) {

                nomeEscolhido.textContent =
                    nome ||
                    "Nenhum nome informado";

            }

        }
    );

}


// =========================
// ADICIONAR VELA AO CARRINHO
// =========================

if (botaoAdicionarVela) {

    botaoAdicionarVela.addEventListener(
        "click",
        function() {

            if (!tamanhoSelecionado) {

                alert(
                    "Escolha o tamanho da vela."
                );

                return;
            }


            if (!aromaSelecionado) {

                alert(
                    "Escolha o aroma da vela."
                );

                return;
            }


            if (!corSelecionada) {

                alert(
                    "Escolha a cor da vela."
                );

                return;
            }


            const nomePote =
                nomePersonalizado &&
                nomePersonalizado.value.trim()
                    ? nomePersonalizado.value.trim()
                    : "Sem nome";


            const valor =
                precosTamanho[
                    tamanhoSelecionado
                    ];


            const velaPersonalizada = {

                id:
                    "vela-personalizada-" +
                    Date.now(),

                nome:
                    "Vela personalizada",

                preco:
                    formatarPreco(valor),

                valor:
                valor,

                quantidade:
                    1,

                personalizada:
                    true,

                tamanho:
                tamanhoSelecionado,

                aroma:
                aromaSelecionado,

                cor:
                corSelecionada,

                nomePote:
                nomePote

            };


            let carrinho =
                JSON.parse(
                    localStorage.getItem(
                        "carrinho"
                    )
                ) || [];


            carrinho.push(
                velaPersonalizada
            );


            localStorage.setItem(
                "carrinho",
                JSON.stringify(carrinho)
            );


            alert(
                "Sua vela personalizada foi adicionada ao carrinho! 🕯️"
            );


            window.location.href =
                "Carrinho.html";

        }
    );

}
// =========================================
// QUIZ - DESCUBRA SUA VIBE
// =========================================

const quizIniciar = document.getElementById("iniciar-quiz");
const quizContainer = document.getElementById("quiz-container");
const quizResultado = document.getElementById("quiz-resultado");

const quizPergunta = document.getElementById("quiz-pergunta");
const quizOpcoes = document.getElementById("quiz-opcoes");

const quizNumero = document.getElementById("quiz-numero");
const quizProgresso = document.getElementById("progresso-quiz");

const quizProxima = document.getElementById("proxima-pergunta");
const quizRefazer = document.getElementById("refazer-quiz");

const resultadoTitulo = document.getElementById("resultado-titulo");
const resultadoImagem = document.getElementById("resultado-imagem");
const resultadoDescricao = document.getElementById("resultado-descricao");
const resultadoLink = document.getElementById("resultado-link");


// PERGUNTAS DO QUIZ

const perguntasQuiz = [

    {
        pergunta: "Qual ambiente combina mais com você?",

        opcoes: [
            {
                texto: "🌿 Um lugar tranquilo e relaxante",
                vela: "lavanda"
            },
            {
                texto: "🌸 Um espaço delicado e romântico",
                vela: "rosas"
            },
            {
                texto: "☕ Um cantinho quente e aconchegante",
                vela: "canela"
            },
            {
                texto: "☀️ Um ambiente leve e alegre",
                vela: "coco"
            }
        ]
    },


    {
        pergunta: "Qual sensação você gostaria de trazer para o ambiente?",

        opcoes: [
            {
                texto: "🧘 Calma e tranquilidade",
                vela: "lavanda"
            },
            {
                texto: "💗 Delicadeza e carinho",
                vela: "rosas"
            },
            {
                texto: "🔥 Aconchego e calor",
                vela: "canela"
            },
            {
                texto: "🌴 Leveza e frescor",
                vela: "coco"
            }
        ]
    },


    {
        pergunta: "Escolha uma vibe para o seu momento.",

        opcoes: [
            {
                texto: "🌙 Relaxar depois de um dia cheio",
                vela: "lavanda"
            },
            {
                texto: "🌷 Criar um momento especial",
                vela: "rosas"
            },
            {
                texto: "☕ Curtir um momento aconchegante",
                vela: "baunilha"
            },
            {
                texto: "✨ Deixar tudo mais leve",
                vela: "jasmim"
            }
        ]
    },


    {
        pergunta: "Qual dessas palavras mais combina com você?",

        opcoes: [
            {
                texto: "🤍 Tranquilidade",
                vela: "lavanda"
            },
            {
                texto: "🌹 Delicadeza",
                vela: "rosas"
            },
            {
                texto: "🍪 Aconchego",
                vela: "baunilha"
            },
            {
                texto: "🌼 Leveza",
                vela: "jasmim"
            }
        ]
    }

];


// INFORMAÇÕES DAS VELAS

const resultadoVelasQuiz = {

    baunilha: {
        nome: "Vela de Baunilha",
        imagem: "img/baunilha.jpg",
        descricao:
            "Uma escolha aconchegante e delicada, perfeita para quem gosta de criar um ambiente acolhedor.",
        link: "Compra.html?produto=baunilha"
    },

    lavanda: {
        nome: "Vela de Lavanda",
        imagem: "img/lavanda.jpg",
        descricao:
            "Uma escolha suave para quem busca momentos de tranquilidade, calma e relaxamento.",
        link: "Compra.html?produto=lavanda"
    },

    rosas: {
        nome: "Vela de Rosas",
        imagem: "img/rosas.jpg",
        descricao:
            "Uma escolha delicada e especial para quem gosta de ambientes florais e cheios de carinho.",
        link: "Compra.html?produto=rosas"
    },

    canela: {
        nome: "Vela de Canela",
        imagem: "img/canela.jpg",
        descricao:
            "Uma escolha marcante e aconchegante para quem gosta de aromas quentes e envolventes.",
        link: "Compra.html?produto=canela"
    },

    coco: {
        nome: "Vela de Coco",
        imagem: "img/coco.jpg",
        descricao:
            "Uma escolha leve e agradável para quem gosta de uma sensação fresca e descontraída.",
        link: "Compra.html?produto=coco"
    },

    jasmim: {
        nome: "Vela de Jasmim",
        imagem: "img/jasmim.jpg",
        descricao:
            "Uma escolha leve e floral para quem gosta de ambientes delicados e agradáveis.",
        link: "Compra.html?produto=jasmim"
    }

};


// VARIÁVEIS DO QUIZ

let perguntaAtualQuiz = 0;
let respostasQuiz = [];
let opcaoSelecionadaQuiz = null;


// INICIAR QUIZ

if (quizIniciar) {

    quizIniciar.addEventListener("click", function() {

        quizIniciar.style.display = "none";

        quizContainer.style.display = "block";

        quizResultado.style.display = "none";

        perguntaAtualQuiz = 0;

        respostasQuiz = [];

        mostrarPerguntaQuiz();

    });

}


// MOSTRAR PERGUNTA

function mostrarPerguntaQuiz() {

    const pergunta = perguntasQuiz[perguntaAtualQuiz];

    if (!pergunta) {
        mostrarResultadoQuiz();
        return;
    }

    quizNumero.textContent =
        "Pergunta " +
        (perguntaAtualQuiz + 1) +
        " de " +
        perguntasQuiz.length;

    const porcentagem =
        ((perguntaAtualQuiz + 1) / perguntasQuiz.length) * 100;

    quizProgresso.style.width = porcentagem + "%";

    quizPergunta.textContent = pergunta.pergunta;

    quizOpcoes.innerHTML = "";

    opcaoSelecionadaQuiz = null;

    quizProxima.disabled = true;


    pergunta.opcoes.forEach(function(opcao) {

        const botao = document.createElement("button");

        botao.type = "button";

        botao.classList.add("quiz-opcao");

        botao.textContent = opcao.texto;


        botao.addEventListener("click", function() {

            const botoes =
                quizOpcoes.querySelectorAll(".quiz-opcao");

            botoes.forEach(function(outroBotao) {
                outroBotao.classList.remove("selecionada");
            });


            botao.classList.add("selecionada");

            opcaoSelecionadaQuiz = opcao.vela;

            quizProxima.disabled = false;

        });


        quizOpcoes.appendChild(botao);

    });

}


// PRÓXIMA PERGUNTA

if (quizProxima) {

    quizProxima.addEventListener("click", function() {

        if (!opcaoSelecionadaQuiz) {
            return;
        }


        respostasQuiz.push(opcaoSelecionadaQuiz);

        perguntaAtualQuiz++;


        if (perguntaAtualQuiz < perguntasQuiz.length) {

            mostrarPerguntaQuiz();

        } else {

            mostrarResultadoQuiz();

        }

    });

}


// MOSTRAR RESULTADO

function mostrarResultadoQuiz() {

    const contagemVelas = {};


    respostasQuiz.forEach(function(vela) {

        if (!contagemVelas[vela]) {
            contagemVelas[vela] = 0;
        }

        contagemVelas[vela]++;

    });


    let velaVencedora = respostasQuiz[0];
    let maiorPontuacao = 0;


    Object.keys(contagemVelas).forEach(function(vela) {

        if (contagemVelas[vela] > maiorPontuacao) {

            maiorPontuacao = contagemVelas[vela];

            velaVencedora = vela;

        }

    });


    const resultado =
        resultadoVelasQuiz[velaVencedora];


    if (!resultado) {
        return;
    }


    resultadoTitulo.textContent = resultado.nome;

    resultadoImagem.src = resultado.imagem;

    resultadoImagem.alt = resultado.nome;

    resultadoDescricao.textContent =
        resultado.descricao;

    resultadoLink.href =
        resultado.link;


    quizContainer.style.display = "none";

    quizResultado.style.display = "block";


    quizResultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


// REFAZER QUIZ

if (quizRefazer) {

    quizRefazer.addEventListener("click", function() {

        perguntaAtualQuiz = 0;

        respostasQuiz = [];

        opcaoSelecionadaQuiz = null;

        quizResultado.style.display = "none";

        quizContainer.style.display = "block";

        mostrarPerguntaQuiz();

    });

}
// =========================================
// ACOMPANHAR ENTREGA
// =========================================

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


// ETAPAS

const etapasEntrega = [
    {
        status: "Pedido realizado",
        mensagem:
            "Seu pedido foi realizado com sucesso. Em breve começaremos a preparar sua vela!"
    },

    {
        status: "Pedido confirmado",
        mensagem:
            "Seu pedido foi confirmado e já está sendo organizado pela Vela Vibe."
    },

    {
        status: "Preparando sua vela",
        mensagem:
            "Estamos preparando sua vela com carinho para que ela siga para a próxima etapa."
    },

    {
        status: "Pedido enviado",
        mensagem:
            "Seu pedido já foi enviado e está a caminho do endereço informado."
    },

    {
        status: "Pedido entregue",
        mensagem:
            "Seu pedido foi entregue! Esperamos que você aproveite muito sua Vela Vibe. 🕯️"
    }
];


let etapaAtualEntrega = 0;


// =========================================
// GERAR NÚMERO DO PEDIDO
// =========================================

function gerarNumeroPedido() {

    let numeroPedido =
        localStorage.getItem("numeroPedidoVelaVibe");

    if (!numeroPedido) {

        const numero =
            Math.floor(
                1000 + Math.random() * 9000
            );

        numeroPedido =
            "VV2026-" + numero;

        localStorage.setItem(
            "numeroPedidoVelaVibe",
            numeroPedido
        );
    }

    return numeroPedido;
}


// =========================================
// PEGAR PRODUTOS DO CARRINHO
// =========================================

function carregarProdutoPedido() {

    const carrinho =
        JSON.parse(
            localStorage.getItem("carrinho")
        ) || [];


    if (carrinho.length === 0) {

        produtoPedidoNome.textContent =
            "Pedido Vela Vibe";

        produtoPedidoDetalhes.textContent =
            "Seu pedido foi registrado com sucesso.";

        return;
    }


    if (carrinho.length === 1) {

        produtoPedidoNome.textContent =
            carrinho[0].nome;

        produtoPedidoDetalhes.textContent =
            "Quantidade: " +
            carrinho[0].quantidade;

        return;
    }


    produtoPedidoNome.textContent =
        carrinho.length + " produtos";

    produtoPedidoDetalhes.textContent =
        "Seu pedido contém vários produtos.";
}


// =========================================
// ATUALIZAR RASTREAMENTO
// =========================================

function atualizarRastreamento() {

    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        const etapa =
            document.getElementById(
                "etapa-" + i
            );

        if (!etapa) {
            continue;
        }

        etapa.classList.remove("ativa");

        etapa.classList.remove("concluida");


        if (i - 1 < etapaAtualEntrega) {

            etapa.classList.add("concluida");

        } else if (
            i - 1 === etapaAtualEntrega
        ) {

            etapa.classList.add("ativa");

        }
    }


    for (
        let i = 1;
        i <= 4;
        i++
    ) {

        const linha =
            document.getElementById(
                "linha-" + i
            );

        if (!linha) {
            continue;
        }

        linha.classList.remove("concluida");


        if (
            i <= etapaAtualEntrega
        ) {

            linha.classList.add("concluida");

        }
    }


    const etapa =
        etapasEntrega[etapaAtualEntrega];


    statusAtual.textContent =
        etapa.status;

    mensagemEntregaTexto.textContent =
        etapa.mensagem;


    if (
        etapaAtualEntrega ===
        etapasEntrega.length - 1
    ) {

        botaoAvancarStatus.textContent =
            "Pedido entregue ✓";

        botaoAvancarStatus.classList.add(
            "finalizado"
        );

        botaoAvancarStatus.disabled = true;

    } else {

        botaoAvancarStatus.textContent =
            "Avançar status";

        botaoAvancarStatus.classList.remove(
            "finalizado"
        );

        botaoAvancarStatus.disabled = false;
    }
}


// =========================================
// CONSULTAR PEDIDO
// =========================================

if (botaoConsultarPedido) {

    botaoConsultarPedido.addEventListener(
        "click",
        function() {

            const numeroDigitado =
                campoNumeroPedido.value
                    .trim()
                    .toUpperCase();


            const numeroCorreto =
                gerarNumeroPedido();


            if (
                numeroDigitado === ""
            ) {

                mensagemPedido.textContent =
                    "Digite o número do seu pedido.";

                mensagemPedido.style.color =
                    "var(--terracota)";

                informacoesPedido.style.display =
                    "none";

                return;
            }


            if (
                numeroDigitado !==
                numeroCorreto.toUpperCase()
            ) {

                mensagemPedido.textContent =
                    "Pedido não encontrado. Verifique o número informado.";

                mensagemPedido.style.color =
                    "var(--terracota)";

                informacoesPedido.style.display =
                    "none";

                return;
            }


            mensagemPedido.textContent =
                "Pedido encontrado! 🕯️";

            mensagemPedido.style.color =
                "var(--terracota)";


            numeroPedidoExibido.textContent =
                "#" + numeroCorreto;


            carregarProdutoPedido();


            etapaAtualEntrega = 0;

            atualizarRastreamento();


            informacoesPedido.style.display =
                "block";


            informacoesPedido.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

}


// =========================================
// AVANÇAR STATUS
// =========================================

if (botaoAvancarStatus) {

    botaoAvancarStatus.addEventListener(
        "click",
        function() {

            if (
                etapaAtualEntrega <
                etapasEntrega.length - 1
            ) {

                etapaAtualEntrega++;

                atualizarRastreamento();

            }

        }
    );

}