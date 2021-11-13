/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export const getRandomIndex = (max, min = 0) =>
  Math.floor(Math.random() * (max - min) + min)

/**
 * Get the hero text
 */
const heroText = [
  { item: 'constantly rebranding', emoji: '🚀' },
  { item: 'probably having a coffee', emoji: '☕' },
  { item: 'trying to innovate', emoji: '🧪' },
  { item: 'resilient by definition', emoji: '🐜' },
  { item: 'always growing', emoji: '🌱' },
  { item: 'coding for fun', emoji: '🥴' },
  { item: 'coding for peace', emoji: '😌' },
  { item: 'coding for personal growth', emoji: '🤓' },
  { item: 'a writer', emoji: '🖋️' },
  { item: 'a social worker', emoji: '🥰' },
  { item: 'a self-proclaimed cook', emoji: '👨‍🍳' },
]

export const getHeroText = () => heroText
