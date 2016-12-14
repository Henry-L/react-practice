import React from 'react';

let schema = require('json!./schema.json');

class InformationList extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
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
