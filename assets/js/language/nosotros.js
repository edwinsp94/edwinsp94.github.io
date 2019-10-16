var arrLang = {
    'en' : {
        'MENU_INICIO' : 'Home',
        'MENU_NOSOTROS' : 'About Us',
        'MENU_SOLUCIONES' : 'Solutions',
        'MENU_CLIENTES' : 'Customers',
        'MENU_CONTACTANOS' : 'Contact Us',
        'ROUTER_TITULO' : 'About Us',
        'ROUTER_NAV_1' : 'Home',
        'ROUTER_NAV_2' : 'About Us',
        'MISION_TITULO' : 'Our Mission',
        'MISION_TEXTO' : 'Meet the needs of our customers through the technology development service to support the agricultural operation, with a specialized, innovative and competent team.',
        'VISION_TITULO' : 'Our Vision',
        'VISION_TEXTO' : 'To be a leading national company, of technological services based on solutions for agribusiness and expand to international markets.',
        'DIFFERENTIATORS_TITULO' : 'Differentiators',
        'DIFFERENTIATORS_ITEM_1' : 'High Quality and Experience',
        'DIFFERENTIATORS_ITEM_2' : 'Data Security',
        'DIFFERENTIATORS_ITEM_3' : 'Innovation and permanent evolution',
        'DIFFERENTIATORS_ITEM_4' : 'Capacity to execute large contracts and projects',
        'DIFFERENTIATORS_ITEM_5' : 'Vocation of service, commitment and flexibility',
        'DIFFERENTIATORS_ITEM_6' : 'Specialized and experienced team',
        'CERTIFICATIONS_TITULO' : 'Our Certifications',
        'VALUES_TITULO' : 'Values YAPU',
        'VALUES_ITEM_1' : 'Creativity',
        'VALUES_ITEM_2' : 'Commitment',
        'VALUES_ITEM_3' : 'Sobriety',
        'VALUES_ITEM_4' : 'Innovation',
        'VALUES_ITEM_5' : 'Efficiency',
        'COMMITMENTS_TITULO' : 'Commitment to our Clients',
        'COMMITMENTS_SUBTITULO_1' : 'A flexible provider',
        'COMMITMENTS_TEXTO_1' : 'We have a wide range of IT solutions that adapt to your processes to add value to your business.',
        'COMMITMENTS_SUBTITULO_2' : 'Business partner with high service vocation',
        'COMMITMENTS_TEXTO_2' : 'Outstanding trajectory in the development of projects of diverse magnitude and complexity provided by a human group full of passion, enthusiasm and dedication to service.',
        'COMMITMENTS_SUBTITULO_3' : 'Quickly answers',
        'COMMITMENTS_TEXTO_3' : 'World class services based on the best practices in the industry and backed by the main technological certifications.',
        'FOOTER_COPY' : '© Designed by YAPU Solutions | Copyright 2019'
    },
    'es' : {
        'MENU_INICIO' : 'Inicio',
        'MENU_NOSOTROS' : 'Nosotros',
        'MENU_SOLUCIONES' : 'Soluciones',
        'MENU_CLIENTES' : 'Clientes',
        'MENU_CONTACTANOS' : 'Contáctenos',
        'ROUTER_TITULO' : 'Nosotros',
        'ROUTER_NAV_1' : 'Inicio',
        'ROUTER_NAV_2' : 'Nosotros',
        'MISION_TITULO' : 'Nuestra Misión',
        'MISION_TEXTO' : 'Cumplir las necesidades de nuestros clientes mediante el servicio de desarrollo de tecnología para el soporte de la operación agrícola, contando con un equipo especializado, innovador y competente.',
        'VISION_TITULO' : 'Nuestra Visión',
        'VISION_TEXTO' : 'Ser una empresa líder a nivel nacional, de servicios tecnológicos basados en soluciones para la agroindustria y expandirse a mercados internacionales.',
        'DIFFERENTIATORS_TITULO' : 'Diferenciadores',
        'DIFFERENTIATORS_ITEM_1' : 'Alta Calidad y Experiencia',
        'DIFFERENTIATORS_ITEM_2' : 'Seguridad de Datos',
        'DIFFERENTIATORS_ITEM_3' : 'Innovación y evolución permanente',
        'DIFFERENTIATORS_ITEM_4' : 'Capacidad de ejecución de grandes contratos y proyectos',
        'DIFFERENTIATORS_ITEM_5' : 'Vocación de servicio, compromiso y flexibilidad',
        'DIFFERENTIATORS_ITEM_6' : 'Equipo especializado y experimentado',
        'CERTIFICATIONS_TITULO' : 'Nuestras Certificaciones',
        'VALUES_TITULO' : 'Valores YAPU',
        'VALUES_ITEM_1' : 'Creatividad',
        'VALUES_ITEM_2' : 'Compromiso',
        'VALUES_ITEM_3' : 'Sobriedad',
        'VALUES_ITEM_4' : 'Innovación',
        'VALUES_ITEM_5' : 'Eficiencia',
        'COMMITMENTS_TITULO' : 'Compromiso con nuestros Clientes',
        'COMMITMENTS_SUBTITULO_1' : 'Un proveedor flexible',
        'COMMITMENTS_TEXTO_1' : 'Contamos con un amplio abanico de soluciones TI que se adaptan a sus procesos para agregar valor a su negocio.',
        'COMMITMENTS_SUBTITULO_2' : 'Socio de negocios con alta vocación de servicio',
        'COMMITMENTS_TEXTO_2' : 'Destacada trayectoria en desarrollo de proyectos de diversa magnitud y complejidad provistos por un grupo humano lleno de pasión, entusiasmo y vocación de servicio.',
        'COMMITMENTS_SUBTITULO_3' : 'Respuestas rápidas',
        'COMMITMENTS_TEXTO_3' : 'Servicios de clase mundial basados en las mejores prácticas de la industria y avalados por las principales certificaciones tecnológicas.',
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