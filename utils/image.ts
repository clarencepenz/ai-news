const PREVIEW_IMAGE = (fileName: string, path?: string, ext?: string) => `/assets/${path ?? "images"}/${fileName}.${ext ?? "webp"}`;

export default PREVIEW_IMAGE;
