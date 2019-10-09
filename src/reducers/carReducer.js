import { ADD_ITEM, REMOVE_ITEM } from '../actions';


const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };



export const reducer = (state = initialState, action) => {

    console.log("REDUCER", action);
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                car: {
                    ...state.car,
                    //add the initial price plus the price of the new car chosen
                    price: state.car.price + action.payload.price,
                    features: [...state.car.features, action.payload]
                },
                store: state.store.filter(item => {
                    return item.id !== action.payload.id;
                })
            };
        case REMOVE_ITEM:
            return{
                ...state,
                //subtract car chosen from initial price
                car: {
                    ...state.car,
                    price: state.car.price - action.payload.price,
                    features: [...state.car.features, action.payload]
                },
                store: state.store.filter(item => {
                    return item.id !== action.payload.id;
                })
            };
        default:
            return state;
    }
}