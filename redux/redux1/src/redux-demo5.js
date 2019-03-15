//redux-demo5.js
var redux = require('redux');
console.log("Starting redux example");
var newone = {
    car: 'sunny',
    model: 'nissan',
    features: [],
    dealers: []
};

var nextFeatureId = 1;
var nextDealerId = 1;

var nameReducer = (state = newone, action) => {
    switch (action.type) {
        case 'CHANGE_CAR':
            return {
                // ...state,
                car: action.car
            };
        case 'CHANGE_MODEL':
            return {
                // ...state,
                model: action.model
            }
        default:
            return state;
    };
};

var changeName = (car) => {
    return {
        type: 'CHANGE_CAR',
        car: car
    }
}

var featuresReducer = (state = newone, action) => {
    switch (action.type) {
        case 'ADD_FEATURE':
            return {
                // ...state,
                features: [...state.features,
                {
                    id: nextFeatureId++,
                    features: action.features
                }
                ]
            }
        case 'REMOVE_FEATURE':
            return {
                // ...state,
                features: state.features.filter((features) => features.id !== action.id)
            }
        default:
            return state;
    }
};

var addFeature = (features) => {
    return {
        type: 'ADD_FEATURE',
        features
    }
}

var removeFeature = (id) => {
    return {
        type: 'REMOVE_FEATURE',
        id
    }
}

var dealersReducer = (state = newone, action) => {
    switch (action.type) {
        case 'ADD_DEALER':
            return {
                // ...state,
                dealers: [...state.dealers,
                {
                    id2: nextDealerId++,
                    dealers: action.dealers
                }
                ]
            }

        case 'REMOVE_DEALER':
            return {
                // ...state,
                dealers: state.dealers.filter((dealers) => dealers.id2 !== action.id)
            }
        default:
            return state;
    }
};

var addDealer = (dealers) => {
    type: 'ADD_DEALER',
        dealers
}

var removeDealer = (id) => {
    type: 'REMOVE_DEALER',
        id
}

var carreducer = redux.combineReducers({
    name: nameReducer,
    features: featuresReducer,
    dealers: dealersReducer
});

// var carreducer    = (state = newone, action) =>{
//     switch(action.type){
//         default:
//         return state;
//     }
// }

// var store = redux.createStore(carreducer);

var store = redux.createStore(carreducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

var us = store.subscribe(() => {
    var state = store.getState();
    console.log('State is', state);
})

store.dispatch(changeName('audi'));

var changeModel = (model) => {
    return {
        type: 'CHANGE_MODEL',
        model
    }
}
store.dispatch(changeModel('Logan'));
store.dispatch(changeName('Brezza'));
// us();
store.dispatch({
    type: 'CHANGE_CAR',
    car: 'Datsun'
});

store.dispatch(addFeature('cooler fan 4'));
store.dispatch(addFeature('key lock'));
store.dispatch(addFeature('cooler'));
store.dispatch(addFeature('cooler 1'));
store.dispatch(addFeature('cooler 2'));
store.dispatch(removeFeature(2));

// store.dispatch(addDealer('rohan motors'));

// store.dispatch(addDealer('navdeep motors'));

// store.dispatch(removeDealer(1));