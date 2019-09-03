/**
 * requestService - Service for transferring data between client and server
 */
import { getBearerToken } from '../authService';
import getFeedType from './getFeedType';

// PRIVATE

const accessToken = getBearerToken();
const headers = {
  Authorization: `Bearer ${accessToken}`,
  'Content-Type': 'application/json',
};

const domainList = {
  'intrlab.usermd.net': '//intrlab.usermd.net:300',
  localhost: 'http://localhost:3000',
};

const feedDomain = domainList[window.location.hostname] || '//production.domain.com';

/**
 * Build url based on passed arguments
 * @param {string} feedType
 * @param {string=} additionalQuery
 * @return {string}
 */
const buildFeedUrl = (feedType, additionalQuery = '') => {
  const { target } = getFeedType(feedType);

  return `${feedDomain}/api${target}${additionalQuery}`;
};

/**
 * Use HTTP pipeline such as requests and responses for transferring data between client and server
 * @async
 * @param {string} feedUrl
 * @param {string} requestType
 * @param {object=} data
 * @return {Promise<object>}
 */
const requester = async (feedUrl, requestType, data) => {
  const options = {
    method: requestType,
    headers,
    ...data && { body: JSON.stringify(data) },
  };

  try {
    const response = await fetch(feedUrl, options);

    if (!response.ok || response.errorCode) {
      throw new Error(`requestService requester failed, HTTP status ${response.status}, feedUrl: ${feedUrl}`);
    }

    return response.status === 204 ? response.status : response.json();
  } catch (error) {
    throw new Error(`requestService - requester failed, message: ${error}, feedUrl: ${feedUrl}`);
  }
};

// PUBLIC

/**
 * Fetch data from feed based on passed feedType in argument
 * @async
 * @param {string} feedType
 * @param {string=} additionalQuery
 * @return {Promise<object>}
 */
export const getData = async (feedType, additionalQuery = '') => {
  const feedUrl = buildFeedUrl(feedType, additionalQuery);

  return requester(feedUrl, 'GET');
};

/**
 * Send data to feeds based on passed feedType in argument
 * @async
 * @param {string} feedType
 * @param {object} data
 * @param {string=} additionalQuery
 * @return {Promise<object>}
 */
export const sendData = async (feedType, data, additionalQuery = '') => {
  const feedUrl = buildFeedUrl(feedType, additionalQuery);

  return requester(feedUrl, 'POST', data);
};

/**
 * Send data to feeds for update, based on passed feedType in argument
 * @async
 * @param {string} feedType
 * @param {object} data
 * @param {string=} additionalQuery
 * @return {Promise<object>}
 */
export const updateData = async (feedType, data, additionalQuery = '') => {
  const feedUrl = buildFeedUrl(feedType, additionalQuery);

  return requester(feedUrl, 'PUT', data);
};
