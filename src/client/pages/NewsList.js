import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews, updateVote } from '../actions';
import { storeVoteData } from '../API/api';
import { Header } from '../components/header';
import { NewsWrapperComponent } from '../components/NewsList';

export const getPageNumber = () => {
  return pageNumber;
};

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.updateVoteAndSave = this.updateVoteAndSave.bind(this);
  }
  componentDidMount() {
    let url = new URL(window.location.href);
    let path = url.pathname;
    let pageNumber = path.length >= 2 ? parseInt(path.slice(1)) : 1;
    this.props.fetchNews(pageNumber);
  }

  updateVoteAndSave(news) {
    this.props.updateVote(news);
    storeVoteData(news);
  }

  render() {
    return (
      <div>
        <Header></Header>
        <NewsWrapperComponent
          newsList={this.props.newsList}
          updateVoteCount={this.updateVoteAndSave}
        ></NewsWrapperComponent>
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
