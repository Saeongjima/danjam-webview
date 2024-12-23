/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PRIMARY_COLOR: string;
    readonly VITE_SECONDARY_COLOR: string;
    readonly VITE_BACKGROUND_COLOR: string;
    readonly VITE_TEXT_COLOR: string;
    readonly VITE_FONT_FAMILY_PRIMARY: string;
    readonly VITE_API_BASE_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }