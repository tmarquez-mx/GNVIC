# Sistema de diseño de GNVIC

Este documento inventaria los componentes que ya existen en la interfaz de GNVIC. La intención de la Fase A es consolidar el sistema visual sin cambiar la identidad actual: fondo negro, texto blanco y gris, acento rojo `#E00034`, tipografía Inter y estructura estática compatible con GitHub Pages.

## Tokens base

- Colores: `--color-bg`, `--color-bg-soft`, `--color-bg-panel`, `--color-text`, `--color-text-muted`, `--color-accent`, `--color-border`, `--color-danger`, `--color-terminal`.
- Tipografía: `--font-family-base`, `--font-family-mono`, `--font-family-serif`, escala `--font-size-*`, pesos `--font-weight-*` y alturas de línea `--line-height-*`.
- Espaciado: escala `--space-0` a `--space-17`.
- Radios: `--radius-none`, `--radius-md`, `--radius-lg`, `--radius-xl`, `--radius-pill`, `--radius-circle`.
- Sombras: `--shadow-sidebar`, `--shadow-card`, `--shadow-panel`, `--shadow-modal`, `--shadow-accent`, `--shadow-terminal`.
- Movimiento: `--duration-fast`, `--duration-base`, `--duration-slow`, `--duration-view`, `--ease-standard`, `--ease-bounce`.

## Componentes

### Botón primario

Clase base: `.btn-primary`.

Variantes:
- Primario general.
- Acción principal con acento rojo cuando se define en contexto.
- Acción de descarga o exportación.

Estados:
- `hover`: fondo rojo institucional y texto blanco.
- `focus-visible`: contorno rojo.
- `active`: mantiene contraste alto.
- `disabled`: menor opacidad y cursor no disponible.

### Botón secundario

Clase base: `.btn-secondary`.

Variantes:
- Botón de navegación.
- Botón de acción secundaria.
- Botón compacto de variantes en la mesa de luz.
- Botón destructivo compacto `.btn-danger-compact`.

Estados:
- `hover`: superficie blanca translúcida y borde más visible.
- `focus-visible`: contorno rojo.
- `disabled`: opacidad reducida.

### Botón de ícono

Clase base: `.btn-icon-circle`.

Variantes:
- Configuración de IA.
- Acciones circulares en controles de iteración.

Estados:
- `hover`: superficie translúcida.
- `focus-visible`: contorno rojo.
- `disabled`: opacidad reducida.

### Tarjeta de artefacto

Clases: `.artifact-card`, `.artifact-card__title`, `.artifact-card__meta`, `.artifact-card__summary`, `.artifact-card__actions`.

Variantes:
- Artefacto precargado.
- Artefacto creado por usuario.

Estados:
- `hover`: hereda el estado de `.visual-card`.
- Acción destructiva: `.btn-danger-compact`.

### Tarjeta de personaje

Clases: `.char-card`, `.char-select-card`, `.char-photo-area`, `.char-card__delete`.

Variantes:
- Tarjeta editable de personaje.
- Tarjeta seleccionable para episodio.
- Avatar con imagen.
- Avatar vacío.

Estados:
- `hover`: superficie y borde más visibles.
- `selected`: borde rojo y marca visual.
- `focus-visible`: contorno rojo cuando el control es enfocable.

### Globo de diálogo

Clase base: `.bubble-base`.

Variantes:
- `.bubble-pill`: globo estándar.
- `.bubble-shout`: grito o impacto.
- `.bubble-oval`: nube o manga.
- `.bubble-rect`: rectángulo.

Estados:
- Visible con diálogo.
- Oculto cuando la posición es "Sin globo".
- Posición dinámica: arriba, centro o abajo.

### Chip

Clases: `.manifesto-chip`, `.visual-chip`, `.vineta-chip`.

Variantes:
- Género narrativo.
- Perspectiva de subtexto.
- Cantidad de viñetas.

Estados:
- `hover`: borde y texto más visibles.
- `selected`: superficie clara o borde rojo según contexto.
- `focus-visible`: contorno rojo.

### Panel de mando

Clases: `.panel-mando`, `.panel-mando__title`, `.panel-mando__textarea`, `.variant-controls`.

Variantes:
- Controles de proporción.
- Controles de globo.
- Campo de diálogo.
- Campo de narrador.
- Controles de variantes.

Estados:
- `disabled`: controles de navegación cuando no hay variante anterior o posterior.
- `selected`: variante activa indicada por contador.

### Modal

Clases: `.modal`, `.modal-content`, `.modal-content.manifesto`.

Variantes:
- Nuevo artefacto.
- Configuración heredada.
- Sobre GNVIC.
- Imagen ampliada.

Estados:
- Cerrado.
- `.active`: visible.
- Scroll vertical cuando el contenido excede la altura.

### Terminal del cierre

Clases: `.typewriter-terminal`, `.typewriter-text`, `.typewriter-cursor`.

Variantes:
- Volcado epistémico local.
- Volcado generado por IA.

Estados:
- Escribiendo.
- Finalizado.
- Error con fallback local.

### Insignia

Clases relacionadas: `.engine-card-badge`, `.config-model-card__pill`.

Variantes:
- Costo.
- Contexto.
- Estado del modelo.

Estados:
- Normal.
- Seleccionada dentro de tarjeta de modelo.

### Breadcrumb

Clases: `.breadcrumb-nav`, `.breadcrumb-item`, `.breadcrumb-sep`.

Variantes:
- Inicio.
- Artefacto.
- Episodio.

Estados:
- Oculto en inicio y artefactos.
- Visible en proyecto, definición de episodio y mesa de luz.
- `hover`: rojo institucional en elementos navegables.

### Barra lateral

Clases: `.sidebar-nav`, `.timeline-menu`, `.timeline-item`, `.timeline-dot`, `.timeline-label`.

Variantes:
- Inicio.
- Artefactos.
- Sobre GNVIC.
- Configuración de IA oculta en menú lateral.

Estados:
- `active`: punto más grande con anillo rojo.
- `hover`: etiqueta visible y punto ampliado.
- Responsive: ancho reducido en pantallas pequeñas.

### Toast

Clases: `.toast-region`, `.toast`, `.toast--success`, `.toast--error`, `.toast--info`.

Variantes:
- Éxito.
- Error.
- Información.

Estados:
- Visible con anuncio por `aria-live`.
- Descartable con botón de cierre.
- Cierre automático por duración.

### Modal de confirmación

Clases: `.modal-confirm`, `.modal-confirm__panel`, `.modal-confirm__actions`.

Variantes:
- Confirmación destructiva.
- Confirmación neutral.

Estados:
- Cerrado.
- `.active`: visible.
- Cancelación por botón, fondo o tecla Escape.

### Indicador de guardado

Clases: `.save-indicator`, `.save-indicator--saving`, `.save-indicator--saved`, `.save-indicator--error`.

Variantes:
- Guardando.
- Guardado.
- Error al guardar.

Estados:
- Visible durante la operación.
- Se oculta automáticamente después de guardar.
