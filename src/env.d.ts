/// <reference types="astro/client" />

declare module 'astro:content' {
  interface RenderedContent {
    html: string;
    metadata: {
      image?: any;
      headings: { depth: number; slug: string; text: string }[];
      localImageReferences: string[];
    };
  }

  export type CollectionEntry<T extends keyof any> = any;
}

declare module '@/config/menu.json' {
  const value: any;
  export default value;
}

declare module '@/config/social.json' {
  const value: any;
  export default value;
}