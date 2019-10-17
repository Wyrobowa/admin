import { getImageUrl, serializeToQueryString } from '../helpers';

describe('Helpers - getImageUrl', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV, API_HOST: 'localhost:3000' };
    delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

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
