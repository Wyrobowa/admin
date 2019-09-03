/**
 * Returns object width url fragments based on passed argument
 * @param {string} feedType
 * @return {object}
 */
const getFeedType = (feedType) => {
  let feedTarget = {};

  switch (feedType) {
    case 'login':
      feedTarget = {
        target: '/login',
      };
      break;

    case 'mainMenu':
      feedTarget = {
        target: '/main-menu',
      };
      break;

    case 'checkAvailability':
      feedTarget = {
        target: '/check-availability',
      };
      break;

    case 'apartment':
      feedTarget = {
        target: '/apartment',
      };
      break;

    case 'adminApartment':
      feedTarget = {
        target: '/admin/apartment',
      };
      break;

    default:
      feedTarget = {
        target: '',
      };
  }

  return feedTarget;
};

export default getFeedType;
