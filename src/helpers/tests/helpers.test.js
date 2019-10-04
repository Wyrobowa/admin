import { getImageUrl, serializeToQueryString } from '../helpers';

describe('Helpers - getImageUrl', () => {
  it('Should return proper URL to image', () => {
    const params = {
      type: 'apartment',
      slug: 'test',
      imageName: 'slider-1_5e1cf95a-f2bd-4414-b5b7-525e4255f5f9.jpeg',
      height: '150',
    };

    expect(getImageUrl(params))
      .toEqual('//localhost:3000/api/images/apartment/test/slider-1_5e1cf95a-f2bd-4414-b5b7-525e4255f5f9.jpeg?height=150');
  });
});

describe('Helpers - serializeToQueryString', () => {
  it('Should parse object to query string', () => {
    const obj = {
      height: '150',
      width: '300',
      format: 'jpeg',
    };

    expect(serializeToQueryString(obj))
      .toEqual('height=150&width=300&format=jpeg');
  });
});
