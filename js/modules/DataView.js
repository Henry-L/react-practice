import React from 'react'

class DataView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let relevantFields = ['name', 'data_type', 'app_keys'];
        return (
            <table>
                <tbody>
                    {Object.keys(this.props.selectedObject).map((key) => {
                        if (relevantFields.indexOf(key) !== -1) {
                            return <tr key={key}>
                                <th>{key}</th>
                                <td>{this.props.selectedObject[key]}</td>
                            </tr>
                        }
                    })}
                </tbody>
            </table>
        );
    }
}

export default DataView