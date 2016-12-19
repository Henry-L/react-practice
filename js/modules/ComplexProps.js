import React from 'react'

import SimpleProps from './SimpleProps'

class ComplexProps extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.hasChildren = this.hasChildren.bind(this);
  }

  handleClick(obj) {
    this.props.onObjectSelect(obj);
  }

  hasChildren(property) {
    return !!property.containing_object;
  }

  render() {
    return (
      <div>
        {this.props.properties.map((prop, ind) => {
          if(this.hasChildren(prop)) {
            return (
              <div key={ind}>
              <SimpleProps
                properties={[prop]}
                onObjectSelect={this.handleClick}/>

              <ComplexProps
                properties={[prop.containing_object]}
                onObjectSelect={this.handleClick}/>
              </div>
            )
          } else {
            return (
              <div key={ind}>
              <SimpleProps
                properties={[prop]}
                onObjectSelect={this.handleClick}/>

              <SimpleProps 
                properties={prop.properties}
                onObjectSelect={this.handleClick}/>
              </div>
            )
          }
        })}
      </div>
    )
  }
}

export default ComplexProps
