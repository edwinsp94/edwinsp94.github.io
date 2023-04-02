var arrLang = {
    'en': {
        'MENU_INICIO': 'Home',
        'MENU_NOSOTROS': 'Know us',
        'MENU_SOLUCIONES': 'Solutions',
        'MENU_CLIENTES': 'Clients',
        'MENU_CONTACTANOS': 'Contact us',
        'SLIDER_CONOCENOS': 'Know us',
        'ABOUT_TITULO1': 'ABOUT',
        'ABOUT_TITULO2': ' US',
        'ABOUT_TEXTO_1': 'We are experts in service integration solutions with a range of products, capable of solve all connectivity needs in the area of ​​networks and telecommunications, security cameras security and fire system.',
        'ABOUT_TEXTO_2': 'Our services associated with technology help us offer an advanced, agile and secure service, implementing our high-end products and optimizing each process, giving our clients the opportunity to receive a job well done.',
        'ABOUT_TEXTO_3': '',

        'VALUES_TITULO': 'Values',
        'VALUES_ITEM_1': 'Honesty',
        'VALUES_DESC_1': 'Transparency, sincerity and frankness are values ​​that we currently found in our team, so that we can earn your trust and credibility by offering a consolidated and secure job.',
        'VALUES_ITEM_2': 'Quality',
        'VALUES_DESC_2': 'Implement improvements in your project processes to solve or satisfy your needs, always guaranteeing impeccable work.',
        'VALUES_ITEM_3': 'Puntuality',
        'VALUES_DESC_3': 'We respect the deadlines for each delivery, project or work that our team is in charge of, always optimizing each process to achieve a better finish.',
        'VALUES_ITEM_4': 'Teamwork ',
        'VALUES_ITEM_5': 'project',
        'VALUES_DESC_4': 'We provide a corporate environment where tolerance, respect, admiration and consideration are our qualities, they can also be considered freedom, resilience, loyalty, solidarity.',
        
        'LIDERES_TITULO_1': 'Our ',
        'LIDERES_TITULO_2': 'leaders',

        'Privacidad': 'Privacy Policy',
        'Cookies': 'Cookies Policy',
        'FOOTER_COPY': '© Designed by IV&RM | Copyright 2023'
    },
    'es': {
        'MENU_INICIO': 'inicio',
        'MENU_NOSOTROS': 'Conócenos',
        'MENU_SOLUCIONES': 'Soluciones',
        'MENU_CLIENTES': 'Clientes',
        'MENU_CONTACTANOS': 'Contáctanos',
        'SLIDER_CONOCENOS': 'Conócenos',
        'ABOUT_TITULO1': 'QUIÉNES',
        'ABOUT_TITULO2': ' SOMOS',
        'ABOUT_TEXTO_1': 'Somos expertos en soluciones de integración de servicios con una gama de productos, capaces de resolver todas las necesidades de conectividad en el área de redes y telecomunicaciones, cámaras de seguridad y sistema contra incendio.',
        'ABOUT_TEXTO_2': 'Nuestros servicios asociados con la tecnología nos ayudan a ofrecer un sevicio avanzado, agil y seguro, implementando nuestros pruductos de alta gama y optimizando cada proceso, dandole la oportunidad a nuestros clientes de recibir un trabajo bien hecho.',
        'ABOUT_TEXTO_3': '',
        
        'VALUES_TITULO': 'Valores',
        'VALUES_ITEM_1': 'Honestidad',
        'VALUES_DESC_1': 'La transparencia, sinceridad y franqueza son valores que actualmente fundamos en nuestro equipo, de manera que podamos ganarnos tu confianza y credibilidad ofreciendo un trabajo afianzado y seguro.',
        'VALUES_ITEM_2': 'Calidad',
        'VALUES_DESC_2': 'Implementar mejoras en procesos de tu proyecto para solucionar o satisfacer tus necesidades, garantizando siempre un trabajo impecable.',
        'VALUES_ITEM_3': 'Puntualidad',
        'VALUES_DESC_3': 'Somos respetuosos con los plazos de cada entrega, proyecto u obra de la que nuestro equipo esté a cargo, siempre optimizado cada proceso para lograr un mejor acabado.',
        'VALUES_ITEM_4': 'Trabajo ',
        'VALUES_ITEM_5': 'en Equipo',
        'VALUES_DESC_4': 'Brindamos un ambiente corporativo donde la tolerancia, respeto, la admiración y consideración son nuestras cualidades, también pueden considerarse libertad, resilencia, lealtad, solidaridad.',
        
        'LIDERES_TITULO_1': 'Nuestros ',
        'LIDERES_TITULO_2': 'LÍderes',

        'POLITICA': 'Política de calidad',
        'CERTIFICACIONES': 'y certificaciones',
        'POLICIES_TEXTO_1': 'IV&RM Solutions, empresa dedicada al servicio de desarrollo de tecnología para el soporte de la operación agrícola, tiene como visión ser una empresa lider de soluciones tecnológicas en el rubro y expandirse a mercados internacionales. Como parte de su desarrollo y dirección estratégica.',
        'POLICIES_TEXTO_2': 'Cumplir los requisitos de los clientes, partes interesadas, legales y demás requisitos aplicables al rubro de la organización, generando una cultura de calidad mediante el fortalecimiento del talento humano.',
        'POLICIES_TEXTO_3': 'Brindar servicios tecnológicos que cumplan las especificaciones técnicas de calidad y el logro de las necesidades y expectativas del usuario, garantizando su satisfacción.',
        'POLICIES_TEXTO_4': 'Promover la mejora continua del sistema de gestión de la calidad mediante la evaluación del desempeño y generación de oportunidades de mejora a través de todos los procesos.',
        'POLICIES_TEXTO_5': 'Esta política servirá como marco de referencia para el establecimiento de los objetivos de la calidad y será difundida, comunicada y entendida a los colaboradores y a las partes interesadas.',
        'POLICIES_TEXTO_6': 'El alcance del Sistema de Gestión de Calidad de Yapu Solutions S.A.C., ubicada en Av. Teodoro Valcárcel N°999, segundo piso. Urb. Santa Leonor. Trujillo, Perú; comprende los Procesos de Preparación, Implementación y Soporte Post Venta de soluciones tecnológicas. El único requisito de la norma internacional ISO 9001:2015 que no aplica al Sistema de Gestión de la Calidad de nuestra organización es: 7.1.5.2. Trazabilidad de las mediciones: En la organización no se realiza calibraciones, comprobaciones ni verificaciones, ya que no contamos con equipos de seguimiento y medición.',
        
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