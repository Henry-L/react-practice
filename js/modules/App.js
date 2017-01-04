import React from 'react';

import InformationList from './InformationList';
import DataView from './DataView';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedObjects: [],
    };

    this.objectSelect = this.objectSelect.bind(this);
  }

  objectSelect(newObject) {
    let obj = [...this.state.selectedObjects];
    if (newObject.parent_id) {
      obj.push(newObject);
    } else {
      obj = [newObject];
    }

    this.setState({
      selectedObjects: obj,
    });

  }

  render() {
    return (
      <div>
        <div className="col-md-3">
          <InformationList
            schema={this.props.schema}
            selectedObjects={this.state.selectedObjects}
            onObjectSelect={this.objectSelect}
          />
        </div>
        <div className="col-md-9">
          <DataView
            selectedObjects={this.state.selectedObjects}
          />
        </div>
      </div>
    );
  }
}

export default App;
