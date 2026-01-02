performance.mark('app-init')

export function onRouterTransitionStart(
  url: string,
  navigationType: 'push' | 'replace' | 'traverse',
) {
  console.log(`Navigation started: ${navigationType} to ${url}`)
  performance.mark(`nav-start-${Date.now()}`)
}
