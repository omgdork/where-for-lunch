import React from 'react';
import renderer from 'react-test-renderer';
import Gallery from 'client/components/Gallery/Gallery';

describe('<Gallery />', () => {
  it('should render an empty list if photos property is not supplied.', () => {
    const gallery = renderer
      .create(<Gallery />)
      .toJSON();

    expect(gallery).toMatchSnapshot();
  });

  it('should render a list of photos when photos property is supplied.', () => {
    const photos = [
      'https://s3-media1.fl.yelpcdn.com/bphoto/LmH0H3McZ-WQyf8qAB0h2A/o.jpg',
      'https://s3-media2.fl.yelpcdn.com/bphoto/lbNYdvheIAC2mll5ROvjRw/o.jpg',
      'https://s3-media2.fl.yelpcdn.com/bphoto/dd8oRzkl7VCPpD1d3MV9cw/o.jpg',
    ];
    const gallery = renderer
      .create(<Gallery photos={photos} />)
      .toJSON();

    expect(gallery).toMatchSnapshot();
  });
});
