var arrLang = {
    'en' : {
        'MENU_INICIO' : 'Home',
        'MENU_NOSOTROS' : 'About Us',
        'MENU_SOLUCIONES' : 'Solutions',
        'MENU_CLIENTES' : 'Customers',
        'MENU_CONTACTANOS' : 'Contact Us',
        'ROUTER_TITULO' : 'Solutions',
        'ROUTER_NAV_1' : 'Home',
        'ROUTER_NAV_2' : 'Solutions',
        'SERVICES_TITULO_1' : 'Software as a Service',
        'SERVICES_TEXTO_1' : 'SaaS offers a comprehensive software solution that is acquired from a cloud service provider through a pay-per-use model. You rent the use of an application for your organization and users connect to it through the Internet, usually with a web browser.',
        'SERVICES_TITULO_2' : 'Software Factory',
        'SERVICES_TEXTO_2' : 'We develop custom software solutions, turnkey. In this modality, once the requirements have been received by the client, they are analyzed, estimated and budgeted by our company.',
        'SERVICES_TITULO_3' : 'Advice and Projects T.I',
        'SERVICES_TEXTO_3' : 'Through our IT Consulting service, we want to appropriate your needs and opportunities. Perform an analysis and design of the solution from the different layers of the Business Architecture: Strategic Management, Business Processes, Information Systems and Technological Infrastructure.',
        'SOLUTIONS_TITULO' : 'Solutions under the SaaS module',
        'FOOTER_COPY' : '© Designed by YAPU Solutions | Copyright 2019'
    },
    'es' : {
        'MENU_INICIO' : 'Inicio',
        'MENU_NOSOTROS' : 'Nosotros',
        'MENU_SOLUCIONES' : 'Soluciones',
        'MENU_CLIENTES' : 'Clientes',
        'MENU_CONTACTANOS' : 'Contáctenos',
        'ROUTER_TITULO' : 'Soluciones',
        'ROUTER_NAV_1' : 'Inicio',
        'ROUTER_NAV_2' : 'Soluciones',
        'SERVICES_TITULO_1' : 'Software como Servicio',
        'SERVICES_TEXTO_1' : 'SaaS ofrece una solución de software integral que se adquiere de un proveedor de servicios en la nube mediante un modelo de pago por uso. Usted alquila el uso de una aplicación para su organización y los usuarios se conectan a ella a través de Internet, normalmente con un explorador web.',
        'SERVICES_TITULO_2' : 'Fábrica de software',
        'SERVICES_TEXTO_2' : 'Desarrollamos soluciones de software a medida, llave en mano. En esta modalidad, una vez recibidos los requerimientos por parte del cliente, los mismos son analizados, estimados y presupuestados por nuestra empresa.',
        'SERVICES_TITULO_3' : 'Asesoría y Proyectos T.I',
        'SERVICES_TEXTO_3' : 'A través de nuestro servicio de Consultoría TI, deseamos apropiarnos de sus necesidades y oportunidades. Realizar un análisis y diseño de la solución desde las diferentes capas de la Arquitectura Empresarial: Dirección Estratégica, Procesos de Negocio, Sistemas de Información e Infraestructura Tecnológica.',
        'SOLUTIONS_TITULO' : 'Soluciones bajo el módulo SaaS',
        'FOOTER_COPY' : '© Diseñado por YAPU Solutions | Copyright 2019'
    }
}

$(document).ready(function() {
    $('.js-translate').click(function () {
        var lang = $(this).attr('id');
        $('.lang').each(function(index, element) {
            if ($(this).is("input") || $(this).is("textarea")) {
                $(this).attr('placeholder', arrLang[lang][$(this).attr('key')]);
            } else {
                $(this).text(arrLang[lang][$(this).attr('key')]);
            }
        });
    });
});