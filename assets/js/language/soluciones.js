var language_select = 'es';

var arrLang = {
    'en': {
        'MENU_INICIO': 'Home',
        'MENU_NOSOTROS': 'Know us',
        'MENU_SOLUCIONES': 'Solutions',
        'MENU_CLIENTES': 'Clients',
        'MENU_CONTACTANOS': 'Contact us',
        'SLIDER_NUESTRAS_SOLUCIONES': 'Our Solutions',
        
        'SOLUTIONS_TITLE': 'SOLUTIONS AT YOUR FINGERTIPS',
        'SOLUTIONS_DESC': 'The integration of our expert personnel in the areas of services, maintenance, repairs, remodeling, networks, installations, telecommunications and consulting, allows us to analyze, together with our clients, the solutions to the problems of each company.',
        

        'SOLUTIONS_TITLE_1': 'Fiber Optic laying',
        'SOLUTIONS_TITLE_2': 'Data Center Installation',
        'SOLUTIONS_TITLE_3': 'Camera Installation',
        'SOLUTIONS_TITLE_4': 'Fire system',
        'SOLUTIONS_TITLE_5': 'Civil work',
        
        'SOLUTIONS_ITEM_1_P1': 'In our company we develop, implement and carry out the laying of fiber optics, with international standards, we have more than 100 facilities that offer greater capacity to improve communication and devices.',
        'SOLUTIONS_ITEM_1_P2': '',

        'SOLUTIONS_ITEM_2_P1': 'In the Data Center area, our company installs servers to store both company information directly, and to be used for effective virtualization, in addition to offering switch networks between the different servers used with the intention of implementing expansion processes. , automation, programmability, and the real-time visibility needed for a high-end data center.',
        'SOLUTIONS_ITEM_2_P2': '',
        
        'SOLUTIONS_ITEM_3_P1': 'We offer peace of mind for your company with the Installation of Security Cameras, since having everything under surveillance can prevent theft or attend to an incident within the company or its adjacencies, opening the possibilities of connecting remote surveillance with local security agencies , like the Police, so if a break-in occurs, help would arrive faster.',
        'SOLUTIONS_ITEM_3_P2': '',

        'SOLUTIONS_ITEM_4_P1': 'We have the installation of an automatic fire detection system with fire detectors, push buttons and alarm siren, all of them connected to a detection center, which offers an effective way of detecting a fire in its incipient phase.',
        'SOLUTIONS_ITEM_4_P2': '',

        'SOLUTIONS_ITEM_5_P1': 'We have the ability to act on the clients physical assets, under continuous and systematic processes that protect the physical works in their use and operation process, ensuring their maximum performance, which is why our company offers corrective, preventive and predictive maintenance. We listen to our clients to attend in detail to the transformations that they wish to apply in their building, with the intention of increasing the image perception of the clients assets.',
        'SOLUTIONS_ITEM_5_P2': '',
        
        'BROCHURE': 'More Detail',
        'BUTTON_MODAL': 'CLOSE',
        'Privacidad': 'Privacy Policy',
        'Cookies': 'Cookies Policy',
        'FOOTER_COPY': '© Designed by IV&RM | Copyright 2023'
    },
    'es': {
        'MENU_INICIO': 'Inicio',
        'MENU_NOSOTROS': 'Conócenos',
        'MENU_SOLUCIONES': 'Soluciones',
        'MENU_CLIENTES': 'Clientes',
        'MENU_CONTACTANOS': 'Contactanos',
        'SLIDER_NUESTRAS_SOLUCIONES': 'Nuestras Soluciones',
        
        'SOLUTIONS_TITLE': 'SOLUCIONES AL ALCANCE DE TU MANO',
        'SOLUTIONS_DESC': 'La integración de nuestro personal experto en las áreas de servicios, mantenimiento, reparaciones, remodelaciones, redes, instalaciones, telecomunicaciones y consultoría, nos permite analizar, conjuntamente con nuestros clientes, las soluciones a los problemas de cada empresa.',
        
        'SOLUTIONS_TITLE_1': 'Tendido de Fibra Óptica',
        'SOLUTIONS_TITLE_2': 'Instalación de Data Center',
        'SOLUTIONS_TITLE_3': 'Instalación de Cámaras',
        'SOLUTIONS_TITLE_4': 'Sistema Contra Incendio',
        'SOLUTIONS_TITLE_5': 'Obra Civil',

        'SOLUTIONS_ITEM_1_P1': 'En nuestra empresa desarrollamos, implementamos y realizamos el tendido de la fibra óptica, con los estándares internacionales, contamos con mas 100 instalaciones que ofrecen mayor capacidad para mejorar la comunicación y los dispositivos.',
        'SOLUTIONS_ITEM_1_P2': '',
        
        'SOLUTIONS_ITEM_2_P1': 'En el rubro de Data Center, nuestra empresa instala servidores para almacenar tanto la información de las empresas directamente, como para ser empleados para la virtualización efectiva, además de ofrecer las redes de conmutadores entre los diferentes servidores empleados con la intención de implementar procesos de ampliación, automatización, programabilidad y la visibilidad en tiempo real necesaria para un data center de alta categoría.',
        'SOLUTIONS_ITEM_2_P2': '',

        'SOLUTIONS_ITEM_3_P1': 'Ofrecemos tranquilidad para su empresa con la Instalación de Cámaras de Seguridad, ya que al tener todo bajo vigilancia se pueden prevenir robos o atender algún incidente dentro de la empresa o sus adyacencias, abriendo las posibilidades de conectar la vigilancia remota con los organismos de seguridad locales, como la Policía, por lo que si se produce una irrupción la ayuda llegaría más rápido.',
        'SOLUTIONS_ITEM_3_P2': '',
        
        'SOLUTIONS_ITEM_4_P1': 'Disponemos de la instalación de un sistema de detección automática de incendios con detectores de incendio, pulsadores y sirena de alarma, todos ellos conectados a una central de detección, el cual ofrece una manera eficaz de detectar un incendio en su fase incipiente.        ',
        'SOLUTIONS_ITEM_4_P2': '',

        'SOLUTIONS_ITEM_5_P1': 'Tenemos la capacidad de actuar sobre el bien físico del cliente, bajo procesos continuos y sistemáticos que protejan las obras físicas en su proceso de uso y operación, asegurando su máximo rendimiento, por lo que nuestra empresa ofrece mantenimiento correctivo, preventivo y predictivo. Escuchamos a nuestros clientes para atender de forma detallada a las transformaciones que desea aplicar en su edificación, con la intención de incrementar la percepción de imagen de los bienes de los clientes.        ',
        'SOLUTIONS_ITEM_5_P2': '',

        'BROCHURE': 'Más detalle',
        'BUTTON_MODAL': 'Cerrar',
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
        case 'fibra-optica':
            item = '1';
            $('#title-modal').text('');
            $('#content-modal-p1').text('');
            $('#content-modal-p2').text('');

            $('#modal-imagen').attr('src', '');
            $('#modal-imagen1').attr('src', 'assets/images/soluciones/tendido-fibra-optica.png');
            $('#modal-imagen2').attr('src', '');
            $('#modal-imagen3').attr('src', '');
            $('#modal-imagen4').attr('src', '');
            $('#modal-imagen5').attr('src', '');
            $('#modal-imagen6').attr('src', '');

            $('#verFolleto').attr('href', 'https://agritracer.pe/');
            $('#verFolleto').show();
            break;

        case 'data-center':
            item = '2';
            $('#title-modal').text('');
            $('#content-modal-p1').text('');
            $('#content-modal-p2').text('');

            $('#modal-imagen').attr('src', '');
            $('#modal-imagen1').attr('src', 'assets/images/soluciones/data-center.png');
            $('#modal-imagen2').attr('src', '');
            $('#modal-imagen3').attr('src', '');
            $('#modal-imagen4').attr('src', '');
            $('#modal-imagen5').attr('src', '');
            $('#modal-imagen6').attr('src', '');

            $('#verFolleto').attr('src', 'assets/files/BROCHURE-WorkAPP.pdf');
            $('#verFolleto').hide();

            break;

        case 'instalacion-camara':
            item = '3';
            $('#title-modal').text('');
            $('#content-modal-p1').text('');
            $('#content-modal-p2').text('');

            $('#modal-imagen').attr('src', '');
            $('#modal-imagen1').attr('src', 'assets/images/soluciones/instalacion-camaras.png');
            $('#modal-imagen2').attr('src', '');
            $('#modal-imagen3').attr('src', '');
            $('#modal-imagen4').attr('src', '');
            $('#modal-imagen5').attr('src', '');
            $('#modal-imagen6').attr('src', '');

            $('#verFolleto').attr('href', 'https://rhsys.pe/');
            $('#verFolleto').show();
        break;        
        case 'sistema-contra-incendio':
            item = '4';
            $('#title-modal').text('');
            $('#content-modal-p1').text('Sensores y Análisis IoT para distintos controles de procesos.');
            $('#content-modal-p2').text('');
    
            $('#modal-imagen').attr('src', 'assets/images/soluciones/sistema-contra-incendios.png');
            $('#modal-imagen1').attr('src', '');
            $('#modal-imagen2').attr('src', '');
            $('#modal-imagen3').attr('src', '');
            $('#modal-imagen4').attr('src', '');
            $('#modal-imagen5').attr('src', '');
            $('#modal-imagen6').attr('src', '');
    
            $('#verFolleto').attr('href', '');
            $('#verFolleto').hide();
        break;
        case 'obra-civil':
            item = '5';
            $('#title-modal').text('');
            $('#content-modal-p1').text('');
            $('#content-modal-p2').text('');

            $('#modal-imagen').attr('src', '');
            $('#modal-imagen1').attr('src', 'assets/images/soluciones/obra-civil-1.png');
            $('#modal-imagen2').attr('src', '');
            $('#modal-imagen3').attr('src', '');
            $('#modal-imagen4').attr('src', '');
            $('#modal-imagen5').attr('src', '');
            $('#modal-imagen6').attr('src', '');

            $('#verFolleto').attr('src', 'assets/files/BROCHURE-WorkAPP.pdf');
            $('#verFolleto').hide();

        break;
    }
    $('#title-modal').text(arrLang[language_select]['SOLUTIONS_TITLE_' + item]);
    $('#content-modal-p1').text(arrLang[language_select]['SOLUTIONS_ITEM_' + item + '_P1']);
    $('#content-modal-p2').text(arrLang[language_select]['SOLUTIONS_ITEM_' + item + '_P2']);
}