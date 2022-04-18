import React from 'react'

class Lista extends React.Component {
  render() {
    return (
      <ul>
          {this.props.items.map(item => { return <li key={item}>{item}</li>})}
      </ul>
    )
  }
}

export default Lista;
