# Instrucciones para Diseñador Web/UI — GNVIC

## Navegación Principal

```
INICIO
    │
    ▼
ARTEFACTOS (Dashboard)
    │
    ├── [Click proyecto] → PROYECTO
    │       │
    │       ├── [Nuevo Episodio] → DEFINIR EPISODIO → MESA DE LUZ
    │       │
    │       ├── [Click episodio] → MESA DE LUZ
    │       │
    │       └── [Editar Datos] → MODAL
    │
    └── [Config API]
```

---

## Pantallas Principales

### 1. Pantalla de Inicio
- Imagen hero central
- Lupa interactiva con efecto zoom + cita filosófica
- Información de marca (GNVIC, Teresa Márquez, DCSP Ibero)

### 2. Pantalla de Artefactos
- Header con logo universidad
- Título "ARTEFACTOS" en rojo/negro
- Sin botón "Nuevo Artefacto" en la variante piloto
- Grid de tarjetas de proyectos
- Botón configuración API (ícono engranaje)
- Botón volver a Inicio

### 3. Pantalla de Proyecto
- Datos del artefacto (título, género, trama)
- Lista de episodios/chapters/capítulos
- Gestión de personajes (agregar/editar/eliminar/subir imagen)
- Botón según género:
  - Novela gráfica → "Nuevo Capítulo"
  - Cómic → "Nuevo Episodio"
  - Manga → "Nuevo Número"
- Botón "Editar Datos"
- Botón volver a Artefactos

### 4. Pantalla Definir Episodio
- Ficha de contexto del artefacto padre (título, género, subtexto, trama)
- Formulario:
  - Nombre del episodio
  - Autor/Guionista
  - Trama del episodio
- Galería de selección de personajes (toggle)
- Selector de viñetas: 4 / 6 / 8
- Botón "Ir a la Mesa de Luz"

### 5. Pantalla Mesa de Luz (Editor de Viñetas)
- Header con título del episodio
- Botones: Volver, Guardar cambios, Modo teatro, Config API, Exportar PDF
- **Grid de viñetas editables**, cada viñeta tiene:
  - Imagen
  - Proporción del panel: cuadrada (1:1) / panorámica (16:9) / vertical (9:16)
  - Estilo de globo: automático / grito / manga / rectángulo / píldora
  - Posición del globo: arriba / centro / abajo / sin globo
  - Campo de diálogo
  - Campo de narrador
  - Botón "Generar Imagen API"
  - Controles de navegación entre variantes (← →)
  - Botón iterar imagen (✨)
- **Cierre epistémico** (sección inferior con línea divisoria):
  - Botón "Generar Portada"
  - Botón "Revelar subtexto" (antes "Develar Artefacto Epistémico")
  - Botón "Exportar a RIS"

### 6. Pantalla Configuración API
- Estilo "tarjeta blanca limpia"
- API Key de OpenRouter con toggle de visibilidad
- Selector de modelo de texto (búsqueda, sugerencias, precios)
- Selector de modelo de imágenes (búsqueda, sugerencias, precios)
- Botón "Actualizar catálogo"
- Botón Cancelar / Guardar

---

## Elementos de UI Existentes

### Sidebar (minimalista)
```
┌────────────────┐
│   GNVIC        │
│                │
│ ◉ Inicio       │
│ ◉ Artefactos   │
│ ◉ Sobre GNVIC  │
│ ○ Config API  │ (aparece tras primera interacción)
└────────────────┘
```

### Breadcrumb
Aparece debajo del header en:
- Vista Proyecto
- Vista Definir Episodio
- Vista Mesa de Luz

Formato: `Inicio / Artefactos / [Nombre Proyecto] / [Nombre Episodio]`

### Modales
| Modal | Función |
|-------|---------|
| Nuevo Artefacto | Modal reutilizado para editar proyecto. La creación está bloqueada en la variante piloto |
| Editar Datos | Editar metadata proyecto |
| Sobre GNVIC | Información institucional |
| Imagen Ampliada | Zoom de imágenes |

---

## Estilo Visual Actual

### Colores
| Uso | Color |
|-----|-------|
| Primario (accent) | `#E00034` (rojo) |
| Fondo | `#050505` (negro) |
| Texto principal | `#fcfcfc` (blanco) |
| Texto secundario | `#a0a0a0` (gris) |
| Borde | `#333333` |

### Tipografía
- Font principal: **Inter**
- Títulos: 900 weight, uppercase, letter-spacing -1.5px
- Cuerpo: 400 weight, line-height 1.5

### Botones
| Tipo | Estilo |
|------|--------|
| Primario | Fondo rojo `#E00034`, texto blanco |
| Secundario | Borde rgba(255,255,255,0.1), fondo transparente |

---

## Notas Técnicas

- **SPA puro**: Sin reload entre vistas
- **Persistencia**: localStorage (`gnvic_piloto_taller_data_v1`)
- **Imágenes personajes**: Redimensionadas a 200px
- **CDNs**: cdnjs con fallback a unpkg
- **Generación IA**: Requiere OpenRouter API key

---

## Cambios Recientes (2026-03-27)

| Elemento | Cambio |
|----------|--------|
| Breadcrumb | Agregado |
| "Cierre Discursivo" | Renombrado a "Cierre epistémico" |
| "Develar Artefacto Epistémico" | Renombrado a "Revelar subtexto" |
| Velocidad typewriter | 25ms → 22ms (+15%) |
| Barra navegación viñetas | Eliminada |

---

## Archivos del Proyecto

```
aplicacion_demo/
├── index.html          # Estructura HTML (SPA)
├── app.js              # Lógica JavaScript
├── style.css           # Estilos CSS
├── imagesB64.js        # Mapa de compatibilidad hacia assets
├── assets/             # Imágenes del proyecto
├── instrucciones_disenador.md  # Documentación para diseñador
├── AGENTS.md           # Memoria del proyecto
```
