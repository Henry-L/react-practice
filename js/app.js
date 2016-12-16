import React from 'react';

let schema = require('json!./schema.json');
var simpleProp = []
var complexProp = [];

schema.forEach((prop) => {
  if(prop.containing_object || prop.properties) {
    complexProp.push(prop)
  } else {
    simpleProp.push(prop)
  }
})

class InformationList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    console.log('hello ' + name)
  }

  render() {
    return (
      <div>
        <h1>SIDE PANEL</h1>
        <ul>
          {schema.map((item, index) => {
            return <li key={index} onClick={() => this.handleClick(item.name)}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default InformationList
