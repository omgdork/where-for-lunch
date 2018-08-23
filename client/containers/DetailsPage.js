import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import placeActions from 'actions/placeActions';
import Place from 'components/Place/Place';
import Gallery from 'components/Gallery/Gallery';

class DetailsPage extends Component {
  componentDidMount() {
    this.props.fetchPlace(this.props.match.params.id);
  }

  render() {
    const { place } = this.props;

    return (
      <div className="detailsPageWrapper">
        <Place place={place} />
        <Gallery photos={place.photos} />
      </div>
    );
  }
}

DetailsPage.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    price: PropTypes.string,
    rating: PropTypes.number,
    reviewCount: PropTypes.number,
    categories: PropTypes.arrayOf(PropTypes.string),
    photos: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  fetchPlace: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

DetailsPage.defaultProps = {
  place: {
    name: '',
    address: null,
    phone: null,
    price: null,
    rating: null,
    reviewCount: null,
    categories: null,
    photos: null,
  },
};

const mapStateToProps = state => ({
  place: state.place,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPlace: placeActions.fetchPlace,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsPage);
