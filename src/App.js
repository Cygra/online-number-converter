import React, { Component } from 'react'

const validNum = '0123456789abcdefghijklmnopqrstuvwxyz'.split('')

export default class IndexPage extends Component {
  state = {
    from: '10',
    to: '10',
    inputVal: '',
    ouputVal: 0,
  }

  setFrom = e => this.setState({ from: e.target.value })

  setTo = e => this.setState({ to: e.target.value })

  inputChange = e => {
    const validRange = [...validNum.slice(0, this.state.from), '.']
    const inputVal = e.target.value.toLowerCase()
    ;(inputVal === '' || validRange.includes(inputVal.slice(-1))) && this.setState({ inputVal }, this.updateVal)
  }

  updateVal = () => {
    const { from, inputVal } = this.state
    const [firstPart, lastPart] = inputVal.split('.')
    let ouputVal = 0
    if (firstPart) {
      const firstArr = firstPart.split('')
      let firstLen = firstArr.length
      firstArr.forEach((i, index) => {
        ouputVal += validNum.findIndex(j => j === i) * (from ** Number(firstLen - (index + 1)))
      })
    }
    if (lastPart) {
      lastPart.split('').forEach((i, index) => {
        ouputVal += validNum.findIndex(j => j === i) * (from ** Number(- (index + 1)))
      })
    }
    this.setState({ ouputVal })
  }

  render() {
    const { from, to, inputVal, ouputVal } = this.state
    return (
      <div>
        <div>
          从
          <select onChange={this.setFrom} value={from}>
            {validNum.map((i, index) => <option value={index + 1} key={index}>{index + 1}</option>)}
          </select>
          进制
        </div>

        <div>
          到
          <select onChange={this.setTo} value={to}>
            {validNum.map((i, index) => <option value={index + 1} key={index}>{index + 1}</option>)}
          </select>
          进制
        </div>

        <div>
          输入<input type="text" onChange={this.inputChange} value={inputVal} />
        </div>

        <div>
          输出<span>{ouputVal.toString(Number(to))}</span>
        </div>
      </div>
    )
  }
}
