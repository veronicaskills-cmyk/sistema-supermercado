// 1. Mapeamento dos elementos (IDs exatos do seu HTML)
const valorProduto = document.getElementById("valor-produto");
const cupom = document.getElementById("cupom-desconto");
const botao = document.getElementById("finalizar-compra");
const texto = document.getElementById("preco-final");

function regrasDeNegocio() {
    // Captura dos valores atuais dos inputs
    let valor = valorProduto.value;
    let textoCupom = cupom.value.trim(); // Mantém como texto para ler "DEZ"

    // 2. Cláusulas de Guarda (Suas validações de segurança)
    if (valor.trim() === "" || +valor === 0) {
        texto.textContent = "Erro: Digite um valor válido";
        texto.style.color = "red";
        return;
    }

    if (+valor > 10000) {
        texto.textContent = "Erro: Valor acima do permitido";
        texto.style.color = "red";
        return;
    }

    // 3. Lógica do Cupom (Testando a palavra "DEZ")
    if (textoCupom === "DEZ") {
        let cupomDeDesconto = +valor - 10;
        texto.textContent = "R$ " + cupomDeDesconto + ",00 reais com desconto! 🎉";
        texto.style.color = "#10B981"; // Verde sucesso
    } else {
        // Se o cupom for inválido ou vazio, mostra o preço normal
        texto.textContent = "R$ " + valor + ",00 reais";
        texto.style.color = "white"; // Branco para destacar no seu display-total escuro
    }
}

// 4. Ligação do evento de clique
botao.addEventListener("click", regrasDeNegocio);
