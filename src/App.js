import React, { Component } from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import './App.scss'

const validNum = '0123456789abcdefghijklmnopqrstuvwxyz'.split('')

export default class IndexPage extends Component {
  state = {
    from: '10',
    to: '10',
    inputVal: '',
    ouputVal: 0,
  }

  setPos = name => e => this.setState({ [name]: e.target.value })

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

  options = () => validNum.map((_, i) => <MenuItem value={i + 1} key={i} classes={{ root: 'root-menu-item' }}>{i + 1}</MenuItem>)
  select = (p, v) => <Select onChange={this.setPos(p)} value={v}>{this.options()}</Select>

  render() {
    const { from, to, inputVal, ouputVal } = this.state
    return (
      <div className="main">
        <div className="converter-comp gh-link">
          支持小数的在线进位制转换&nbsp;<span role="img" aria-label="convert">🌀</span>
        </div>
        <div className="converter-comp">从&nbsp;&nbsp;&nbsp;{this.select('from', from)}&nbsp;&nbsp;&nbsp;进制</div>
        <div className="converter-comp">到&nbsp;&nbsp;&nbsp;{this.select('to', to)}&nbsp;&nbsp;&nbsp;进制</div>
        <div className="converter-comp">输入&nbsp;&nbsp;&nbsp;<TextField onChange={this.inputChange} value={inputVal} /></div>
        <div className="converter-comp">输出&nbsp;&nbsp;&nbsp;<TextField value={ouputVal.toString(Number(to))} disabled /></div>
      </div>
    )
  }
}
