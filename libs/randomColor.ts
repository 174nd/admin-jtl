

export function randomColorOpacity(opacity: number) {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 100);
  const lightness = Math.floor(Math.random() * 100);
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
}