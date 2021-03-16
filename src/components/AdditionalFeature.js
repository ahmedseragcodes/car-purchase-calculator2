import React from 'react';

import { connect } from "react-redux";
import { addFeature, removeFeature } from "../actions/index";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={()=>props.addFeature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) =>{
  return {
    additionalPrice: state.additionalPrice,
    car: {
      price: state.car.price,
      name: state.car.name,
      image:
        state.car.image,
      features: state.car.features
    },
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { addFeature, removeFeature })(AdditionalFeature);
