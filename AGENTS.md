# GNVIC — Generador de Narrativas Visuales Interactivas y Críticas

> Nota de variante: esta carpeta corresponde al piloto del taller. Debe cargar solo NARZU, limitar cada episodio a 6 viñetas y limitar cada viñeta a 3 iteraciones. No reactivar los demás artefactos precargados en esta copia.

## Meta

- **Proyecto**: GNVIC
- **Descripción**: Plataforma metodológica para la construcción de narrativas secuenciales breves (novela gráfica, cómic, fotonovela) que funcionan como vehículos de pensamiento crítico. La imagen sirve para pensar y materializar argumentos.
- **Autora**: Teresa Márquez
- **Universidad**: DCSP Ibero
- **Versión actual**: 2.1.0-PILOTO-TALLER

---

## Stack Tecnológico

- **Frontend**: Vanilla HTML/CSS/JS (sin framework)
- **Persistencia**: LocalStorage (`gnvic_piloto_taller_data_v1`)
- **IA**: OpenRouter API (generación de imágenes y texto)
- **Exportación**: jsPDF + html2canvas
- **CDNs con fallback**: cdnjs → unpkg

---

## Estructura de Archivos

```
aplicacion_demo/
├── index.html                           # Vista principal (SPA)
├── app.js                              # Lógica principal (~2600 líneas)
├── style.css                           # Estilos globales
├── imagesB64.js                        # Mapa de compatibilidad hacia assets
├── AGENTS.md                           # Este archivo
├── instrucciones_disenador.md          # Documentación para diseñador
├── assets/                             # Personajes, escenas y portada
│   ├── inicio.jpg                      # Imagen hero de inicio
│   ├── novela_grafica_xochi.png
│   ├── novela_grafica_pete.png
│   ├── novela_grafica_prof_murcia.png
│   ├── novela_grafica_prof_chat2.png
│   ├── novela_grafica_prof_maximiliano.png
│   ├── novela_grafica_dani.png
│   ├── novela_grafica_paz.png
│   ├── novela_grafica_don_tico2.png
│   ├── la_escuela.png
│   ├── portada_dilema_del_color.png
│   └── manga/                          # Recursos de manga
│       ├── micodigo_portada.png
│       └── akura*.png
│
└── El_Dilema_del_Color_Comprende_y_Elige.md  # Documentación del contenido
```

---

## Funcionalidades Principales

### 1. Gestión de Artefactos
- Crear nuevos proyectos (novela gráfica, cómic, manga)
- Editar metadata del proyecto (título, autor, género, estilo, trama, subtexto)
- Eliminar proyectos (bloqueado en la variante piloto)
- Persistencia automática en localStorage

### 2. Gestión de Personajes
- Agregar personajes con nombre, rol, descripción
- Subir imágenes de personajes (se redimensionan a 200px para no saturar localStorage)
- Eliminar personajes

### 3. Gestión de Episodios
- Crear episodios/chapters/capítulos dentro de un proyecto
- Definir trama del episodio
- Seleccionar personajes participantes
- Extensión fija de 6 viñetas por episodio

### 4. Mesa de Luz (Editor de Viñetas)
- **Editor visual de viñetas** con:
  - Proporción del panel: cuadrada (1:1), panorámica (16:9), vertical (9:16)
  - Estilo del globo: automático, grito, manga, rectángulo, píldora
  - Posición del globo: arriba, centro, abajo, sin globo
  - Campo de diálogo
  - Campo de narrador
- **Generación de imágenes por IA** (OpenRouter)
- **Navegación entre variantes** (hasta 3 iteraciones por viñeta)
- **Modo teatro**: vista completa de las viñetas
- **Exportar a PDF**

### 5. Cierre Discursivo
- **Generar Portada**: Crear imagen de portada con IA
- **Develar Artefacto Epistémico**: Mostrar contenido teórico con efecto typewriter
  - Subtexto teórico
  - Bibliografía
  - Preguntas de discusión
- **Exportar a RIS**: Descargar bibliografía en formato RIS

### 6. Configuración API
- Ingresar API Key de OpenRouter (BYOK)
- Seleccionar modelo de texto (con búsqueda, sugerencias, precios)
- Seleccionar modelo de imágenes (con búsqueda, sugerencias, precios)
- Guardar configuración

---

## Datos de Ejemplo Incluidos (Preload)

La variante piloto incluye 1 proyecto de ejemplo precargado:

### 1. NARZU_PRELOAD
- **Título**: Narzu. Comprende, entonces elegir.
- **Autor**: Teresa Márquez
- **Género**: Novela gráfica
- **Subtexto**: Filosofía y sociología de la tecnología
- **Trama**: Ambientada en la Preparatoria "Con Amor" (teatro art déco reconvertido en escuela). Los estudiantes enfrentan la disyuntiva tecnológica/humanística a través de un formulario de orientación vocacional (Azul: tecnológico, Naranja: humanista).
- **Personajes**: Xochi, Pete, Murcia, Maximiliano, Profe Chat, Dani, Paz, Don Tico (8 personajes)
- **Episodios**: 1 ("El dilema del color" - 6 viñetas)

Los otros artefactos de demostración de la versión completa no se cargan en esta copia.

---

## Rutas de Navegación

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
    │       ├── [Click episodio] → MESA DE LUZ → CIERRE DISCURSIVO
    │       │
    │       └── [Editar Datos] → MODAL EDITAR
    │
    └── [Config API] → CONFIGURACIÓN API
```

---

## Configuración Requerida

### Para generación de imágenes y texto:
1. Obtener API key en [openrouter.ai](https://openrouter.ai/)
2. Ir a "Configuración API" en la app
3. Ingresar la API key
4. Seleccionar modelo de texto (ej:/google/gemini-2.0-flash-exp)
5. Seleccionar modelo de imágenes (ej:openai/dall-e-3)
6. Guardar configuración

---

## Notas para Desarrolladores

### Arquitectura
- **SPA puro**: Sin framework, transiciones CSS entre vistas
- **Sin backend**: Todo funciona en el navegador del usuario
- **Persistencia**: localStorage con clave `gnvic_piloto_taller_data_v1`
- **Throttled save**: Guardado diferido (300ms) para evitar escrituras excesivas

### Modo offline
- La app funciona sin conexión excepto para generación de IA
- Las imágenes generadas por el usuario se cachean en localStorage como base64

### API Integration
- OpenRouter con fallback multi-intento para generación de imágenes
- Sistema de retry automático con 3 intentos por viñeta

### CDNs
- jsPDF: cdnjs → unpkg
- html2canvas: cdnjs → unpkg

---

## Pendientes / Mejoras Futuras

- [ ] Implementar更多的 temas visuales
- [ ] Añadir export a más formatos (EPUB, imágenes sueltas)
- [ ] Mejora en responsive para móvil
- [ ] Sistema de colaboración multiusuario
- [ ] Backup/export de proyectos completos
- [ ] Importar proyectos desde archivo
- [ ] Mejora en editor de globos (drag & drop)
- [ ] Historial de versiones por episodio

---

## Contacto

- **Autora**: Teresa Márquez
- **Proyecto**: GNVIC — Generador de Narrativas Visuales Interactivas y Críticas
- **Institución**: DCSP Ibero
- **Marco**: Artefactos Epistémicos

---

*Este documento sirve como memoria y contexto para cualquier agente que trabaje en el proyecto.*
