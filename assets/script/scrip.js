function validarCnpj(cnpj) {
    $.ajax({
        'url':'https://receitaws.com.br/v1/cnpj/' + cnpj.replace(/[^0-9]/g, ''), //.replace(/[^0-9]/g, '') - deixar apenas os numeros do cnpj
        'type':'GET',
        'dataType': 'jsonp',
        'success': function(dado) {
            if(dado.nome == undefined){
                alert(dado.status + '' + dado.message)
            } else {
                console.log()
                document.getElementById('razao').value = dado.nome
                document.getElementById('nomeFantasia').value = dado.fantasia
                document.getElementById('abertura').value = dado.abertura
                document.getElementById('status').value = dado.situacao
                document.getElementById('endereco').value = dado.logradouro
                document.getElementById('municipio').value = dado.municipio
                document.getElementById('estado').value = dado.uf
                document.getElementById('telefone').value = dado.telefone
            }            
        }
    })
}
