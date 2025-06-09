
# AVideo Mobile Connect

Una aplicación móvil Android para conectar con tu servidor AVideo local.

## Características

- 🎥 Visualización de videos desde tu servidor AVideo
- 🔍 Búsqueda de contenido
- 📱 Interfaz optimizada para móvil
- 🏠 Configuración de servidor local
- 📺 Diseño similar a la interfaz web de AVideo
- 🔄 APIs nativas de AVideo

## Configuración del Proyecto

Este proyecto está configurado con:
- **React + TypeScript**: Para la interfaz de usuario
- **Capacitor**: Para la funcionalidad nativa de Android
- **Tailwind CSS**: Para el diseño
- **shadcn/ui**: Para componentes de UI

## Instalación y Desarrollo

### Requisitos
- Node.js 18+
- Java JDK 17
- Android Studio (para desarrollo local)

### Instalación
```bash
# Clonar el repositorio
git clone <tu-repo-url>
cd avideo-mobile-connect

# Instalar dependencias
npm install

# Desarrollo web
npm run dev

# Preparar para Android
npm run build
npx cap add android
npx cap sync android

# Abrir en Android Studio
npx cap open android
```

## Compilación Automática

Este proyecto incluye GitHub Actions para compilación automática:

1. **Push a main**: Genera automáticamente una APK
2. **Artifacts**: La APK se guarda como artifact en GitHub
3. **Compatibilidad**: Configurado para JDK 17 (no requiere JDK 21)

### Descargar APK

1. Ve a la pestaña "Actions" en GitHub
2. Selecciona el workflow más reciente
3. Descarga el artifact "android-apk"

## Configuración del Servidor

En la primera ejecución, la app te pedirá:
- **URL del servidor**: Tu URL de AVideo (ej: `http://192.168.43.100/AVideo-master/`)
- Esta configuración se guarda localmente en el dispositivo

## Funcionalidades Implementadas

- ✅ Configuración inicial del servidor
- ✅ Interfaz de navegación por pestañas
- ✅ Pantalla de inicio con grid de videos
- ✅ Página de búsqueda
- ✅ Página de descargas
- ✅ Hook personalizado para APIs de AVideo
- ✅ Compilación automática con GitHub Actions

## APIs de AVideo Integradas

La app se conecta con las siguientes APIs de AVideo:
- `GET /plugin/API/get.json.php?APIName=video` - Lista de videos
- `GET /plugin/API/get.json.php?APIName=video&searchPhrase=` - Búsqueda
- `POST /plugin/API/get.json.php?APIName=login` - Autenticación

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ConfigPage.tsx   # Configuración inicial
│   ├── VideoGrid.tsx    # Grid de videos
│   ├── SearchPage.tsx   # Búsqueda
│   └── DownloadsPage.tsx # Descargas
├── hooks/              # Hooks personalizados
│   └── useAVideoAPI.ts # Hook para APIs de AVideo
└── pages/              # Páginas principales
    └── Index.tsx       # Página principal
```

## Personalización

Para personalizar la app para tu servidor:

1. Modifica `src/hooks/useAVideoAPI.ts` para ajustar las llamadas a la API
2. Actualiza `capacitor.config.ts` con tu configuración
3. Cambia los colores en `src/index.css` si deseas un tema diferente

## Soporte

Para problemas relacionados con:
- **AVideo**: Consulta la [documentación oficial](https://github.com/WWBN/AVideo)
- **Capacitor**: Consulta la [documentación de Capacitor](https://capacitorjs.com/)
- **Esta app**: Abre un issue en este repositorio
