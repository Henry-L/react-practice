import React from 'react'

class DataView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Data Type</th>
                        <th>Permissions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.selectedObject.name}</td>
                        <td>{this.props.selectedObject.data_type}</td>
                        <td>{this.props.selectedObject.app_keys.map((perm, ind) => {
                            return <p key={ind}>{perm}</p>
                        })}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default DataView