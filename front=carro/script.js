const form = document.getElementById("formCarro")
const listaCarros = document.getElementById("listaCarros")

//Cadastrar o carro
form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const carro = {
        marca: document.getElementById("marca").value,
        modelo: document.getElementById("modelo").value,
        ano: document.getElementById("ano").value,
        preco: document.getElementById("preco").value,
    };

    try {
        const response = await fetch("http://localhost:3000/carros", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(carro)
        });

        if (response.ok) {
            Swal.fire({
                icon: "success",
                title: "Carro cadastrado",
                text: "O carro foi salvo com sucesso!",
                confirmButtonText: "Ok"
            });

            form.reset(); // Limpa os campos do formulário automaticamente
             // Atualiza a tabela de consultas
        } else {
            Swal.fire("Erro", "Não foi possível salvar o carro", "error");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        Swal.fire("Erro de Conexão", "O servidor está desligado?", "error");
    }
}); // <-- Faltava fechar o addEventListener aqui

function listarCarros(){
    fetch("http://localhost:3000/inicio")
    .then(res => res.json())
    .then(carros => {
        
        listaCarros.innerHTML = ''

        carros.forEach(carro => {
            const div = document.createElement("div")
            div.classList.add("carro")

            div.innerHTML = `
            <h3>${carro.ano}</h3>
            <span>Ano: ${carro.modelo}</span>
            <span>Ano: ${carro.ano}</span>
            <span>Preço: ${carro.preco}</span>
            `

            listaCarros.appendChild(div)
        });
    })
}

listarCarros()