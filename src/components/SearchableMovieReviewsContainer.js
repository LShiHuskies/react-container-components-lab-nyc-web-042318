// Code SearchableMovieReviewsContainer Here
import React from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(r => r.json())
      .then((reviews => this.setState({ reviews: reviews.results })));
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>The Searched:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }





}


export default SearchableMovieReviewsContainer;
