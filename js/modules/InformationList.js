import React from 'react';
import { Link } from 'react-router';

import SimpleProps from './SimpleProps'
import ComplexProps from './ComplexProps'

class InformationList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(obj) {
    this.props.onObjectSelect(obj);
  }

  render() {
    let simplePropArr = [];
    let complexPropArr = [];

    this.props.schema.forEach((prop) => {
      if (prop.containing_object || prop.properties) {
        complexPropArr.push(prop)
      } else {
        simplePropArr.push(prop)
      }
    });

    return (
      <div>
        <div>
          <h1>General Info</h1>
          <SimpleProps
            properties={simplePropArr}
            onObjectSelect={this.handleChange}/>
        </div>
        <div>
          <ComplexProps
            properties={complexPropArr}
            selectedObject={this.props.selectedObject}
            onObjectSelect={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default InformationList
