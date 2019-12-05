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
        target: '/admin/apartment',
      };
      break;

    case 'apartmentsList':
      feedTarget = {
        target: '/admin/apartments-list',
      };
      break;

    case 'location':
      feedTarget = {
        target: '/admin/location',
      };
      break;

    case 'locationsList':
      feedTarget = {
        target: '/admin/locations-list',
      };
      break;

    case 'page':
      feedTarget = {
        target: '/admin/page',
      };
      break;

    case 'pagesList':
      feedTarget = {
        target: '/admin/pages-list',
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

    case 'phrase':
      feedTarget = {
        target: '/admin/phrase',
      };
      break;

    case 'phrasesList':
      feedTarget = {
        target: '/admin/phrases-list',
      };
      break;

    case 'translation':
      feedTarget = {
        target: '/admin/translation',
      };
      break;

    case 'translationsList':
      feedTarget = {
        target: '/admin/translations-list',
      };
      break;

    case 'apartmentFacility':
      feedTarget = {
        target: '/admin/apartment-facility',
      };
      break;

    case 'apartmentFacilityList':
      feedTarget = {
        target: '/admin/apartment-facility-list',
      };
      break;

    case 'apartmentFacilityGroup':
      feedTarget = {
        target: '/admin/apartment-facility-group',
      };
      break;

    case 'apartmentFacilityGroupList':
      feedTarget = {
        target: '/admin/apartment-facility-group-list',
      };
      break;

    case 'apartmentService':
      feedTarget = {
        target: '/admin/apartment-service',
      };
      break;

    case 'apartmentServiceList':
      feedTarget = {
        target: '/admin/apartment-service-list',
      };
      break;

    case 'apartmentServiceGroup':
      feedTarget = {
        target: '/admin/apartment-service-group',
      };
      break;

    case 'apartmentServiceGroupList':
      feedTarget = {
        target: '/admin/apartment-service-group-list',
      };
      break;

    case 'apartmentTranslations':
      feedTarget = {
        target: '/admin/apartment-translations',
      };
      break;

    case 'apartmentTranslationsList':
      feedTarget = {
        target: '/admin/apartment-translations-list',
      };
      break;

    case 'adminGalleryUpload':
      feedTarget = {
        target: '/admin/gallery/add',
      };
      break;

    case 'statics':
      feedTarget = {
        target: '/admin/statics',
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
