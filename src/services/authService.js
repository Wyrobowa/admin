/**
 * authService - Service for getting auth data
 */

// PRIVATE

let bearerToken = '';

// PUBLIC

/**
 * getBearerToken - get bearer token from localStorage
 * @return {string}
 */
const getBearerToken = () => {
  bearerToken = bearerToken || localStorage.getItem('bearerToken');

  return bearerToken;
};

export { getBearerToken };
