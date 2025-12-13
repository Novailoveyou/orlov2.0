const createBanner = () => {
  /**
   * @description Returns a random integer between min (inclusive) and max (inclusive).
   * @remarks The value is no lower than min (or the next integer greater than min
   * @remarks if min isn't an integer) and no greater than max (or the next integer
   * @remarks lower than max if max isn't an integer).
   * @remarks Using Math.round() will give you a non-uniform distribution!
   */
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const DEFAULT_BANNER_URL =
    'https://content.saas-support.com/uploaded/generators/135849/logo.png.jpg'

  const banners = [
    DEFAULT_BANNER_URL,
    'https://start-fit.ru/wp-content/uploads/2025/12/1-tiny.png',
    'https://start-fit.ru/wp-content/uploads/2025/12/2-tiny.png',
    'https://start-fit.ru/wp-content/uploads/2025/12/3-tiny.png',
  ] as const

  const banner =
    banners[getRandomInt(0, banners.length - 1)] || DEFAULT_BANNER_URL

  document.documentElement.style.setProperty('--banner-url', `url(${banner})`)
}

createBanner()
