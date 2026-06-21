const PORTADA_DILEMA_SRC = 'portada_dilema_del_color.jpg';
const GNVIC_STORAGE_KEY = 'gnvic_piloto_taller_data_v1';
const PILOT_MODE = true;
const PILOT_MAX_VINETAS = 6;
const PILOT_MAX_ITERATIONS = 3;
// Vitrina pública: la app se experimenta completa con el contenido precargado de NARZU,
// sin requerir clave. Si la persona configura su propia clave de OpenRouter, la generación
// en vivo (imágenes y develación) se activa de forma opcional.
const SHOWCASE_MODE = true;

function getPortadaAssetSrc() {
    return `${encodeURI(PORTADA_DILEMA_SRC)}?refresh=${Date.now()}`;
}

const NARZU_PRELOAD = {
    id: 'narzu-001',
    titulo: 'Narzu. Comprender, entonces elegir.',
    autor: 'Teresa Márquez',
    genero: 'Novela gráfica',
    trama: `dramatiza la disyuntiva tecnológica/humanística en la México de 2026. Ambientada en la Preparatoria "Con Amor" —un teatro art déco abandonado reconvertido en escuela pública de barrio en la Ciudad de México—, la obra explora cómo la inteligencia artificial atraviesa la vida escolar cotidiana, las expectativas de futuro y las desigualdades materiales.\nEl conflicto central surge de un formulario de orientación vocacional aparentemente simple:\n- Azul: Trayectorias tecnológicas ligadas a IA, datos, programación.\n- Naranja: Humanidades, ciencias sociales, artes.\nLo que comienza como trámite administrativo se convierte en espejo de tensiones existenciales: ¿qué futuro es posible, para quién y a qué costo, cuando la IA redefine empleabilidad, autonomía y sentido humano?`,
    sinopsis_ficha: `dramatiza la disyuntiva tecnológica/humanística en la México de 2026. Ambientada en la Preparatoria "Con Amor" —un teatro art déco abandonado reconvertido en escuela pública de barrio en la Ciudad de México—, la obra explora cómo la inteligencia artificial atraviesa la vida escolar cotidiana, las expectativas de futuro y las desigualdades materiales. \n\nEl conflicto central surge de un formulario de orientación vocacional aparentemente simple:\n- Azul: Trayectorias tecnológicas ligadas a IA, datos, programación.\n- Naranja: Humanidades, ciencias sociales, artes.\n\nLo que comienza como trámite administrativo se convierte en espejo de tensiones existenciales: ¿qué futuro es posible, para quién y a qué costo, cuando la IA redefine empleabilidad, autonomía y sentido humano?`,
    subtexto: 'Filosofía y sociología de la tecnología',
    desc_subtexto: 'El subtexto se ubica dentro de la filosofía de la tecnología, explorando el tenso debate contemporáneo entre humanistas, transhumanistas y el enfoque ingenieril puro.\n\nPor un lado, el determinismo tecnológico (representado por el Profe Chat) y las visiones transhumanistas abogan por la matematización del mundo y la inevitabilidad del progreso liderado por la Inteligencia Artificial (el formulario "Azul"). Esta perspectiva asume que todos los problemas humanos —educativos, sociales y existenciales— pueden reducirse a "problemas de datos".\n\nEn contraposición, figuras humanistas (como Maximiliano, Paz y Dani) reaccionan ante este inminente "reemplazo cognitivo". Desde la óptica Heideggeriana del "enmarcamiento" (donde la técnica nos reduce a recursos disponibles), hasta el miedo paralizante de volverse obsoleto, la obra materializa las distintas formas de resistencia.\n\nFinalmente, Xochi y Don Tico proponen salidas no dicotómicas: la apropiación crítica del código libre y la sabiduría práctica que integra la herramienta sin perder la esencia humana. La novela no busca demonizar la máquina, sino develar que la tecnología organiza el mundo social. Comprender estas fuerzas es el primer paso para elegir de forma autónoma nuestro futuro sociotécnico.',
    bibliografia: 'Bunge, M. (1985). Seudociencia e ideología como campos epistémicos. Alianza Editorial.\nFeenberg, A. (1991). Critical theory of technology. Oxford University Press.\nHeidegger, M. (1994). La pregunta por la técnica. En Conferencias y artículos. Serbal.',
    personajes: [
        { nombre: 'Xochi', rol: 'Política crítica', desc: 'Refleja postura de Feenberg/Stallman. Origen: Captura corporativa del código.', rasgos: 'Expresión determinada', img: 'novela_grafica_xochi.jpg' },
        { nombre: 'Pete', rol: 'Duda comunicativa', desc: 'Encarna la duda y refleja una postura de Habermas/Simondon. Origen: Diálogo ético-técnico.', rasgos: 'Joven, pensativo, atravesado por la incertidumbre', img: 'novela_grafica_pete.jpg' },
        { nombre: 'Murcia', rol: 'Relativista polite', desc: 'Cultura digital vs. disciplina. Origen: Amor-odio TikTok.', rasgos: 'Relajada', img: 'novela_grafica_prof_murcia.jpg' },
        { nombre: 'Maximiliano', rol: 'Tecnopesimista', desc: 'Refleja postura de Heidegger/Mumford. Gestell ontológico.', rasgos: 'Mayor, traje formal, ceño fruncido', img: 'novela_grafica_prof_maximiliano.jpg' },
        { nombre: 'Profe Chat', rol: 'Tecnoutopista analítica', desc: 'Refleja postura de Bunge/Simon. Racionalidad instrumental.', rasgos: 'Amigable, moderno, entusiasta', img: 'novela_grafica_prof_chat2.jpg' },
        { nombre: 'Dani', rol: 'Humanista defensivo', desc: 'Ellul vulgarizado. Origen: Frustración externalizada.', rasgos: 'A la defensiva', img: 'novela_grafica_dani.jpg' },
        { nombre: 'Paz', rol: 'Humanista material', desc: 'Refleja postura de Illich/Mumford orgánico. Origen: Call center.', rasgos: 'Práctica, realista', img: 'novela_grafica_paz.jpg' },
        { nombre: 'Don Tico', rol: 'Sabiduría práctica', desc: 'Refleja postura de Simondon maduro/Aristóteles. Origen: Phronesis del taller.', rasgos: 'Mayor, sabio, ropa de trabajo', img: 'novela_grafica_don_tico2.jpg' }
    ],
    guion_episodio_1: `### El Dilema del Color: Comprende y Elige\nComo guionista y director visual, presento la estructura y el guion para el primer número de la novela gráfica titulada **“yIyaj; vaj yIwIv” (Comprende, entonces elige)**. El estilo visual se basa en un **alto contraste en blanco y negro**, capturando la esencia de una preparatoria pública en la Ciudad de México que opera dentro de un **antiguo teatro abandonado**.\n\n### **Estructura del Número 1: "El Dilema del Color"**\n**Introducción:** Presentación del espacio: el teatro-escuela "Con Amor" y la atmósfera urbana de la CDMX.\n**Incidente Incitante:** La entrega de los formularios de orientación vocacional (Azul vs. Naranja).\n**Desarrollo:** Presentación de los protagonistas (PeT, Paz, Dani, Xochi) y el choque ideológico entre los profesores Chat y Maximiliano.\n**Punto de Giro:** La comprensión de que la elección no es solo académica, sino una postura ante la vida y la tecnología.\n\n### **Guion (Páginas 1-8)**\n\n**Página 1: El Escenario**\n**Viñeta 1:** Gran plano general del exterior del edificio. Es un teatro antiguo con arquitectura imponente pero descuidada, cables cruzando el cielo y el bullicio de una calle de barrio en la CDMX.\n**Viñeta 2:** Plano detalle del letrero en la entrada: "Preparatoria Pública: Con Amor". Se nota que el nombre fue añadido sobre una estructura vieja.\n**Viñeta 3:** Primer plano de una mano joven (PeT) sosteniendo un formulario arrugado mientras camina hacia la entrada.\n**Viñeta 4:** Plano medio de los estudiantes entrando; la luz del sol de la mañana crea sombras largas y dramáticas contra las columnas del teatro.\n\n**Página 2: La Contradicción Escolar**\n**Viñeta 1:** Interior del teatro transformado en aula. Los pupitres están dispuestos donde antes hubo butacas.\n**Viñeta 2:** La **Profe Murcia** está frente al grupo. En una mano sostiene un smartphone con el que acaba de hacerse una selfie, y con la otra señala una caja de madera.\n**Viñeta 3:** Plano de la Profe Murcia diciendo: "¡Celulares a la caja! La tecnología nos distrae de la verdadera educación", mientras su propia pantalla muestra una notificación de TikTok.\n**Viñeta 4:** Primer plano de **Dani**, con expresión de frustración, entregando su teléfono como si fuera el culpable de todos sus males.\n**Viñeta 5:** Plano detalle de los formularios que la Profe Murcia empieza a repartir: hojas de dos colores llamativos.\n\n**Página 3: El Formulario**\n**Viñeta 1:** Un plano cenital (desde arriba) de los formularios sobre un pupitre. Uno es **Azul** (IA y tecnología) y el otro es **Naranja** (Humanidades y social).\n**Viñeta 2:** La voz en off de la Profe Murcia: "Tienen una semana. Azul para el futuro del progreso; Naranja para el pasado de las ideas".\n**Viñeta 3:** **PeT** observa ambos papeles con duda. Su rostro refleja la "incertidumbre existencial" de quien no sabe qué camino tomar.\n**Viñeta 4:** **Xochi**, sentada detrás, mira el formulario azul con desconfianza, tachando el logo de la empresa patrocinadora con un marcador negro.\n\n**Página 4: Paz y el Ruido del Sistema**\n**Viñeta 1:** Primer plano de **Paz**. Lleva puestos unos auriculares grandes, tratando de aislarse del caos del salón.\n**Viñeta 2:** Flashback: Paz en un Call Center pequeño y oscuro, rodeada de pantallas que muestran errores técnicos y gente gritando.\n**Viñeta 3:** Paz mira el formulario naranja. En su mente, la tecnología no es progreso, sino una herramienta que "despoja a las personas de autonomía".\n**Viñeta 4:** **PeT** se acerca a Paz en el pasillo. "¿Ya elegiste, Paz?". Ella responde sin mirarlo: "Elegir es un lujo que el sistema no nos da realmente".\n\n**Página 5: El Evangelio según Chat**\n**Viñeta 1:** Cambio de escenario al laboratorio de cómputo. El **Profe Chat** está de pie sobre una silla, gesticulando con entusiasmo.\n**Viñeta 2:** Chat muestra su tablet a los alumnos: "¡El mundo es un problema de datos y nosotros somos los ingenieros para resolverlo!".\n**Viñeta 3:** Plano medio de los alumnos fascinados por el carisma de Chat, excepto Xochi, que tiene los brazos cruzados.\n**Viñeta 4:** Plano detalle de la pantalla de Chat: un video de su canal de YouTube con miles de "likes" y retórica tecnófila.\n**Viñeta 5:** Chat termina su discurso: "El formulario azul no es una opción, es el único acceso al mañana".\n\n**Página 6: La Sombra de Maximiliano**\n**Viñeta 1:** El **Profe Maximiliano** en su oficina llena de libros viejos y papeles amarillentos. La luz es escasa y melancólica.\n**Viñeta 2:** Maximiliano habla con PeT: "La técnica, muchacho, es un enmarcamiento que nos reduce a simples recursos disponibles".\n**Viñeta 3:** Primer plano de Maximiliano, sus ojos cansados tras las gafas: "No odies al aparato, odia la forma en que te obliga a relacionarte con el mundo".\n**Viñeta 4:** Plano de PeT saliendo de la oficina, sintiéndose más confundido que antes. El peso de la crítica de Maximiliano se siente en la atmósfera.\n\n**Página 7: El Contra-Hacker y el Miedo**\n**Viñeta 1:** En las escaleras del teatro, **Xochi** tiene una laptop abierta. Está mostrándole algo a **Dani**.\n**Viñeta 2:** Pantalla de la laptop: líneas de código y un mensaje de "Software Libre". Xochi dice: "No se trata de usar la IA, sino de quién es dueño del código".\n**Viñeta 3:** Dani retrocede, asustado: "Esas cosas solo sirven para reemplazarnos. Si fallo en el examen, será porque la máquina decidió que no sirvo".\n**Viñeta 4:** Xochi suspira: "Tu miedo es exactamente lo que ellos quieren para que no pelees por el control".\n\n**Página 8: El Refugio de Don Tico**\n**Viñeta 1:** Exterior de la tienda de **Don Tico**, justo al lado de la preparatoria. Él está afuera, leyendo un periódico de papel.\n**Viñeta 2:** Don Tico mira a los estudiantes salir con sus formularios de colores. Una pequeña sonrisa melancólica aparece en su rostro.\n**Viñeta 3:** PeT se detiene a comprar un dulce. Don Tico le dice: "Ni todo es cable, ni todo es papel, chamaco. Hay que saber usar las manos para no olvidar el alma".\n**Viñeta 4:** Plano final: PeT se aleja caminando por la calle de la CDMX, con el formulario azul en una mano y el naranja en la otra, mientras el sol se pone tras el teatro abandonado.`,
    fecha: new Date().toLocaleDateString(),
    episodios: [
        {
            nombre: "El dilema del color",
            autor: "Teresa Márquez",
            trama: "En la preparatoria 'Con Amor', los estudiantes enfrentan la elección entre el futuro tecnológico (Azul) y el humanista (Naranja).",
            numVinetas: PILOT_MAX_VINETAS,
            personajes: ['Pete', 'Paz', 'Dani', 'Xochi', 'Murcia', 'Maximiliano', 'Profe Chat', 'Don Tico'],
            vinetas: [
                { imgLocal: "la_escuela.jpg", textoGlobo: "Preparatoria Pública: Con Amor. Un antiguo teatro reconvertido en escuela.", forma: "panoramica", formaGlobo: "bubble-pill", posGlobo: "top" },
                { imgLocal: "novela_grafica_prof_murcia.jpg", textoGlobo: "¡Celulares a la caja! La tecnología nos distrae de la verdadera educación.", forma: "vertical", formaGlobo: "bubble-shout", posGlobo: "top" },
                { imgLocal: "novela_grafica_pete.jpg", textoGlobo: "¿Qué futuro me espera si no entiendo a los algoritmos?", forma: "vertical", formaGlobo: "bubble-pill", posGlobo: "center" },
                { imgLocal: "novela_grafica_paz.jpg", textoGlobo: "Elegir es un lujo que el sistema no nos da realmente.", forma: "vertical", formaGlobo: "bubble-oval", posGlobo: "center" },
                { imgLocal: "novela_grafica_prof_chat2.jpg", textoGlobo: "¡El mundo es un problema de datos y nosotros somos los ingenieros para resolverlo!", forma: "panoramica", formaGlobo: "bubble-pill", posGlobo: "top" },
                { imgLocal: "novela_grafica_dani.jpg", textoGlobo: "Si fallo, la máquina decidirá que no sirvo. Xochi dice que ese miedo también es parte del sistema.", forma: "vertical", formaGlobo: "bubble-pill", posGlobo: "center" }
            ]
        }
    ]
};

const DEFAULT_CONFIG = {
    provider: 'openrouter',
    apiKey: '',
    baseUrl: 'https://openrouter.ai/api/v1',
    textModel: '',
    imageModel: '',
    txtProv: 'openrouter',
    txtKey: '',
    txtModel: '',
    imgProv: 'openrouter',
    imgKey: '',
    imgModel: ''
};

function normalizeConfig(config) {
    const cfg = config || {};
    const normalized = {
        ...DEFAULT_CONFIG,
        ...cfg
    };

    normalized.provider = cfg.provider || cfg.txtProv || cfg.imgProv || DEFAULT_CONFIG.provider;
    normalized.apiKey = cfg.apiKey || cfg.txtKey || cfg.imgKey || DEFAULT_CONFIG.apiKey;
    normalized.baseUrl = cfg.baseUrl || DEFAULT_CONFIG.baseUrl;
    normalized.textModel = cfg.textModel || cfg.txtModel || DEFAULT_CONFIG.textModel;
    normalized.imageModel = cfg.imageModel || cfg.imgModel || DEFAULT_CONFIG.imageModel;

    normalized.txtProv = normalized.provider;
    normalized.txtKey = normalized.apiKey;
    normalized.txtModel = normalized.textModel;
    normalized.imgProv = normalized.provider;
    normalized.imgKey = normalized.apiKey;
    normalized.imgModel = normalized.imageModel;

    return normalized;
}

function sanitizeBaseUrl(url) {
    const cleanUrl = (url || '').trim();
    if (!cleanUrl) return DEFAULT_CONFIG.baseUrl;
    return cleanUrl.replace(/\/+$/, '');
}

function maskApiKey(apiKey) {
    const key = (apiKey || '').trim();
    if (!key) return 'No configurada';
    if (key.length <= 10) return `${key.slice(0, 3)}...${key.slice(-2)}`;
    return `${key.slice(0, 6)}...${key.slice(-4)}`;
}

function getTextGenerationConfig() {
    const config = normalizeConfig(appData.config);
    return {
        provider: config.provider,
        apiKey: config.apiKey,
        baseUrl: sanitizeBaseUrl(config.baseUrl),
        model: config.textModel
    };
}

function getImageGenerationConfig() {
    const config = normalizeConfig(appData.config);
    return {
        provider: config.provider,
        apiKey: config.apiKey,
        baseUrl: sanitizeBaseUrl(config.baseUrl),
        model: config.imageModel
    };
}

let openRouterCatalogState = {
    signature: '',
    items: [],
    fetchedAt: '',
    loading: false,
    error: ''
};

function getConfigDraftFromPage() {
    const stored = normalizeConfig(appData.config);
    return {
        apiKey: document.getElementById('config-openrouter-key')?.value?.trim() || stored.apiKey || '',
        baseUrl: sanitizeBaseUrl(document.getElementById('config-openrouter-base-url')?.value || stored.baseUrl),
        textModel: document.getElementById('config-openrouter-text-model')?.value?.trim() || stored.textModel || '',
        imageModel: document.getElementById('config-openrouter-image-model')?.value?.trim() || stored.imageModel || ''
    };
}

function buildCatalogSignature(configDraft) {
    return `${sanitizeBaseUrl(configDraft?.baseUrl || DEFAULT_CONFIG.baseUrl)}::${configDraft?.apiKey || ''}`;
}

function escapeHtml(text) {
    return String(text || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function truncateText(text, maxLen = 180) {
    const raw = String(text || '').trim();
    if (raw.length <= maxLen) return raw;
    return `${raw.slice(0, maxLen - 1)}…`;
}

function parsePriceNumber(value) {
    const parsed = Number.parseFloat(value || '0');
    return Number.isFinite(parsed) ? parsed : 0;
}

function formatUsd(value) {
    if (!Number.isFinite(value) || value <= 0) return 'No reportado';
    const digits = value >= 1 ? 2 : value >= 0.01 ? 3 : 6;
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: digits,
        maximumFractionDigits: digits
    }).format(value);
}

function getTextModelTotalCost(model) {
    return parsePriceNumber(model?.pricing?.prompt) + parsePriceNumber(model?.pricing?.completion);
}

function getImageModelUnitCost(model) {
    return parsePriceNumber(model?.pricing?.image) || parsePriceNumber(model?.pricing?.request);
}

function isTextModel(model) {
    const outputs = model?.architecture?.output_modalities || [];
    return outputs.includes('text');
}

function isImageModel(model) {
    const outputs = model?.architecture?.output_modalities || [];
    return outputs.includes('image');
}

function formatTextPricing(model) {
    const promptCost = parsePriceNumber(model?.pricing?.prompt) * 1000000;
    const completionCost = parsePriceNumber(model?.pricing?.completion) * 1000000;
    const requestCost = parsePriceNumber(model?.pricing?.request);
    const parts = [];

    if (promptCost > 0) parts.push(`Entrada: ${formatUsd(promptCost)} / 1M tok`);
    if (completionCost > 0) parts.push(`Salida: ${formatUsd(completionCost)} / 1M tok`);
    if (requestCost > 0) parts.push(`Fijo por request: ${formatUsd(requestCost)}`);

    return parts.length ? parts.join(' · ') : 'Costo no reportado para texto.';
}

function formatImagePricing(model) {
    const imageCost = parsePriceNumber(model?.pricing?.image);
    const requestCost = parsePriceNumber(model?.pricing?.request);
    const promptCost = parsePriceNumber(model?.pricing?.prompt) * 1000000;
    const parts = [];

    if (imageCost > 0) parts.push(`Imagen: ${formatUsd(imageCost)}`);
    if (requestCost > 0) parts.push(`Request: ${formatUsd(requestCost)}`);
    if (promptCost > 0) parts.push(`Entrada texto: ${formatUsd(promptCost)} / 1M tok`);

    return parts.length ? parts.join(' · ') : 'Costo no reportado para imagen.';
}

function formatContextLength(model) {
    const context = Number(model?.context_length || model?.top_provider?.context_length || 0);
    if (!context) return 'Contexto no reportado';
    return `${context.toLocaleString('es-MX')} tokens`;
}

function summarizeSelectedModel(kind, model) {
    if (!model) {
        return 'Costo no consultado todavía.';
    }

    if (kind === 'text') {
        return `${formatTextPricing(model)} · ${formatContextLength(model)}`;
    }

    return `${formatImagePricing(model)} · ${formatContextLength(model)}`;
}

function setConfigModelsStatus(message, tone = 'neutral') {
    const status = document.getElementById('config-models-status');
    if (!status) return;

    status.textContent = message;
    status.classList.remove('config-status--success', 'config-status--error', 'config-status--loading');
    if (tone === 'success') status.classList.add('config-status--success');
    if (tone === 'error') status.classList.add('config-status--error');
    if (tone === 'loading') status.classList.add('config-status--loading');
}

function attachConfigInputListeners() {
    const textInput = document.getElementById('config-openrouter-text-model');
    const imageInput = document.getElementById('config-openrouter-image-model');
    const keyInput = document.getElementById('config-openrouter-key');
    const baseUrlInput = document.getElementById('config-openrouter-base-url');

    [textInput, imageInput].forEach((input) => {
        if (!input || input.dataset.bound === '1') return;
        input.addEventListener('input', () => {
            syncSelectedModelStatus();
            renderOpenRouterModelLists();
        });
        input.dataset.bound = '1';
    });

    [keyInput, baseUrlInput].forEach((input) => {
        if (!input || input.dataset.bound === '1') return;
        input.addEventListener('change', () => {
            const signature = buildCatalogSignature(getConfigDraftFromPage());
            if (openRouterCatalogState.signature !== signature) {
                openRouterCatalogState.items = [];
                openRouterCatalogState.signature = '';
                openRouterCatalogState.fetchedAt = '';
                openRouterCatalogState.error = '';
                renderOpenRouterModelLists();
                setConfigModelsStatus('La credencial o la base URL cambiaron. Vuelve a consultar el catálogo para cargar modelos compatibles con esta configuración.', 'neutral');
            }
        });
        input.dataset.bound = '1';
    });
}

function normalizeOpenRouterModel(model) {
    return {
        id: model.id,
        canonical_slug: model.canonical_slug || model.id,
        name: model.name || model.id,
        description: model.description || '',
        pricing: model.pricing || {},
        context_length: model.context_length || model?.top_provider?.context_length || 0,
        architecture: {
            modality: model?.architecture?.modality || '',
            input_modalities: model?.architecture?.input_modalities || [],
            output_modalities: model?.architecture?.output_modalities || []
        },
        supported_parameters: model.supported_parameters || [],
        top_provider: model.top_provider || {}
    };
}

function sortTextModels(models) {
    return [...models].sort((a, b) => {
        const costDiff = getTextModelTotalCost(a) - getTextModelTotalCost(b);
        if (costDiff !== 0) return costDiff;
        return (b.context_length || 0) - (a.context_length || 0) || a.id.localeCompare(b.id);
    });
}

function sortImageModels(models) {
    return [...models].sort((a, b) => {
        const costDiff = getImageModelUnitCost(a) - getImageModelUnitCost(b);
        if (costDiff !== 0) return costDiff;
        return (b.context_length || 0) - (a.context_length || 0) || a.id.localeCompare(b.id);
    });
}

function getModelSuggestions(kind, models) {
    const picks = [];
    const safePush = (label, model) => {
        if (!model || picks.some(item => item.model.id === model.id)) return;
        picks.push({ label, model });
    };

    if (kind === 'text') {
        const sortedByCost = sortTextModels(models);
        safePush('Más económico', sortedByCost[0]);
        safePush('Mayor contexto', [...models].sort((a, b) => (b.context_length || 0) - (a.context_length || 0))[0]);
        safePush('JSON / estructura', sortTextModels(models.filter(model => (model.supported_parameters || []).includes('response_format')))[0]);
    } else {
        const sortedByCost = sortImageModels(models);
        safePush('Más económico', sortedByCost[0]);
        safePush('Multimodal', sortImageModels(models.filter(model => isTextModel(model)))[0]);
        safePush('Pro / calidad', sortImageModels(models.filter(model => /pro|ultra|max|quality/i.test(`${model.name} ${model.id}`))).slice(-1)[0] || sortImageModels(models).slice(-1)[0]);
    }

    return picks.filter(Boolean).slice(0, 3);
}

function renderSuggestionButtons(kind, models) {
    const container = document.getElementById(kind === 'text' ? 'config-text-suggestions' : 'config-image-suggestions');
    if (!container) return;

    const suggestions = getModelSuggestions(kind, models);
    if (!suggestions.length) {
        container.innerHTML = '<div class="config-list-note config-list-note--soft">Sin sugerencias todavía.</div>';
        return;
    }

    container.innerHTML = suggestions.map(({ label, model }) => `
        <button type="button" class="btn-secondary config-suggestion" onclick="selectOpenRouterModel('${kind}', '${escapeHtml(model.id)}')">
            ${escapeHtml(label)} · ${escapeHtml(model.name)}
        </button>
    `).join('');
}

function renderModelCard(kind, model) {
    const selectedValue = kind === 'text'
        ? (document.getElementById('config-openrouter-text-model')?.value || '').trim()
        : (document.getElementById('config-openrouter-image-model')?.value || '').trim();
    const isSelected = selectedValue === model.id;
    const pricing = kind === 'text' ? formatTextPricing(model) : formatImagePricing(model);
    return `
        <div class="config-model-card ${isSelected ? 'is-selected' : ''}">
            <div class="config-model-card__header">
                <div>
                    <div class="config-model-card__name">${escapeHtml(model.name)}</div>
                    <div class="config-model-card__id">${escapeHtml(model.id)}</div>
                </div>
                <button type="button" class="btn-secondary config-model-card__button ${isSelected ? 'is-selected' : ''}" onclick="selectOpenRouterModel('${kind}', '${escapeHtml(model.id)}')">${isSelected ? 'Seleccionado' : 'Usar'}</button>
            </div>
            <div class="config-model-card__pills">
                <span class="config-model-card__pill">${escapeHtml(pricing)}</span>
                <span class="config-model-card__pill">${escapeHtml(formatContextLength(model))}</span>
            </div>
            ${model.description ? `<div class="config-model-card__description">${escapeHtml(truncateText(model.description, 138))}</div>` : ''}
        </div>
    `;
}

function renderModelGroup(kind, models, query) {
    const container = document.getElementById(kind === 'text' ? 'config-text-models-list' : 'config-image-models-list');
    if (!container) return;

    if (openRouterCatalogState.loading) {
        container.innerHTML = '<div class="config-list-note config-list-note--soft">Consultando catálogo...</div>';
        return;
    }

    if (!models.length) {
        const hasCatalog = openRouterCatalogState.items.length > 0;
        container.innerHTML = `<div class="config-list-note">${hasCatalog ? `No hay resultados${query ? ' para esa búsqueda' : ''}.` : 'Todavía no has consultado el catálogo.'}</div>`;
        return;
    }

    const visible = models.slice(0, 24);
    const footer = models.length > visible.length
        ? `<div class="config-list-footer">Mostrando ${visible.length} de ${models.length} modelos. Usa la búsqueda para acotar.</div>`
        : '';

    container.innerHTML = visible.map(model => renderModelCard(kind, model)).join('') + footer;
}

function syncSelectedModelStatus() {
    const configDraft = getConfigDraftFromPage();
    const statusTextModel = document.getElementById('config-status-text-model');
    const statusImageModel = document.getElementById('config-status-image-model');
    const selectedTextPricing = document.getElementById('config-selected-text-pricing');
    const selectedImagePricing = document.getElementById('config-selected-image-pricing');
    const textModel = openRouterCatalogState.items.find(model => model.id === configDraft.textModel);
    const imageModel = openRouterCatalogState.items.find(model => model.id === configDraft.imageModel);

    if (statusTextModel) statusTextModel.textContent = configDraft.textModel || 'Pendiente';
    if (statusImageModel) statusImageModel.textContent = configDraft.imageModel || 'Pendiente';
    if (selectedTextPricing) selectedTextPricing.textContent = summarizeSelectedModel('text', textModel);
    if (selectedImagePricing) selectedImagePricing.textContent = summarizeSelectedModel('image', imageModel);
}

function renderOpenRouterModelLists() {
    const textQuery = (document.getElementById('config-model-search-text')?.value || '').trim().toLowerCase();
    const imageQuery = (document.getElementById('config-model-search-image')?.value || '').trim().toLowerCase();
    const allItems = openRouterCatalogState.items || [];

    const matchQuery = (model, query) => {
        if (!query) return true;
        const haystack = `${model.name} ${model.id} ${model.description}`.toLowerCase();
        return haystack.includes(query);
    };

    const textModels = sortTextModels(allItems.filter(model => isTextModel(model) && matchQuery(model, textQuery)));
    const imageModels = sortImageModels(allItems.filter(model => isImageModel(model) && matchQuery(model, imageQuery)));

    renderSuggestionButtons('text', sortTextModels(allItems.filter(isTextModel)));
    renderSuggestionButtons('image', sortImageModels(allItems.filter(isImageModel)));
    renderModelGroup('text', textModels, textQuery);
    renderModelGroup('image', imageModels, imageQuery);
    syncSelectedModelStatus();
}

async function fetchOpenRouterModels(force) {
    const configDraft = getConfigDraftFromPage();
    const signature = buildCatalogSignature(configDraft);

    if (!configDraft.apiKey) {
        setConfigModelsStatus('Primero ingresa tu API key de OpenRouter para consultar los modelos disponibles.', 'error');
        renderOpenRouterModelLists();
        return;
    }

    if (!force && openRouterCatalogState.items.length && openRouterCatalogState.signature === signature) {
        setConfigModelsStatus(`Catálogo cargado desde caché local. ${openRouterCatalogState.items.length} modelos disponibles.`, 'success');
        renderOpenRouterModelLists();
        return;
    }

    openRouterCatalogState.loading = true;
    openRouterCatalogState.error = '';
    renderOpenRouterModelLists();
    setConfigModelsStatus('Consultando modelos disponibles en OpenRouter…', 'loading');

    try {
        const endpoint = `${sanitizeBaseUrl(configDraft.baseUrl)}/models?output_modalities=all`;
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: buildOpenRouterHeaders(configDraft.apiKey)
        });

        const rawText = await response.text();
        let data;
        try {
            data = rawText ? JSON.parse(rawText) : {};
        } catch (err) {
            throw new Error(`La respuesta del catálogo no fue JSON válido: ${rawText.slice(0, 220)}`);
        }

        if (!response.ok) {
            throw new Error(data?.error?.message || data?.message || `Error HTTP ${response.status}`);
        }

        openRouterCatalogState.items = (data?.data || []).map(normalizeOpenRouterModel);
        openRouterCatalogState.signature = signature;
        openRouterCatalogState.fetchedAt = new Date().toLocaleString('es-MX');
        openRouterCatalogState.loading = false;

        const totalText = openRouterCatalogState.items.filter(isTextModel).length;
        const totalImage = openRouterCatalogState.items.filter(isImageModel).length;
        setConfigModelsStatus(`Catálogo actualizado: ${openRouterCatalogState.items.length} modelos cargados. Texto: ${totalText}. Imagen: ${totalImage}. Última consulta: ${openRouterCatalogState.fetchedAt}.`, 'success');
        renderOpenRouterModelLists();
    } catch (err) {
        openRouterCatalogState.loading = false;
        openRouterCatalogState.error = err.message;
        setConfigModelsStatus(`No se pudo consultar el catálogo de OpenRouter. Detalle: ${err.message}`, 'error');
        renderOpenRouterModelLists();
    }
}

function clearOpenRouterModelCache() {
    openRouterCatalogState = {
        signature: '',
        items: [],
        fetchedAt: '',
        loading: false,
        error: ''
    };
    setConfigModelsStatus('Catálogo limpiado. Puedes volver a consultarlo cuando quieras.', 'neutral');
    renderOpenRouterModelLists();
}

function selectOpenRouterModel(kind, modelId) {
    const input = document.getElementById(kind === 'text' ? 'config-openrouter-text-model' : 'config-openrouter-image-model');
    if (!input) return;
    input.value = modelId;
    syncSelectedModelStatus();
    renderOpenRouterModelLists();
}

function buildOpenRouterHeaders(apiKey) {
    const headers = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'X-OpenRouter-Title': 'GNVIC'
    };

    if (window.location && /^https?:/i.test(window.location.href)) {
        headers['HTTP-Referer'] = window.location.href;
    }

    return headers;
}

async function openRouterChatCompletion(payload, config) {
    if (!config?.apiKey) {
        throw new Error('Falta la API key de OpenRouter.');
    }

    if (!config?.model) {
        throw new Error('Falta seleccionar el modelo de OpenRouter.');
    }

    const endpoint = `${sanitizeBaseUrl(config.baseUrl)}/chat/completions`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 90000);
    let response;
    try {
        response = await fetch(endpoint, {
            method: 'POST',
            headers: buildOpenRouterHeaders(config.apiKey),
            body: JSON.stringify({
                model: config.model,
                stream: false,
                ...payload
            }),
            signal: controller.signal
        });
    } catch (err) {
        if (err.name === 'AbortError') {
            throw new Error('La solicitud a OpenRouter excedio el tiempo de espera.');
        }
        throw err;
    } finally {
        clearTimeout(timeoutId);
    }

    const rawText = await response.text();
    let data;
    try {
        data = rawText ? JSON.parse(rawText) : {};
    } catch (err) {
        throw new Error(`La respuesta de OpenRouter no fue JSON válido: ${rawText.slice(0, 220)}`);
    }

    if (!response.ok) {
        const apiMessage = data?.error?.message || data?.message || rawText || `Error HTTP ${response.status}`;
        throw new Error(apiMessage);
    }

    return data;
}

function extractOpenRouterText(responseData) {
    const message = responseData?.choices?.[0]?.message;
    if (!message) return '';
    if (typeof message.content === 'string') return message.content;
    if (Array.isArray(message.content)) {
        return message.content
            .map(part => {
                if (typeof part === 'string') return part;
                if (part?.type === 'text') return part.text || '';
                return '';
            })
            .join('\n')
            .trim();
    }
    return '';
}

function extractOpenRouterImage(responseData) {
    const message = responseData?.choices?.[0]?.message;
    const firstImage = message?.images?.[0];
    return firstImage?.image_url?.url || firstImage?.imageUrl?.url || '';
}

function safeJsonParse(text) {
    if (!text) return null;
    const cleaned = text.replace(/```json|```/gi, '').trim();
    try {
        return JSON.parse(cleaned);
    } catch (err) {
        const start = cleaned.indexOf('{');
        const end = cleaned.lastIndexOf('}');
        if (start !== -1 && end !== -1 && end > start) {
            try {
                return JSON.parse(cleaned.slice(start, end + 1));
            } catch (innerErr) {
                return null;
            }
        }
        return null;
    }
}

function getPanelAspectRatio(forma) {
    if (forma === 'vertical') return '9:16';
    if (forma === 'cuadrada') return '1:1';
    return '16:9';
}

function getPanelReferenceImage(vineta) {
    if (!vineta) return '';

    const activeVariant = vineta?.variantes?.[vineta?.varianteActiva || 0];
    if (typeof activeVariant === 'string' && activeVariant.startsWith('data:image')) {
        return activeVariant;
    }

    const resolvedLocal = resolveImageSourceForPdf(vineta.imgLocal || '');
    if (typeof resolvedLocal === 'string' && resolvedLocal.startsWith('data:image')) {
        return resolvedLocal;
    }

    return '';
}

async function shrinkReferenceImage(imageSrc, maxEdge = 1024) {
    if (!imageSrc || !imageSrc.startsWith('data:image')) return imageSrc;

    try {
        const img = await loadImageElement(imageSrc);
        const longestSide = Math.max(img.naturalWidth, img.naturalHeight);
        if (!longestSide || longestSide <= maxEdge) return imageSrc;

        const scale = maxEdge / longestSide;
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
        canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL('image/jpeg', 0.82);
    } catch (err) {
        console.warn('No se pudo reducir la imagen de referencia:', err);
        return imageSrc;
    }
}

function buildPanelImagePrompt(project, chapterData, vineta, index, forceNew) {
    const genero = project?.genero || 'novela grafica';
    const estilo = project?.estilo || 'alto contraste cinematografico';
    const personajes = (chapterData?.personajesSeleccionados || []).join(', ') || 'sin personajes especificados';
    const episodio = chapterData?.capNombre || 'episodio sin titulo';
    const tramaArtefacto = project?.trama || 'sin trama general';
    const tramaEpisodio = chapterData?.guion || 'sin trama del episodio';
    const dialogo = vineta?.textoGlobo?.trim() || 'sin dialogo';
    const narrador = vineta?.textoNarrador?.trim() || 'sin narrador';
    const forma = vineta?.forma || 'panoramica';
    const variacion = forceNew
        ? 'Genera una alternativa visual claramente distinta a versiones previas, pero conservando la misma escena y tono.'
        : 'Genera la mejor primera version posible de esta escena.';

    return [
        `Crea una imagen para una viñeta de ${genero} con estilo ${estilo}.`,
        `Artefacto: ${project?.titulo || 'sin titulo'}.`,
        `Episodio: ${episodio}.`,
        `Trama general: ${tramaArtefacto}.`,
        `Trama del episodio: ${tramaEpisodio}.`,
        `Personajes implicados: ${personajes}.`,
        `Viñeta ${index + 1} en formato ${forma}.`,
        `Texto del dialogo que se superpondra despues y no debe aparecer dentro de la imagen: ${dialogo}.`,
        `Texto de narrador externo que tampoco debe aparecer dentro de la imagen: ${narrador}.`,
        'La imagen debe verse como una escena narrativa lista para novela grafica, con composicion fuerte, fondo legible y sujetos bien definidos.',
        'No agregues tipografia, globos de dialogo, subtitulos, carteles ni texto incrustado.',
        variacion
    ].join(' ');
}

async function generarImagenOpenRouter(index, forceNew) {
    const imageConfig = getImageGenerationConfig();
    const project = getProject();
    const vineta = currentChapterData?.vinetas?.[index];
    if (!vineta) {
        throw new Error('No se encontro la viñeta solicitada.');
    }

    const prompt = buildPanelImagePrompt(project, currentChapterData, vineta, index, forceNew);
    const referenceImage = await shrinkReferenceImage(getPanelReferenceImage(vineta));
    const baseMessages = [
        {
            role: 'system',
            content: 'Eres un director visual experto en narrativa grafica. Entregas imagenes narrativas potentes y consistentes con la escena solicitada.'
        },
        {
            role: 'user',
            content: referenceImage
                ? [
                    { type: 'text', text: prompt },
                    { type: 'image_url', image_url: { url: referenceImage, detail: 'auto' } }
                ]
                : prompt
        }
    ];

    const attempts = [
        {
            messages: baseMessages,
            modalities: ['image', 'text'],
            image_config: {
                aspect_ratio: getPanelAspectRatio(vineta.forma),
                image_size: '1K'
            },
            max_tokens: 250,
            temperature: 0.7
        },
        {
            messages: baseMessages,
            modalities: ['image'],
            image_config: {
                aspect_ratio: getPanelAspectRatio(vineta.forma),
                image_size: '1K'
            },
            max_tokens: 250,
            temperature: 0.7
        },
        {
            messages: [
                baseMessages[0],
                { role: 'user', content: prompt }
            ],
            modalities: ['image', 'text'],
            image_config: {
                aspect_ratio: getPanelAspectRatio(vineta.forma),
                image_size: '1K'
            },
            max_tokens: 250,
            temperature: 0.7
        }
    ];

    let lastError = null;
    for (const attempt of attempts) {
        try {
            const result = await openRouterChatCompletion(attempt, imageConfig);
            const imageUrl = extractOpenRouterImage(result);
            if (imageUrl) return imageUrl;
            lastError = new Error('El modelo respondio sin imagen generada.');
        } catch (err) {
            lastError = err;
        }
    }

    throw lastError || new Error('No fue posible generar la imagen en OpenRouter.');
}

function getFallbackQuestions(project) {
    if (project?.id === 'narzu-001') {
        return "1. ¿De qué manera la caja de celulares ilustra una contradicción en nuestra relación actual con los dispositivos?\n2. Identifica el momento donde el determinismo tecnológico es más evidente. ¿A qué personaje corresponde y por qué?\n3. Según Maximiliano, la técnica es un 'enmarcamiento'. ¿Cómo se refleja esto en el miedo que siente Dani?\n4. Reflexión: La postura de Xochi (Controlar el código) o la postura de Paz (Aislamiento), ¿cuál ofrece una mejor vía de resistencia tecnológica?";
    }

    return "1. ¿Qué conflicto epistemico o politico atraviesa el episodio?\n2. ¿Qué tension entre tecnologia, sociedad y subjetividad se vuelve visible?\n3. ¿Que personaje encarna la contradiccion central y por que?\n4. ¿Que lectura critica abre esta narrativa para discutirla en clase?";
}

function getDevelacionLocal(project) {
    return {
        subtexto: project?.desc_subtexto || "No se ha definido un subtexto teorico explicito para este artefacto.",
        bibliografia: project?.bibliografia || "Heidegger, M. (1954). La pregunta por la tecnica.\nEcheverria, J. (1999). Los senores del aire.\nZuboff, S. (2019). La era del capitalismo de vigilancia.",
        preguntas: project?.preguntas_discusion || getFallbackQuestions(project),
        generatedBy: 'local'
    };
}

function formatDevelacionTypewriterText(content) {
    return ">>> INICIANDO VOLCADO EPISTEMICO <<<\n\n" +
        "[ SUBTEXTO TEORICO ]\n" + (content.subtexto || '') + "\n\n" +
        "[ BIBLIOGRAFIA RECOMENDADA ]\n" + (content.bibliografia || '') + "\n\n" +
        "[ PREGUNTAS DE DISCUSION ]\n" + (content.preguntas || '') + "\n\n" +
        ">>> FIN DEL VOLCADO <<<";
}

async function generarDevelacionOpenRouter(project) {
    const textConfig = getTextGenerationConfig();
    const chapterSummary = currentChapterData
        ? `Episodio activo: ${currentChapterData.capNombre || 'sin titulo'}. Trama del episodio: ${currentChapterData.guion || 'sin trama'}. Personajes en escena: ${(currentChapterData.personajesSeleccionados || []).join(', ') || 'no especificados'}.`
        : '';

    const prompt = [
        'Devuelve exclusivamente un JSON valido sin markdown ni texto extra.',
        'Necesito tres campos string: subtexto, bibliografia, preguntas.',
        'subtexto: un analisis amplio, claro y academico del subtexto del artefacto, en espanol, sin encabezados internos.',
        'bibliografia: entre 3 y 5 referencias en formato de lista simple separadas por saltos de linea, sin numeracion inicial obligatoria.',
        'preguntas: 4 preguntas de discusion separadas por saltos de linea.',
        `Artefacto: ${project?.titulo || 'sin titulo'}.`,
        `Genero: ${project?.genero || 'sin genero'}.`,
        `Estilo: ${project?.estilo || 'sin estilo'}.`,
        `Trama general: ${project?.trama || 'sin trama general'}.`,
        `Subtexto declarado por el usuario: ${project?.subtexto || 'sin subtexto declarado'}.`,
        `Descripcion previa del subtexto: ${project?.desc_subtexto || 'sin descripcion previa'}.`,
        chapterSummary,
        'Escribe todo en espanol.'
    ].join(' ');

    const result = await openRouterChatCompletion({
        messages: [
            {
                role: 'system',
                content: 'Eres un asistente de pedagogia critica y teoria cultural. Respondes con JSON valido y limpio.'
            },
            {
                role: 'user',
                content: prompt
            }
        ],
        temperature: 0.6,
        max_tokens: 1400
    }, textConfig);

    const text = extractOpenRouterText(result);
    const parsed = safeJsonParse(text);
    if (!parsed) {
        throw new Error('No se pudo interpretar la respuesta estructurada del modelo de texto.');
    }

    const content = {
        subtexto: String(parsed.subtexto || '').trim(),
        bibliografia: String(parsed.bibliografia || '').trim(),
        preguntas: String(parsed.preguntas || '').trim(),
        generatedBy: textConfig.model,
        generatedAt: new Date().toISOString()
    };

    project.develacion_ai = content;
    saveData(true);
    return content;
}

function getStoredDevelacion(project) {
    if (project?.develacion_ai?.subtexto || project?.develacion_ai?.bibliografia || project?.develacion_ai?.preguntas) {
        return {
            subtexto: project.develacion_ai.subtexto || project.desc_subtexto || '',
            bibliografia: project.develacion_ai.bibliografia || project.bibliografia || '',
            preguntas: project.develacion_ai.preguntas || project.preguntas_discusion || getFallbackQuestions(project),
            generatedBy: project.develacion_ai.generatedBy || 'openrouter'
        };
    }
    return getDevelacionLocal(project);
}

function renderTypewriterDisplay(rawText, button) {
    const display = document.getElementById('tw-text-display-mesa');
    if (!display) return;

    display.className = "typewriter-terminal";
    display.style.display = 'block';
    display.textContent = '';
    if (button) button.style.display = 'none';

    let i = 0;
    const speed = 22;
    const textNode = document.createTextNode('');
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'typewriter-cursor';
    cursorSpan.textContent = '\u2588';
    display.appendChild(textNode);
    display.appendChild(cursorSpan);

    function typeWriter() {
        if (i < rawText.length) {
            textNode.textContent = rawText.substring(0, i + 1);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            cursorSpan.remove();
            if (!button) return;
            setTimeout(function() {
                button.style.display = 'block';
                button.disabled = false;
                button.innerText = 'Develar subtexto';
                button.dataset.allowRegenerate = '1';
            }, 1200);
        }
    }

    typeWriter();
}

let appData = { projects: [], config: normalizeConfig() };
let currentProjectId = null;
let currentChapterData = null;
let currentEpisodeIndex = null;
let lastNonConfigViewId = 'vista-artefactos';
let toastCounter = 0;
let confirmResolver = null;
let confirmActionHandlers = { accept: null, cancel: null };
let saveIndicatorTimer = null;
let lastFocusedElement = null;
let pdfDependencyWarningShown = false;
const FOCUSABLE_SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
].join(',');

function activateOnEnter(event, callback) {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    if (typeof callback === 'function') callback();
}

function getFocusableElements(container) {
    if (!container) return [];
    return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter((el) => {
        return el.offsetParent !== null || el === document.activeElement;
    });
}

function focusFirstElement(container, preferredSelector = '') {
    const preferred = preferredSelector ? container?.querySelector(preferredSelector) : null;
    const focusTarget = preferred || getFocusableElements(container)[0] || container;
    if (!focusTarget) return;
    if (!focusTarget.hasAttribute('tabindex') && focusTarget === container) {
        focusTarget.setAttribute('tabindex', '-1');
    }
    focusTarget.focus({ preventScroll: true });
}

function rememberFocusBeforeModal() {
    if (document.activeElement && document.activeElement !== document.body) {
        lastFocusedElement = document.activeElement;
    }
}

function restoreFocusAfterModal() {
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function' && document.contains(lastFocusedElement)) {
        lastFocusedElement.focus({ preventScroll: true });
    }
    lastFocusedElement = null;
}

function openAccessibleModal(modal, preferredSelector = '') {
    if (!modal) return;
    rememberFocusBeforeModal();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => focusFirstElement(modal, preferredSelector));
}

function closeAccessibleModal(modal, restoreFocus = true) {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    if (restoreFocus) restoreFocusAfterModal();
}

function getActiveModal() {
    const confirmModal = document.getElementById('modal-confirmacion');
    if (confirmModal?.classList.contains('active')) return confirmModal;
    const activeModals = Array.from(document.querySelectorAll('.modal.active'));
    return activeModals[activeModals.length - 1] || null;
}

function closeTopModal() {
    const activeModal = getActiveModal();
    if (!activeModal) return;
    if (activeModal.id === 'modal-confirmacion') {
        resolveConfirmation(false);
    } else if (activeModal.id === 'modal-imagen-ampliada') {
        cerrarImagenAmpliada();
    } else if (activeModal.id === 'modal-nuevo-proyecto') {
        cerrarModalNuevo();
    } else {
        closeAccessibleModal(activeModal);
    }
}

function handleModalKeydown(event) {
    const activeModal = getActiveModal();
    if (!activeModal) return;

    if (event.key === 'Escape') {
        event.preventDefault();
        closeTopModal();
        return;
    }

    if (event.key !== 'Tab') return;
    const focusable = getFocusableElements(activeModal);
    if (!focusable.length) {
        event.preventDefault();
        activeModal.focus({ preventScroll: true });
        return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus({ preventScroll: true });
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus({ preventScroll: true });
    }
}

function initFeedbackSystem() {
    const cancelBtn = document.getElementById('confirm-cancel');
    const acceptBtn = document.getElementById('confirm-accept');
    const modal = document.getElementById('modal-confirmacion');
    if (cancelBtn && cancelBtn.dataset.bound !== '1') {
        cancelBtn.addEventListener('click', () => handleConfirmationChoice(false));
        cancelBtn.dataset.bound = '1';
    }
    if (acceptBtn && acceptBtn.dataset.bound !== '1') {
        acceptBtn.addEventListener('click', () => handleConfirmationChoice(true));
        acceptBtn.dataset.bound = '1';
    }
    if (modal && modal.dataset.bound !== '1') {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) handleConfirmationChoice(false);
        });
        modal.dataset.bound = '1';
    }
    if (document.body.dataset.modalKeyboardBound !== '1') {
        document.addEventListener('keydown', handleModalKeydown);
        document.body.dataset.modalKeyboardBound = '1';
    }
}

function showToast({ title = 'Aviso', message = '', type = 'info', duration = 4200, actionLabel = '', onAction = null } = {}) {
    const region = document.getElementById('toast-region');
    if (!region) {
        console[type === 'error' ? 'error' : 'log'](`${title}: ${message}`);
        return null;
    }

    const toast = document.createElement('div');
    const id = `toast-${++toastCounter}`;
    toast.id = id;
    toast.className = `toast toast--${type}`;
    toast.setAttribute('role', type === 'error' ? 'alert' : 'status');

    const body = document.createElement('div');
    const titleEl = document.createElement('p');
    titleEl.className = 'toast__title';
    titleEl.textContent = title;
    const messageEl = document.createElement('p');
    messageEl.className = 'toast__message';
    messageEl.textContent = message;
    body.appendChild(titleEl);
    if (message) body.appendChild(messageEl);

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'toast__close';
    closeBtn.setAttribute('aria-label', 'Cerrar aviso');
    closeBtn.textContent = '×';
    closeBtn.addEventListener('click', () => toast.remove());

    toast.appendChild(body);
    toast.appendChild(closeBtn);

    if (actionLabel && typeof onAction === 'function') {
        const actionBtn = document.createElement('button');
        actionBtn.type = 'button';
        actionBtn.className = 'toast__action';
        actionBtn.textContent = actionLabel;
        actionBtn.addEventListener('click', () => {
            onAction();
            toast.remove();
        });
        toast.appendChild(actionBtn);
    }

    region.appendChild(toast);

    if (duration > 0) {
        setTimeout(() => toast.remove(), duration);
    }
    return id;
}

function showConfirm({ title = 'Confirmar acción', message = '¿Quieres continuar?', warning = '', acceptLabel = 'Confirmar', cancelLabel = 'Cancelar', onAccept = null, onCancel = null } = {}) {
    const modal = document.getElementById('modal-confirmacion');
    if (!modal) return Promise.resolve(false);

    document.getElementById('confirm-title').textContent = title;
    document.getElementById('confirm-message').textContent = message;
    const warningEl = document.getElementById('confirm-warning');
    if (warningEl) {
        warningEl.textContent = warning;
        warningEl.hidden = !warning;
    }
    document.getElementById('confirm-accept').textContent = acceptLabel;
    document.getElementById('confirm-cancel').textContent = cancelLabel;
    confirmActionHandlers = { accept: onAccept, cancel: onCancel };
    openAccessibleModal(modal, '#confirm-cancel');

    return new Promise((resolve) => {
        confirmResolver = resolve;
    });
}

function getPdfDependencyStatus() {
    const hasJsPdf = Boolean(window.jspdf?.jsPDF);
    const hasHtml2Canvas = Boolean(window.html2canvas);
    return {
        ok: hasJsPdf && hasHtml2Canvas,
        hasJsPdf,
        hasHtml2Canvas,
        message: !hasJsPdf
            ? 'No se pudo cargar jsPDF, la librería que genera el documento final.'
            : !hasHtml2Canvas
                ? 'No se pudo cargar html2canvas, la librería que prepara imágenes para el PDF.'
                : ''
    };
}

function updatePdfDependencyAlert({ notify = false } = {}) {
    const status = getPdfDependencyStatus();
    const alert = document.getElementById('pdf-dependency-alert');
    const pdfButtons = document.querySelectorAll('.cierre-actions__pdf');

    if (alert) {
        alert.style.display = status.ok ? 'none' : 'block';
        if (!status.ok) {
            alert.textContent = `${status.message} Revisa la conexión a internet y recarga la página antes de exportar.`;
        }
    }

    pdfButtons.forEach((button) => {
        button.disabled = !status.ok;
        button.classList.toggle('is-unavailable', !status.ok);
        button.title = status.ok ? 'Exportar PDF' : status.message;
    });

    if (!status.ok && notify && !pdfDependencyWarningShown) {
        pdfDependencyWarningShown = true;
        showToast({
            title: 'PDF no disponible todavía',
            message: `${status.message} Revisa la conexión y recarga la página antes del cierre del taller.`,
            type: 'error',
            duration: 9000
        });
    }

    return status;
}

function handleConfirmationChoice(value) {
    const action = value ? confirmActionHandlers.accept : confirmActionHandlers.cancel;
    if (typeof action === 'function') {
        try {
            action();
        } catch (err) {
            console.error('Error al ejecutar la acción de confirmación:', err);
        }
    }
    resolveConfirmation(value);
}

function resolveConfirmation(value) {
    const modal = document.getElementById('modal-confirmacion');
    closeAccessibleModal(modal);
    confirmActionHandlers = { accept: null, cancel: null };
    if (confirmResolver) {
        confirmResolver(value);
        confirmResolver = null;
    }
}

function showSaveIndicator(state) {
    const indicator = document.getElementById('save-indicator');
    const text = document.getElementById('save-indicator-text');
    if (!indicator || !text) return;

    clearTimeout(saveIndicatorTimer);
    indicator.classList.remove('save-indicator--saving', 'save-indicator--saved', 'save-indicator--error');
    indicator.classList.add('is-visible', `save-indicator--${state}`);
    text.textContent = state === 'saving' ? 'Guardando' : state === 'error' ? 'Error al guardar' : 'Guardado';

    if (state !== 'saving') {
        saveIndicatorTimer = setTimeout(() => {
            indicator.classList.remove('is-visible');
        }, 1800);
    }
}

function uiStateHtml(type, title, message = '') {
    const isLoading = type === 'loading';
    const isError = type === 'error';
    return `
        <div class="ui-state ${isError ? 'ui-state--error' : ''}">
            ${isLoading ? '<div class="spinner"></div>' : ''}
            <div class="ui-state__body">
                <span class="ui-state__title">${escapeHtml(title)}</span>
                ${message ? `<span class="ui-state__message">${escapeHtml(message)}</span>` : ''}
            </div>
        </div>
    `;
}

const ONBOARDING_DISMISSED_KEY = 'gnvic_onboarding_dismissed_v1';
const ONBOARDING_SKIP_KEY = 'gnvic_onboarding_skip_all_v1';

const onboardingGuides = {
    'vista-inicio': {
        eyebrow: 'Inicio',
        title: 'Comienza en NARZU',
        message: 'En el piloto hay un solo artefacto: NARZU. Desde ahí pasas al episodio, a la mesa de luz, al cierre epistémico y finalmente al PDF.'
    },
    'vista-artefactos': {
        eyebrow: 'Primer paso',
        title: 'Artefacto único del piloto',
        message: 'NARZU ya contiene el marco narrativo del taller. Abre el artefacto para trabajar el episodio de 6 viñetas.'
    },
    'vista-proyecto': {
        eyebrow: 'Episodio',
        title: 'Continúa el episodio del piloto',
        message: 'El episodio concentra la secuencia de 6 viñetas. Ábrelo para pasar a la mesa de luz y cerrar con la develación conceptual.'
    },
    'vista-definir-episodio': {
        eyebrow: 'Antes de componer',
        title: 'Define qué sucede y quién participa',
        message: 'Escribe la trama de esta unidad, elige personajes y decide la extensión. Esto orienta las viñetas sin cerrar la interpretación.'
    },
    'vista-mesa-de-luz': {
        eyebrow: 'Producción y lectura',
        title: 'Ajusta las viñetas y cierra con el subtexto',
        message: 'Primero compón imagen, diálogo y narrador. Al final, el cierre epistémico revela la lectura conceptual: subtexto, bibliografía y preguntas para discusión.'
    },
    'vista-configuracion-api': {
        eyebrow: 'Modelos de IA',
        title: 'Configura tu llave y elige modelos',
        message: 'La app usa tu propia clave de OpenRouter. Puedes elegir un modelo para texto y otro para imágenes, con costo visible cuando el catálogo está disponible.'
    }
};

function getEpisodeVocabulary(projectOrGenre) {
    const genero = typeof projectOrGenre === 'string' ? projectOrGenre : (projectOrGenre?.genero || '');
    if (genero === 'Novela gráfica') {
        return { singular: 'capítulo', plural: 'capítulos', title: 'Capítulo', newLabel: 'Nuevo Capítulo' };
    }
    if (genero === 'Manga') {
        return { singular: 'número', plural: 'números', title: 'Número', newLabel: 'Nuevo Número' };
    }
    return { singular: 'episodio', plural: 'episodios', title: 'Episodio', newLabel: 'Nuevo Episodio' };
}

function getDismissedGuides() {
    try {
        return JSON.parse(localStorage.getItem(ONBOARDING_DISMISSED_KEY) || '{}');
    } catch (err) {
        return {};
    }
}

function setDismissedGuides(value) {
    localStorage.setItem(ONBOARDING_DISMISSED_KEY, JSON.stringify(value));
}

function dismissOnboardingGuide(viewId, skipAll = false) {
    if (skipAll) {
        localStorage.setItem(ONBOARDING_SKIP_KEY, '1');
    } else {
        const dismissed = getDismissedGuides();
        dismissed[viewId] = true;
        setDismissedGuides(dismissed);
    }
    document.querySelector(`[data-onboarding-view="${viewId}"]`)?.remove();
}

function renderOnboardingGuide(viewId) {
    document.querySelectorAll('.onboarding-guide').forEach(el => el.remove());
    if (localStorage.getItem(ONBOARDING_SKIP_KEY) === '1') return;

    const guide = onboardingGuides[viewId];
    if (!guide) return;

    const dismissed = getDismissedGuides();
    if (dismissed[viewId]) return;

    const view = document.getElementById(viewId);
    if (!view) return;

    const guideEl = document.createElement('section');
    guideEl.className = 'onboarding-guide';
    guideEl.dataset.onboardingView = viewId;
    guideEl.innerHTML = `
        <div>
            <p class="onboarding-guide__eyebrow">${escapeHtml(guide.eyebrow)}</p>
            <h2 class="onboarding-guide__title">${escapeHtml(guide.title)}</h2>
            <p class="onboarding-guide__message">${escapeHtml(guide.message)}</p>
        </div>
        <div class="onboarding-guide__actions">
            <button type="button" class="btn-secondary onboarding-guide__button" onclick="dismissOnboardingGuide('${viewId}')">Entendido</button>
            <button type="button" class="onboarding-guide__skip" onclick="dismissOnboardingGuide('${viewId}', true)">Omitir guía</button>
        </div>
    `;

    const header = view.querySelector('.view-header') || view.querySelector('header');
    if (header) header.insertAdjacentElement('afterend', guideEl);
    else view.prepend(guideEl);
}

function setActiveDot(element) {
    const item = element?.closest?.('.timeline-item') || element;
    document.querySelectorAll('.timeline-item').forEach(el => el.classList.remove('active'));
    if (item?.classList?.contains('timeline-item')) item.classList.add('active');
}

function syncSidebarStep(viewId) {
    const navTarget = viewId === 'vista-inicio'
        ? 'vista-inicio'
        : viewId === 'vista-proyecto'
            ? 'vista-proyecto'
            : viewId === 'vista-mesa-de-luz'
                ? 'vista-mesa-de-luz'
                : 'vista-artefactos';
    const item = document.querySelector(`.timeline-item[data-nav-target="${navTarget}"]`);
    if (item) setActiveDot(item);
}

function setPilotStepActive(target) {
    const item = document.querySelector(`.timeline-item[data-nav-target="${target}"]`);
    if (item) setActiveDot(item);
}

function setCierreEpistemicoRevealed(isRevealed, { scroll = false } = {}) {
    const gate = document.getElementById('cierre-reveal-gate');
    const cierre = document.getElementById('tw-container-mesa');
    if (gate) gate.style.display = isRevealed ? 'none' : 'block';
    if (cierre) cierre.style.display = isRevealed ? 'block' : 'none';
    if (isRevealed) {
        updatePdfDependencyAlert();
        setPilotStepActive('cierre');
        if (scroll) cierre?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function prepararCierreEpistemicoOculto() {
    setCierreEpistemicoRevealed(false);
}

function revelarCierreEpistemico(options = {}) {
    guardarMesaDeLuz();
    setCierreEpistemicoRevealed(true, options);
}

function ensurePilotProjectOpen() {
    if (!currentProjectId) currentProjectId = NARZU_PRELOAD.id;
    return getProject();
}

function openFirstPilotEpisode(targetStep = 'vista-mesa-de-luz') {
    const project = ensurePilotProjectOpen();
    if (!project?.episodios?.length) {
        abrirProyecto(NARZU_PRELOAD.id);
        showToast({
            title: 'Sin episodios todavía',
            message: 'Crea un episodio de NARZU para pasar a la mesa de luz.',
            type: 'info'
        });
        return;
    }
    abrirEpisodioExistente(0);
    if (targetStep === 'cierre') {
        setTimeout(() => {
            revelarCierreEpistemico({ scroll: true });
        }, 350);
    }
}

function navigateToPilotStep(step) {
    cerrarTodosLosModales();
    if (step === 'home') {
        navigateTo('vista-inicio');
        return;
    }
    if (step === 'narzu') {
        navigateTo('vista-artefactos');
        return;
    }
    if (step === 'episodes') {
        abrirProyecto(NARZU_PRELOAD.id);
        return;
    }
    if (step === 'mesa') {
        if (currentChapterData?.vinetas?.length) {
            navigateTo('vista-mesa-de-luz');
        } else {
            openFirstPilotEpisode('vista-mesa-de-luz');
        }
        return;
    }
    if (step === 'cierre') {
        if (currentChapterData?.vinetas?.length) {
            navigateTo('vista-mesa-de-luz');
            setTimeout(() => {
                revelarCierreEpistemico({ scroll: true });
            }, 250);
        } else {
            openFirstPilotEpisode('cierre');
        }
    }
}

function normalizePilotEpisode(ep) {
    const source = ep || {};
    const vinetas = Array.isArray(source.vinetas)
        ? source.vinetas.slice(0, PILOT_MAX_VINETAS).map(v => {
            const panel = v || {};
            const variantes = Array.isArray(panel.variantes) ? panel.variantes.slice(0, PILOT_MAX_ITERATIONS) : panel.variantes;
            const varianteActiva = Array.isArray(variantes) && variantes.length
                ? Math.min(panel.varianteActiva || 0, variantes.length - 1)
                : panel.varianteActiva;
            return { ...panel, variantes, varianteActiva };
        })
        : [];

    return {
        ...source,
        numVinetas: PILOT_MAX_VINETAS,
        vinetas
    };
}

function normalizePilotNarzu(savedProject) {
    const savedEpisodes = Array.isArray(savedProject?.episodios) && savedProject.episodios.length
        ? savedProject.episodios
        : NARZU_PRELOAD.episodios;

    return {
        ...NARZU_PRELOAD,
        fecha: savedProject?.fecha || NARZU_PRELOAD.fecha,
        portada: savedProject?.portada || NARZU_PRELOAD.portada,
        develacion_ai: savedProject?.develacion_ai || NARZU_PRELOAD.develacion_ai,
        episodios: savedEpisodes.map(normalizePilotEpisode),
        episodiosCount: savedProject?.episodiosCount || savedEpisodes.length
    };
}

function initApp() {
    initFeedbackSystem();
    const savedData = localStorage.getItem(GNVIC_STORAGE_KEY);
    if (savedData) {
        appData = JSON.parse(savedData);
    } else {
        appData.projects.push(NARZU_PRELOAD);
    }

    const savedNarzu = (appData.projects || []).find(p => p.id === NARZU_PRELOAD.id);
    appData.projects = [normalizePilotNarzu(savedNarzu)];

    appData.config = normalizeConfig(appData.config);
    saveData(true);
    renderProyectos();
    loadConfigPage();
    renderOnboardingGuide('vista-inicio');
    setTimeout(() => updatePdfDependencyAlert({ notify: true }), 900);
}

// Throttled save to avoid excessive localStorage writes during rapid edits
let _saveTimer = null;
function saveData(immediate) {
    showSaveIndicator('saving');
    const persist = () => {
        try {
            localStorage.setItem(GNVIC_STORAGE_KEY, JSON.stringify(appData));
            showSaveIndicator('saved');
        } catch (err) {
            showSaveIndicator('error');
            showToast({
                title: 'No se pudo guardar',
                message: err.message || 'El navegador no permitió guardar los cambios.',
                type: 'error',
                duration: 7000
            });
            throw err;
        }
    };

    if (immediate) {
        clearTimeout(_saveTimer);
        persist();
        return;
    }
    if (_saveTimer) clearTimeout(_saveTimer);
    _saveTimer = setTimeout(() => {
        persist();
    }, 300);
}

function navigateTo(viewId) {
    const currentActiveView = document.querySelector('.view-container.active')?.id;
    if (viewId === 'vista-configuracion-api' && currentActiveView && currentActiveView !== viewId) {
        lastNonConfigViewId = currentActiveView;
    } else if (viewId !== 'vista-configuracion-api') {
        lastNonConfigViewId = viewId;
    }
    document.querySelectorAll('.view-container').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    if (viewId === 'vista-artefactos') renderProyectos();
    if (viewId === 'vista-configuracion-api') loadConfigPage();
    if (viewId !== 'vista-configuracion-api') syncSidebarStep(viewId);
    updateBreadcrumb(viewId);
    renderOnboardingGuide(viewId);
}

function updateBreadcrumb(viewId) {
    const breadcrumb = document.getElementById('breadcrumb');
    const brProyecto = document.getElementById('br-proyecto');
    const brEpisodio = document.getElementById('br-episodio');
    const brSepProyecto = document.getElementById('br-sep-proyecto');
    const brSepEpisodio = document.getElementById('br-sep-episodio');

    breadcrumb.style.display = 'none';

    if (viewId === 'vista-artefactos') {
        breadcrumb.style.display = 'none';
    } else if (viewId === 'vista-proyecto') {
        const p = getProject();
        if (p) {
            brProyecto.textContent = p.titulo || 'Proyecto';
            brProyecto.style.display = 'inline';
            brSepProyecto.style.display = 'inline';
            breadcrumb.style.display = 'flex';
        }
    } else if (viewId === 'vista-definir-episodio') {
        const p = getProject();
        if (p) {
            brProyecto.textContent = p.titulo || 'Proyecto';
            brProyecto.style.display = 'inline';
            brSepProyecto.style.display = 'inline';
            breadcrumb.style.display = 'flex';
        }
    } else if (viewId === 'vista-mesa-de-luz') {
        const p = getProject();
        if (p) {
            brProyecto.textContent = p.titulo || 'Proyecto';
            brProyecto.style.display = 'inline';
            brSepProyecto.style.display = 'inline';
            if (currentChapterData && currentChapterData.capNombre) {
                brEpisodio.textContent = currentChapterData.capNombre;
                brEpisodio.style.display = 'inline';
                brSepEpisodio.style.display = 'inline';
            } else {
                brEpisodio.style.display = 'none';
                brSepEpisodio.style.display = 'none';
            }
            breadcrumb.style.display = 'flex';
        }
    }
}

function cerrarTodosLosModales() {
    document.querySelectorAll('.modal.active').forEach(m => closeAccessibleModal(m, false));
    restoreFocusAfterModal();
}

// Modals
function abrirImagenAmpliada(src) {
    document.getElementById('img-ampliada').src = src;
    openAccessibleModal(document.getElementById('modal-imagen-ampliada'));
}
function abrirPortadaDesdeContenedor(container) {
    const portada = container?.querySelector('img');
    if (portada?.src) abrirImagenAmpliada(portada.src);
}
function cerrarImagenAmpliada() {
    closeAccessibleModal(document.getElementById('modal-imagen-ampliada'));
}
function abrirModalNuevo(projectId = null) {
    if (PILOT_MODE && !projectId) {
        showToast({
            title: 'Piloto con una historia',
            message: 'Esta versión del taller trabaja solo con NARZU.',
            type: 'info'
        });
        return;
    }

    const modal = document.getElementById('modal-nuevo-proyecto');
    const titulo = document.getElementById('np-modal-titulo');
    const btn = document.getElementById('btn-crear-proyecto');
    const hiddenId = document.getElementById('np-proyecto-id');
    const form = document.getElementById('form-nuevo-proyecto');

    if (projectId) {
        const p = appData.projects.find(proj => proj.id === projectId);
        if (p) {
            titulo.innerText = 'Editar Artefacto';
            btn.innerText = 'Guardar Cambios';
            hiddenId.value = p.id;
            
            document.getElementById('np-autor').value = p.autor || '';
            document.getElementById('np-titulo').value = p.titulo || '';
            document.getElementById('np-estilo').value = p.estilo || '';
            document.getElementById('np-trama').value = p.trama || '';
            document.getElementById('np-desc-subtexto').value = p.desc_subtexto || '';
            document.getElementById('np-genero').value = p.genero || 'Novela gráfica';
            document.getElementById('np-subtexto').value = p.subtexto || 'Filosófica';

            // Update chips
            const gridGenero = document.getElementById('grid-genero');
            gridGenero.querySelectorAll('.manifesto-chip').forEach(c => {
                const selected = c.innerText === p.genero;
                c.classList.toggle('selected', selected);
                c.setAttribute('aria-pressed', selected ? 'true' : 'false');
            });

            const gridSubtexto = document.getElementById('grid-subtexto');
            const standardSubtextos = ['Filosófica', 'Sociológica', 'Política', 'De Género'];
            let isOther = !standardSubtextos.includes(p.subtexto);
            
            gridSubtexto.querySelectorAll('.manifesto-chip').forEach(c => {
                if (isOther && c.innerText === 'Otra') {
                    c.classList.add('selected');
                    c.setAttribute('aria-pressed', 'true');
                } else {
                    const selected = c.innerText === p.subtexto;
                    c.classList.toggle('selected', selected);
                    c.setAttribute('aria-pressed', selected ? 'true' : 'false');
                }
            });

            const otraInput = document.getElementById('np-subtexto-otra');
            if (isOther) {
                otraInput.style.display = 'inline-block';
                otraInput.value = p.subtexto;
                document.getElementById('np-subtexto').value = 'Otra';
            } else {
                otraInput.style.display = 'none';
                otraInput.value = '';
            }
        }
    } else {
        titulo.innerText = 'Nuevo Artefacto';
        btn.innerText = 'Inscribir Artefacto';
        hiddenId.value = '';
        form.reset();
        // Reset chips to default
        document.getElementById('np-genero').value = 'Novela gráfica';
        document.getElementById('np-subtexto').value = 'Filosófica';
        document.getElementById('grid-genero').querySelectorAll('.manifesto-chip').forEach((c, i) => {
            c.classList.toggle('selected', i === 0);
            c.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
        });
        document.getElementById('grid-subtexto').querySelectorAll('.manifesto-chip').forEach((c, i) => {
            c.classList.toggle('selected', i === 0);
            c.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
        });
        document.getElementById('np-subtexto-otra').style.display = 'none';
    }
    openAccessibleModal(modal, '#np-autor');
}
function cerrarModalNuevo() { closeAccessibleModal(document.getElementById('modal-nuevo-proyecto')); }
function abrirModalSobre() { openAccessibleModal(document.getElementById('modal-sobre-gnvic'), 'button'); }
function abrirModalConfig() {
    openConfigPage();
}

function openConfigPage() {
    navigateTo('vista-configuracion-api');
}

function closeConfigPage() {
    navigateTo(lastNonConfigViewId || 'vista-artefactos');
}

function toggleConfigApiKeyVisibility() {
    const input = document.getElementById('config-openrouter-key');
    if (!input) return;
    input.type = input.type === 'password' ? 'text' : 'password';
}
function loadConfigPage() {
    appData.config = normalizeConfig(appData.config);
    const textConfig = getTextGenerationConfig();
    const imageConfig = getImageGenerationConfig();

    const keyInput = document.getElementById('config-openrouter-key');
    const baseUrlInput = document.getElementById('config-openrouter-base-url');
    const textModelInput = document.getElementById('config-openrouter-text-model');
    const imageModelInput = document.getElementById('config-openrouter-image-model');
    const statusKey = document.getElementById('config-status-key');
    const statusBaseUrl = document.getElementById('config-status-base-url');
    const statusTextModel = document.getElementById('config-status-text-model');
    const statusImageModel = document.getElementById('config-status-image-model');

    if (keyInput) keyInput.value = textConfig.apiKey || '';
    if (baseUrlInput) baseUrlInput.value = textConfig.baseUrl || DEFAULT_CONFIG.baseUrl;
    if (textModelInput) textModelInput.value = textConfig.model || '';
    if (imageModelInput) imageModelInput.value = imageConfig.model || '';
    if (statusKey) statusKey.textContent = maskApiKey(textConfig.apiKey);
    if (statusBaseUrl) statusBaseUrl.textContent = textConfig.baseUrl || DEFAULT_CONFIG.baseUrl;
    if (statusTextModel) statusTextModel.textContent = textConfig.model || 'Pendiente';
    if (statusImageModel) statusImageModel.textContent = imageConfig.model || 'Pendiente';

    attachConfigInputListeners();
    syncSelectedModelStatus();

    const configDraft = getConfigDraftFromPage();
    if (configDraft.apiKey) {
        fetchOpenRouterModels(false);
    } else {
        setConfigModelsStatus('Ingresa tu API key y consulta el catálogo para ver modelos disponibles, costo y sugerencias.', 'neutral');
        renderOpenRouterModelLists();
    }
}

function guardarConfiguracionBYOK(e, goBack) {
    if (e) e.preventDefault();

    const apiKey = document.getElementById('config-openrouter-key')?.value?.trim() || '';
    const baseUrl = sanitizeBaseUrl(document.getElementById('config-openrouter-base-url')?.value);
    const textModel = document.getElementById('config-openrouter-text-model')?.value?.trim() || '';
    const imageModel = document.getElementById('config-openrouter-image-model')?.value?.trim() || '';

    appData.config = normalizeConfig({
        ...appData.config,
        provider: 'openrouter',
        apiKey,
        baseUrl,
        textModel,
        imageModel
    });

    saveData(true);
    loadConfigPage();
    if (goBack) {
        navigateTo('vista-artefactos');
        return;
    }
    showToast({ title: 'Configuración guardada', message: 'La llave y los modelos quedaron actualizados.', type: 'success' });
}

// Projects
function selectVisualCard(containerId, value, e) {
    const container = document.getElementById(containerId);
    container.querySelectorAll('.visual-card, .manifesto-chip').forEach(el => {
        el.classList.remove('selected');
        el.setAttribute('aria-pressed', 'false');
    });
    (e || event).currentTarget.classList.add('selected');
    (e || event).currentTarget.setAttribute('aria-pressed', 'true');
    document.getElementById('np-genero').value = value;
}

function selectVisualChip(containerId, value, e) {
    const container = document.getElementById(containerId);
    container.querySelectorAll('.visual-chip, .manifesto-chip').forEach(el => {
        el.classList.remove('selected');
        el.setAttribute('aria-pressed', 'false');
    });
    (e || event).currentTarget.classList.add('selected');
    (e || event).currentTarget.setAttribute('aria-pressed', 'true');
    document.getElementById('np-subtexto').value = value;
    
    // Show/Hide "Otra" input
    const otraInput = document.getElementById('np-subtexto-otra');
    if (value === 'Otra') {
        otraInput.style.display = 'inline-block';
        otraInput.focus();
    } else {
        otraInput.style.display = 'none';
    }
}

function crearProyecto(e) {
    e.preventDefault();
    
    let subtextoFinal = document.getElementById('np-subtexto').value;
    if (subtextoFinal === 'Otra') {
        subtextoFinal = document.getElementById('np-subtexto-otra').value || 'Otra';
    }

    const projectId = document.getElementById('np-proyecto-id').value;
    
    if (projectId) {
        // UPDATE EXISTING
        const p = appData.projects.find(proj => proj.id === projectId);
        if (p) {
            p.autor = document.getElementById('np-autor').value;
            p.titulo = document.getElementById('np-titulo').value;
            p.genero = document.getElementById('np-genero').value;
            p.estilo = document.getElementById('np-estilo').value;
            p.subtexto = subtextoFinal;
            p.desc_subtexto = document.getElementById('np-desc-subtexto').value || '';
            p.trama = document.getElementById('np-trama').value;
            p.sinopsis_ficha = p.trama.substring(0, 150) + '...';
        }
        saveData();
        cerrarModalNuevo();
        abrirProyecto(projectId); // Refresh view
    } else if (PILOT_MODE) {
        showToast({
            title: 'Piloto con una historia',
            message: 'Esta versión mantiene solo NARZU como artefacto base.',
            type: 'info'
        });
        return;
    } else {
        // CREATE NEW
        const p = {
            id: Date.now().toString(),
            autor: document.getElementById('np-autor').value,
            titulo: document.getElementById('np-titulo').value,
            genero: document.getElementById('np-genero').value,
            estilo: document.getElementById('np-estilo').value,
            subtexto: subtextoFinal,
            desc_subtexto: document.getElementById('np-desc-subtexto').value || '',
            bibliografia: '',
            trama: document.getElementById('np-trama').value,
            sinopsis_ficha: document.getElementById('np-trama').value.substring(0, 150) + '...',
            personajes: [],
            episodios: [],
            fecha: new Date().toLocaleDateString()
        };
        appData.projects.push(p); saveData(true); e.target.reset();
        // Reset visual selections programmatically (without event dependency)
        document.getElementById('np-genero').value = 'Novela gráfica';
        document.getElementById('grid-genero').querySelectorAll('.manifesto-chip').forEach((c, i) => c.classList.toggle('selected', i === 0));
        document.getElementById('np-subtexto').value = 'Filosófica';
        document.getElementById('grid-subtexto').querySelectorAll('.manifesto-chip').forEach((c, i) => c.classList.toggle('selected', i === 0));
        document.getElementById('np-subtexto-otra').style.display = 'none';

        cerrarModalNuevo(); abrirProyecto(p.id);
    }
}

function renderProyectos() {
    const c = document.getElementById('lista-proyectos');
    c.className = 'project-grid pilot-project-grid';

    if (!appData.projects.length) {
        c.innerHTML = uiStateHtml('empty', 'NARZU no está disponible', 'Recarga el piloto para restaurar el artefacto base.');
        return;
    }

    const p = appData.projects[0];
    c.innerHTML = `
        <button type="button" class="visual-card artifact-card artifact-card--pilot" aria-label="Abrir artefacto ${escapeHtml(p.titulo)}" onclick="abrirProyecto('${p.id}')">
            <span class="artifact-card__body">
                <span class="artifact-card__kicker">Artefacto del piloto</span>
                <span class="artifact-card__title">${escapeHtml(p.titulo)}</span>
                <span class="artifact-card__meta">
                    <span class="artifact-card__meta-line"><strong class="artifact-card__meta-label">Subtexto:</strong> ${escapeHtml(p.subtexto || 'No definido')}</span>
                    <span class="artifact-card__meta-line"><strong class="artifact-card__meta-label">Formato:</strong> episodio de ${PILOT_MAX_VINETAS} viñetas</span>
                    <span class="artifact-card__meta-line"><strong class="artifact-card__meta-label">Salida:</strong> cierre epistémico y PDF</span>
                </span>
                <span class="artifact-card__summary">${escapeHtml(p.sinopsis_ficha || (p.trama || '').substring(0, 220) + '...')}</span>
            </span>
            <span class="artifact-card__actions">
                <span class="artifact-card__open">Abrir NARZU →</span>
            </span>
        </button>`;
}

async function eliminarProyecto(id) {
    const deletedIndex = appData.projects.findIndex(p => p.id === id);
    const deletedProject = deletedIndex >= 0 ? JSON.parse(JSON.stringify(appData.projects[deletedIndex])) : null;
    const confirmed = await showConfirm({
        title: 'Eliminar artefacto',
        message: '¿Quieres eliminar este artefacto? Podrás deshacerlo por unos segundos.',
        acceptLabel: 'Eliminar'
    });
    if (!confirmed) return;
    appData.projects = appData.projects.filter(p => p.id !== id);
    if (currentProjectId === id) currentProjectId = null;
    saveData(true);
    renderProyectos();
    showToast({
        title: 'Artefacto eliminado',
        message: 'Puedes deshacer esta acción brevemente.',
        type: 'success',
        duration: 9000,
        actionLabel: 'Deshacer',
        onAction: () => {
            if (!deletedProject || appData.projects.some(p => p.id === deletedProject.id)) return;
            appData.projects.splice(Math.max(0, deletedIndex), 0, deletedProject);
            saveData(true);
            renderProyectos();
            showToast({ title: 'Artefacto restaurado', type: 'success' });
        }
    });
}
function getProject() { return appData.projects.find(p => p.id === currentProjectId); }

async function iniciarTypewriterMesa() {
    const p = getProject();
    const btn = document.getElementById('btn-revelar-mesa');
    const display = document.getElementById('tw-text-display-mesa');
    if (!p || !display || !btn) return;
    setPilotStepActive('cierre');

    const textConfig = getTextGenerationConfig();
    const canUseAI = Boolean(textConfig.apiKey && textConfig.model);
    const shouldRegenerate = btn.dataset.allowRegenerate === '1';

    btn.disabled = true;
    btn.style.display = 'block';
    btn.textContent = canUseAI ? 'Consultando modelo...' : 'Preparando contenido...';
    display.className = 'typewriter-terminal';
    display.style.display = 'block';
    display.textContent = btn.textContent;

    let content = null;
    try {
        if (canUseAI && (!p.develacion_ai || shouldRegenerate)) {
            content = await generarDevelacionOpenRouter(p);
        } else {
            content = getStoredDevelacion(p);
        }
    } catch (err) {
        console.error('Error al develar el artefacto con OpenRouter:', err);
        showToast({
            title: 'Se usará contenido local',
            message: `No se pudo generar la develación con OpenRouter. Detalle: ${err.message}`,
            type: 'error',
            duration: 8000
        });
        content = getStoredDevelacion(p);
    }

    renderTypewriterDisplay(formatDevelacionTypewriterText(content), btn);
}

function exportarRIS() {
    const p = getProject();
    const biblio = p?.develacion_ai?.bibliografia || p.bibliografia || "";
    if (!biblio.trim()) {
        showToast({ title: 'Sin bibliografía', message: 'No hay bibliografía definida para este episodio.', type: 'info' });
        return;
    }

    const lines = biblio.split('\n').filter(l => l.trim().length > 0);
    let risContent = "";

    lines.forEach(line => {
        // Eliminar numeración inicial si existe (ej: "1. ")
        const cleanLine = line.replace(/^\d+[\.\)]\s*/, "").trim();
        
        // Intento de parseo simple para APA: Autor (Año). Título.
        // Regex: (Autor) (Año). (Título/Resto)
        const apaMatch = cleanLine.match(/^(.*?)\s*\((\d{4})\)\.\s*(.*?)$/);
        
        risContent += "TY  - JOUR\r\n"; // Tipo genérico
        if (apaMatch) {
            risContent += `AU  - ${apaMatch[1].trim()}\r\n`;
            risContent += `PY  - ${apaMatch[2]}\r\n`;
            risContent += `TI  - ${apaMatch[3].trim()}\r\n`;
        } else {
            risContent += `TI  - ${cleanLine}\r\n`;
        }
        risContent += "ER  - \r\n\r\n";
    });

    const blob = new Blob([risContent], { type: 'application/x-research-info-systems' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `bibliografia_${(p.id || 'proyecto').replace(/[^a-z0-9]/gi, '_')}.ris`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Defer revocation to ensure download starts
    setTimeout(function() { URL.revokeObjectURL(url); }, 1000);
}

function abrirProyecto(id) {
    currentProjectId = id; const p = getProject();
    document.getElementById('vp-titulo').innerText = p.titulo;
    document.getElementById('vp-trama-edit').value = p.trama || '';

    // Subtexto details
    const subtextoSelect = document.getElementById('vp-subtexto-edit');
    const subtextoOtraContainer = document.getElementById('vp-subtexto-otra-container');
    const subtextoOtraInput = document.getElementById('vp-subtexto-otra-edit');
    
    const standardOptions = ['Filosófico', 'Sociológico', 'Político', 'De Género', 'Histórico'];
    if (p.subtexto && standardOptions.includes(p.subtexto)) {
        subtextoSelect.value = p.subtexto;
        subtextoOtraContainer.style.display = 'none';
    } else if (p.subtexto) {
        subtextoSelect.value = 'Otro';
        subtextoOtraContainer.style.display = 'block';
        subtextoOtraInput.value = p.subtexto;
    } else {
        subtextoSelect.value = 'Filosófico';
        subtextoOtraContainer.style.display = 'none';
    }
    
    document.getElementById('vp-desc-subtexto-edit').value = p.desc_subtexto || '';

    renderEpisodiosList();

    // Set genre-appropriate button label
    const vocab = getEpisodeVocabulary(p);
    const newEpisodeButton = document.getElementById('btn-nuevo-episodio');
    const btnLabel = document.getElementById('btn-nuevo-episodio-label');
    if (btnLabel) btnLabel.textContent = vocab.newLabel;
    const sectionTitle = document.getElementById('vp-episodios-title');
    if (sectionTitle) {
        sectionTitle.textContent = PILOT_MODE
            ? `${vocab.plural.charAt(0).toUpperCase()}${vocab.plural.slice(1)} del piloto`
            : `${vocab.plural.charAt(0).toUpperCase()}${vocab.plural.slice(1)} interactivos`;
    }
    const sectionHelp = document.getElementById('vp-episodios-help');
    if (sectionHelp) {
        sectionHelp.textContent = PILOT_MODE
            ? `Cada nuevo ${vocab.singular} de NARZU se guardará aquí junto con "El dilema del color". Abre cualquiera para pasar a la mesa de luz, develar el subtexto y exportar el PDF.`
            : `Materializa la narrativa. Cada ${vocab.singular} es una unidad creativa dentro del marco narrativo del artefacto.`;
    }
    if (newEpisodeButton) {
        newEpisodeButton.style.display = 'flex';
    }

    cerrarTodosLosModales();
    navigateTo('vista-proyecto');
}

function renderEpisodiosList() {
    const container = document.getElementById('vp-lista-episodios');
    if (!container) return;
    const p = getProject();
    const vocab = getEpisodeVocabulary(p);
    const episodios = p.episodios || [];
    
    if (episodios.length === 0) {
        container.innerHTML = uiStateHtml('empty', `Aún no hay ${vocab.singular}`, `Prepara el ${vocab.singular} del piloto para materializar la narrativa.`);
        return;
    }
    
    // Build HTML once, then assign (avoids O(n^2) innerHTML+=)
    container.innerHTML = episodios.map((ep, i) => {
        const title = ep.nombre || `${vocab.title} sin título`;
        const isSampleEpisode = i === 0 && title.trim().toLowerCase() === 'el dilema del color';
        const deleteControl = isSampleEpisode
            ? '<span class="episode-delete-placeholder" aria-hidden="true"></span>'
            : `<button type="button" class="episode-delete-button" aria-label="Eliminar ${escapeHtml(title)}" title="Eliminar episodio" onclick="confirmarEliminarEpisodio(${i})">&times;</button>`;
        return `
        <div class="episode-list-row">
            <button type="button" class="episode-list-item" aria-label="Abrir ${escapeHtml(title)}" onclick="abrirEpisodioExistente(${i})">
                <span class="episode-list-item__body">
                    <span class="episode-list-item__title">${escapeHtml(title)}</span>
                    <span class="episode-list-item__meta">${ep.numVinetas || '?'} viñetas &bull; ${escapeHtml(ep.autor || '')}</span>
                </span>
                <span class="episode-list-item__action">${PILOT_MODE ? 'Ir a mesa de luz' : 'Abrir'} &rarr;</span>
            </button>
            ${deleteControl}
        </div>`;
    }).join('');
}

async function confirmarEliminarEpisodio(epIndex) {
    const p = getProject();
    const episodio = p?.episodios?.[epIndex];
    if (!episodio) return;
    const title = episodio.nombre || 'episodio sin título';
    if (epIndex === 0 && title.trim().toLowerCase() === 'el dilema del color') {
        showToast({
            title: 'Episodio muestra protegido',
            message: '"El dilema del color" permanece como referencia del taller y no se puede eliminar.',
            type: 'info'
        });
        return;
    }
    const confirmed = await showConfirm({
        title: 'Eliminar episodio',
        warning: 'Advertencia',
        message: `Esta acción eliminará "${title}" de NARZU en este navegador. Podrás deshacerlo durante unos segundos.`,
        acceptLabel: 'Eliminar episodio',
        cancelLabel: 'Cancelar'
    });
    if (!confirmed) return;

    const deletedEpisode = JSON.parse(JSON.stringify(episodio));
    p.episodios.splice(epIndex, 1);
    p.episodiosCount = Math.max(p.episodios.length, p.episodiosCount || 0);
    if (currentEpisodeIndex === epIndex) {
        currentEpisodeIndex = null;
        currentChapterData = null;
    } else if (currentEpisodeIndex !== null && currentEpisodeIndex > epIndex) {
        currentEpisodeIndex -= 1;
    }
    saveData(true);
    renderEpisodiosList();
    showToast({
        title: 'Episodio eliminado',
        message: `"${title}" salió de la lista.`,
        type: 'info',
        duration: 7000,
        actionLabel: 'Deshacer',
        onAction: () => {
            const project = getProject();
            if (!project) return;
            project.episodios.splice(Math.min(epIndex, project.episodios.length), 0, deletedEpisode);
            project.episodiosCount = Math.max(project.episodiosCount || 0, project.episodios.length);
            saveData(true);
            renderEpisodiosList();
        }
    });
}

function abrirEpisodioExistente(epIndex) {
    const p = getProject();
    const rawEp = p.episodios[epIndex];
    if (!rawEp) return;
    const ep = normalizePilotEpisode(rawEp);
    p.episodios[epIndex] = ep;
    currentEpisodeIndex = epIndex;
    
    currentChapterData = {
        capNombre: ep.nombre,
        autor: ep.autor,
        guion: ep.trama,
        numV: PILOT_MAX_VINETAS,
        personajesSeleccionados: ep.personajes || [],
        vinetas: ep.vinetas || []
    };
    navigateTo('vista-mesa-de-luz');
    document.getElementById('vml-titulo').innerText = currentChapterData.capNombre;
    if (currentChapterData.vinetas.length > 0) {
        renderMesaLuz();
        setTimeout(() => {
            for(let i = 0; i < currentChapterData.vinetas.length; i++) prepararImagenPanel(i);
            prepararCierreEpistemicoOculto();
        }, 500);
    } else {
        prepararCierreEpistemicoOculto();
    }
}
function toggleVpSubtextoOtra() {
    const select = document.getElementById('vp-subtexto-edit');
    const container = document.getElementById('vp-subtexto-otra-container');
    if (select.value === 'Otro') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}

function guardarProyectoActual() {
    const p = getProject();
    p.trama = document.getElementById('vp-trama-edit').value;
    
    let subtextoVal = document.getElementById('vp-subtexto-edit').value;
    if (subtextoVal === 'Otro') {
        subtextoVal = document.getElementById('vp-subtexto-otra-edit').value || 'Otro';
    }
    p.subtexto = subtextoVal;
    
    p.desc_subtexto = document.getElementById('vp-desc-subtexto-edit').value;
    saveData();
}

// Episode Definition
let episodeSelectedChars = [];

function abrirDefinirEpisodio() {
    const p = getProject();
    const vocab = getEpisodeVocabulary(p);
    const tituloVista = PILOT_MODE ? 'Crea tu conflicto' : vocab.newLabel;
    
    document.getElementById('vde-titulo').innerText = tituloVista;
    const extensionTitle = document.getElementById('vde-extension-title');
    if (extensionTitle) extensionTitle.textContent = PILOT_MODE ? 'Secuencia narrativa' : `Extensión del ${vocab.singular}`;
    const extensionHelp = document.getElementById('vde-extension-help');
    if (extensionHelp) {
        extensionHelp.textContent = PILOT_MODE
            ? `Tu conflicto se trabajará como una secuencia fija de ${PILOT_MAX_VINETAS} viñetas dentro del universo NARZU.`
            : `En el piloto del taller cada ${vocab.singular} trabaja con ${PILOT_MAX_VINETAS} viñetas.`;
    }
    const btnMesa = document.getElementById('btn-ir-mesa-label');
    if (btnMesa) btnMesa.textContent = PILOT_MODE ? 'Convertir en 6 viñetas' : `Ir a la mesa de luz`;
    
    // Populate artifact context card
    document.getElementById('vde-ctx-titulo').textContent = p.titulo || '';
    document.getElementById('vde-ctx-genero').textContent = (p.genero || 'No definido') + (p.estilo ? ' • ' + p.estilo : '');
    document.getElementById('vde-ctx-subtexto').textContent = p.subtexto || 'No definido';
    document.getElementById('vde-ctx-trama').textContent = p.trama || 'Sin trama definida.';
    
    // Clear previous episode data
    document.getElementById('vde-nombre').value = '';
    document.getElementById('vde-autor').value = p.autor || '';
    document.getElementById('vde-trama').value = '';
    document.getElementById('vde-num-vinetas').value = String(PILOT_MAX_VINETAS);
    
    // Reset viñeta chips
    document.querySelectorAll('.vineta-chip').forEach(c => {
        c.classList.remove('selected');
        c.setAttribute('aria-pressed', 'false');
    });
    document.querySelector('.vineta-chip').classList.add('selected');
    document.querySelector('.vineta-chip').setAttribute('aria-pressed', 'true');
    
    // Reset character selection
    episodeSelectedChars = [];
    renderGaleriaPersonajes();
    
    navigateTo('vista-definir-episodio');
}

function renderGaleriaPersonajes() {
    const container = document.getElementById('vde-galeria-personajes');
    const p = getProject();
    const personajes = p.personajes || [];

    if (personajes.length === 0) {
        container.innerHTML = uiStateHtml('empty', 'No hay personajes definidos', 'Vuelve al artefacto para añadirlos.');
        updatePersonajesCount();
        return;
    }

    // Build HTML once, then assign
    container.innerHTML = personajes.map((char, i) => {
        const isSelected = episodeSelectedChars.includes(i);
        const avatarHtml = char.img
            ? `<img src="${char.img}" alt="Retrato de ${escapeHtml(char.nombre || 'personaje')}">`
            : `<span class="char-avatar-placeholder">&#x1F464;</span>`;
        return `
        <button type="button" class="char-select-card ${isSelected ? 'selected' : ''}" aria-pressed="${isSelected ? 'true' : 'false'}" aria-label="Seleccionar personaje ${escapeHtml(char.nombre || 'sin nombre')}" onclick="toggleSeleccionPersonaje(${i})">
            <span class="char-select-avatar">${avatarHtml}</span>
            <span class="char-select-info">
                <span class="char-name">${char.nombre || 'Sin nombre'}</span>
                <span class="char-role">${char.rol || 'Sin rol'}</span>
                ${char.desc ? `<span class="char-desc">${char.desc}</span>` : ''}
            </span>
        </button>`;
    }).join('');
    updatePersonajesCount();
}

function toggleSeleccionPersonaje(i) {
    const idx = episodeSelectedChars.indexOf(i);
    if (idx === -1) {
        episodeSelectedChars.push(i);
    } else {
        episodeSelectedChars.splice(idx, 1);
    }
    renderGaleriaPersonajes();
}

function updatePersonajesCount() {
    const countEl = document.getElementById('vde-personajes-count');
    if (countEl) {
        const n = episodeSelectedChars.length;
        countEl.textContent = n === 1 ? '1 seleccionado' : `${n} seleccionados`;
    }
}

function seleccionarVinetas(num, el) {
    num = PILOT_MAX_VINETAS;
    document.querySelectorAll('.vineta-chip').forEach(c => {
        c.classList.remove('selected');
        c.setAttribute('aria-pressed', 'false');
    });
    el.classList.add('selected');
    el.setAttribute('aria-pressed', 'true');
    document.getElementById('vde-num-vinetas').value = num;
}

// Characters
function renderPersonajes() {
    const c = document.getElementById('vp-lista-personajes');
    // Build HTML once, then assign
    c.innerHTML = getProject().personajes.map((char, i) => {
        const imgHtml = char.img
            ? `<button type="button" class="char-photo-area" onclick="document.getElementById('char-file-${i}').click()" title="Cambiar imagen" aria-label="Cambiar imagen de ${escapeHtml(char.nombre || 'personaje')}">
                <img src="${char.img}" class="char-photo-area__image" alt="Imagen de ${escapeHtml(char.nombre || 'personaje')}">
                <span class="char-photo-area__overlay"><span class="char-photo-area__icon">&#x1F4F7;</span></span>
               </button>`
            : `<button type="button" class="char-photo-area char-photo-area--empty" onclick="document.getElementById('char-file-${i}').click()" title="Subir imagen" aria-label="Subir imagen de ${escapeHtml(char.nombre || 'personaje')}">
                <span class="char-avatar-placeholder">&#x1F464;</span>
                <span class="char-photo-area__label">Añadir Foto</span>
               </button>`;

        return `
        <div class="char-card">
            <button class="char-card__delete" onclick="confirmarEliminarPersonaje(${i})" title="Eliminar personaje">&#x2715;</button>
            <div class="char-card__body">
                <div class="char-card__photo-wrap">
                    ${imgHtml}
                    <input type="file" id="char-file-${i}" accept="image/*" class="file-input-hidden" aria-label="Imagen de ${escapeHtml(char.nombre || 'personaje')}" onchange="subirImagenPersonaje(${i}, this)">
                </div>
                <div class="char-card__fields">
                    <input class="char-nombre-input char-field-name" value="${char.nombre}" aria-label="Nombre del personaje" onchange="actualizarPersonaje(${i}, 'nombre', this.value)" placeholder="NOMBRE DEL PERSONAJE">
                    <input class="char-field-role" value="${char.rol}" aria-label="Rol del personaje" onchange="actualizarPersonaje(${i}, 'rol', this.value)" placeholder="ROL / ARQUETIPO">
                    <textarea class="char-field-desc" aria-label="Descripción del personaje" onchange="actualizarPersonaje(${i}, 'desc', this.value)" placeholder="Descripción, rasgos psicológicos y visuales...">${char.desc}</textarea>
                </div>
            </div>
        </div>`;
    }).join('');
}
function subirImagenPersonaje(i, input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        // Redimensionar para no saturar localStorage
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const maxSize = 200;
            let w = img.width, h = img.height;
            if (w > h) { h = Math.round(h * maxSize / w); w = maxSize; }
            else { w = Math.round(w * maxSize / h); h = maxSize; }
            canvas.width = w; canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            getProject().personajes[i].img = canvas.toDataURL('image/jpeg', 0.8);
            saveData();
            renderPersonajes();
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}
function agregarPersonaje() {
    getProject().personajes.unshift({ nombre: '', rol: '', desc: '', rasgos: '' });
    saveData();
    renderPersonajes();
    // Auto-focus en el campo nombre del nuevo personaje (primero de la lista)
    setTimeout(() => {
        const firstInput = document.querySelector('#vp-lista-personajes .char-nombre-input');
        if (firstInput) firstInput.focus();
    }, 50);
}
function actualizarPersonaje(i, campo, val) { getProject().personajes[i][campo] = val; saveData(); }
async function confirmarEliminarPersonaje(i) {
    const project = getProject();
    const deletedCharacter = project?.personajes?.[i] ? JSON.parse(JSON.stringify(project.personajes[i])) : null;
    const nombre = deletedCharacter?.nombre || 'este personaje';
    const confirmed = await showConfirm({
        title: 'Eliminar personaje',
        message: `¿Quieres eliminar a "${nombre}"? Podrás deshacerlo por unos segundos.`,
        acceptLabel: 'Eliminar'
    });
    if (!confirmed) return;
    project.personajes.splice(i, 1); saveData(); renderPersonajes();
    showToast({
        title: 'Personaje eliminado',
        message: 'Puedes deshacer esta acción brevemente.',
        type: 'success',
        duration: 9000,
        actionLabel: 'Deshacer',
        onAction: () => {
            const currentProject = getProject();
            if (!currentProject || !deletedCharacter) return;
            currentProject.personajes.splice(Math.max(0, i), 0, deletedCharacter);
            saveData(true);
            renderPersonajes();
            showToast({ title: 'Personaje restaurado', type: 'success' });
        }
    });
}

// Mesa de Luz
async function activarMesaDeLuz() {
    const p = getProject();
    if (!p.episodios) p.episodios = [];
    p.episodiosCount = (p.episodiosCount || 0) + 1;

    const vocab = getEpisodeVocabulary(p);
    const capNombre = document.getElementById('vde-nombre').value || `${vocab.title} sin título`;
    const autor = document.getElementById('vde-autor').value || p.autor || '';
    const trama = document.getElementById('vde-trama').value || '';
    const numV = PILOT_MAX_VINETAS;

    // Save episode to project
    const episodioData = {
        nombre: capNombre,
        autor: autor,
        trama: trama,
        numVinetas: numV,
        personajes: episodeSelectedChars.map(i => (p.personajes[i] || {}).nombre).filter(Boolean),
        fecha: new Date().toLocaleDateString(),
        vinetas: []
    };
    p.episodios.push(episodioData);
    currentEpisodeIndex = p.episodios.length - 1;
    saveData();

    currentChapterData = {
        capNombre: capNombre,
        autor: autor,
        guion: trama,
        numV: numV,
        personajesSeleccionados: episodeSelectedChars.map(i => (p.personajes[i] || {}).nombre).filter(Boolean)
    };
    navigateTo('vista-mesa-de-luz');
    document.getElementById('vml-titulo').innerText = `${vocab.title} #${p.episodiosCount} - ${currentChapterData.capNombre}`;
    prepararCierreEpistemicoOculto();
    const grid = document.getElementById('vml-panels-grid');
    grid.innerHTML = uiStateHtml('loading', 'Preparando mesa de luz', 'Estamos organizando las viñetas.');

    setTimeout(() => {
        currentChapterData.vinetas = [
            {
                numero: 1,
                textoGlobo: "",
                forma: "panoramica",
                imgLocal: "la_escuela.jpg"
            },
            {
                numero: 2,
                textoGlobo: "¡Celulares a la caja! La tecnología nos distrae de la verdadera educación.",
                forma: "cuadrada",
                imgLocal: "novela_grafica_prof_murcia.jpg"
            },
            {
                numero: 3,
                textoGlobo: "¿Qué futuro me espera si no entiendo a los algoritmos?",
                forma: "vertical",
                imgLocal: "novela_grafica_pete.jpg"
            },
            {
                numero: 4,
                textoGlobo: "Elegir es un lujo que el sistema no nos da realmente.",
                forma: "cuadrada",
                imgLocal: "novela_grafica_paz.jpg"
            },
            {
                numero: 5,
                textoGlobo: "¡El mundo es un problema de datos y nosotros somos los ingenieros para resolverlo! El formulario azul es el único acceso al mañana.",
                forma: "panoramica",
                imgLocal: "novela_grafica_prof_chat2.jpg"
            },
            {
                numero: 6,
                textoGlobo: "Si fallo, la máquina decidirá que no sirvo. Xochi dice que ese miedo también es parte del sistema.",
                forma: "vertical",
                imgLocal: "novela_grafica_dani.jpg"
            }
        ];
        renderMesaLuz();
        
        setTimeout(() => {
            for(let i = 0; i < currentChapterData.vinetas.length; i++) prepararImagenPanel(i);
            prepararCierreEpistemicoOculto();
        }, 500);

    }, 600);
}

function guardarMesaDeLuz() {
    const p = getProject();
    if (!p || currentEpisodeIndex === null || !p.episodios || !p.episodios[currentEpisodeIndex] || !currentChapterData) {
        showToast({ title: 'No hay episodio activo', message: 'Abre o crea un episodio antes de guardar.', type: 'error' });
        return;
    }

    const episode = p.episodios[currentEpisodeIndex];
    episode.nombre = currentChapterData.capNombre || episode.nombre;
    episode.autor = currentChapterData.autor || episode.autor;
    episode.trama = currentChapterData.guion || episode.trama;
    episode.numVinetas = PILOT_MAX_VINETAS;
    episode.personajes = [...(currentChapterData.personajesSeleccionados || episode.personajes || [])];
    episode.vinetas = JSON.parse(JSON.stringify((currentChapterData.vinetas || []).slice(0, PILOT_MAX_VINETAS)));
    currentChapterData.numV = PILOT_MAX_VINETAS;
    currentChapterData.vinetas = episode.vinetas;
    saveData(true);
    showToast({ title: 'Mesa de luz guardada', message: 'Los cambios del episodio quedaron guardados.', type: 'success' });
}

function renderMesaLuz() {
    const grid = document.getElementById('vml-panels-grid');
    const totalPanels = Math.min((currentChapterData.vinetas || []).length, PILOT_MAX_VINETAS);
    const progressHtml = `
        <div class="panel-progress" aria-label="Progreso de viñetas del episodio">
            <div class="panel-progress__header">
                <span class="panel-progress__label">Secuencia de viñetas</span>
                <span class="panel-progress__count">${totalPanels}/${PILOT_MAX_VINETAS}</span>
            </div>
            <div class="panel-progress__track">
                ${Array.from({ length: PILOT_MAX_VINETAS }, (_, idx) => `
                    <a class="panel-progress__step ${idx < totalPanels ? 'is-ready' : ''}" href="#panel-${idx}" aria-label="Ir a viñeta ${idx + 1} de ${PILOT_MAX_VINETAS}">
                        <span>${idx + 1}</span>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
    // Build all HTML at once to avoid O(n^2) innerHTML concatenation
    const panelsHtml = currentChapterData.vinetas.map((v, i) => {
        const varCount = (v.variantes && v.variantes.length > 0) ? (v.varianteActiva + 1) + '/' + v.variantes.length : '0/0';
        const navDisabled = (!v.variantes || v.variantes.length <= 1) ? 'disabled' : '';
        const iterDisabled = (v.variantes && v.variantes.length >= PILOT_MAX_ITERATIONS) ? 'disabled' : '';
        const narratorText = v.textoNarrador || '';
        const narratorClass = narratorText.trim() ? '' : 'is-hidden';
        return `
        <div class="panel-card light-table-panel" id="panel-${i}" data-forma="${v.forma}">
            <div class="left-col-preview light-table-panel__preview">
                <div class="panel-sequence-badge" aria-label="Viñeta ${i + 1} de ${PILOT_MAX_VINETAS}">
                    <span class="panel-sequence-badge__number">${i + 1}</span>
                    <span class="panel-sequence-badge__total">/${PILOT_MAX_VINETAS}</span>
                </div>
                <div class="panel-img-container light-table-panel__image-area shape-${v.forma}" id="pimg-${i}">
                    <button class="btn-secondary" onclick="generarImagenIA(${i})">Generar Imagen API</button>
                </div>
                <div id="narrador-preview-${i}" class="narrator-preview ${narratorClass}">${narratorText}</div>
                <div id="iter-controls-${i}" class="variant-controls">
                    <div class="variant-controls__nav">
                        <button class="btn-secondary variant-controls__button" onclick="cambiarVariante(${i}, -1)" ${navDisabled}>&larr;</button>
                        <span class="variant-controls__count" id="variant-count-${i}">${varCount}</span>
                        <button class="btn-secondary variant-controls__button" onclick="cambiarVariante(${i}, 1)" ${navDisabled}>&rarr;</button>
                    </div>
                    <button class="btn-secondary variant-controls__iterate" onclick="iterarImagen(${i})" title="Iterar con IA (límite ${PILOT_MAX_ITERATIONS})" id="iter-btn-${i}" ${iterDisabled}>&#x2728;</button>
                </div>
            </div>
            <div class="panel-mando">
                <h4 class="panel-mando__title">Viñeta ${i + 1}</h4>
                <section class="panel-mando__group">
                    <h5 class="panel-mando__group-title">Composición visual</h5>
                    <p class="panel-mando__group-note">Define el encuadre y el comportamiento del globo.</p>
                    <div>
                        <label class="mando-label" for="forma-${i}">Proporción del panel</label>
                        <select id="forma-${i}" onchange="cambiarForma(${i}, this.value)" class="mando-select">
                            <option value="cuadrada" ${v.forma === 'cuadrada' ? 'selected' : ''}>Cuadrada (1:1)</option>
                            <option value="panoramica" ${v.forma === 'panoramica' ? 'selected' : ''}>Panorámica (16:9)</option>
                            <option value="vertical" ${v.forma === 'vertical' ? 'selected' : ''}>Vertical (9:16)</option>
                        </select>
                    </div>
                    <div>
                        <label class="mando-label" for="globo-${i}">Estilo del globo</label>
                        <select id="globo-${i}" onchange="cambiarFormaGlobo(${i}, this.value)" class="mando-select">
                            <option value="" ${!v.formaGlobo ? 'selected' : ''}>Automático según género</option>
                            <option value="bubble-shout" ${v.formaGlobo === 'bubble-shout' ? 'selected' : ''}>Grito / impacto</option>
                            <option value="bubble-oval" ${v.formaGlobo === 'bubble-oval' ? 'selected' : ''}>Nube / manga</option>
                            <option value="bubble-rect" ${v.formaGlobo === 'bubble-rect' ? 'selected' : ''}>Rectángulo macizo</option>
                            <option value="bubble-pill" ${v.formaGlobo === 'bubble-pill' ? 'selected' : ''}>Píldora estándar</option>
                        </select>
                    </div>
                    <div>
                        <label class="mando-label" for="posicion-globo-${i}">Posición vertical</label>
                        <select id="posicion-globo-${i}" onchange="cambiarPosicionGlobo(${i}, this.value)" class="mando-select">
                            <option value="top" ${v.posGlobo === 'top' || !v.posGlobo ? 'selected' : ''}>Arriba</option>
                            <option value="center" ${v.posGlobo === 'center' ? 'selected' : ''}>Centro</option>
                            <option value="bottom" ${v.posGlobo === 'bottom' ? 'selected' : ''}>Abajo</option>
                            <option value="none" ${v.posGlobo === 'none' ? 'selected' : ''}>Sin globo</option>
                        </select>
                    </div>
                </section>
                <section class="panel-mando__group">
                    <h5 class="panel-mando__group-title">Texto narrativo</h5>
                    <p class="panel-mando__group-note">El diálogo va dentro de la imagen; el narrador queda en una franja externa.</p>
                    <div class="panel-mando__text-fields">
                        <div class="panel-mando__field">
                            <label class="mando-label" for="vglobo-${i}">Diálogo</label>
                            <textarea id="vglobo-${i}" class="panel-mando__textarea" placeholder="Escribe aquí el diálogo..." oninput="actualizarGlobo(${i}, this.value)">${v.textoGlobo || ''}</textarea>
                        </div>
                        <div class="panel-mando__field">
                            <label class="mando-label" for="vnarrador-${i}">Narrador</label>
                            <textarea id="vnarrador-${i}" class="panel-mando__textarea panel-mando__textarea--narrator" placeholder="Texto del narrador fuera de la imagen..." oninput="actualizarNarrador(${i}, this.value)">${narratorText}</textarea>
                        </div>
                    </div>
                </section>
                <section class="panel-mando__group">
                    <h5 class="panel-mando__group-title">Salida</h5>
                    <button class="btn-secondary panel-mando__download" onclick="descargarMock(${i})">Descargar vista</button>
                </section>
            </div>
        </div>`;
    }).join('');
    grid.innerHTML = progressHtml + panelsHtml;
}

function cambiarForma(index, forma) {
    currentChapterData.vinetas[index].forma = forma;
    // Update only the affected panel's shape class instead of re-rendering everything
    const container = document.getElementById(`pimg-${index}`);
    if (container) {
        container.className = container.className.replace(/shape-\w+/, `shape-${forma}`);
        // Update the parent panel-card data attribute for theater mode grid
        const card = container.closest('.panel-card');
        if (card) card.setAttribute('data-forma', forma);
    }
    // Re-render image to respect new shape ratio
    prepararImagenPanel(index);
}

function cambiarFormaGlobo(index, formaGlobo) {
    currentChapterData.vinetas[index].formaGlobo = formaGlobo;
    prepararImagenPanel(index);
}

function cambiarPosicionGlobo(index, posGlobo) {
    currentChapterData.vinetas[index].posGlobo = posGlobo;
    prepararImagenPanel(index);
}

function actualizarGlobo(i, val) {
    currentChapterData.vinetas[i].textoGlobo = val;
    const bubble = document.getElementById(`bubble-${i}`);
    if (bubble) {
        bubble.innerText = val;
        bubble.style.display = val.trim() ? 'block' : 'none';
    }
}

function actualizarNarrador(i, val) {
    currentChapterData.vinetas[i].textoNarrador = val;
    const narrator = document.getElementById(`narrador-preview-${i}`);
    if (narrator) {
        narrator.innerText = val;
        narrator.classList.toggle('is-hidden', !val.trim());
    }
}

function shouldContainPanelImage(vineta) {
    const variantIndex = Number.isInteger(vineta?.varianteActiva) ? vineta.varianteActiva : 0;
    const src = ((vineta?.variantes && vineta.variantes[variantIndex]) || vineta?.imgLocal || '').toLowerCase();
    return src.includes('la_escuela.jpg') || src.includes('la_escuela.png') || src.includes('la_escuela_embedded.png');
}

function asegurarVarianteBase(i) {
    const v = currentChapterData?.vinetas?.[i];
    if (!v) return;

    if (!Array.isArray(v.variantes)) v.variantes = [];
    if (!Number.isInteger(v.varianteActiva)) v.varianteActiva = 0;

    if (v.variantes.length === 0) {
        v.variantes.push(v.imgLocal || "la_escuela.jpg");
        v.varianteActiva = 0;
    }
}

function prepararImagenPanel(i) {
    const container = document.getElementById(`pimg-${i}`);
    if (!container) return;

    asegurarVarianteBase(i);
    actualizarDisplayVinetta(i);
}

function mostrarErrorImagenPanel(i) {
    const container = document.getElementById(`pimg-${i}`);
    if (!container) return;
    container.innerHTML = uiStateHtml('error', 'No se pudo cargar la imagen', `Revisa la fuente de la viñeta ${i + 1}.`);
    showToast({
        title: 'Imagen no disponible',
        message: `No se pudo cargar la imagen de la viñeta ${i + 1}.`,
        type: 'error'
    });
}

async function generarImagenIA(i, forceNew = false) {
    const container = document.getElementById(`pimg-${i}`);
    if (!container) return;

    const imageConfig = getImageGenerationConfig();
    if (!imageConfig.apiKey || !imageConfig.model) {
        prepararImagenPanel(i);
        if (SHOWCASE_MODE) {
            showToast({
                title: 'Vitrina de demostración',
                message: 'Esta viñeta muestra la imagen precargada del artefacto NARZU. Para generar imágenes nuevas en vivo, configura tu propia clave de OpenRouter desde Configuración API.',
                type: 'info',
                duration: 8000
            });
        } else {
            showToast({
                title: 'Falta configuración de imagen',
                message: 'Configura tu API key y un modelo de imagen de OpenRouter antes de generar una viñeta.',
                type: 'error',
                duration: 7000
            });
        }
        return;
    }

    asegurarVarianteBase(i);
    container.innerHTML = '<div class="ui-loading-message"><div class="spinner"></div><div class="ui-loading-label">Generando con OpenRouter...</div></div>';

    try {
        const newImg = await generarImagenOpenRouter(i, forceNew);
        const v = currentChapterData.vinetas[i];
        if (!Array.isArray(v.variantes)) v.variantes = [];
        v.variantes.push(newImg);
        v.varianteActiva = v.variantes.length - 1;
        actualizarDisplayVinetta(i);
        saveData();
    } catch (err) {
        console.error('Error generando viñeta con OpenRouter:', err);
        prepararImagenPanel(i);
        showToast({
            title: 'No se pudo generar la imagen',
            message: `OpenRouter devolvió un error. Detalle: ${err.message}`,
            type: 'error',
            duration: 8000
        });
    }
}

function actualizarDisplayVinetta(i) {
    const container = document.getElementById(`pimg-${i}`);
    const v = currentChapterData.vinetas[i];
    const imgFile = v.variantes[v.varianteActiva];
    const displayImgFile = resolveDisplayImageSource(imgFile);
    const objectFit = shouldContainPanelImage(v) ? 'contain' : 'cover';
    
    const g = getProject().genero || 'Novela gráfica';
    let defaultBClass = 'bubble-pill';
    if (g === 'Cómic') defaultBClass = 'bubble-shout';
    else if (g === 'Manga') defaultBClass = 'bubble-oval';
    else if (g === 'Historieta') defaultBClass = 'bubble-rect';
    
    const finalClass = v.formaGlobo || defaultBClass;
    const text = document.getElementById(`vglobo-${i}`)?.value || v.textoGlobo || '';
    const pos = v.posGlobo || 'top';
    
    let posStyle = 'top: 20px; bottom: auto;';
    let tForm = 'translateX(-50%)';
    if (pos === 'center') { posStyle = 'top: 50%; bottom: auto;'; tForm = 'translate(-50%, -50%)'; }
    else if (pos === 'bottom') { posStyle = 'top: auto; bottom: 20px;'; }
    if (finalClass === 'bubble-shout') tForm += ' rotate(-3deg)';

    const displayValue = (text.trim() && pos !== 'none') ? 'block' : 'none';
    
    const isExternal = displayImgFile.startsWith('http');
    const fitClass = objectFit === 'contain' ? 'panel-image--contain' : 'panel-image--cover';
    container.innerHTML = `
        <img id="vimg-${i}" src="${displayImgFile}" ${isExternal ? 'crossorigin="anonymous"' : ''} class="panel-image ${fitClass}" alt="Viñeta ${i+1}" onerror="mostrarErrorImagenPanel(${i})">
        <div id="bubble-${i}" class="bubble-base ${finalClass}" style="${posStyle} transform: ${tForm}; display:${displayValue};">${text}</div>
    `;

    // Actualizar contador de variantes si existe
    const countSpan = document.getElementById(`variant-count-${i}`);
    if (countSpan) countSpan.innerText = `${v.varianteActiva + 1}/${v.variantes.length}`;
    
    // Habilitar/deshabilitar pipes de navegación
    const controls = document.getElementById(`iter-controls-${i}`);
    if (controls) {
        const btns = controls.querySelectorAll('button');
        btns[0].disabled = (v.varianteActiva <= 0);
        btns[1].disabled = (v.varianteActiva >= v.variantes.length - 1);
    }
}

function iterarImagen(i) {
    const v = currentChapterData.vinetas[i];
    if (!v.variantes) v.variantes = [];
    
    if (v.variantes.length >= PILOT_MAX_ITERATIONS) {
        showToast({ title: 'Límite alcanzado', message: `Esta viñeta ya tiene ${PILOT_MAX_ITERATIONS} iteraciones.`, type: 'info' });
        return;
    }
    generarImagenIA(i, true);
}

function cambiarVariante(i, offset) {
    const v = currentChapterData.vinetas[i];
    const newIndex = v.varianteActiva + offset;
    if (newIndex >= 0 && newIndex < (v.variantes ? v.variantes.length : 0)) {
        v.varianteActiva = newIndex;
        actualizarDisplayVinetta(i);
    }
}

function descargarMock(i) {
    const img = document.querySelector(`#pimg-${i} img`);
    if(!img) return;
    const a = document.createElement('a');
    a.href = img.src;
    a.download = `Vinetta-${i+1}.png`;
    a.click();
}

function toggleTeatro() {
    document.body.classList.toggle('modo-teatro');
    const btn = document.getElementById('btn-toggle-teatro');
    if(document.body.classList.contains('modo-teatro')) {
        btn.innerText = '❌ Salir del teatro';
    } else {
        btn.innerText = '🎭 Modo teatro';
    }
}

function generarPortada() {
    const container = document.getElementById('vml-portada-c'); 
    if (!container) return;
    container.style.display = 'block';
    const img = document.getElementById('vml-portada-img'); 
    img.innerHTML = '<span class="spinner"></span>';
    
    // Cargar la imagen de portada real del artefacto
    const portadaSrc = encodeURI(PORTADA_DILEMA_SRC);
    const tempImg = new Image();
    tempImg.onload = function() {
        img.innerHTML = `<img src="${portadaSrc}" class="cover-preview-image" alt="Portada del artefacto">`;
    };
    tempImg.onerror = function() {
        // Fallback: generar portada con canvas si no existe el archivo
        const project = getProject();
        const titulo = project.titulo || "Sin Título";
        const autor = project.autor || "Autor Desconocido";
        const estilo = project.estilo || "Arte Crítico";
        const canvas = document.createElement('canvas');
        canvas.width = 600; canvas.height = 800;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#111111'; ctx.fillRect(0, 0, 600, 800);
        ctx.strokeStyle = '#E00034'; ctx.lineWidth = 15;
        ctx.strokeRect(20, 20, 560, 760);
        ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold 45px Archivo, sans-serif';
        const words = titulo.toUpperCase().split(' ');
        let line = '', y = 150;
        for(let n = 0; n < words.length; n++) {
            let testLine = line + words[n] + ' ';
            if (ctx.measureText(testLine).width > 500 && n > 0) {
                ctx.fillText(line, 50, y); line = words[n] + ' '; y += 60;
            } else { line = testLine; }
        }
        ctx.fillText(line, 50, y);
        ctx.fillStyle = '#E00034'; ctx.font = '700 25px Archivo, sans-serif';
        ctx.fillText(autor, 50, y + 60);
        ctx.fillStyle = '#888888'; ctx.font = '15px Archivo, sans-serif';
        ctx.fillText(estilo.toUpperCase(), 50, 730);
        ctx.fillText("GNVIC • GENERADOR DE NARRATIVAS", 50, 750);
        img.innerHTML = `<img src="${canvas.toDataURL('image/jpeg', 0.9)}" class="cover-preview-image" alt="Portada generada del artefacto">`;
    };
    tempImg.src = portadaSrc;
}

// Convierte una <img> del DOM (ya renderizada) a dataURL JPEG.
// Funciona en file:// porque lee del elemento ya cargado, no hace fetch.
function domImgToDataURL(imgEl, quality) {
    if (!imgEl || !imgEl.naturalWidth) return null;
    try {
        const c = document.createElement('canvas');
        c.width = imgEl.naturalWidth; c.height = imgEl.naturalHeight;
        c.getContext('2d').drawImage(imgEl, 0, 0);
        return c.toDataURL('image/jpeg', quality || 0.92);
    } catch(e) { console.warn('domImgToDataURL failed:', e); return null; }
}

function loadImageElement(src) {
    return new Promise((resolve, reject) => {
        if (!src) {
            reject(new Error('No image source provided.'));
            return;
        }
        const img = new Image();
        if (/^https?:/i.test(src)) img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`No se pudo cargar la imagen: ${src}`));
        img.src = src;
    });
}

const pdfImageDataUrlCache = {};
let pdfAssetsB64Promise = null;

function getPdfAssetKeys(src) {
    if (!src || typeof src !== 'string') return [];
    const cleanSrc = src.split('#')[0].split('?')[0];
    const fileName = decodeURIComponent(cleanSrc.split('/').pop() || cleanSrc);
    const relativeAsset = cleanSrc.includes('/assets/')
        ? `assets/${decodeURIComponent(cleanSrc.split('/assets/').pop())}`
        : cleanSrc;
    return Array.from(new Set([src, cleanSrc, relativeAsset, fileName]));
}

function getPdfEmbeddedAssetDataUrl(src) {
    const assets = window.pdfAssetsB64 || {};
    const keys = getPdfAssetKeys(src);
    for (const key of keys) {
        if (assets[key]) return assets[key];
    }
    return null;
}

function ensurePdfAssetsB64Loaded() {
    if (window.pdfAssetsB64) return Promise.resolve(window.pdfAssetsB64);
    if (pdfAssetsB64Promise) return pdfAssetsB64Promise;

    pdfAssetsB64Promise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'pdfAssetsB64.js';
        script.defer = true;
        script.onload = () => resolve(window.pdfAssetsB64 || {});
        script.onerror = () => reject(new Error('No se pudo cargar pdfAssetsB64.js.'));
        document.head.appendChild(script);
    });
    return pdfAssetsB64Promise;
}

function blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error || new Error('No se pudo convertir la imagen.'));
        reader.readAsDataURL(blob);
    });
}

function xhrImageToDataUrl(src) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', src, true);
        xhr.responseType = 'blob';
        xhr.onload = async function() {
            if (xhr.status && (xhr.status < 200 || xhr.status >= 300)) {
                reject(new Error(`No se pudo leer la imagen (${xhr.status}).`));
                return;
            }
            try {
                resolve(await blobToDataUrl(xhr.response));
            } catch (err) {
                reject(err);
            }
        };
        xhr.onerror = () => reject(new Error('El navegador bloqueó la lectura local de la imagen.'));
        xhr.send();
    });
}

async function imageSourceToDataUrl(src) {
    if (!src || typeof src !== 'string' || src.startsWith('data:')) return src;
    if (pdfImageDataUrlCache[src]) return pdfImageDataUrlCache[src];

    const embeddedBeforeRead = getPdfEmbeddedAssetDataUrl(src);
    if (embeddedBeforeRead) {
        pdfImageDataUrlCache[src] = embeddedBeforeRead;
        return embeddedBeforeRead;
    }

    try {
        const response = await fetch(src);
        if (!response.ok) throw new Error(`No se pudo leer la imagen (${response.status}).`);
        const dataUrl = await blobToDataUrl(await response.blob());
        pdfImageDataUrlCache[src] = dataUrl;
        return dataUrl;
    } catch (fetchErr) {
        try {
            const dataUrl = await xhrImageToDataUrl(src);
            pdfImageDataUrlCache[src] = dataUrl;
            return dataUrl;
        } catch (xhrErr) {
            const embeddedAfterRead = await ensurePdfAssetsB64Loaded()
                .then(() => getPdfEmbeddedAssetDataUrl(src))
                .catch(() => null);
            if (embeddedAfterRead) {
                pdfImageDataUrlCache[src] = embeddedAfterRead;
                return embeddedAfterRead;
            }
            console.warn('No se pudo convertir la imagen a data URL para PDF:', src, fetchErr, xhrErr);
            return src;
        }
    }
}

async function loadPdfImageElement(src) {
    const resolvedSrc = resolveImageSourceForPdf(src);
    const dataSafeSrc = await imageSourceToDataUrl(resolvedSrc);
    return loadImageElement(dataSafeSrc);
}

function fittedImgToCanvas(imgEl, aspectRatio, options = {}) {
    if (!imgEl || !imgEl.naturalWidth || !aspectRatio) return null;

    const mode = options.mode || 'cover';
    const background = options.background || '#111111';
    const longEdge = options.longEdge || 2200;

    const canvas = document.createElement('canvas');
    if (aspectRatio >= 1) {
        canvas.width = longEdge;
        canvas.height = Math.max(1, Math.round(longEdge / aspectRatio));
    } else {
        canvas.height = longEdge;
        canvas.width = Math.max(1, Math.round(longEdge * aspectRatio));
    }

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const scale = mode === 'contain'
        ? Math.min(canvas.width / imgEl.naturalWidth, canvas.height / imgEl.naturalHeight)
        : Math.max(canvas.width / imgEl.naturalWidth, canvas.height / imgEl.naturalHeight);

    const drawW = imgEl.naturalWidth * scale;
    const drawH = imgEl.naturalHeight * scale;
    const dx = (canvas.width - drawW) / 2;
    const dy = (canvas.height - drawH) / 2;

    try {
        ctx.drawImage(imgEl, dx, dy, drawW, drawH);
        return canvas;
    } catch (err) {
        console.warn('fittedImgToCanvas failed:', err);
        return null;
    }
}

function fittedImgToDataURL(imgEl, aspectRatio, options = {}) {
    const canvas = fittedImgToCanvas(imgEl, aspectRatio, options);
    if (!canvas) return null;
    const quality = options.quality || 0.92;
    try {
        return canvas.toDataURL('image/jpeg', quality);
    } catch (err) {
        console.warn('fittedImgToDataURL failed:', err);
        return null;
    }
}

function resolveImageSourceForPdf(src) {
    if (!src) return null;
    if (typeof src !== 'string') return src;
    if (src.startsWith('data:')) return src;

    const cleanSrc = src.split('#')[0].split('?')[0];
    const fileName = decodeURIComponent(cleanSrc.split('/').pop() || cleanSrc);
    const embedded = window.mockImagesB64 && window.mockImagesB64[fileName];
    return embedded || src;
}

function resolveDisplayImageSource(src) {
    if (!src || typeof src !== 'string') return src;
    if (src.startsWith('data:') || src.startsWith('http')) return src;

    // Vitrina con archivos en la raíz del repositorio: si algún dato guardado
    // conserva el prefijo 'assets/' de una versión anterior, se normaliza al
    // nombre de archivo suelto para que cargue desde la raíz.
    if (src.startsWith('assets/')) src = src.slice('assets/'.length);

    const cleanSrc = src.split('#')[0].split('?')[0];
    const fileName = decodeURIComponent(cleanSrc.split('/').pop() || cleanSrc);
    return (window.mockImagesB64 && (window.mockImagesB64[src] || window.mockImagesB64[fileName])) || src;
}

function drawContainedImage(doc, imageData, imgW, imgH, x, y, boxW, boxH, format) {
    if (!imageData || !imgW || !imgH) return;
    const scale = Math.min(boxW / imgW, boxH / imgH);
    const drawW = imgW * scale;
    const drawH = imgH * scale;
    const dx = x + (boxW - drawW) / 2;
    const dy = y + (boxH - drawH) / 2;
    doc.addImage(imageData, format || 'JPEG', dx, dy, drawW, drawH);
}

function sanitizePdfFilePart(value, fallback = 'sin_dato') {
    const clean = String(value || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .replace(/[^\w\-]+/g, '_')
        .replace(/^_+|_+$/g, '')
        .slice(0, 64);
    return clean || fallback;
}

function buildPdfFileName(episodeTitle, authorName) {
    const now = new Date();
    const stamp = [
        now.getFullYear(),
        String(now.getMonth() + 1).padStart(2, '0'),
        String(now.getDate()).padStart(2, '0')
    ].join('') + '-' + [
        String(now.getHours()).padStart(2, '0'),
        String(now.getMinutes()).padStart(2, '0')
    ].join('');
    return `GNVIC_${sanitizePdfFilePart(episodeTitle, 'episodio')}_${sanitizePdfFilePart(authorName, 'autor')}_${stamp}.pdf`;
}

function downloadBlobWithAnchor(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
}

function downloadBlob(blob, fileName) {
    if (window.showSaveFilePicker) {
        window.showSaveFilePicker({
            suggestedName: fileName,
            types: [{
                description: 'Documento PDF',
                accept: { 'application/pdf': ['.pdf'] }
            }]
        })
            .then((handle) => handle.createWritable())
            .then(async (writable) => {
                await writable.write(blob);
                await writable.close();
            })
            .catch((err) => {
                if (err && err.name === 'AbortError') return;
                console.warn('No se pudo usar el guardado nativo, se usará descarga estándar:', err);
                downloadBlobWithAnchor(blob, fileName);
            });
        return;
    }
    downloadBlobWithAnchor(blob, fileName);
}

function requestPdfResearchConsent(pdfBlob, fileName) {
    return showConfirm({
        title: 'Consentimiento informado',
        message: 'GNVIC puede conservar una copia del PDF y metadatos mínimos (título, género, fecha y versión de la app) con fines de investigación académica y mejora pedagógica. Tu participación es voluntaria: puedes descargar el PDF sin compartir copia. No se guarda tu llave de API ni información externa al PDF generado.',
        acceptLabel: 'Acepto compartir copia',
        cancelLabel: 'Solo descargar PDF',
        onAccept: () => downloadBlob(pdfBlob, fileName),
        onCancel: () => downloadBlob(pdfBlob, fileName)
    });
}

function openResearchDb() {
    return new Promise((resolve, reject) => {
        if (!window.indexedDB) {
            reject(new Error('IndexedDB no está disponible en este navegador.'));
            return;
        }
        const request = indexedDB.open('gnvic_research_pdf_copies', 1);
        request.onupgradeneeded = function() {
            const db = request.result;
            if (!db.objectStoreNames.contains('copies')) {
                db.createObjectStore('copies', { keyPath: 'id' });
            }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error || new Error('No se pudo abrir IndexedDB.'));
    });
}

async function storeResearchPdfLocally(blob, fileName, metadata) {
    const db = await openResearchDb();
    return new Promise((resolve, reject) => {
        const tx = db.transaction('copies', 'readwrite');
        tx.objectStore('copies').put({
            id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            fileName,
            metadata,
            pdf: blob
        });
        tx.oncomplete = () => {
            db.close();
            resolve(true);
        };
        tx.onerror = () => {
            db.close();
            reject(tx.error || new Error('No se pudo guardar la copia local.'));
        };
    });
}

async function uploadResearchPdfCopy(blob, fileName, metadata) {
    const endpoint = window.GNVIC_RESEARCH_UPLOAD_URL || localStorage.getItem('gnvic_research_upload_url') || '';
    if (!endpoint) return { uploaded: false, reason: 'no_endpoint' };

    const formData = new FormData();
    formData.append('pdf', blob, fileName);
    formData.append('metadata', JSON.stringify(metadata));

    const response = await fetch(endpoint, { method: 'POST', body: formData });
    if (!response.ok) {
        throw new Error(`El servidor respondió ${response.status}.`);
    }
    return { uploaded: true };
}

async function saveResearchPdfCopyWithConsent(blob, fileName, project) {
    const metadata = {
        consentedAt: new Date().toISOString(),
        appVersion: window.GN_VERSION || '2.1.0-STABLE',
        projectId: project?.id || '',
        title: project?.titulo || '',
        author: project?.autor || '',
        genre: project?.genero || '',
        episodeTitle: currentChapterData?.capNombre || ''
    };

    try {
        await storeResearchPdfLocally(blob, fileName, metadata);
        const uploadResult = await uploadResearchPdfCopy(blob, fileName, metadata);
        showToast({
            title: uploadResult.uploaded ? 'Copia de investigación guardada' : 'Copia guardada localmente',
            message: uploadResult.uploaded
                ? 'Gracias. La copia del PDF se guardó para investigación.'
                : 'Gracias. La copia quedó guardada en este navegador. Para guardarla en el servidor de investigación, configura GNVIC_RESEARCH_UPLOAD_URL.',
            type: 'success',
            duration: 7000
        });
    } catch (err) {
        showToast({
            title: 'No se pudo guardar la copia de investigación',
            message: `El PDF sí se descargó. Detalle: ${err.message}`,
            type: 'error',
            duration: 9000
        });
    }
}

async function getPortadaPdfImage() {
    const portadaSrc = getPortadaAssetSrc();

    try {
        return await loadPdfImageElement(portadaSrc);
    } catch (err) {
        console.warn('No se pudo recuperar la portada para el PDF:', err);
        return null;
    }
}

async function getPanelPdfImage(origIdx, vineta) {
    const domImg = document.querySelector(`#pimg-${origIdx} img`);
    const variantIndex = Number.isInteger(vineta?.varianteActiva) ? vineta.varianteActiva : 0;
    const rawSrc = domImg?.currentSrc || domImg?.src || ((vineta?.variantes && vineta.variantes[variantIndex]) || vineta?.imgLocal);
    if (!rawSrc) return null;

    try {
        return await loadPdfImageElement(rawSrc);
    } catch (err) {
        console.warn(`No se pudo recuperar la imagen de la viñeta ${origIdx + 1}:`, err);
        return null;
    }
}

async function descargarPDF(e) {
    const btn = (e && e.currentTarget) || (typeof event !== 'undefined' && event?.target) || {};
    const originalText = btn.innerText || '';

    try {
        const dependencyStatus = updatePdfDependencyAlert({ notify: true });
        if (!dependencyStatus.ok) {
            showToast({
                title: 'No se puede exportar el PDF',
                message: `${dependencyStatus.message} Revisa la conexión a internet y recarga la página.`,
                type: 'error',
                duration: 9000
            });
            return;
        }
        if(btn.innerText) btn.innerText = "⌛ Generando...";
        const { jsPDF } = window.jspdf;
        // Tamaño carta (letter): 215.9 x 279.4 mm
        const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'letter', compress: true });
        const W = doc.internal.pageSize.getWidth();
        const H = doc.internal.pageSize.getHeight();
        const project = getProject();
        const develacion = getStoredDevelacion(project);
        const episodeTitle = (currentChapterData?.capNombre || project?.episodios?.[currentEpisodeIndex]?.nombre || project?.titulo || 'Episodio').trim();
        const episodeAuthor = (currentChapterData?.autor || project?.episodios?.[currentEpisodeIndex]?.autor || project?.autor || 'Autor no registrado').trim();
        const margin = 12; // Margen para el texto
        const contentW = W - margin * 2;

        function fitPdfText(text, maxWidth, suffix = '...') {
            const clean = String(text || '').replace(/\s+/g, ' ').trim();
            if (!clean || doc.getTextWidth(clean) <= maxWidth) return clean;
            let shortened = clean;
            while (shortened.length > 1 && doc.getTextWidth(shortened + suffix) > maxWidth) {
                shortened = shortened.slice(0, -1);
            }
            return `${shortened.trim()}${suffix}`;
        }

        function fondoNarrativo() {
            doc.setFillColor(30, 30, 30);
            doc.rect(0, 0, W, H, 'F');
            doc.setDrawColor(44, 44, 44);
            doc.setLineWidth(0.18);
            for (let x = -H; x < W; x += 14) {
                doc.line(x, 0, x + H, H);
            }
            doc.setDrawColor(52, 52, 52);
            doc.setLineWidth(0.12);
            for (let y = 10; y < H; y += 18) {
                doc.line(0, y, W, y);
            }
        }
        function fondoPaper() { doc.setFillColor(248, 246, 240); doc.rect(0, 0, W, H, 'F'); }

        // ============================================================
        // 1. PORTADA — Ocupando TODA la primera página (Full Bleed)
        // ============================================================
        fondoNarrativo();
        const portadaImgEl = await getPortadaPdfImage();
        if (portadaImgEl) {
            const portadaData = fittedImgToDataURL(portadaImgEl, W / H, {
                mode: 'contain',
                background: '#1e1e1e',
                longEdge: 1800,
                quality: 0.86
            });
            if (portadaData) {
                doc.addImage(portadaData, 'JPEG', 0, 0, W, H);
            }
        }

        // ============================================================
        // 2. VIÑETAS — Maquetación oblicua para piloto de 6 viñetas
        // ============================================================
        if (currentChapterData && currentChapterData.vinetas) {
            let vinetasToExport = currentChapterData.vinetas.slice(0, PILOT_MAX_VINETAS);
            let originalIndices = vinetasToExport.map((_, idx) => idx);

            // Novela grafica de papel: paginas negras, marcos blancos gruesos y ritmo 1, 2, 1, 2.
            const pageMargin = 10;
            const footerReserve = 14;
            const pageContentW = W - pageMargin * 2;
            const pageContentH = H - pageMargin * 2 - footerReserve;
            const panelPixelScale = 8;

            // Resolver cada panel desde sus fuentes originales/base64 para evitar bloqueos en la descarga.
            const panelCache = {};
            await Promise.all(originalIndices.map(async (origIdx, exportIdx) => {
                panelCache[exportIdx] = await getPanelPdfImage(origIdx, vinetasToExport[exportIdx]);
            }));

            function drawComicFooter(pageNumber) {
                const footerY = H - 6;
                const pageLabel = String(pageNumber).padStart(2, '0');
                const leftMax = (W / 2) - pageMargin - 8;
                const rightMax = leftMax;
                const titleLabel = fitPdfText(episodeTitle, rightMax);
                const authorLabel = fitPdfText(episodeAuthor, leftMax);

                doc.setDrawColor(224, 0, 52);
                doc.setLineWidth(0.35);
                doc.line(pageMargin, H - 12, W - pageMargin, H - 12);
                doc.setFont('helvetica', 'normal');
                doc.setFontSize(7.2);
                doc.setTextColor(210, 210, 210);

                if (pageNumber % 2 === 1) {
                    doc.text(authorLabel, pageMargin, footerY);
                    doc.text(`${pageLabel}  /  ${titleLabel}`, W - pageMargin, footerY, { align: 'right' });
                } else {
                    doc.text(`${titleLabel}  /  ${pageLabel}`, pageMargin, footerY);
                    doc.text(authorLabel, W - pageMargin, footerY, { align: 'right' });
                }
            }

            function fondoPaginaComic(pageNumber) {
                doc.setFillColor(3, 3, 3);
                doc.rect(0, 0, W, H, 'F');
                doc.setDrawColor(24, 24, 24);
                doc.setLineWidth(0.18);
                for (let x = -H; x < W; x += 16) {
                    doc.line(x, 0, x + H * 0.82, H);
                }
                doc.setDrawColor(40, 40, 40);
                doc.setLineWidth(0.12);
                for (let x = W + H; x > -H; x -= 32) {
                    doc.line(x, 0, x - H * 0.72, H);
                }
                drawComicFooter(pageNumber);
            }

            function getObliqueSlots(count, pageIndex) {
                if (count === 1) {
                    const w = pageContentW * 0.94;
                    const h = pageContentH * 0.84;
                    return [{
                        x: pageMargin + (pageContentW - w) / 2,
                        y: pageMargin + (pageContentH - h) / 2,
                        w,
                        h,
                        slant: pageIndex % 2 === 0 ? 0.075 : -0.075
                    }];
                }

                const slotW = pageContentW * 0.91;
                const slotH = (pageContentH - 18) / 2;
                const firstX = pageMargin + pageContentW * 0.015;
                const secondX = pageMargin + pageContentW - slotW - pageContentW * 0.015;
                return [
                    { x: firstX, y: pageMargin + 6, w: slotW, h: slotH, slant: pageIndex % 2 === 0 ? 0.08 : -0.08 },
                    { x: secondX, y: pageMargin + slotH + 18, w: slotW, h: slotH, slant: pageIndex % 2 === 0 ? -0.08 : 0.08 }
                ];
            }

            function buildPanelPages(items) {
                const rhythm = [1, 2, 1, 2];
                const pages = [];
                let offset = 0;
                let rhythmIndex = 0;
                while (offset < items.length) {
                    const count = rhythm[rhythmIndex % rhythm.length];
                    pages.push(items.slice(offset, offset + count));
                    offset += count;
                    rhythmIndex += 1;
                }
                return pages;
            }

            function drawCanvasPolygon(ctx, points) {
                ctx.beginPath();
                points.forEach((point, idx) => {
                    if (idx === 0) ctx.moveTo(point.x, point.y);
                    else ctx.lineTo(point.x, point.y);
                });
                ctx.closePath();
            }

            function interpolateEdgeX(top, bottom, y) {
                const t = (y - top.y) / Math.max(1, bottom.y - top.y);
                return top.x + (bottom.x - top.x) * t;
            }

            function drawWrappedCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
                const words = String(text || '').replace(/\s+/g, ' ').trim().split(' ');
                const lines = [];
                let line = '';

                words.forEach((word) => {
                    const test = line ? `${line} ${word}` : word;
                    if (ctx.measureText(test).width <= maxWidth || !line) {
                        line = test;
                    } else {
                        lines.push(line);
                        line = word;
                    }
                });
                if (line) lines.push(line);

                const visibleLines = lines.slice(0, maxLines || lines.length);
                if (lines.length > visibleLines.length && visibleLines.length) {
                    visibleLines[visibleLines.length - 1] = visibleLines[visibleLines.length - 1].replace(/\s*[.,;:!?]*$/, '') + '...';
                }
                visibleLines.forEach((lineText, idx) => ctx.fillText(lineText, x, y + idx * lineHeight));
                return visibleLines.length;
            }

            function roundRectPath(ctx, x, y, w, h, r) {
                const radius = Math.min(r, w / 2, h / 2);
                ctx.beginPath();
                ctx.moveTo(x + radius, y);
                ctx.lineTo(x + w - radius, y);
                ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
                ctx.lineTo(x + w, y + h - radius);
                ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
                ctx.lineTo(x + radius, y + h);
                ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
                ctx.lineTo(x, y + radius);
                ctx.quadraticCurveTo(x, y, x + radius, y);
                ctx.closePath();
            }

            function drawCanvasImageFit(ctx, img, x, y, w, h, mode) {
                if (!img || !img.naturalWidth || !img.naturalHeight) {
                    ctx.fillStyle = '#0a0a0a';
                    ctx.fillRect(x, y, w, h);
                    ctx.fillStyle = '#f5f5f5';
                    ctx.font = `${Math.max(18, w * 0.035)}px Georgia, serif`;
                    ctx.textAlign = 'center';
                    ctx.fillText('Imagen no disponible', x + w / 2, y + h / 2);
                    ctx.textAlign = 'left';
                    return;
                }

                const scale = mode === 'cover'
                    ? Math.max(w / img.naturalWidth, h / img.naturalHeight)
                    : Math.min(w / img.naturalWidth, h / img.naturalHeight);
                const drawW = img.naturalWidth * scale;
                const drawH = img.naturalHeight * scale;
                ctx.fillStyle = '#050505';
                ctx.fillRect(x, y, w, h);
                ctx.drawImage(img, x + (w - drawW) / 2, y + (h - drawH) / 2, drawW, drawH);
            }

            function drawCanvasBubble(ctx, v, bounds) {
                const text = (v?.textoGlobo || '').trim();
                if (!text || v?.posGlobo === 'none') return;

                const bubbleW = bounds.w * 0.72;
                const fontSize = Math.max(18, bounds.w * 0.033);
                const lineH = fontSize * 1.2;
                const maxLines = 4;
                ctx.font = `${v?.formaGlobo === 'bubble-shout' ? '700' : '500'} ${fontSize}px Helvetica, Arial, sans-serif`;
                const lines = [];
                let line = '';
                text.replace(/\s+/g, ' ').split(' ').forEach((word) => {
                    const test = line ? `${line} ${word}` : word;
                    if (ctx.measureText(test).width <= bubbleW - 36 || !line) line = test;
                    else {
                        lines.push(line);
                        line = word;
                    }
                });
                if (line) lines.push(line);
                const visibleLineCount = Math.min(maxLines, Math.max(1, lines.length));
                const bubbleH = Math.max(54, visibleLineCount * lineH + 28);
                const bx = bounds.x + (bounds.w - bubbleW) / 2;
                let by = bounds.y + 24;
                if (v?.posGlobo === 'bottom') by = bounds.y + bounds.h - bubbleH - 24;
                if (v?.posGlobo === 'center') by = bounds.y + (bounds.h - bubbleH) / 2;

                ctx.save();
                ctx.fillStyle = v?.formaGlobo === 'bubble-shout' ? '#ffe8e8' : '#ffffff';
                ctx.strokeStyle = v?.formaGlobo === 'bubble-shout' ? '#c8002f' : '#111111';
                ctx.lineWidth = v?.formaGlobo === 'bubble-shout' ? 6 : 4;
                if (v?.formaGlobo === 'bubble-rect') {
                    ctx.beginPath();
                    ctx.rect(bx, by, bubbleW, bubbleH);
                } else if (v?.formaGlobo === 'bubble-oval') {
                    ctx.beginPath();
                    ctx.ellipse(bx + bubbleW / 2, by + bubbleH / 2, bubbleW / 2, bubbleH / 2, 0, 0, Math.PI * 2);
                } else {
                    roundRectPath(ctx, bx, by, bubbleW, bubbleH, 22);
                }
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = '#080808';
                ctx.textBaseline = 'top';
                drawWrappedCanvasText(ctx, text, bx + 18, by + 14, bubbleW - 36, lineH, maxLines);
                ctx.restore();
            }

            function renderObliquePanel(v, panelImg, slot) {
                const canvas = document.createElement('canvas');
                canvas.width = Math.max(1, Math.round(slot.w * panelPixelScale));
                canvas.height = Math.max(1, Math.round(slot.h * panelPixelScale));
                const ctx = canvas.getContext('2d');
                const cw = canvas.width;
                const ch = canvas.height;
                const pad = Math.max(16, Math.round(Math.min(cw, ch) * 0.025));
                const frame = Math.max(28, Math.round(Math.min(cw, ch) * 0.042));
                const slant = Math.round(cw * Math.min(0.14, Math.abs(slot.slant || 0.07)));
                const positive = (slot.slant || 0) >= 0;

                const outer = positive
                    ? [{ x: pad + slant, y: pad }, { x: cw - pad, y: pad }, { x: cw - pad - slant, y: ch - pad }, { x: pad, y: ch - pad }]
                    : [{ x: pad, y: pad }, { x: cw - pad - slant, y: pad }, { x: cw - pad, y: ch - pad }, { x: pad + slant, y: ch - pad }];
                const inner = positive
                    ? [{ x: pad + slant + frame, y: pad + frame }, { x: cw - pad - frame, y: pad + frame }, { x: cw - pad - slant - frame, y: ch - pad - frame }, { x: pad + frame, y: ch - pad - frame }]
                    : [{ x: pad + frame, y: pad + frame }, { x: cw - pad - slant - frame, y: pad + frame }, { x: cw - pad - frame, y: ch - pad - frame }, { x: pad + slant + frame, y: ch - pad - frame }];

                ctx.fillStyle = '#030303';
                ctx.fillRect(0, 0, cw, ch);
                ctx.shadowColor = 'rgba(0, 0, 0, 0.55)';
                ctx.shadowBlur = Math.round(frame * 0.8);
                ctx.shadowOffsetY = Math.round(frame * 0.35);
                ctx.fillStyle = '#ffffff';
                drawCanvasPolygon(ctx, outer);
                ctx.fill();
                ctx.shadowColor = 'transparent';

                ctx.save();
                drawCanvasPolygon(ctx, inner);
                ctx.clip();
                ctx.fillStyle = '#060606';
                ctx.fillRect(0, 0, cw, ch);

                const narratorText = (v?.textoNarrador || '').trim();
                const topY = Math.min(inner[0].y, inner[1].y);
                const bottomY = Math.max(inner[2].y, inner[3].y);
                const narratorH = narratorText ? Math.min(ch * 0.18, Math.max(64, ch * 0.105)) : 0;
                const imageBottomY = bottomY - narratorH;
                const imageLeft = Math.min(
                    interpolateEdgeX(inner[0], inner[3], topY),
                    interpolateEdgeX(inner[0], inner[3], imageBottomY)
                );
                const imageRight = Math.max(
                    interpolateEdgeX(inner[1], inner[2], topY),
                    interpolateEdgeX(inner[1], inner[2], imageBottomY)
                );

                drawCanvasImageFit(ctx, panelImg, imageLeft, topY, imageRight - imageLeft, imageBottomY - topY, 'contain');
                drawCanvasBubble(ctx, v, { x: imageLeft, y: topY, w: imageRight - imageLeft, h: imageBottomY - topY });

                if (narratorText) {
                    ctx.fillStyle = 'rgba(4, 4, 4, 0.92)';
                    ctx.fillRect(0, imageBottomY, cw, bottomY - imageBottomY);
                    ctx.fillStyle = '#f8f8f8';
                    ctx.font = `${Math.max(18, cw * 0.025)}px Georgia, serif`;
                    ctx.textBaseline = 'top';
                    const textLeft = Math.min(inner[3].x, inner[2].x) + frame * 0.7;
                    const textWidth = Math.max(80, Math.abs(inner[2].x - inner[3].x) - frame * 1.4);
                    drawWrappedCanvasText(ctx, narratorText, textLeft, imageBottomY + frame * 0.45, textWidth, Math.max(22, cw * 0.032), 3);
                }
                ctx.restore();

                ctx.strokeStyle = '#f8f8f8';
                ctx.lineWidth = Math.max(5, frame * 0.16);
                drawCanvasPolygon(ctx, outer);
                ctx.stroke();

                return canvas.toDataURL('image/jpeg', 0.9);
            }

            const panelPages = buildPanelPages(vinetasToExport);
            panelPages.forEach((pagePanels, pageIndex) => {
                doc.addPage();
                fondoPaginaComic(pageIndex + 1);
                const slots = getObliqueSlots(pagePanels.length, pageIndex);
                const pageOffset = panelPages.slice(0, pageIndex).reduce((acc, page) => acc + page.length, 0);
                pagePanels.forEach((v, panelIndex) => {
                    const globalIdx = pageOffset + panelIndex;
                    const slot = slots[panelIndex];
                    const panelData = renderObliquePanel(v, panelCache[globalIdx], slot);
                    doc.addImage(panelData, 'JPEG', slot.x, slot.y, slot.w, slot.h);
                });
            });
        }

        // ============================================================
        // 3. CIERRE DISCURSIVO EN FORMATO EDITORIAL GNVIC
        // ============================================================
        const editorialMargin = 18;
        const editorialX = 27;
        const editorialW = W - editorialX - editorialMargin;
        const editorialBottom = H - 22;
        const editorialTextX = editorialX + 9;
        const editorialTextW = editorialW - 18;
        const pdfAuthorDisclaimer = 'Texto generado por un agente de inteligencia artificial sin intervención humana.';
        const editorialNote = `Nota editorial y adscripción:\n\nEste PDF presenta una pieza narrativa cocreada con la aplicación Generador de Narrativas Visuales, Interactivas y Críticas (GNVIC), basada en modelos de inteligencia artificial. Se trata de una plataforma de pedagogía crítica concebida en el marco del proyecto Artefactos Epistémicos, bajo la premisa de que la tecnología generativa proporciona entornos de apoyo para la creación y circulación situada del conocimiento. Su valor trasciende la eficiencia técnica e incluye dimensiones afectivas, estéticas, simbólicas y situadas aprovechables en el proceso de aprendizaje.\nDra. Teresa Márquez (Departamento de Ciencias Sociales y Políticas, Universidad Iberoamericana Ciudad de México).\nTaller "Creación de artefactos epistémicos con inteligencia artificial: entre la ficción y el subtexto". Centro de Cultura Digital (CCD), Estela de Luz. Julio de 2026.`;

        function fondoEditorial() {
            doc.setFillColor(5, 5, 5);
            doc.rect(0, 0, W, H, 'F');
            doc.setDrawColor(24, 24, 24);
            doc.setLineWidth(0.16);
            for (let x = -H; x < W; x += 18) {
                doc.line(x, 0, x + H * 0.75, H);
            }
            doc.setFillColor(224, 0, 52);
            doc.rect(0, 0, 5, H, 'F');
        }

        function startEditorialPage(sectionLabel = 'CIERRE EPISTÉMICO') {
            fondoEditorial();
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(7.5);
            doc.setTextColor(224, 0, 52);
            doc.text('GNVIC', editorialX, 16);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(170, 170, 170);
            doc.text(sectionLabel, editorialX + 19, 16);
            doc.text(fitPdfText(episodeTitle, 78), W - editorialMargin, 16, { align: 'right' });
            doc.setDrawColor(224, 0, 52);
            doc.setLineWidth(0.35);
            doc.line(editorialX, 20, W - editorialMargin, 20);
            return 32;
        }

        function ensureEditorialSpace(currentY, requiredHeight, sectionLabel) {
            if (currentY + requiredHeight <= editorialBottom) return currentY;
            doc.addPage();
            return startEditorialPage(sectionLabel);
        }

        function drawEditorialSectionHeader(index, title, y) {
            doc.setFillColor(224, 0, 52);
            doc.roundedRect(editorialX, y - 4.2, 11, 8, 1.5, 1.5, 'F');
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(7.5);
            doc.setTextColor(255, 255, 255);
            doc.text(String(index).padStart(2, '0'), editorialX + 5.5, y + 1.2, { align: 'center' });
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(13);
            doc.setTextColor(246, 246, 246);
            doc.text(title.toUpperCase(), editorialX + 16, y + 1.2);
            doc.setDrawColor(90, 90, 90);
            doc.setLineWidth(0.2);
            doc.line(editorialX + 16, y + 5.6, W - editorialMargin, y + 5.6);
            return y + 14;
        }

        function drawEditorialCard(y, lines, options = {}) {
            const lineH = options.lineH || 5;
            const padY = options.padY || 8;
            const h = Math.max(options.minH || 24, lines.length * lineH + padY * 2);
            doc.setFillColor(...(options.fill || [246, 244, 238]));
            doc.roundedRect(editorialX, y, editorialW, h, 2.5, 2.5, 'F');
            if (options.accent !== false) {
                doc.setFillColor(224, 0, 52);
                doc.rect(editorialX, y, 2.4, h, 'F');
            }
            doc.setFont(options.font || 'times', options.style || 'normal');
            doc.setFontSize(options.fontSize || 10.2);
            doc.setTextColor(...(options.textColor || [24, 24, 24]));
            doc.text(lines, editorialTextX, y + padY + 2, { lineHeightFactor: 1.18 });
            return y + h;
        }

        function drawEditorialNote(y) {
            const noteLines = doc.splitTextToSize(editorialNote, editorialTextW);
            y = ensureEditorialSpace(y, noteLines.length * 3.55 + 28, 'NOTA EDITORIAL');
            y = drawEditorialSectionHeader(4, 'Nota editorial', y);
            doc.setFont('times', 'italic');
            doc.setFontSize(7.4);
            doc.setTextColor(218, 218, 218);
            doc.text(noteLines, editorialX, y, { lineHeightFactor: 1.25 });
            return y + noteLines.length * 3.6;
        }

        function splitListItems(rawText) {
            return String(rawText || '')
                .split('\n')
                .map(item => item.replace(/^\s*[-*•]?\s*\d*[\.\)]?\s*/, '').trim())
                .filter(Boolean);
        }

        doc.addPage();
        let ty = startEditorialPage();

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(26);
        doc.setTextColor(246, 246, 246);
        doc.text('Develación', editorialX, ty);
        doc.setTextColor(224, 0, 52);
        doc.text('del subtexto', editorialX, ty + 10);
        ty += 21;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(176, 176, 176);
        const metaLines = doc.splitTextToSize(`${episodeTitle}  /  ${episodeAuthor}  /  ${project.genero || 'Novela grafica'}`, editorialW);
        doc.text(metaLines, editorialX, ty);
        ty += metaLines.length * 4.2 + 9;

        ty = drawEditorialSectionHeader(1, 'Lectura crítica', ty);
        const subtextoLines = doc.splitTextToSize(develacion.subtexto || 'Sin subtexto definido.', editorialTextW);
        ty = ensureEditorialSpace(ty, subtextoLines.length * 5.1 + 22, 'LECTURA CRÍTICA');
        ty = drawEditorialCard(ty, subtextoLines, { fontSize: 10.6, lineH: 5.2, minH: 42 });
        ty += 14;

        ty = ensureEditorialSpace(ty, 38, 'BIBLIOGRAFÍA');
        ty = drawEditorialSectionHeader(2, 'Bibliografía recomendada', ty);
        
        const rawBiblio = develacion.bibliografia || "Sin bibliografía.";
        const references = rawBiblio.split('\n').filter(r => r.trim() !== '');

        references.forEach((ref, index) => {
            // Eliminar numeraciones si venían listadas originalmente para adaptarlas a APA puro
            const cleanRef = ref.replace(/^\d+[\.\)]\s*/, "").trim();
            const refLines = doc.splitTextToSize(cleanRef, editorialTextW - 14);
            const cardH = Math.max(18, refLines.length * 4.1 + 10);
            ty = ensureEditorialSpace(ty, cardH + 5, 'BIBLIOGRAFÍA');
            doc.setFillColor(18, 18, 18);
            doc.roundedRect(editorialX, ty, editorialW, cardH, 2, 2, 'F');
            doc.setDrawColor(64, 64, 64);
            doc.setLineWidth(0.2);
            doc.roundedRect(editorialX, ty, editorialW, cardH, 2, 2, 'S');
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(7);
            doc.setTextColor(224, 0, 52);
            doc.text(String(index + 1).padStart(2, '0'), editorialTextX, ty + 7.4);
            doc.setFont('times', 'normal');
            doc.setFontSize(8.6);
            doc.setTextColor(226, 226, 226);
            doc.text(refLines, editorialTextX + 12, ty + 7.2, { lineHeightFactor: 1.18 });
            ty += cardH + 5;
        });
        ty += 9;

        ty = ensureEditorialSpace(ty, 45, 'PREGUNTAS');
        ty = drawEditorialSectionHeader(3, 'Preguntas de discusión', ty);

        const questions = splitListItems(develacion.preguntas || getFallbackQuestions(project));
        questions.forEach((question, index) => {
            const qLines = doc.splitTextToSize(question, editorialTextW - 17);
            const cardH = Math.max(22, qLines.length * 4.8 + 13);
            ty = ensureEditorialSpace(ty, cardH + 6, 'PREGUNTAS');
            doc.setFillColor(246, 244, 238);
            doc.roundedRect(editorialX, ty, editorialW, cardH, 2.5, 2.5, 'F');
            doc.setFillColor(224, 0, 52);
            doc.circle(editorialTextX + 3.5, ty + 8.2, 3.5, 'F');
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(6.5);
            doc.setTextColor(255, 255, 255);
            doc.text(String(index + 1), editorialTextX + 3.5, ty + 10.2, { align: 'center' });
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(9.3);
            doc.setTextColor(20, 20, 20);
            doc.text(qLines, editorialTextX + 13, ty + 8.2, { lineHeightFactor: 1.22 });
            ty += cardH + 6;
        });

        ty += 6;
        drawEditorialNote(ty);

        // ============================================================
        const fileName = buildPdfFileName(episodeTitle, episodeAuthor);
        const pdfBlob = doc.output('blob');
        const researchConsent = await requestPdfResearchConsent(pdfBlob, fileName);
        if (researchConsent) {
            await saveResearchPdfCopyWithConsent(pdfBlob, fileName, project);
        }

        
    } catch (err) {
        console.error("Error detallado en PDF:", err);
        showToast({
            title: 'No se pudo generar el PDF',
            message: `Detalle: ${err.message}. Revisa la consola para más información.`,
            type: 'error',
            duration: 9000
        });
    } finally {
        if(btn.innerText) btn.innerText = originalText;
    }
}

// Genera una textura de ruido estática vía canvas y la inyecta como
// variable CSS. Esto reemplaza el filtro SVG feTurbulence que causaba
// parpadeo al recalcularse en cada frame de composición.
(function initNoiseTexture() {
    const size = 150;
    const cvs = document.createElement('canvas');
    cvs.width = size; cvs.height = size;
    const ctx = cvs.getContext('2d');
    const imageData = ctx.createImageData(size, size);
    const d = imageData.data;
    for (let i = 0; i < d.length; i += 4) {
        const v = Math.random() * 255;
        d[i] = v; d[i+1] = v; d[i+2] = v;
        d[i+3] = 10; // opacity ~0.04
    }
    ctx.putImageData(imageData, 0, 0);
    document.documentElement.style.setProperty('--noise-bg', `url(${cvs.toDataURL('image/png')})`);
})();

window.addEventListener("DOMContentLoaded", initApp);

// === MAGNIFYING GLASS (Lupa) ===
(function() {
    const wrapper = document.querySelector('.hero-image-wrapper');
    const lupa = document.querySelector('.lupa-obj');
    const heroImg = document.querySelector('.hero-main-img');
    const zoomImg = document.querySelector('.lupa-zoom-img');
    if (!wrapper || !lupa || !heroImg || !zoomImg) return;
    const lupaSize = 120;
    const zoom = 2.5;

    // Cache dimensions to avoid repeated getBoundingClientRect calls during mousemove
    let imgRect = null;

    wrapper.addEventListener('mouseenter', function() {
        lupa.style.display = 'block';
        imgRect = heroImg.getBoundingClientRect();
        zoomImg.style.width = (imgRect.width * zoom) + 'px';
        zoomImg.style.height = (imgRect.height * zoom) + 'px';
    });
    wrapper.addEventListener('mouseleave', function() {
        lupa.style.display = 'none';
        imgRect = null;
    });
    wrapper.addEventListener('mousemove', function(e) {
        if (!imgRect) imgRect = heroImg.getBoundingClientRect();
        const wrapperRect = wrapper.getBoundingClientRect();
        const mouseX = e.clientX - wrapperRect.left;
        const mouseY = e.clientY - wrapperRect.top;
        lupa.style.left = (mouseX - lupaSize / 2) + 'px';
        lupa.style.top = (mouseY - lupaSize / 2) + 'px';
        const pctX = (e.clientX - imgRect.left) / imgRect.width;
        const pctY = (e.clientY - imgRect.top) / imgRect.height;
        const zoomWidth = imgRect.width * zoom;
        const zoomHeight = imgRect.height * zoom;
        zoomImg.style.left = -(pctX * zoomWidth - lupaSize / 2) + 'px';
        zoomImg.style.top = -(pctY * zoomHeight - lupaSize / 2) + 'px';
    });

    // Invalidate cached rect on resize
    window.addEventListener('resize', function() { imgRect = null; });
})();
