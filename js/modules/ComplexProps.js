import React from 'react';

import SimpleProps from './SimpleProps';

function hasChildren(property) {
  return !!property.containing_object;
}

class ComplexProps extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(obj) {
    this.props.onObjectSelect(obj);
  }

  render() {
    return (
      <div>
        {this.props.properties.map((prop, ind) => {
          return (
            <div key={prop.id}>
              <SimpleProps
                properties={[prop]}
                onObjectSelect={this.handleClick}/>
              <div style={{
                display: this.props.selectedObjects.includes(prop) ? 'block' : 'none',
              }} className="indented">
                { hasChildren(prop) ? (
                  <ComplexProps
                    properties={[prop.containing_object]}
                    selectedObjects={this.props.selectedObjects}
                    onObjectSelect={this.handleClick}/>
                ) : (
                  <SimpleProps
                    properties={prop.properties}
                    onObjectSelect={this.handleClick}/>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

ComplexProps.propTypes = {
  properties: React.PropTypes.array,
  selectedObjects: React.PropTypes.array,
  onObjectSelect: React.PropTypes.func,
};

export default ComplexProps;
