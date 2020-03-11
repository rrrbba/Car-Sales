import React from 'react';

import AddedFeature from './AddedFeature';

//connect component to store
import { connect } from 'react-redux';
import { removeItem } from '../actions';

const AddedFeatures = props => {
  console.log("ADDEDFEATURES", props)
  return (
    <div className="content">
     
      <h6>Added features:</h6>
       
       
      {props.car.features.length ? (
        
        <ol type="1">
         
          {props.car.features.map(item => (
          
            <AddedFeature key={item.id} feature={item} removeItem = {props.removeItem}/>
          
          ))}
        
        </ol>
     
      ) : (
       
        <p>You can purchase items from the store.</p>
     
      )}
    
    </div>
  );
};

// export default AddedFeatures;

const mapStateToProps = state => {
  
  return {
    car: state.car
  }
}

export default connect (
  mapStateToProps, { removeItem }
)(AddedFeatures);