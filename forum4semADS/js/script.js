signo();

function signo() {
    let url = "data/teste.xml";

    $.ajax(url)
        .done(function (xml) {
            $(xml).find("signo").each(function () {
                $("#cards").append(`   
                                    <div class="card">
                                    <h2 class="signoNome"> ${$(this).find("signoNome").text()}</h2>
                                    <img src="${$(this).find("foto").text()}" class="image-card"> 
                                    <p class="descricao"> ${$(this).find("descricao").text()}</p>
                                    </div>
                                    `);
            });
        });
}

