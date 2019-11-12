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

    case 'apartmentsList':
      feedTarget = {
        target: '/apartments-list',
      };
      break;

    case 'adminApartment':
      feedTarget = {
        target: '/admin/apartment',
      };
      break;

    case 'location':
      feedTarget = {
        target: '/location',
      };
      break;

    case 'locationsList':
      feedTarget = {
        target: '/locations-list',
      };
      break;

    case 'adminLocation':
      feedTarget = {
        target: '/admin/location',
      };
      break;

    case 'page':
      feedTarget = {
        target: '/page',
      };
      break;

    case 'pagesList':
      feedTarget = {
        target: '/pages-list',
      };
      break;

    case 'adminPage':
      feedTarget = {
        target: '/admin/page',
      };
      break;

    case 'language':
      feedTarget = {
        target: '/admin/language',
      };
      break;

    case 'languagesList':
      feedTarget = {
        target: '/admin/languages-list',
      };
      break;

    case 'adminApartmentService':
      feedTarget = {
        target: '/admin/apartment-service',
      };
      break;

    case 'adminApartmentServiceList':
      feedTarget = {
        target: '/admin/apartment-service-list',
      };
      break;

    case 'adminGalleryUpload':
      feedTarget = {
        target: '/admin/gallery/add',
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
