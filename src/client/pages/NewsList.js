import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews, updateVote } from '../actions';
import { storeVoteData } from '../API/api';

export const getPageNumber = () => {
  return pageNumber;
};

class NewsList extends Component {
  componentDidMount() {
    let url = new URL(window.location.href);
    let path = url.pathname;
    let pageNumber = path.length >= 2 ? parseInt(path.slice(1)) : 1;
    this.props.fetchNews(pageNumber);
  }

  storeVoteDataAndUpdateState(news) {
    storeVoteData(news);
    this.props.updateVote(news);
  }

  renderNews() {
    return this.props.newsList.map((news) => {
      return (
        <li key={news.id}>
          <div>{news.title}</div>{' '}
          <div onClick={() => this.storeVoteDataAndUpdateState(news)}>
            {news.votes}
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>{this.renderNews()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { newsList: state.newsList };
}

function loadData(store, pageNumber) {
  return store.dispatch(fetchNews(pageNumber));
}
function mapDispatchToProps(dispatch) {
  return {
    fetchNews: (pageNumber) => dispatch(fetchNews(pageNumber)),
    updateVote: (data) => dispatch(updateVote(data)),
  };
}
export default {
  loadData,
  component: connect(mapStateToProps, mapDispatchToProps)(NewsList),
};
