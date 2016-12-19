import React from 'react';
import { Link } from 'react-router';

import SimpleProps from './SimpleProps'
import ComplexProps from './ComplexProps'

// TRY TO USE AS REAL API!!
// DONT PRETEND ITS ALL LOADED, ASK FOR INFO IN PIECES!
// getGeneralProps, get complexProps, getPropData

class InformationList extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(obj) {
        this.props.onObjectSelect(obj);
    }

    render() {
        let simpleProp = [];
        let complexProp = [];

        this.props.products.forEach((prop) => {
            if (prop.containing_object || prop.properties) {
                complexProp.push(prop)
            } else {
                simpleProp.push(prop)
            }
        });

        return (
            <div>
                <div>
                    <h1>General Info</h1>
                    <SimpleProps properties={simpleProp} onObjectSelect={this.handleChange}/>
                </div>
                <div>
                    <ComplexProps properties={complexProp} onObjectSelect={this.handleChange}/>
                    {/*{complexProp.map((item, index) => {*/}
                        {/*return <li key={index} onClick={() => this.handleChange(item)}>{item.name}</li>;*/}
                    {/*})}*/}
                </div>
            </div>
        );
    }
}

export default InformationList
