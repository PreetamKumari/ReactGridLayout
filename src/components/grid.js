import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function BasicEditingGrid({ gridItems, historyData }) {

  const historyDataArray= [];
  const columns = Object.keys(gridItems[0]).map((item)=>{ 
    return { field: item, headerName: item.toUpperCase(), width: 180, editable: true }
  })

  return (
    <div style={{ height: 300, width: '75%' }}>
      
      <DataGrid
        autoHeight
        rows={gridItems}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        initialState={{
          pagination: {
            pageSize: 10,
          },
        }}
        onCellEditStop={(params, event) => {
          const updatedData= gridItems.map((item)=>{
            if(item.id === params.row.id) {
              console.log(item[params.field], params.row.id)
              item[params.field]=event.target.value
            }
            return item
            }
            )
          localStorage.setItem('gridData', JSON.stringify(updatedData))
          const history = {row: params.id, column: params.field, updatedValue: event.target.value, updatedTime: event.timeStamp}
          historyDataArray.push(history)
          localStorage.setItem('historyData', JSON.stringify(historyDataArray))
        }}
      />
    </div>
  );
}