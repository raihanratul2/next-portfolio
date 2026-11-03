import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const logos = new URL("public/logos/", root);
const favicons = new URL("public/favicons/", root);
await mkdir(favicons, { recursive: true });

function svgDocument(title, content, attributes = 'width="64" height="64" viewBox="0 0 64 64"') {
  return `<svg xmlns="http://www.w3.org/2000/svg" ${attributes} role="img" aria-labelledby="title">\n  <title id="title">${title}</title>\n${content}\n</svg>\n`;
}

function iconDocument(monogram, theme, adaptive = false) {
  const background = theme === "light" ? "#F8FAFC" : "#0B1120";
  const style = adaptive ? `<style>.favicon-background{fill:#F8FAFC}#rr-monogram{fill:#052742}@media(prefers-color-scheme:dark){.favicon-background{fill:#0B1120}#rr-monogram{fill:#FFFFFF}}</style>` : "";
  return svgDocument(`Raihan Ratul RR favicon — ${adaptive ? "adaptive" : theme}`, `${style}
  <rect class="favicon-background" width="64" height="64" rx="14" fill="${background}"/>
  <svg x="4" y="4" width="56" height="56" viewBox="200 240 835 835">${monogram}</svg>`);
}

// ICO containers can hold multiple PNG sizes for modern browsers and desktop shortcuts.
function toIco(images) {
  const directory = Buffer.alloc(6 + images.length * 16);
  directory.writeUInt16LE(1, 2);
  directory.writeUInt16LE(images.length, 4);
  let offset = directory.length;
  images.forEach(({ size, data }, index) => {
    const entry = 6 + index * 16;
    directory[entry] = size;
    directory[entry + 1] = size;
    directory.writeUInt16LE(1, entry + 4);
    directory.writeUInt16LE(32, entry + 6);
    directory.writeUInt32LE(data.length, entry + 8);
    directory.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });
  return Buffer.concat([directory, ...images.map(({ data }) => data)]);
}

for (const theme of ["light", "dark"]) {
  const source = await readFile(new URL(`raihanratul-logo-${theme}.svg`, logos), "utf8");
  const monogram = source.match(/<g\b[\s\S]*<\/g>/)?.[0];
  if (!monogram) throw new Error(`Missing monogram in ${theme} source logo`);

  // Keep the supplied source SVGs intact; crop only the derived mark's empty canvas.
  await writeFile(new URL(`raihanratul-mark-${theme}.svg`, logos), svgDocument(
    `Raihan Ratul RR logo — ${theme} theme`, monogram,
    'width="835" height="585" viewBox="200 365 835 585"',
  ));

  const icon = iconDocument(monogram, theme);
  await writeFile(new URL(`favicon-${theme}.svg`, favicons), icon);
  const images = await Promise.all([16, 32, 48, 180].map(async (size) => {
    const data = await sharp(Buffer.from(icon)).resize(size, size).png().toBuffer();
    const filename = size === 180 ? `apple-touch-icon-${theme}.png` : `favicon-${size}x${size}-${theme}.png`;
    await writeFile(new URL(filename, favicons), data);
    return { size, data };
  }));
  const ico = toIco(images.filter(({ size }) => size <= 48));
  await writeFile(new URL(`favicon-${theme}.ico`, favicons), ico);
  if (theme === "dark") await writeFile(new URL("app/favicon.ico", root), ico);
  if (theme === "light") await writeFile(new URL("favicon.svg", favicons), iconDocument(monogram, theme, true));
}

console.log(`Generated theme logos and SVG, PNG, ICO, and Apple touch favicons in ${fileURLToPath(favicons)}`);
