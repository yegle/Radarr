import PropTypes from 'prop-types';
import React from 'react';
import MovieImage from './MovieImage';

const bannerPlaceholder = 'data:image/png;base64,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';

function MovieBanner(props) {
  return (
    <MovieImage
      {...props}
      coverType="banner"
      placeholder={bannerPlaceholder}
    />
  );
}

MovieBanner.propTypes = {
  ...MovieImage.propTypes,
  coverType: PropTypes.string,
  placeholder: PropTypes.string,
  overflow: PropTypes.bool,
  size: PropTypes.number.isRequired
};

MovieBanner.defaultProps = {
  size: 70
};

export default MovieBanner;
