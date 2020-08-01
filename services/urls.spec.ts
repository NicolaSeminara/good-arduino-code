import { projectFileURL, projectImageUrl, thumbnailUrl } from './urls';

let isProduction = false;
jest.mock('./environment', () => ({
  get isProduction() {
    return isProduction;
  },
}));

beforeEach(() => {
  isProduction = false;
});

describe('projectFileURL', () => {
  it('should return the full URL of the given project file', async () => {
    expect(projectFileURL('simon', 'images/thumbnail.png')).toEqual(
      '/api/files/simon/images/thumbnail.png',
    );
  });

  it('should return the input URL for absolute URL', async () => {
    expect(projectFileURL('simon', '/foo/bar')).toEqual('/foo/bar');
  });

  it('should return the input URL for https:// URL', async () => {
    expect(projectFileURL('simon', 'https://example.org')).toEqual('https://example.org');
  });
});

describe('projectImageUrl', () => {
  it('should return convertkit URL on production environment', () => {
    isProduction = true;
    expect(projectImageUrl('simon', 'test.png')).toEqual(
      'https://ik.imagekit.io/tlnjt5rshw/simon/test.png',
    );
  });

  it('should add query string according to the maxWidth / maxHeight options', () => {
    isProduction = true;
    expect(projectImageUrl('simon', 'test.png', { maxWidth: 200, maxHeight: 300 })).toEqual(
      'https://ik.imagekit.io/tlnjt5rshw/simon/test.png?tr=w-200,h-300',
    );
  });
});

describe('thumbnailUrl', () => {
  it('should return the thumbnail URL for the given project', () => {
    expect(thumbnailUrl({ id: 'simon', thumbnail: 'images/thumbnail.png' })).toEqual(
      '/api/files/simon/images/thumbnail.png',
    );
  });

  it('should return null if the project has no thumbnail', () => {
    expect(thumbnailUrl({ id: 'simon' })).toBeNull();
  });
});
