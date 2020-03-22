$('#nome').on('blur', function() {
    if ($('#nome').val() === '') {
        $('.validacao.nome ').show()
    } else {
        $('.validacao.nome').hide()
    }
})
$('#email').on('blur', function() {
    if ($('#nome').val() === '') {
        $('.validacao.email').show()
    } else {
        $('validacao.email').hide()
    }
})
$('#telefone').on('blur', function() {
    if ($('#telefone').val() === '') {
        $('.validacao.telefone').show()
    } else {
        $('validacao.telefone').hide()
    }
})