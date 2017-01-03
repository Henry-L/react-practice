import React from 'react'

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatString(str) {
  return str.split('_').map(function(item) {
    return capitalize(item)
  }).join(' ')
}

function formatAttributes(attr) {
  switch (typeof attr) {
    case 'string':
      return formatString(attr)
    case 'object':
      return attr.map(function(item) {return formatString(item)}).join(', ')
    default:
      return attr
  }
}

class DataView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let numSelectedObjects = this.props.selectedObject.length;
    if (numSelectedObjects === 0) return null;
    let relevantFields = ['name', 'data_type', 'app_keys'];

    return (
      <div className="data-view">
      <h1>Attributes</h1>
        <table className="table">
          <tbody>
            {Object.keys(this.props.selectedObject[numSelectedObjects - 1]).map((key) => {
              if (relevantFields.indexOf(key) !== -1) {
                return <tr key={key}>
                  <th>{key}</th>
                  <td>{formatAttributes(this.props.selectedObject[numSelectedObjects - 1][key])}</td>
                </tr>
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataView
