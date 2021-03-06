import {
  GridColDef,
  GridValueGetterParams,
} from '@mui/x-data-grid';

export const columns = [
    { field: 'vehicle_id', 
      headerName: 'Vehicle Id',
      width: 180, 
      editable:false 
    },
    { field: 'rsu', 
      headerName: 'RSU', 
      type: 'number', 
      editable: true 
    },
    {
      field: 'traffic',
      headerName: 'Traffic Status',
      width: 220,
      editable: true,
    },
    {
      field: 'accident',
      headerName: 'Accident',
      type: 'boolean',
      width: 220,
      editable: true,
    },
    {
      field: 'rating',
      headerName: 'Rating',
      type: "Number",
      editable: false,
      width: 170,
    }
  ];