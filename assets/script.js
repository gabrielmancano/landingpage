jQuery(function () {

    // Selecionando os id's dos box e do botão voltar;

    box_ficha = $("#box-ficha-tecnica");
    box_volta = $("#box-volta-rapida");
    box_pov = $("#box-driving-pov");
    box_preto = $("#box-preto");
    btn_voltar = $(".btn-voltar");

    // Selecionando os id's dos links no header;
    
    ficha_tecnica = $("#ficha-tecnica");
    driving_pov = $("#driving-pov");
    volta_rapida = $("#volta-rapida");

    // Escondendo todos os box;

    box_ficha.hide();
    box_pov.hide(); 
    box_volta.hide(); 
    box_preto.hide();

    // Funções para mostrar os box;

    ficha_tecnica.click(function () { 
        mostrar_ficha();
    });

    driving_pov.click(function () { 
        mostrar_pov();
    });

    volta_rapida.click(function () { 
        mostrar_volta();
    });

    btn_voltar.click(function () { 
        esconder();
    });

    box_preto.click(function () {
        esconder();
    })
});

// Mostrando os box;

function mostrar_ficha() {
    box_ficha.show();
    box_preto.show();
}

function mostrar_pov() {
    box_pov.show();
    box_preto.show();
}

function mostrar_volta() {
    box_volta.show();
    box_preto.show();
}

// Escondendo todos os box;

function esconder() {
    box_ficha.hide();
    box_pov.hide();
    box_volta.hide();
    box_preto.hide();
}
