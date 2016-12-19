import React from 'react'

class SimpleProps extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(obj) {
    this.props.onObjectSelect(obj);
  }

  render() {
    return (
      <ul>
        {this.props.properties.map((prop, ind) => {
          return <li key={ind}><a onClick={() => this.handleClick(prop)}>
            {prop.name}
          </a></li>
        })}
      </ul>
    )
  }
}

export default SimpleProps
