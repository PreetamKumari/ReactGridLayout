
import './App.css';
import data from './data/layout-data'
import Grid from './components/grid'
import { useState, useEffect} from 'react'

function App() {

  if(localStorage.getItem('gridData') == null) {
    console.log("hiiii")
    localStorage.setItem('gridData', JSON.stringify(data))
  }

  const [gridItems, setGridItems] = useState(getLocalStorageGridData())
  const [historyData, setHistoryData] = useState(getLocalStorageHistoryData())

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
  
  return (
    <div className="App">
      <Grid gridItems={gridItems} setGridItems={setGridItems} historyData={historyData} setHistoryData={setHistoryData}/>
    </div>
  );
}

export default App;
