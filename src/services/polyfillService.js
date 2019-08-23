/**
 * PolyfillService
 * Manages checking and fetching required polyfills
 */

// Privates

/**
 * Polyfill for intersection observer
 */
const loadIntersectionObserverPolyfill = () => new Promise((resolve, reject) => {
  import(/* webpackChunkName: 'intersectionObserver' */ '../polyfills/intersectionObserverPolyfill')
    .then((module) => {
      module.intersectionObserverPolyfill();
      resolve();
    }).catch((error) => {
      reject(error);
    });
});

/**
 * Polyfill for resize observer
 */
const loadResizeObserverPolyfill = () => new Promise((resolve, reject) => {
  import(/* webpackChunkName: 'resizeObserver' */ 'resize-observer-polyfill')
    .then((module) => {
      window.ResizeObserver = module.default;
      resolve();
    }).catch((error) => {
      reject(error);
    });
});

// Public

/**
 * Fetches polyfills that are needed
 */
const fetchRequiredPolyfills = () => {
  const polyfills = [];

  if (!('IntersectionObserver' in window)) {
    polyfills.push(loadIntersectionObserverPolyfill());
  }

  if (!('ResizeObserver' in window)) {
    polyfills.push(loadResizeObserverPolyfill());
  }

  return Promise.all(polyfills);
};

export default fetchRequiredPolyfills;
