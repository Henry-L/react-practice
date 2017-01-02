import React from 'react'

class DataView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let numSelectedObjects = this.props.selectedObject.length;
    if (numSelectedObjects === 0) return null;
    let relevantFields = ['name', 'data_type', 'app_keys'];

    return (
      <table>
        <tbody>
          {Object.keys(this.props.selectedObject[numSelectedObjects - 1]).map((key) => {
            if (relevantFields.indexOf(key) !== -1) {
              return <tr key={key}>
                <th>{key}</th>
                <td>{this.props.selectedObject[numSelectedObjects - 1][key]}</td>
              </tr>
            }
          })}
        </tbody>
      </table>
    );
  }
}

export default DataView
