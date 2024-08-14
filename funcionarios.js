const funcionarios = {}

function addFunc(id, nome) {
    if (funcionarios[id]) {
        document.write(`Funcionário com ID ${id} já existe.` + "<br>")
    } else {
        funcionarios[id] = nome;
        document.write(`Funcionário ${nome} adicionado.` + "<br>")
    }
}

function apagarFunc(id) {
    if (funcionarios[id]) {
        delete funcionarios[id]
        document.write(`Funcionário com ID ${id} foi deletado.` + "<br>")
    } else {
        document.write(`Funcionário com ID ${id} não foi encontrado.` + "<br>")
    }
}

function buscarFunc(id) {
    if (funcionarios[id]) {
        return `O funcionário é: ${funcionarios[id]}`
    } else {
        return `O funcionário com ID ${id} não foi encontrado.`
    }
}

function editarFunc(id, novoNome) {
    if (funcionarios[id]) {
        funcionarios[id] = novoNome
        document.write(`Nome do funcionário com ID ${id} foi atualizado para ${novoNome}.` + "<br>")
    } else {
        document.write(`Funcionário com ID ${id} não foi encontrado.` + "<br>")
    }
}

addFunc(999, "Ricardo Andrade")
addFunc(321, "Vinicius Lucena")

document.write(buscarFunc(999) + "<br>") 
document.write(buscarFunc(31) + "<br>")

editarFunc(999, "Zeca")

document.write(buscarFunc(999) + "<br>")

addFunc(999, "Pinheiro")

apagarFunc(999)

document.write(buscarFunc(999) + "<br>")
