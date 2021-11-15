/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export const getRandomIndex = (max, min = 0) =>
  Math.floor(Math.random() * (max - min) + min)

/**
 * Get the hero text
 */
const heroText = [
  { key: 1, item: 'constantly rebranding', emoji: '🚀' },
  { key: 2, item: 'probably having a coffee', emoji: '☕' },
  { key: 3, item: 'trying to innovate', emoji: '🧪' },
  { key: 4, item: 'resilient by definition', emoji: '🐜' },
  { key: 5, item: 'always growing', emoji: '🌱' },
  { key: 6, item: 'coding for fun', emoji: '🥴' },
  { key: 7, item: 'coding for peace', emoji: '😌' },
  { key: 8, item: 'coding for personal growth', emoji: '🤓' },
  { key: 9, item: 'a writer', emoji: '🖋️' },
  { key: 10, item: 'a social worker', emoji: '🥰' },
  { key: 11, item: 'a self-proclaimed cook', emoji: '👨‍🍳' },
]

export const getHeroText = () => heroText
