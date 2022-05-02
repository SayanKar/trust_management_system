import React from "react";
import { DataGrid } from '@mui/x-data-grid';

export default function Table(props){
   const {rows ,columns} =props;
    return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
    )
}