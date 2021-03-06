/**
 * Parse object to query string
 * @param {object} obj
 * @returns {string}
 */
const serializeToQueryString = obj => Object.keys(obj).reduce((previousValue, currentValue) => {
  if (obj[currentValue]) {
    const query = `${encodeURIComponent(currentValue)}=${encodeURIComponent(obj[currentValue])}`;

    return [...previousValue, query];
  }

  return previousValue;
}, []).join('&');

/**
 * Get URL to image with proper params (width and/or height and/or format)
 * @param {object} params
 * @returns {string}
 */
const getImageUrl = (params) => {
  const {
    type, slug, imageName, ...rest
  } = params;
  const queryString = serializeToQueryString(rest);

  let url = `//${process.env.API_HOST}/api/images/${params.type}/${params.slug}/${params.imageName || 'default'}`;

  url += rest ? `?${queryString}` : '';
  return url;
};

const getUrlWithoutProtocol = (url) => {
  const { hostname, pathname } = new URL(url);

  return `//${hostname}${pathname}`;
};

export { getImageUrl, serializeToQueryString, getUrlWithoutProtocol };
