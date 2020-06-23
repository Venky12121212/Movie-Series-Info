import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import Spinner from '../Layout/Spinner'

import { fetchMovie, setLoading } from '../../Actions/SearchActions';

export class Movie extends Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id)
        this.props.setLoading();
    }
    render() {
        debugger
        const { loading, movie } = this.props;

        //  var rating1 = movie.Ratings.Source[0];
       
        let movieInfo = (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-4 card crad-body">
                        <img className="thumbnail" src={movie.Poster} alt="Poster" />
                    </div>
                    <div className="col-md-8">
                        <h2 className="mb-4">{movie.Title}</h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Genre:</strong>{movie.Genre}
                            </li>
                            <li className="list-group-item">
                                <strong>Released:</strong>{movie.Released}
                            </li>
                            <li className="list-group-item">
                                <strong>Rated:</strong>{movie.Rated}
                            </li>

                            <li className="list-group-item">
                                <strong>Director:</strong>{movie.Director}
                            </li>
                            <li className="list-group-item">
                                <strong>Writer:</strong>{movie.Writer}
                            </li>
                            <li className="list-group-item">
                                <strong>Actors:</strong>{movie.Actors}
                            </li>
                        </ul>
                        <ul className="list-group-item ratingsSection">

                            <li className="list-group-item">
                                <strong>IMDB Rating:</strong>{movie.imdbRating}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="card card-body bg-dark my-5 text-light">
                        <div className="col-md-12">
                            <h3>About</h3>
                            {movie.Plot}
                            <hr />
                            <a href={`https://www.imdb.com/title/` + movie.imdbID}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                View on IMDB
                            </a>
                            <Link to="/" className="btn btn-default text-light">Go back to search</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>);

        let content = loading ? <Spinner /> : movieInfo;

        return (
            <div>{content}</div>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
})

export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);
