import React from 'react'

import InformationList from './InformationList'
import DataView from './DataView'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedObject: []
    };

    this.selectObject = this.selectObject.bind(this);
  }

  selectObject(newObject) {
    this.state.selectedObject.push(newObject);
    this.setState({
      selectedObject: this.state.selectedObject
    });
  }

  render() {
    return (
      <div>
        <div style={{ float: 'left' }}>
          <InformationList
            schema={this.props.schema}
            selectedObject={this.state.selectedObject}
            onObjectSelect={this.selectObject}
          />
        </div>
        <div style={{ float: 'right' }}>
          <DataView
            selectedObject={this.state.selectedObject}
          />
        </div>
      </div>
    );
  }
}

export default App
