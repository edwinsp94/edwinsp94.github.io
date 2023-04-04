var language_select = 'es';

var arrLang = {
    'en': {
        'MENU_INICIO': 'Home',
        'MENU_NOSOTROS': 'Know us',
        'MENU_SOLUCIONES': 'Solutions',
        'MENU_CLIENTES': 'Clients',
        'MENU_CONTACTANOS': 'Contact us',
        'CONTACT_TITULO': 'Our Clients',
        'PAISES': 'COUNTRIES',
        'CLIENTES': 'CLIENTS',
        'PERSONAS_BENEFICIADAS': 'PEOPLE BENEFITED',

        'T-NUESTROS': 'Our',
        'T-CLIENTES': 'Clients',
        
        'CLIENTE_TITLE_1': 'Building Batallón Tarma',
        'CLIENTE_TITLE_2': 'Building Condominio Los Alamos',
        'CLIENTE_TITLE_3': 'Building Cala',
        'CLIENTE_TITLE_4': 'Imaginati Tower',
        'CLIENTE_TITLE_5': 'G4S Security Company',
        'CLIENTE_TITLE_6': 'DHL Callao',
        'CLIENTE_TITLE_7': 'Building Firenze',
        'CLIENTE_TITLE_8': 'Yasi Company',

        'CLIENTE_ITEM_1_P1': 'April 13, 2022',
        'CLIENTE_ITEM_1_P2': 'Realization of fiber optic channeling for communication ducts.',
        
        'CLIENTE_ITEM_2_P1': 'March 01, 2022',
        'CLIENTE_ITEM_2_P2': 'Enabling fiber optic win.',

        'CLIENTE_ITEM_3_P1': 'March 02, 2022',
        'CLIENTE_ITEM_3_P2': 'Civil works channeled 19 meters Residencial Cala building.',
        
        'CLIENTE_ITEM_4_P1': 'October 28, 2021',
        'CLIENTE_ITEM_4_P2': 'Office remodeling, implementation of fire system and central air conditioning.',

        'CLIENTE_ITEM_5_P1': 'May 30, 2019',
        'CLIENTE_ITEM_5_P2': 'Manufacture of warehouse for the companys human resources headquarters.',

        'CLIENTE_ITEM_6_P1': 'April 30, 2019',
        'CLIENTE_ITEM_6_P2': 'Survey of plans for structural reinforcement of coverage.',

        'CLIENTE_ITEM_7_P1': 'April 20, 2022',
        'CLIENTE_ITEM_7_P2': 'Fiber optic laying towards residential complex o building.',

        'CLIENTE_ITEM_8_P1': 'November 17, 2022',
        'CLIENTE_ITEM_8_P2': '',

        'SOLUCIONES': 'Implemented  ',
        'IMPLEMENTADAS': 'Solutions',
        'Privacidad': 'Privacy Policy',
        'Cookies': 'Cookies Policy',
        'FOOTER_COPY': '© Designed by IV&RM | Copyright 2023'
    },
    'es': {
        'MENU_INICIO': 'Inicio',
        'MENU_NOSOTROS': 'Conócenos',
        'MENU_SOLUCIONES': 'Soluciones',
        'MENU_CLIENTES': 'Clientes',
        'MENU_CONTACTANOS': 'Contáctanos',
        'CONTACT_TITULO': 'Nuestros Clientes',
        'PAISES': 'PAÍSES',
        'CLIENTES': 'CLIENTES',
        'PERSONAS_BENEFICIADAS': 'PERSONAS BENEFICIADAS',

        'T-NUESTROS': 'Nuestros',
        'T-CLIENTES': 'Clientes',

        'CLIENTE_TITLE_1': 'Edificio Batallón Tarma',
        'CLIENTE_TITLE_2': 'Edificio Condominio Los Alamos',
        'CLIENTE_TITLE_3': 'Edificio Cala',
        'CLIENTE_TITLE_4': 'Torre Imaginati Tower',
        'CLIENTE_TITLE_5': 'Empresa de Seguridad G4S',
        'CLIENTE_TITLE_6': 'DHL Callao',
        'CLIENTE_TITLE_7': 'Edificio Firenze',
        'CLIENTE_TITLE_8': 'Empresa Yasi',

        'CLIENTE_ITEM_1_P1': '13 de Abril del 2022',
        'CLIENTE_ITEM_1_P2': 'Realización de canalización de fibra óptica para ductos de comunicación.',  
        
        'CLIENTE_ITEM_2_P1': '01 de Marzo del 2022',
        'CLIENTE_ITEM_2_P2': 'Habilitación para fibra óptica win.',

        'CLIENTE_ITEM_3_P1': '02 de Marzo del 2022',
        'CLIENTE_ITEM_3_P2': 'Obra civil canalizado 19 mts edificio Residencial Cala.',
        
        'CLIENTE_ITEM_4_P1': '28 de octubre del 2021',
        'CLIENTE_ITEM_4_P2': 'Remodelación de oficina, implementación de sistema contra incendio y aire acondicionado centralizado.',

        'CLIENTE_ITEM_5_P1': '30 de Mayo del 2019',
        'CLIENTE_ITEM_5_P2': 'Fabricación de almacen para sede de recursos humanos de la empresa.',

        'CLIENTE_ITEM_6_P1': '30 de Abril del 2019',
        'CLIENTE_ITEM_6_P2': 'Levantamiento de planos para reforzamiento estructural de cobertura.',

        'CLIENTE_ITEM_7_P1': '20 de Abril del 2022',
        'CLIENTE_ITEM_7_P2': 'Tendido de fibra óptica hacia conjunto residencial o edificio.',

        'CLIENTE_ITEM_8_P1': '17 de noviembre del 2022',
        'CLIENTE_ITEM_8_P2': '',

        'SOLUCIONES': 'Soluciones  ',
        'IMPLEMENTADAS': 'implementadas',
        'Privacidad': 'Política de privacidad',
        'Cookies': 'Política de cookies',
        'FOOTER_COPY': '© Diseñado por IV&RM | Copyright 2023'
    }
}

$(document).ready(function() {
    $('.js-translate').click(function() {
        language_select = $(this).attr('id');
        $('.lang').each(function(index, element) {
            if ($(this).is("input") || $(this).is("textarea")) {
                $(this).attr('placeholder', arrLang[language_select][$(this).attr('key')]);
            } else {
                $(this).text(arrLang[language_select][$(this).attr('key')]);
            }
        });
    });
});


function goToModal(title) {
    console.log($);

    //$('#title-modal').text('Fibra Óptica');

    let item = '0';

    switch (title) {
        case 'tarma':
            item = '1';
            $('#title-modal').text('');
            $('#content-modal-p1').text('');
            $('#content-modal-p2').text('');

            $('#modal-imagen').attr('src', '');
            $('#modal-imagen1').attr('src', 'assets/images/soluciones/tarma-1.webp');
            $('#modal-imagen2').attr('src', 'assets/images/soluciones/tarma-2.webp');
            $('#modal-imagen3').attr('src', '');
            $('#modal-imagen4').attr('src', '');
            $('#modal-imagen5').attr('src', '');
            $('#modal-imagen6').attr('src', '');

            $('#verFolleto').attr('href', 'https://agritracer.pe/');
            $('#verFolleto').show();
            break;

        case 'alamos':
            item = '2';
            $('#title-modal').text('');
            $('#content-modal-p1').text('');
            $('#content-modal-p2').text('');

            $('#modal-imagen').attr('src', 'assets/images/soluciones/alamos-1.png');
            $('#modal-imagen1').attr('src', '');
            $('#modal-imagen2').attr('src', '');
            $('#modal-imagen3').attr('src', '');
            $('#modal-imagen4').attr('src', '');
            $('#modal-imagen5').attr('src', '');
            $('#modal-imagen6').attr('src', '');

            $('#verFolleto').attr('src', 'assets/files/BROCHURE-WorkAPP.pdf');
            $('#verFolleto').hide();

            break;

        case 'cala':
            item = '3';
            $('#title-modal').text('');
            $('#content-modal-p1').text('');
            $('#content-modal-p2').text('');

            $('#modal-imagen').attr('src', 'assets/images/soluciones/cala-1.png');
            $('#modal-imagen1').attr('src', '');
            $('#modal-imagen2').attr('src', '');
            $('#modal-imagen3').attr('src', '');
            $('#modal-imagen4').attr('src', '');
            $('#modal-imagen5').attr('src', '');
            $('#modal-imagen6').attr('src', '');

            $('#verFolleto').attr('href', 'https://rhsys.pe/');
            $('#verFolleto').show();
        break;
        case 'imaginati':
            item = '4';
            $('#title-modal').text('');
            $('#content-modal-p1').text('');
            $('#content-modal-p2').text('');
    
            $('#modal-imagen').attr('src', 'assets/images/soluciones/imaginati-1.png');
            $('#modal-imagen1').attr('src', '');
            $('#modal-imagen2').attr('src', '');
            $('#modal-imagen3').attr('src', '');
            $('#modal-imagen4').attr('src', '');
            $('#modal-imagen5').attr('src', '');
            $('#modal-imagen6').attr('src', '');
    
            $('#verFolleto').attr('href', '');
            $('#verFolleto').hide();
        break;
        case 'g4s':
            item = '5';
            $('#title-modal').text('');
            $('#content-modal-p1').text('');
            $('#content-modal-p2').text('');
    
            $('#modal-imagen').attr('src', 'assets/images/soluciones/g4s-1.png');
            $('#modal-imagen1').attr('src', '');
            $('#modal-imagen2').attr('src', '');
            $('#modal-imagen3').attr('src', '');
            $('#modal-imagen4').attr('src', '');
            $('#modal-imagen5').attr('src', '');
            $('#modal-imagen6').attr('src', '');
    
            $('#verFolleto').attr('href', '');
            $('#verFolleto').hide();
        break;
        case 'dhl':
            item = '6';
            $('#title-modal').text('');
            $('#content-modal-p1').text('');
            $('#content-modal-p2').text('');

            $('#modal-imagen').attr('src', 'assets/images/soluciones/dhl-1.png');
            $('#modal-imagen1').attr('src', '');
            $('#modal-imagen2').attr('src', '');
            $('#modal-imagen3').attr('src', '');
            $('#modal-imagen4').attr('src', '');
            $('#modal-imagen5').attr('src', '');
            $('#modal-imagen6').attr('src', '');

            $('#verFolleto').attr('src', 'assets/files/BROCHURE-WorkAPP.pdf');
            $('#verFolleto').hide();

        break;
        case 'tirenze':
            item = '7';
            $('#title-modal').text('');
            $('#content-modal-p1').text('');
            $('#content-modal-p2').text('');

            $('#modal-imagen').attr('src', 'assets/images/soluciones/firenze-1.png');
            $('#modal-imagen1').attr('src', '');
            $('#modal-imagen2').attr('src', '');
            $('#modal-imagen3').attr('src', '');
            $('#modal-imagen4').attr('src', '');
            $('#modal-imagen5').attr('src', '');
            $('#modal-imagen6').attr('src', '');

            $('#verFolleto').attr('src', 'assets/files/BROCHURE-WorkAPP.pdf');
            $('#verFolleto').hide();

        break;
        case 'wasi':
            item = '8';
            $('#title-modal').text('');
            $('#content-modal-p1').text('');
            $('#content-modal-p2').text('');

            $('#modal-imagen').attr('src', 'assets/images/soluciones/wasi-1.png');
            $('#modal-imagen1').attr('src', '');
            $('#modal-imagen2').attr('src', '');
            $('#modal-imagen3').attr('src', '');
            $('#modal-imagen4').attr('src', '');
            $('#modal-imagen5').attr('src', '');
            $('#modal-imagen6').attr('src', '');

            $('#verFolleto').attr('src', 'assets/files/BROCHURE-WorkAPP.pdf');
            $('#verFolleto').hide();

        break;
    }
    $('#title-modal').text(arrLang[language_select]['CLIENTE_TITLE_' + item]);
    $('#content-modal-p1').text(arrLang[language_select]['CLIENTE_ITEM_' + item + '_P1']);
    $('#content-modal-p2').text(arrLang[language_select]['CLIENTE_ITEM_' + item + '_P2']);
}