document.getElementById('year').textContent = new Date().getFullYear();

const themeToggle = document.querySelector('.theme-toggle');
const translationToggle = document.querySelector('.translation-toggle');
const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
const siteLogo = document.querySelector('.logo');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

function closeMobileNav() {
  if (mobileNav) {
    mobileNav.setAttribute('hidden', '');
  }
  if (navToggle) {
    navToggle.setAttribute('aria-expanded', 'false');
  }
}

function setFormStatus(message, isError = false) {
  if (!formStatus) return;
  formStatus.className = `form-status${isError ? ' form-status--error' : ' form-status--success'}`;
  formStatus.innerHTML = message;
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 860) {
    closeMobileNav();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMobileNav();
  }
});

const translations = {
  en: {},
  es: {
    'Dark mode': 'Modo oscuro',
    'Light mode': 'Modo claro',
    'Switch to dark mode': 'Cambiar a modo oscuro',
    'Switch to light mode': 'Cambiar a modo claro',
    'Translate page': 'Traducir página',
    'Español': 'Español',
    'English': 'English',
    'Home': 'Inicio',
    'Services': 'Servicios',
    'Pricing': 'Precios',
    'Compliance': 'Cumplimiento',
    'Contact': 'Contacto',
    'Request service': 'Solicitar servicio',
    'Open menu': 'Abrir menú',
    'Close menu': 'Cerrar menú',
    'Request a quote': 'Solicitar una cotización',
    'Get a free quote': 'Obtener una cotización gratis',
    'Schedule an inspection': 'Programar una inspección',
    'View service plans': 'Ver planes de servicio',
    'See all services': 'Ver todos los servicios',
    'Full pricing details': 'Detalles completos de precios',
    'Get in touch': 'Póngase en contacto',
    'Request a quote': 'Solicitar una cotización',
    'Get in touch': 'Póngase en contacto',
    'Phone': 'Teléfono',
    'Email': 'Correo electrónico',
    'Service area': 'Área de servicio',
    'Restaurants and commercial kitchens Madison Wisconsin area and neighbouring cities.': 'Restaurantes y cocinas comerciales del área de Madison, Wisconsin y ciudades vecinas.',
    'Available for emergencies': 'Disponible para emergencias',
    '(608)-512-3790 &middot; Available for emergencies': '(608)-512-3790 &middot; Disponible para emergencias',
    'available for emergencies': 'disponible para emergencias',
    'Full name': 'Nombre completo',
    'Business name': 'Nombre del negocio',
    'Interested in': 'Interesado en',
    'Tell us about your kitchen': 'Cuéntenos sobre su cocina',
    'Number of hoods, approximate square footage, current cleaning schedule, etc.': 'Número de campanas, espacio aproximado, horario actual de limpieza, etc.',
    'Submit request': 'Enviar solicitud',
    'Standard (every 6 months)': 'Estándar (cada 6 meses)',
    'Quarterly (every 3 months)': 'Trimestral (cada 3 meses)',
    'High-volume (monthly)': 'Alto volumen (mensual)',
    'Not sure yet': 'Aún no estoy seguro',
    'Contact us': 'Contáctanos',
    'Request a quote, schedule an inspection, or ask a question. We will get back to you as soon as possible.': 'Solicite una cotización, programe una inspección o haga una pregunta. Le responderemos lo antes posible.',
    'Keep your kitchen compliant, insured, and fire-safe.': 'Mantenga su cocina cumpliendo con la normativa, asegurada y segura contra incendios.',
    'Everest Hoods & Ducts delivers scheduled, documented exhaust cleaning that satisfies fire marshals, health inspectors, and insurers.': 'Everest Hoods & Ducts ofrece limpieza programada y documentada de sistemas de extracción que satisface a los cuerpos de bomberos, inspectores de salud y aseguradoras.',
    'NFPA 96 · MFS certified': 'NFPA 96 · Certificado por MFS',
    'Every visit includes': 'Cada visita incluye',
    'Full hood, duct & fan cleaning': 'Limpieza completa de campana, conducto y ventilador',
    'Fire suppression access check': 'Revisión de acceso al sistema de supresión de incendios',
    'Dated tag & photo report': 'Etiqueta fechada e informe fotográfico',
    'Insurer-ready records': 'Registros listos para aseguradoras',
    'Everything your kitchen needs to pass inspection': 'Todo lo que su cocina necesita para pasar la inspección',
    'Hood & duct cleaning': 'Limpieza de campana y conductos',
    'Full exhaust system stripped to bare metal, per NFPA 96 code requirements.': 'Sistema de extracción completo despojado hasta metal desnudo, según los requisitos del código NFPA 96.',
    'We identify and flag grease buildup before it becomes a fire hazard.': 'Identificamos y señalamos la acumulación de grasa antes de que se convierta en un peligro de incendio.',
    'Compliance documentation': 'Documentación de cumplimiento',
    'Dated service tags and reports your insurer and fire marshal will accept.': 'Etiquetas de servicio fechadas e informes que su aseguradora y el cuerpo de bomberos aceptarán.',
    'Service plans': 'Planes de servicio',
    'Choose a cleaning cadence that fits your kitchen': 'Elija una frecuencia de limpieza que se adapte a su cocina',
    'Quarterly': 'Trimestral',
    'Standard': 'Estándar',
    'High-volume': 'Alto volumen',
    'Every 3 months': 'Cada 3 meses',
    'Every 6 months': 'Cada 6 meses',
    'Most common': 'Más común',
    'Full clean & certification': 'Limpieza completa y certificación',
    'Photo documentation': 'Documentación fotográfica',
    'Email reminders': 'Recordatorios por correo electrónico',
    'Everything in Quarterly': 'Todo lo de Trimestral',
    'Priority scheduling': 'Programación prioritaria',
    'Fire marshal liaison': 'Enlace con el cuerpo de bomberos',
    'Everything in Standard': 'Todo lo de Estándar',
    'Multi-site accounts': 'Cuentas multi-sitio',
    'Dedicated account manager': 'Gestor de cuenta dedicado',
    'NFPA 96 Certified': 'Certificado por NFPA 96',
    'Fully licensed & Insured': 'Totalmente licenciado y asegurado',
    'MFS Certified': 'Certificado por MFS',
    'Due for your next inspection?': '¿Listo para su próxima inspección?',
    'Most kitchens need cleaning every 3–6 months to stay compliant. Get a free, no-obligation quote.': 'La mayoría de cocinas necesitan limpieza cada 3–6 meses para mantenerse en cumplimiento. Obtenga una cotización gratis y sin compromiso.',
    'Services': 'Servicios',
    'Everything your commercial kitchen needs to stay fire-safe, code-compliant, and ready for inspection — from routine cleaning to full compliance documentation.': 'Todo lo que su cocina comercial necesita para mantenerse segura contra incendios, en cumplimiento normativo y lista para inspección — desde la limpieza rutinaria hasta la documentación completa de cumplimiento.',
    'Hood & Duct Cleaning': 'Limpieza de campana y conductos',
    'Our certified technicians clean your entire exhaust system — hood, ductwork, filters, and fan — down to bare metal per NFPA 96 standards, cutting fire risk and keeping your kitchen safe and code compliant.': 'Nuestros técnicos certificados limpian todo su sistema de extracción — campana, conductos, filtros y ventilador — hasta metal desnudo según los estándares NFPA 96, reduciendo el riesgo de incendio y manteniendo su cocina segura y en cumplimiento.',
    'Compliance Documentation': 'Documentación de cumplimiento',
    'After every service, you\'ll receive a dated certification sticker and a detailed inspection report with before-and-after photos. Our documentation provides the records required by health inspectors, fire marshals, insurance providers, and property managers, giving you confidence that your exhaust system has been professionally serviced and meets industry standards.': 'Después de cada servicio, recibirá una etiqueta de certificación fechada y un informe detallado de inspección con fotos antes y después. Nuestra documentación proporciona los registros que exigen los inspectores de salud, los cuerpos de bomberos, las aseguradoras y los administradores de propiedades, dándole la confianza de que su sistema de extracción ha sido atendido profesionalmente y cumple con los estándares de la industria.',
    'Grease Duct Access Doors': 'Puertas de acceso a conductos de grasa',
    'Grease duct access doors provide safe, code-compliant access to commercial kitchen exhaust ducts for routine inspection and cleaning. Proper access helps remove grease buildup, reducing fire hazards, improving system performance, and ensuring compliance with NFPA 96 fire safety standards.': 'Las puertas de acceso a conductos de grasa brindan acceso seguro y conforme a la normativa a los conductos de extracción de cocinas comerciales para inspección y limpieza rutinarias. Un acceso adecuado ayuda a eliminar la acumulación de grasa, reducir peligros de incendio, mejorar el rendimiento del sistema y asegurar el cumplimiento de los estándares NFPA 96.',
    'Whether you\'re installing a new access panel or replacing an existing one, a properly installed grease duct access door makes ongoing maintenance safer, faster, and more efficient.': 'Ya sea que esté instalando un nuevo panel de acceso o reemplazando uno existente, una puerta de acceso a conducto de grasa instalada correctamente hace que el mantenimiento continuo sea más seguro, rápido y eficiente.',
    'Hood Hinge Installation': 'Instalación de bisagras de campana',
    'Hood hinge installation allows commercial kitchen exhaust hoods to be safely lifted for easier access during cleaning, inspection, and maintenance. Hinges improve accessibility, help technicians clean hard-to-reach areas, and support compliance with NFPA 96 fire safety standards.': 'La instalación de bisagras de campana permite levantar de forma segura las campanas de extracción de cocinas comerciales para facilitar el acceso durante la limpieza, inspección y mantenimiento. Las bisagras mejoran la accesibilidad, ayudan a los técnicos a limpiar áreas de difícil acceso y apoyan el cumplimiento de los estándares NFPA 96.',
    'Properly installed hood hinges make routine maintenance faster, safer, and more effective while helping extend the life of your exhaust system.': 'Las bisagras de campana instaladas correctamente hacen que el mantenimiento rutinario sea más rápido, seguro y efectivo, al mismo tiempo que ayudan a prolongar la vida de su sistema de extracción.',
    'Rooftop Grease Containment System Installation': 'Instalación de sistema de contención de grasa en la azotea',
    'A rooftop grease containment system helps prevent grease from leaking onto the roof by capturing runoff from commercial kitchen exhaust fans. This protects the roof from damage, reduces slip hazards, helps maintain a cleaner facility, and supports compliance with environmental and safety regulations.': 'Un sistema de contención de grasa en la azotea ayuda a evitar que la grasa se filtre sobre el techo al capturar el escurrimiento de los ventiladores de extracción de cocinas comerciales. Esto protege el techo de daños, reduce los peligros de resbalones, ayuda a mantener una instalación más limpia y apoya el cumplimiento de las regulaciones ambientales y de seguridad.',
    'Proper installation helps extend the life of your roof while simplifying maintenance and cleanup.': 'La instalación adecuada ayuda a prolongar la vida de su techo, al tiempo que simplifica el mantenimiento y la limpieza.',
    'Filter Replacement': 'Reemplazo de filtros',
    'Regular filter replacement keeps your commercial kitchen exhaust system operating safely and efficiently. Clean, properly functioning filters improve airflow, reduce grease buildup in the ductwork, lower the risk of fire, and help maintain compliance with NFPA 96 standards.': 'El reemplazo regular de filtros mantiene su sistema de extracción de cocina comercial funcionando de manera segura y eficiente. Los filtros limpios y en buen estado mejoran el flujo de aire, reducen la acumulación de grasa en los conductos, disminuyen el riesgo de incendio y ayudan a mantener el cumplimiento de los estándares NFPA 96.',
    'Replacing worn or damaged filters also helps extend the life of your exhaust system and improves overall kitchen ventilation.': 'Reemplazar filtros gastados o dañados también ayuda a prolongar la vida de su sistema de extracción y mejora la ventilación general de la cocina.',
    'Patio Pressure Washing': 'Lavado a presión de patio',
    'Keep your outdoor spaces looking clean and professional with our patio pressure washing service. We remove dirt, grease, stains, algae, and grime from concrete, pavers, and other hard surfaces, improving curb appeal and creating a safer, more inviting environment for customers and employees.': 'Mantenga sus espacios exteriores con un aspecto limpio y profesional con nuestro servicio de lavado a presión de patio. Eliminamos suciedad, grasa, manchas, algas y mugre de concreto, adoquines y otras superficies duras, mejorando el atractivo visual y creando un entorno más seguro e invitador para clientes y empleados.',
    'This service is a great addition to routine property maintenance or commercial kitchen exhaust cleaning.': 'Este servicio es una gran adición al mantenimiento rutinario de la propiedad o a la limpieza de sistemas de extracción de cocinas comerciales.',
    'Drag to compare — real job, before and after.': 'Arrastre para comparar — trabajo real, antes y después.',
    'Before': 'Antes',
    'After': 'Después',
    'Pricing & service plans': 'Precios y planes de servicio',
    'Choose a cleaning cadence that fits your kitchen\'s volume and local code requirements. Exact pricing depends on hood size, duct length, and site access — request a quote for an exact number.': 'Elija una frecuencia de limpieza que se adapte al volumen de su cocina y a los requisitos locales. El precio exacto depende del tamaño de la campana, la longitud de los conductos y el acceso al sitio — solicite una cotización para conocer un número exacto.',
    'Frequently asked': 'Preguntas frecuentes',
    'Pricing questions': 'Preguntas sobre precios',
    'How is pricing determined?': '¿Cómo se determina el precio?',
    'Cost depends on hood size, total duct footage, roof access, and how much grease buildup is present at the first visit.': 'El costo depende del tamaño de la campana, la longitud total de conductos, el acceso al techo y la cantidad de acumulación de grasa presente en la primera visita.',
    'How often do I actually need cleaning?': '¿Con qué frecuencia necesito limpiar realmente?',
    'Most local fire codes require cleaning every 3 to 6 months for standard-volume kitchens, and monthly for high-volume or 24-hour operations.': 'La mayoría de los códigos locales contra incendios exigen limpieza cada 3 a 6 meses para cocinas de volumen estándar, y mensualmente para operaciones de alto volumen o 24 horas.',
    'Can I switch plans later?': '¿Puedo cambiar de plan después?',
    'Yes — plans can be adjusted at any time as your kitchen\'s volume or inspection requirements change.': 'Sí — los planes pueden ajustarse en cualquier momento a medida que cambian el volumen de su cocina o los requisitos de inspección.',
    'Do you offer multi-site contracts?': '¿Ofrecen contratos para múltiples sitios?',
    'Yes, our High-volume plan is built for restaurant groups managing several locations under one account.': 'Sí, nuestro plan de alto volumen está diseñado para cadenas de restaurantes que gestionan varias ubicaciones bajo una sola cuenta.',
    'Not sure which plan fits?': '¿No está seguro de qué plan se adapta?',
    'Tell us about your kitchen and we\'ll recommend a cadence and give you a firm quote.': 'Cuéntenos sobre su cocina y le recomendaremos una frecuencia y le daremos una cotización firme.',
    'Compliance & credentials': 'Cumplimiento y credenciales',
    'We hold ourselves to the standards your fire marshal, health inspector, and insurer already expect — and document every job to prove it.': 'Nos ajustamos a los estándares que ya esperan su cuerpo de bomberos, inspector de salud y aseguradora — y documentamos cada trabajo para demostrarlo.',
    'NFPA 96 certified': 'Certificado por NFPA 96',
    'All cleaning follows NFPA 96, the national fire code standard for ventilation control and fire protection of commercial cooking operations.': 'Toda la limpieza sigue la norma NFPA 96, el estándar nacional de código contra incendios para el control de ventilación y protección contra incendios de operaciones de cocinas comerciales.',
    'MFS certified': 'Certificado por MFS',
    'We are MFS certified, following the industry-standard practices and quality expectations that support safe, compliant exhaust system maintenance.': 'Somos certificados por MFS, siguiendo las prácticas estándar de la industria y las expectativas de calidad que apoyan el mantenimiento seguro y conforme de los sistemas de extracción.',
    'What documentation do you provide?': '¿Qué documentación proporcionan?',
    'Every completed job includes a dated service tag affixed to the hood, a written report, and time-stamped photos of the system before and after cleaning. This documentation is formatted to meet what most insurers and local fire departments require during inspections.': 'Cada trabajo completado incluye una etiqueta de servicio fechada adherida a la campana, un informe escrito y fotos con marca de tiempo del sistema antes y después de la limpieza. Esta documentación está formateada para cumplir con lo que la mayoría de aseguradoras y cuerpos de bomberos locales exigen durante las inspecciones.',
    'Every completed job includes a dated service tag affixed to the hood, a written report, and time-stamped photos of the system before and after cleaning. This documentation is formatted to meet what most insurers and local fire departments require during inspections — and we keep a copy on file so you always have a backup if yours goes missing.': 'Cada trabajo completado incluye una etiqueta de servicio fechada adherida a la campana, un informe escrito y fotos con marca de tiempo del sistema antes y después de la limpieza. Esta documentación está formateada para cumplir con lo que la mayoría de aseguradoras y cuerpos de bomberos locales exigen durante las inspecciones — y guardamos una copia en archivo para que siempre tenga respaldo si la suya desaparece.',
    'Need documentation for an upcoming inspection?': '¿Necesita documentación para una próxima inspección?',
    'We can provide records from past visits or schedule a new cleaning ahead of your inspection date.': 'Podemos proporcionar registros de visitas anteriores o programar una nueva limpieza antes de la fecha de su inspección.',
    'Ready to book a cleaning?': '¿Listo para reservar una limpieza?',
    'Get a free, no-obligation quote based on your kitchen\'s size and current cleaning cadence.': 'Obtenga una cotización gratis y sin compromiso según el tamaño de su cocina y su frecuencia actual de limpieza.',
    'Get a free quote': 'Obtener una cotización gratis',
    'Get a free, no-obligation quote based on your kitchen\'s size and current cleaning cadence.': 'Obtenga una cotización gratis y sin compromiso según el tamaño de su cocina y su frecuencia actual de limpieza.',
    'Pricing questions': 'Preguntas sobre precios',
    'Frequently asked': 'Preguntas frecuentes',
    'Contact us': 'Contáctanos',
    'Open menu': 'Abrir menú'
  }
};

let isSpanishMode = false;

function renderUtilityBar() {
  const isDark = document.body.classList.contains('dark-mode');
  const translationMap = isSpanishMode ? translations.es : translations.en;

  if (themeToggle) {
    const themeLabel = isDark ? 'Light mode' : 'Dark mode';
    const translatedThemeLabel = translationMap[themeLabel] || themeLabel;
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    themeToggle.innerHTML = isDark
      ? '<i class="ti ti-sun" aria-hidden="true"></i><span>' + translatedThemeLabel + '</span>'
      : '<i class="ti ti-moon" aria-hidden="true"></i><span>' + translatedThemeLabel + '</span>';
  }

  if (translationToggle) {
    const toggleLabel = isSpanishMode ? 'English' : 'Español';
    const translatedToggleLabel = translationMap[toggleLabel] || toggleLabel;
    translationToggle.setAttribute('aria-pressed', String(isSpanishMode));
    translationToggle.setAttribute('aria-label', isSpanishMode ? 'Switch to English' : 'Translate page');
    translationToggle.innerHTML = '<i class="ti ti-language" aria-hidden="true"></i><span>' + translatedToggleLabel + '</span>';
  }

  const utilityText = document.querySelector('.utility-bar__meta span');
  if (utilityText) {
    const englishText = '(608)-512-3790 · Available for emergencies';
    const spanishText = '(608)-512-3790 · Disponible para emergencias';
    utilityText.textContent = isSpanishMode ? spanishText : englishText;
  }
}

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.body.classList.toggle('dark-mode', isDark);
  localStorage.setItem('theme', theme);
  renderUtilityBar();
}

const translationState = {
  textNodes: new WeakMap(),
  attributeValues: new WeakMap(),
  optionValues: new WeakMap()
};

function getStoredTextValue(node) {
  if (!translationState.textNodes.has(node)) {
    translationState.textNodes.set(node, node.nodeValue);
  }
  return translationState.textNodes.get(node);
}

function getStoredAttributeValue(element, attributeName) {
  const attributeMap = translationState.attributeValues.get(element) || {};
  if (!(attributeName in attributeMap)) {
    attributeMap[attributeName] = element.getAttribute(attributeName);
    translationState.attributeValues.set(element, attributeMap);
  }
  return attributeMap[attributeName];
}

function applyTranslation(isSpanish) {
  isSpanishMode = isSpanish;
  const language = isSpanish ? 'es' : 'en';
  const translationMap = translations[language];
  document.documentElement.lang = language;
  document.body.classList.toggle('is-spanish', isSpanish);

  const utilityText = document.querySelector('.utility-bar__meta span');
  if (utilityText) {
    utilityText.textContent = isSpanish ? '(608)-512-3790 · Disponible para emergencias' : '(608)-512-3790 · Available for emergencies';
  }

  const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest('.theme-toggle, .translation-toggle')) {
        return NodeFilter.FILTER_REJECT;
      }
      return node.nodeValue && node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  let textNode;
  while ((textNode = textWalker.nextNode())) {
    const originalValue = getStoredTextValue(textNode);
    const trimmed = originalValue.trim();
    if (!trimmed) continue;

    const translatedValue = isSpanish ? (translationMap[trimmed] || trimmed) : originalValue;
    const nextValue = translatedValue === originalValue ? originalValue : originalValue.replace(trimmed, translatedValue);
    textNode.nodeValue = nextValue;
  }

  document.querySelectorAll('[placeholder]').forEach((element) => {
    const originalValue = getStoredAttributeValue(element, 'placeholder');
    const translatedValue = isSpanish ? (translationMap[originalValue] || originalValue) : originalValue;
    element.setAttribute('placeholder', translatedValue);
  });

  document.querySelectorAll('[aria-label]').forEach((element) => {
    const originalValue = getStoredAttributeValue(element, 'aria-label');
    const translatedValue = isSpanish ? (translationMap[originalValue] || originalValue) : originalValue;
    element.setAttribute('aria-label', translatedValue);
  });

  document.querySelectorAll('img[alt]').forEach((element) => {
    const originalValue = getStoredAttributeValue(element, 'alt');
    const translatedValue = isSpanish ? (translationMap[originalValue] || originalValue) : originalValue;
    element.setAttribute('alt', translatedValue);
  });

  document.querySelectorAll('option').forEach((element) => {
    const originalValue = element.textContent.trim();
    const storedValue = translationState.optionValues.get(element) || originalValue;
    if (!translationState.optionValues.has(element)) {
      translationState.optionValues.set(element, originalValue);
    }
    const translatedValue = isSpanish ? (translationMap[storedValue] || storedValue) : storedValue;
    element.textContent = translatedValue;
  });

  renderUtilityBar();
  localStorage.setItem('language', language);
}

const preferredTheme = localStorage.getItem('theme') || 'light';
applyTheme(preferredTheme);

const preferredLanguage = localStorage.getItem('language') || 'en';
applyTranslation(preferredLanguage === 'es');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

if (translationToggle) {
  translationToggle.addEventListener('click', () => {
    const isSpanish = document.body.classList.contains('is-spanish');
    applyTranslation(!isSpanish);
  });
}

if (contactForm) {
  const submitButton = contactForm.querySelector('button[type="submit"]');

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!submitButton) return;

    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    const subject = `New contact request from ${formValues.name || 'website visitor'}`;
    const body = Object.entries(formValues)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    const fallbackMailto = `mailto:ehdservices3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setFormStatus('Sending your request...', false);
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        headers: {
          Accept: 'application/json'
        },
        body: new URLSearchParams(formData)
      });

      if (!response.ok) {
        throw new Error('Formspree request failed');
      }

      contactForm.reset();
      setFormStatus('Thanks! Your request was sent successfully. We will be in touch soon.', false);
    } catch (error) {
      setFormStatus(`Formspree is unavailable right now. <a href="${fallbackMailto}" target="_blank" rel="noopener noreferrer">Send the request directly by email</a> instead.`, true);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Submit request';
    }
  });
}

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileNav.hasAttribute('hidden') === false;
    if (isOpen) {
      closeMobileNav();
    } else {
      mobileNav.removeAttribute('hidden');
      navToggle.setAttribute('aria-expanded', 'true');
    }
  });
}

if (siteLogo) {
  siteLogo.addEventListener('click', closeMobileNav);
}

if (mobileNav) {
  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });
}
