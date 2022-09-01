import React from 'react'
import './history.css';

export default function History({ historyData }) {
  return (
    <div>
    <div className="title">History</div>
    <div className="history">
      { historyData.map((history)=>{
      return <div className="history-item">
      <div>{`Updated value at row: ${history.row} and field: ${history.column} `}</div>
      <div>{history.updatedTime.substring(8,21)}</div>
      </div>
    })}
    </div>
    </div>
  )
}
