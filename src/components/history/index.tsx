import React, { SFC } from 'react'
import { HistoryItem } from '../../constants/interfaces'
import IconButton from '@material-ui/core/IconButton'
import Restore from '@material-ui/icons/Restore'
import './history.scss'

const History: SFC<{
  historyList: HistoryItem[]
  onHistoryItemPress: ((item: HistoryItem) => void)
}> = ({
  historyList,
  onHistoryItemPress,
}) => (
  <div className="convert-history">
    {historyList.length > 0 && (<div>历史转换</div>)}
    {historyList.map((i, index) => (
      <div key={index} className="convert-history-item">
        <div>把&nbsp;{i.from}&nbsp;进制的&nbsp;{i.inputVal}&nbsp;转换为&nbsp;{i.to}&nbsp;进制</div>
        <IconButton aria-label="Delete" onClick={() => onHistoryItemPress(i)} color="primary">
          <Restore fontSize="large" />
        </IconButton>
      </div>
    ))}
  </div>
)

export default History
