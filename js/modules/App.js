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
    let newObjectArr;
    if(newObject.parent_id) {
      this.state.selectedObject.push(newObject);
      newObjectArr = this.state.selectedObject
    } else {
      newObjectArr = [newObject];
    }

    this.setState({
      selectedObject: newObjectArr
    });

  }

  render() {
    return (
      <div>
        <div className="col-md-3">
          <InformationList
            schema={this.props.schema}
            selectedObject={this.state.selectedObject}
            onObjectSelect={this.selectObject}
          />
        </div>
        <div className="col-md-9">
          <DataView
            selectedObject={this.state.selectedObject}
          />
        </div>
      </div>
    );
  }
}

export default App
