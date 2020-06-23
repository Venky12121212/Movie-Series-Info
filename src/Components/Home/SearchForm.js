import React, { Component } from 'react';

import {connect} from 'react-redux';

import { searchMovie, fetchMovies, setLoading} from '../../Actions/SearchActions';



export class SearchForm extends Component {
    onChange = e => {
        this.props.searchMovie(e.target.value);
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    }
    render() {
        return (
            <div className="jumbotron jubotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search"> Search for a movie , TV Series.....</i>
                    </h1>
                    <form id="searchForm" onSubmit={this.onSubmit} >
                        <input type="text"
                            className="form-control"
                            name="search-text"
                            placeholder="Search Movies, TV Series..."
                            onChange = {this.onChange} style={{margin: "5px"}}/>
                        <button type="submit" className="btn btn-primary btn-bg-mt-3">
                            Search
                    </button>
                    </form>
                </div>
            </div>
        )
    }
} 

const mapStateToProps = state => ({
text: state.movies.text
})

export default connect(mapStateToProps, 
    { searchMovie, fetchMovies, setLoading })
    (SearchForm);
