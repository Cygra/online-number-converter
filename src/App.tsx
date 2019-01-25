import React, { Component } from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { HistoryItem } from './constants/interfaces'
import History from './components/history'
import CompareArrows from '@material-ui/icons/CompareArrows'
import './App.scss'

const validNum = '0123456789abcdefghijklmnopqrstuvwxyz'.split('')

interface IndexPageState {
  from: number,
  to: number,
  inputVal: string,
  ouputVal: number,
  historyList: HistoryItem[]
}

export default class IndexPage extends Component<{}, IndexPageState> {
  state = {
    from: 10,
    to: 10,
    inputVal: '',
    ouputVal: 0,
    historyList: [],
  }

  componentDidUpdate = (_: {}, prevState: IndexPageState): void => {
    const { from, to } = this.state
    prevState.from !== from && this.setState({ inputVal: '', ouputVal: 0 })
    prevState.to !== to && this.setState({ ouputVal: 0 })
  }

  setPos = (name: 'from' | 'to'): ((e: React.ChangeEvent<HTMLSelectElement>) => void) => {
    return (e: React.ChangeEvent<HTMLSelectElement>): void => {
      this.setState(c => ({ ...c, [name]: e.target.value }))
    }
  }

  inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const validRange = [...validNum.slice(0, this.state.from), '.']
    const inputVal = e.target.value.toLowerCase()
    ;(inputVal === '' || validRange.includes(inputVal.slice(-1))) && this.setState({ inputVal })
  }

  updateVal = (): void => {
    const { from, inputVal, historyList, to } = this.state
    const [firstPart, lastPart] = inputVal.split('.')
    let ouputVal = 0
    if (firstPart) {
      const firstArr = firstPart.split('')
      let firstLen = firstArr.length
      firstArr.forEach((i: string, index: number): void => {
        ouputVal += validNum.findIndex(j => j === i) * (from ** (firstLen - (index + 1)))
      })
    }
    if (lastPart) {
      lastPart.split('').forEach((i: string, index: number): void => {
        ouputVal += validNum.findIndex(j => j === i) * (from ** (- (index + 1)))
      })
    }

    this.setState({ ouputVal, historyList: [ ...historyList, { from, to, inputVal }] })
  }

  options = (): JSX.Element[] => {
    return validNum.map((_, i): JSX.Element => {
      return (
        <MenuItem value={i + 1} key={i} classes={{ root: 'root-menu-item' }}>
          {i + 1}
        </MenuItem>
      )
    })
  }

  select = (p: 'from' | 'to', v: number): JSX.Element => {
    return (
      <Select onChange={this.setPos(p)} value={v}>
        {this.options()}
      </Select>
    )
  }

  onHistoryItemPress = (item: HistoryItem): void => {
    this.setState({ ...item, ouputVal: 0 }, this.updateVal)
  }

  render() {
    const { from, to, inputVal, ouputVal, historyList } = this.state
    return (
      <div className="main">
        <div className="converter-container">
          <div className="converter-comp converter-title">
            支持小数的在线进位制转换&nbsp;
            <CompareArrows fontSize="large" color="primary" />
          </div>
          <div className="converter-comp">从&nbsp;&nbsp;&nbsp;{this.select('from', from)}&nbsp;&nbsp;&nbsp;进制</div>
          <div className="converter-comp">到&nbsp;&nbsp;&nbsp;{this.select('to', to)}&nbsp;&nbsp;&nbsp;进制</div>
          <div className="converter-comp">输入&nbsp;&nbsp;&nbsp;<TextField onChange={this.inputChange} value={inputVal} /></div>
          <div className="converter-comp"><Button variant="contained" onClick={this.updateVal} color="primary">转换</Button></div>
          <div className="converter-comp">输出&nbsp;&nbsp;&nbsp;<TextField value={ouputVal === 0 ? '' : ouputVal.toString(Number(to))} disabled /></div>
        </div>

        <History historyList={historyList} onHistoryItemPress={this.onHistoryItemPress} />
      </div>
    )
  }
}
