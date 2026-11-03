const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export type BrandTheme = "light" | "dark";

export const brandAssets = {
  adaptiveFavicon: `${basePath}/favicons/favicon.svg`,
  logo: (theme: BrandTheme) => `${basePath}/logos/raihanratul-mark-${theme}.svg`,
  favicon: (theme: BrandTheme) => ({
    svg: `${basePath}/favicons/favicon-${theme}.svg`,
    ico: `${basePath}/favicons/favicon-${theme}.ico`,
    png: `${basePath}/favicons/favicon-32x32-${theme}.png`,
    apple: `${basePath}/favicons/apple-touch-icon-${theme}.png`,
  }),
};
