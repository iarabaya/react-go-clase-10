import React, { Component } from 'react'

export default class Sonido extends Component {
  render() {
    return (
      <audio controls src={this.props.src}/>
    )
  }
}
