var axios = require('axios');
var redux = require('redux');

console.log('Google maps');

var mapReducer = (state = { isFetching: false, url: undefined }, action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state;
  }
}

var combinedReducer = redux.combineReducers({
  map: mapReducer
})


var store = redux.createStore(combinedReducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

const startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
};

const completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
};

var fetchLocation = () => {
  store.dispatch(startLocationFetch());

  axios.get('http://ipinfo.io').then(function (res) {
    var loc = res.data.loc;
    var baseUrl = 'http://maps.google.com?q=';
    store.dispatch(completeLocationFetch(baseUrl + loc));
  });
};

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('New State: ', state);

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  }
  else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>';
  }
});

fetchLocation();

//unsubscribe();