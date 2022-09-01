
import './App.css';
import data from './data/layout-data'
import Grid from './components/grid'
import History from './components/history'
import { useState, useEffect} from 'react'

function App() {

  if(localStorage.getItem('gridData') == null) {
    localStorage.setItem('gridData', JSON.stringify(data))
  }
  if(localStorage.getItem('historyData') == null) {
    localStorage.setItem('historyData', JSON.stringify([]))
  }

  const [gridItems] = useState(getLocalStorageGridData())
  const [historyData] = useState(getLocalStorageHistoryData())
  const [show, toggleShow] = useState(false)

  useEffect(()=>{ 
    if(localStorage.getItem('historyData') == null) {
      localStorage.setItem('historyData', JSON.stringify([]))
    }
  },[])

  function getLocalStorageGridData() {
    return (JSON.parse(localStorage.getItem('gridData')))
  }

  function getLocalStorageHistoryData() {
    return (JSON.parse(localStorage.getItem('historyData')))
  }

  function showHistory() {
    toggleShow(!show)
  }
  
  return (
    <div className="App">
      <div className="title">React Data Grid</div>
      <div className="history-search">
      <input placeholder="Search for data..."></input>
      <button>search</button>
      <button className="btn-history" onClick={showHistory}>History</button>
      </div>
      <div className="grid-history">
      <Grid gridItems={gridItems} historyData={historyData}/>
      <div className="history">
        {
          show && <History historyData={historyData}/>
        }
      </div>
      </div>
    </div>
  );
}

export default App;
