/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export const getRandomIndex = (max, min = 0) =>
  Math.floor(Math.random() * (max - min) + min);

/**
 * Get the hero text
 */
const heroText = [
  { key: 1, item: 'constantly forging', emoji: '⚡' },
  { key: 2, item: "using Occam's Razor", emoji: '🪒' },
  { key: 3, item: 'democratizing the internet', emoji: '💻✊🏿' },
  { key: 5, item: 'resilient by definition', emoji: '🐜' },
  { key: 6, item: 'always learning', emoji: '📕' },
  { key: 7, item: 'fighting for #DalitLivesMatter', emoji: '✊🏿' },
  { key: 9, item: 'a writer', emoji: '🖋️' },
  { key: 4, item: 'a coffee snob', emoji: '☕' },
  { key: 10, item: 'a social worker', emoji: '🥰' },
  { key: 11, item: 'a self-proclaimed cook', emoji: '👨‍🍳' },
];

export const getHeroText = () => heroText;
