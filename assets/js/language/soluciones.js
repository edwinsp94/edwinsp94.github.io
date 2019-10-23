var language_select = 'es';

var arrLang = {
    'en' : {
        'MENU_INICIO' : 'HOME',
        'MENU_NOSOTROS' : 'ABOUT US',
        'MENU_SOLUCIONES' : 'SOLUTIONS',
        'MENU_CLIENTES' : 'CUSTOMERS',
        'MENU_CONTACTANOS' : 'CONTACT US',
        'ROUTER_TITULO' : 'SOLUTIONS',
        'ROUTER_NAV_1' : 'Home',
        'ROUTER_NAV_2' : 'Solutions',
        'SERVICES_TITULO_1' : 'Software as a Service',
        'SERVICES_TEXTO_1' : 'SaaS offers a comprehensive software solution that is acquired from a cloud service provider through a pay-per-use model. You rent the use of an application for your organization and users connect to it through the Internet, usually with a web browser.',
        'SERVICES_TITULO_2' : 'Software Factory',
        'SERVICES_TEXTO_2' : 'We develop customized software solutions, according to the exposed need, ideal solutions are proposed to your requirement.',
        'SERVICES_TITULO_3' : 'Advice and Projects T.I',
        'SERVICES_TEXTO_3' : 'Through our IT Consulting service, it allows us to solve your requirement and generate opportunities, through analysis and design of the solution from the different layers of the Business Architecture: Strategic Management, Business Processes, Information Systems and Technological Infrastructure.',
        'SOLUTIONS_TITULO' : 'SOLUTIONS UNDER THE SAAS MODEL',
        'SOLUTIONS_ITEM_1_SUBTITULO' : 'AGRICULTURAL MANAGEMENT SUPPORT PLATFORM',
        'SOLUTIONS_ITEM_1_TEXTO' : 'It is an integral and modular solution for all agricultural management processes adaptable to any crop for both small farms and large areas of land, providing online and processed information for the analysis of everything that happens in the field and subsequent decision making.',
        'SOLUTIONS_ITEM_2_SUBTITULO' : 'PAYROLL MANAGEMENT PLATFORM',
        'SOLUTIONS_ITEM_2_TEXTO' : 'This platform has the payroll calculation engine, massive staff management, provision calculation and a series of fully flexible and configurable modules that Genesys integrates: Labor or other client applications.',
        'SOLUTIONS_ITEM_3_SUBTITULO' : 'ELECTRONIC SERVICES PLATFORM',
        'SOLUTIONS_ITEM_3_TEXTO' : 'This platform allows our clients to be able to issue all their electronic documents complying with the new UBL 2.1 regulations and decree 239-2018 / SUNAT of the mandatory use of OSE under a platform architecture as a service.',
        'BUTTON_MODAL' : 'CLOSE',
        'FOOTER_COPY' : '© Designed by YAPU Solutions | Copyright 2019'
    },
    'es' : {
        'MENU_INICIO' : 'INICIO',
        'MENU_NOSOTROS' : 'NOSOTROS',
        'MENU_SOLUCIONES' : 'SOLUCIONES',
        'MENU_CLIENTES' : 'CLIENTES',
        'MENU_CONTACTANOS' : 'CONTÁCTANOS',
        'ROUTER_TITULO' : 'SOLUCIONES',
        'ROUTER_NAV_1' : 'Inicio',
        'ROUTER_NAV_2' : 'Soluciones',
        'SERVICES_TITULO_1' : 'Software como Servicio',
        'SERVICES_TEXTO_1' : 'SaaS ofrece una solución de software integral que se adquiere de un proveedor de servicios en la nube mediante un modelo de pago por uso. Usted alquila el uso de una aplicación para su organización y los usuarios se conectan a ella a través de Internet, normalmente con un explorador web.',
        'SERVICES_TITULO_2' : 'Fábrica de software',
        'SERVICES_TEXTO_2' : 'Desarrollamos soluciones de software a su medida, de acuerdo con la necesidad expuesta, se proponen soluciones ideales a su requerimiento.',
        'SERVICES_TITULO_3' : 'Asesoría y Proyectos T.I',
        'SERVICES_TEXTO_3' : 'A través de nuestro servicio de Consultoría TI, nos permite dar solución a su requerimiento y generar oportunidades, mediante análisis y diseño de la solución desde las diferentes capas de la Arquitectura Empresarial: Dirección Estratégica, Procesos de Negocio, Sistemas de Informácion e Infgraestuctura Tecnológica.',
        'SOLUTIONS_TITULO' : 'SOLUCIONES BAJO EL MODELO SAAS',
        'SOLUTIONS_ITEM_1_SUBTITULO' : 'PLATAFORMA DE SOPORTE A LA GESTIÓN AGRÍCOLA',
        'SOLUTIONS_ITEM_1_TEXTO' : 'Es una solución integral y modular para todos los procesos de la gestión agrícola adaptable a cualquier cultivo tanto para pequeños fundos como grandes extensiones de tierra brindándote información en línea y procesada para el análisis de todo lo que ocurre en el campo y posterior toma de decisiones.',
        'SOLUTIONS_ITEM_2_SUBTITULO' : 'PLATAFORMA DE GESTIÓN DE NÓMINA',
        'SOLUTIONS_ITEM_2_TEXTO' : 'Esta plataforma cuenta con el motor de cálculo de planillas, gestión masiva de personal, cálculo de provisiones y una serie de módulos totalmente flexibles y configurables que integra Genesys: Mano de Obra u otras aplicaciones del cliente.',
        'SOLUTIONS_ITEM_3_SUBTITULO' : 'PLATAFORMA DE SERVICIOS ELECTRÓNICOS',
        'SOLUTIONS_ITEM_3_TEXTO' : 'Esta plataforma permite a nuestros clientes poder emitir todos sus documentos electrónicos cumpliendo con la nueva normativa UBL 2.1 y el decreto 239 -2018/SUNAT del uso obligatorio de OSE bajo una arquitectura de plataforma como servicio.',
        'BUTTON_MODAL' : 'CERRAR',
        'FOOTER_COPY' : '© Diseñado por YAPU Solutions | Copyright 2019'
    }
}

$(document).ready(function() {
    $('.js-translate').click(function () {
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
    $('#title-modal').text(title);
    let item = '0';
    switch(title) {
      case 'GENESYS': 
        item = '1';
        break;
      case 'RHSYS': 
        item = '2';
        break;
      case 'PSE': 
        item = '3';
        break;
    }
    $('#content-modal-subtitle').text(arrLang[language_select]['SOLUTIONS_ITEM_' + item + '_SUBTITULO']);
    $('#content-modal-resume').text(arrLang[language_select]['SOLUTIONS_ITEM_' + item + '_TEXTO']);
  }