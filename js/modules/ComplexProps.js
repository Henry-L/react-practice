import React from 'react'

import SimpleProps from './SimpleProps'

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

  handleChildClick(obj) {
    this.props.onObjectSelect(obj);
  }

  render() {
    return (
      <div>
        {this.props.properties.map((prop, ind) => {
          return (
            <div key={ind}>
              <SimpleProps
                properties={[prop]}
                onObjectSelect={this.handleClick}/>
              <div style={{display: this.props.selectedObject === prop ? 'initial' : 'none'}}>
                { hasChildren(prop) ? (
                  <ComplexProps
                    properties={[prop.containing_object]}
                    onObjectSelect={this.handleClick}/>
                ) : (
                  <SimpleProps
                    properties={prop.properties}
                    onObjectSelect={this.handleClick}/>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ComplexProps
