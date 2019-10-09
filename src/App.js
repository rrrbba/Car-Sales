import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addItem, removeItem } from './actions';


const App = ({ addItem, removeItem, state }) => {
  

  const removeFeature = item => {
    // dispatch an action here to remove an item
    removeItem(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    addItem(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    state: state
  }
}

export default connect(
  mapStateToProps,
  { addItem, removeItem }
)(App);

// export default App;
