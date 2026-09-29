const esmaecer = document.querySelector("#esmaecer");
// essa variavel, definida com const, o que faz com que a variavel seja constante, recebe o container do esmaecer (div)
esmaecer.addEventListener('click', function() {
    // adiciona um listener que ouve se o butao e clickado
    // pode ser usar esse codigo comentado, mas e melhor usar o outro
    // esmaecer.style.display = 'none';
    esmaecer.style.visibility = 'hidden';
})

const abrirmodal = document.querySelector("#abrirmodal");
abrirmodal.addEventListener('click', function(){
    // esmaecer.style.display = 'flex';
    esmaecer.style.visibility = 'visible'
})