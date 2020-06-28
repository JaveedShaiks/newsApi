import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews, updateVote, hideNews } from '../actions';
import { storeVoteData } from '../API/api';
import { Header } from '../components/header';
import { NewsWrapperComponent } from '../components/NewsList';
import { Links } from '../components/link';
import { Chart } from '../components/chart';

export const getPageNumber = () => {
  return pageNumber;
};

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.updateVoteAndSave = this.updateVoteAndSave.bind(this);
    this.hideAndStore = this.hideAndStore.bind(this);
  }
  componentDidMount() {
    let url = new URL(window.location.href);
    let path = url.pathname;
    let pageNumber = path.length >= 2 ? parseInt(path.slice(1)) : 1;
    this.props.fetchNews(pageNumber);
  }

  updateVoteAndSave(news) {
    this.props.updateVote(news);
    storeVoteData({ id: news.id, votes: news.votes, display: true });
  }

  hideAndStore(news) {
    this.props.hideNews(news);
    storeVoteData({ id: news.id, votes: news.votes, display: false });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <NewsWrapperComponent
          newsList={this.props.newsList}
          updateVoteCount={this.updateVoteAndSave}
          hideNews={this.hideAndStore}
        ></NewsWrapperComponent>
        <Links pageNo={this.props.pageNo}></Links>
        <Chart newsList={this.props.newsList}></Chart>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { newsList: state.newsList, pageNo: state.pageNumber };
}

function loadData(store, pageNumber) {
  return store.dispatch(fetchNews(pageNumber));
}
function mapDispatchToProps(dispatch) {
  return {
    fetchNews: (pageNumber) => dispatch(fetchNews(pageNumber)),
    updateVote: (data) => dispatch(updateVote(data)),
    hideNews: (news) => dispatch(hideNews(news)),
  };
}
export default {
  loadData,
  component: connect(mapStateToProps, mapDispatchToProps)(NewsList),
};
