/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_NEWS = exports.FETCH_NEWS = 'fetch_news';
var SAVE_PAGE = exports.SAVE_PAGE = 'save_page';

var fetchNews = exports.fetchNews = function fetchNews(pageNumber) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: SAVE_PAGE,
                payload: pageNumber
              });
              _context.next = 3;
              return api.get('/search_by_date?tags=story&page=' + pageNumber);

            case 3:
              res = _context.sent;


              dispatch({
                type: FETCH_NEWS,
                payload: res
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var UPDATE_VOTE = exports.UPDATE_VOTE = 'update_Vote';
var updateVote = exports.updateVote = function updateVote(data) {
  return function (dispatch, getState, api) {
    dispatch({
      type: UPDATE_VOTE,
      payload: data
    });
  };
};

var HIDE_NEWS = exports.HIDE_NEWS = 'hide_news';
var hideNews = exports.hideNews = function hideNews(data) {
  return function (dispatch, getState, api) {
    dispatch({
      type: HIDE_NEWS,
      payload: data
    });
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

var _NewsList = __webpack_require__(11);

var _NewsList2 = _interopRequireDefault(_NewsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _NewsList2.default, {
    path: '/:id',
    exact: true
  }), _extends({}, _NewsList2.default, {
    path: '/',
    exact: true
  })]
})];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideNewsData = exports.updateNewsData = exports.parseNewsData = exports.filterHiddenNews = exports.getMatchedAndHiddenNews = exports.getVotes = exports.getMatchedNews = exports.getLocalStorageData = exports.storeVoteData = undefined;

var _find = __webpack_require__(12);

var _find2 = _interopRequireDefault(_find);

var _filter = __webpack_require__(13);

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeVoteData = exports.storeVoteData = function storeVoteData(data) {
  var savedNewsData = getLocalStorageData() ? getLocalStorageData() : [];
  if (savedNewsData.length) {
    savedNewsData = savedNewsData.filter(function (item) {
      return item.id != data.id;
    });
    savedNewsData.push(data);
  } else {
    savedNewsData.push(data);
  }
  localStorage.setItem('newsList', JSON.stringify(savedNewsData));
};

var getLocalStorageData = exports.getLocalStorageData = function getLocalStorageData() {
  return localStorage.getItem('newsList') ? JSON.parse(localStorage.getItem('newsList')) : null;
};

var getMatchedNews = exports.getMatchedNews = function getMatchedNews(newsData) {
  var storedNews = null;
  if (getLocalStorageData()) {
    storedNews = (0, _find2.default)(getLocalStorageData(), ['id', newsData.objectID]);
  }
  return storedNews;
};

var getVotes = exports.getVotes = function getVotes(item) {
  var matchedNews = getMatchedNews(item);
  return matchedNews ? matchedNews.votes : item.points;
};
var getMatchedAndHiddenNews = exports.getMatchedAndHiddenNews = function getMatchedAndHiddenNews(newsData) {
  var hiddenNews = null;
  if (getLocalStorageData()) {
    hiddenNews = (0, _find2.default)(getLocalStorageData(), {
      id: newsData.objectID,
      display: false
    });
  }
  return hiddenNews;
};

var filterHiddenNews = exports.filterHiddenNews = function filterHiddenNews(currentStateNews) {
  return (0, _filter2.default)(currentStateNews, function (news) {
    var newstoRemove = getMatchedAndHiddenNews(news);
    return newstoRemove ? news.id === newstoRemove.id : news;
  });
};

var parseNewsData = exports.parseNewsData = function parseNewsData(data) {
  var stateNews = data;
  if (false) {
    stateNews = filterHiddenNews(stateNews);
  }
  var newData = stateNews.map(function (item) {
    return {
      id: item.objectID,
      title: item.title,
      comments: item.num_comments,
      votes:  true ? item.points : getVotes(item),
      url: item.url,
      author: item.author
    };
  });
  return newData;
};

var updateNewsData = exports.updateNewsData = function updateNewsData(news, data) {
  var updatedData = news.map(function (item) {
    if (item.id === data.id) {
      item.votes = item.votes + 1;
      return item;
    } else {
      return item;
    }
  });
  return updatedData;
};

var hideNewsData = exports.hideNewsData = function hideNewsData(news, data) {
  return news.filter(function (item) {
    return item.id != data.id;
  });
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(2);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

var _server = __webpack_require__(19);

var _server2 = _interopRequireDefault(_server);

var _store = __webpack_require__(23);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
  var store = (0, _store2.default)(req);
  var path = req.path;
  var pageNumber = path.length >= 2 ? parseInt(path.slice(1)) : 1;
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store, pageNumber) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _server2.default)(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

var port = process.env.PORT || 4048;

app.listen(port, function () {
  console.log('server running on port 4048');
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(2);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    'div',
    null,
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App,
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _actions.fetchNews)());
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageNumber = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _actions = __webpack_require__(1);

var _api = __webpack_require__(5);

var _header = __webpack_require__(14);

var _NewsList = __webpack_require__(15);

var _link = __webpack_require__(16);

var _chart = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getPageNumber = exports.getPageNumber = function getPageNumber() {
  return pageNumber;
};

var NewsList = function (_Component) {
  _inherits(NewsList, _Component);

  function NewsList(props) {
    _classCallCheck(this, NewsList);

    var _this = _possibleConstructorReturn(this, (NewsList.__proto__ || Object.getPrototypeOf(NewsList)).call(this, props));

    _this.updateVoteAndSave = _this.updateVoteAndSave.bind(_this);
    _this.hideAndStore = _this.hideAndStore.bind(_this);
    return _this;
  }

  _createClass(NewsList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var url = new URL(window.location.href);
      var path = url.pathname;
      var pageNumber = path.length >= 2 ? parseInt(path.slice(1)) : 1;
      this.props.fetchNews(pageNumber);
    }
  }, {
    key: 'updateVoteAndSave',
    value: function updateVoteAndSave(news) {
      this.props.updateVote(news);
      (0, _api.storeVoteData)({ id: news.id, votes: news.votes, display: true });
    }
  }, {
    key: 'hideAndStore',
    value: function hideAndStore(news) {
      this.props.hideNews(news);
      (0, _api.storeVoteData)({ id: news.id, votes: news.votes, display: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_header.Header, null),
        _react2.default.createElement(_link.Links, { pageNo: this.props.pageNo }),
        _react2.default.createElement(_NewsList.NewsWrapperComponent, {
          newsList: this.props.newsList,
          updateVoteCount: this.updateVoteAndSave,
          hideNews: this.hideAndStore
        }),
        _react2.default.createElement(_link.Links, { pageNo: this.props.pageNo }),
        _react2.default.createElement(_chart.Chart, { newsList: this.props.newsList })
      );
    }
  }]);

  return NewsList;
}(_react.Component);

function mapStateToProps(state) {
  return { newsList: state.newsList, pageNo: state.pageNumber };
}

function loadData(store, pageNumber) {
  return store.dispatch((0, _actions.fetchNews)(pageNumber));
}
function mapDispatchToProps(dispatch) {
  return {
    fetchNews: function fetchNews(pageNumber) {
      return dispatch((0, _actions.fetchNews)(pageNumber));
    },
    updateVote: function updateVote(data) {
      return dispatch((0, _actions.updateVote)(data));
    },
    hideNews: function hideNews(news) {
      return dispatch((0, _actions.hideNews)(news));
    }
  };
}
exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewsList)
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("lodash/find");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("lodash/filter");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = exports.Header = function Header() {
  return _react2.default.createElement(
    "div",
    { className: "container-fluid appheader" },
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "h4",
        { className: " text-center" },
        "Hacker News"
      )
    )
  );
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsWrapperComponent = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewsWrapperComponent = exports.NewsWrapperComponent = function NewsWrapperComponent(_ref) {
  var _ref$newsList = _ref.newsList,
      newsList = _ref$newsList === undefined ? [] : _ref$newsList,
      updateVoteCount = _ref.updateVoteCount,
      hideNews = _ref.hideNews;

  var renderedNewsList = newsList.map(function (news) {
    return _react2.default.createElement(
      "li",
      { key: news.id, className: "list-group-item pb-1 pt-1" },
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-2 col-sm-2 col-lg-1 pl-1 pr-1 text-center" },
          news.comments
        ),
        _react2.default.createElement(
          "div",
          { className: "col-2 col-sm-2 col-lg-1 pl-1 pr-1 text-center" },
          news.votes
        ),
        _react2.default.createElement(
          "div",
          {
            className: "col-2 col-sm-2 col-lg-1 pl-1 pr-1 text-center",
            onClick: function onClick() {
              return updateVoteCount(news);
            }
          },
          _react2.default.createElement("div", { className: "triangle-up cursor" })
        ),
        _react2.default.createElement(
          "div",
          { className: "col-6 col-sm-6 col-lg-9 pl-1 pr-1" },
          _react2.default.createElement(
            "div",
            { className: "contentTitle" },
            _react2.default.createElement(
              "a",
              { href: news.url, target: "_blank" },
              news.title
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "contentInfo" },
            _react2.default.createElement(
              "span",
              null,
              " By ",
              news.author
            ),
            " | [",
            _react2.default.createElement(
              "span",
              { className: "cursor", onClick: function onClick() {
                  return hideNews(news);
                } },
              "Hide"
            ),
            "]"
          )
        )
      )
    );
  });
  return _react2.default.createElement(
    "div",
    { className: "container" },
    _react2.default.createElement(
      "ul",
      { className: "list-group striped-list" },
      _react2.default.createElement(
        "li",
        { className: "list-group-item activeBg pb-1 pt-1" },
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-2 col-sm-2 col-lg-1 pl-1 pr-1 text-center" },
            "Comments"
          ),
          _react2.default.createElement(
            "div",
            { className: "col-2 col-sm-2 col-lg-1 pl-1 pr-1 text-center" },
            "Vote Count"
          ),
          _react2.default.createElement(
            "div",
            { className: "col-2 col-sm-2 col-lg-1 pl-1 pr-1 text-center" },
            "UpVote"
          ),
          _react2.default.createElement(
            "div",
            { className: "col-6 col-sm-6 col-lg-9 pl-1 pr-1" },
            "News Details"
          )
        )
      ),
      renderedNewsList
    )
  );
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Links = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Links = exports.Links = function Links(_ref) {
  var pageNo = _ref.pageNo;

  var prevLink = pageNo - 1;
  var nextLink = pageNo + 1;
  return _react2.default.createElement(
    "div",
    { className: "container" },
    _react2.default.createElement(
      "div",
      { className: "text-right links" },
      _react2.default.createElement(
        "span",
        { className: prevLink < 1 ? 'disableLink' : '' },
        _react2.default.createElement(
          "a",
          { href: prevLink.toString() },
          "Prev"
        ),
        ' '
      ),
      "|",
      ' ',
      _react2.default.createElement(
        "span",
        { className: nextLink >= 50 ? 'disableLink' : '' },
        _react2.default.createElement(
          "a",
          { href: nextLink.toString() },
          "Next"
        )
      )
    )
  );
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chart = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _recharts = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chart = exports.Chart = function Chart(_ref) {
  var newsList = _ref.newsList;

  return _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(
      'div',
      { className: 'chart' },
      _react2.default.createElement(
        _recharts.ResponsiveContainer,
        { width: '100%', height: 300 },
        _react2.default.createElement(
          _recharts.LineChart,
          {
            data: newsList,
            syncId: 'anyId',
            margin: {
              top: 5,
              right: 30,
              left: 0,
              bottom: 0
            }
          },
          _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),
          _react2.default.createElement(_recharts.XAxis, { dataKey: 'id' }),
          _react2.default.createElement(_recharts.YAxis, { dataKey: 'votes' }),
          _react2.default.createElement(_recharts.Tooltip, null),
          _react2.default.createElement(_recharts.Line, {
            type: 'monotone',
            dataKey: 'votes',
            stroke: '#8884d8',
            fill: '#8884d8'
          })
        )
      )
    )
  );
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(20);

var _reactRouterDom = __webpack_require__(21);

var _reactRedux = __webpack_require__(4);

var _reactRouterConfig = __webpack_require__(2);

var _serializeJavascript = __webpack_require__(22);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  return '\n    <html>\n      <head>\n      <title>Hacker News </title>\n      <meta name="viewport"\n      content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">\n       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">\n       <link rel="stylesheet" href="styles.css" >\n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(24);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(25);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: 'https://hn.algolia.com/api/v1/search_by_date?tags=story&page=1',
    headers: { cookie: req.get('cookie') || '' }
  });

  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

  return store;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _newsReducer = __webpack_require__(27);

var _newsReducer2 = _interopRequireDefault(_newsReducer);

var _pageReducer = __webpack_require__(28);

var _pageReducer2 = _interopRequireDefault(_pageReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  newsList: _newsReducer2.default,
  pageNumber: _pageReducer2.default
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

var _api = __webpack_require__(5);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_NEWS:
      return (0, _api.parseNewsData)(action.payload.data.hits);
    case _actions.UPDATE_VOTE:
      return (0, _api.updateNewsData)(state, action.payload);
    case _actions.HIDE_NEWS:
      return (0, _api.hideNewsData)(state, action.payload);
    default:
      return state;
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var action = arguments[1];

  switch (action.type) {
    case _actions.SAVE_PAGE:
      return action.payload;
    default:
      return state;
  }
};

/***/ })
/******/ ]);