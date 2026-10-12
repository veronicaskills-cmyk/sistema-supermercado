// Mapeamento dos elementos (IDs exatos do HTML)
const valorProduto = document.getElementById("valor-produto");
const cupom = document.getElementById("cupom-desconto");
const botao = document.getElementById("finalizar-compra");
const texto = document.getElementById("preco-final");
const mensagem = document.getElementById("campo-mensagem");

function regrasDeNegocio() {
    // Captura dos valores atuais dos inputs
    let valor = valorProduto.value;
    let textoCupom = cupom.value.trim(); // Mantém como texto para ler "DEZ"
    let inicio = "R$ 0,00";

    // Cláusulas de Guarda (validações de segurança)
    if (valor.trim() === "" || +valor === 0) {
        let inicioFormatado = inicio.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' });

        texto.textContent = inicioFormatado;
        texto.style.color = "red";
        mensagem.textContent = "Digite um valor diferente de 0";
        mensagem.style.color = "red";
        return;
    }

    if (+valor > 10000 ||  +valor < 0) {
        let inicioFormatado = inicio.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' });
        texto.textContent = inicioFormatado;
        texto.style.color = "red";
        mensagem.textContent = "Valores negativos ou acima de R$ 10.000 não é permitido.";
        mensagem.style.color = "red";
        return;
    }

    //verificar o preço antes de aceitar o cupom
    if (+valor < 10 && textoCupom === "DEZ") {
        let preco = Number(document.getElementById("valor-produto").value);
        let precoFormatado = preco.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' })
        texto.textContent = precoFormatado;
        texto.style.color = "red";
        mensagem.textContent = "Cupom exige compra mínima de R$ 10"
        mensagem.style.color = "red";
        return;   
    }

    // 3. Lógica do Cupom (Testando a palavra "DEZ")
    if (textoCupom === "DEZ") {
        let cupomDeDesconto = +valor - 10;
        let precoFormatado =  cupomDeDesconto.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' })
        texto.textContent =  precoFormatado;
        texto.style.color = "#10B981"; // Verde sucesso
        mensagem.textContent = "Cupom DEZ aplicado";
        mensagem.style.color = "green"; // Verde sucesso

    } else if (textoCupom === ""){
        let preco = Number(document.getElementById("valor-produto").value);
        let precoFormatado =  preco.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' })
        texto.textContent = precoFormatado;
        texto.style.color = "white";
        mensagem.textContent = "Nenhum cupom aplicado";
        mensagem.style.color = "red";
        return;
        
   } else {
        // Se o cupom for inválido ou vazio, mostra o preço normal
        let preco = Number(document.getElementById("valor-produto").value);
        let precoFormatado =  preco.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' })
        texto.textContent = precoFormatado;
        texto.style.color = "white";
        mensagem.textContent = "Cupom inválido";
        mensagem.style.color = "red";
   }


}

// 4. Ligação do evento de clique
botao.addEventListener("click", regrasDeNegocio);
