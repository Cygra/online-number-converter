import React, { Component } from 'react'

export default class IndexPage extends Component {
  state = {
    from: '10',
    to: '10',
    inputVal: '',
    ouputVal: 0,
  }

  setFrom = e => this.setState({ from: e.target.value })
  setTo = e => this.setState({ to: e.target.value })
  inputChange = e =>this.setState({ inputVal: e.target.value }, this.updateVal)
  updateVal = () => {
    const { from, inputVal } = this.state
    const arr = inputVal.split('.')
    const firstPart = arr[0]
    const lastPart = arr[1]
    let ouputVal = 0
    if (firstPart) {
      const firstArr = firstPart.split('')
      let firstLen = firstArr.length
      firstArr.forEach((i, index) => {
        ouputVal += Number(i) * (from ** Number(firstLen - (index + 1)))
      })
    }
    if (lastPart) {
      lastPart.split('').forEach((i, index) => {
        ouputVal += Number(i) * (from ** Number(- (index + 1)))
      })
    }
    this.setState({ ouputVal })
  }

  render() {
    return (
      <div>
        <select onChange={this.setFrom} value={this.state.from}>
          <option value="2">2</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="16">16</option>
        </select>
        <select onChange={this.setTo} value={this.state.to}>
          <option value="2">2</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="16">16</option>
        </select>
        <input type="text" onChange={this.inputChange} value={this.state.inputVal} />
        <span>{this.state.ouputVal.toString(Number(this.state.to))}</span>
      </div>
    )
  }
}
