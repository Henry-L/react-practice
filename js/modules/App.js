import React from 'react'

import InformationList from './InformationList'
import DataView from './DataView'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedObject: {}
        };

        this.selectObject = this.selectObject.bind(this);
    }

    selectObject(selectedObject) {
        this.setState({
            selectedObject: selectedObject
        });
    }

    render() {
        return (
            <div>
                <div style={{ float: 'left' }}>
                    <InformationList
                        products={this.props.products}
                        selectedObject={this.state.selectedObject}
                        onObjectSelect={this.selectObject}
                    />
                </div>
                <div style={{ float: 'right' }}>
                    <DataView
                        products={this.props.products}
                        selectedObject={this.state.selectedObject}
                    />
                </div>
            </div>
        );
    }
}

export default App