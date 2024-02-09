/* eslint-disable */

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  MenuItem,
  TextField,
  Typography
} from '@mui/material';
import './CustomDataGrid.css'; // Import your custom CSS file

export default function VenderDatabaseTableFormatEdit() {
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [customColumnName, setCustomColumnName] = useState('');
  const [customColumnWidth, setCustomColumnWidth] = useState('');
  const [editColumn, setEditColumn] = useState(null);
  const [rowData, setRowData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);
  const [fieldValues, setFieldValues] = useState({});
  const [selectionModel, setSelectionModel] = useState([]);

  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [addPermanentColumnOpen, setAddPermanentColumnOpen] = useState(false);
  const [columnToDelete, setColumnToDelete] = useState(null);

  // Fist Time Api calling with get Columns
  useEffect(() => {
    const fetchColumns = async () => {
      try {
        const response = await axiosInstance.get('/vender/columns');
        setColumns(response.data);
      } catch (error) {
        console.error('Error fetching columns:', error);
      }
    };
    fetchColumns();
  }, []);

  // Replace Columns Tables
  const fetchColumns = async () => {
    try {
      const response = await axiosInstance.get('/vender/columns');
      setColumns(response.data);
    } catch (error) {
      console.error('Error fetching columns:', error);
    }
  };
  // Fist Time Api calling with get Rows
  useEffect(() => {
    const fetchRows = async () => {
      try {
        const response = await axiosInstance.get('/vender/rows');
        setRowData(response.data);
      } catch (error) {
        console.error('Error fetching rows:', error);
      }
    };

    fetchRows();
  }, []);

  // Replace Rows Tables
  const fetchRows = async () => {
    try {
      const response = await axiosInstance.get('/vender/rows');
      setRowData(response.data);
    } catch (error) {
      console.error('Error fetching rows:', error);
    }
  };

  // Set Row And Columns for Table
  useEffect(() => {
    const updatedRows = rowData.map((row) => {
      const obj = {
        id: row._id
      };

      for (let i = 0; i < columns.length; i++) {
        const columnName = columns[i]?.field; // Get the column field name
        obj[columnName] = row.values[i] || null;
      }

      return obj;
    });

    setRows(updatedRows);
  }, [rowData, columns]);

  const handleFieldValueChange = (field, value) => {
    setFieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      [field]: value
    }));
  };

  // Add PermanentColumn
  const handleAddPermanentColumn = async () => {
    const newColumn = {
      field: customColumnName,
      headerName: customColumnName,
      headerClassName: 'customHeader',
      width: parseInt(customColumnWidth) || 150,
      editable: false
    };

    try {
      const response = await axiosInstance.post('/vender/permanent/columns', newColumn);

      setColumns((prevColumns) => [...prevColumns, response.data]);
      setCustomColumnName('');
      setCustomColumnWidth('');
      fetchColumns();
      setAddPermanentColumnOpen(false);
    } catch (error) {
      console.error('Error adding column:', error);
    }
  };
  // Columns Adding Function

  const handleAddColumn = async () => {
    const newColumn = {
      field: customColumnName,
      headerName: customColumnName,
      headerClassName: 'customHeader',
      width: parseInt(customColumnWidth) || 150,
      editable: true
    };

    try {
      const response = await axiosInstance.post('/vender/columns', newColumn);

      setColumns((prevColumns) => [...prevColumns, response.data]);
      setCustomColumnName('');
      setCustomColumnWidth('');
      fetchColumns();
    } catch (error) {
      console.error('Error adding column:', error);
    }
  };

  const handleDeleteColumn = (columnId) => {
    setColumnToDelete(columnId);
    setDeleteConfirmationOpen(true);
  };

  const handlePermanentColumn = () => {
    setAddPermanentColumnOpen(true);
  };

  // Columns Delete Function
  const handleConfirmDeleteColumn = async () => {
    try {
      await axiosInstance.delete(`/vender/columns/${columnToDelete}`);
      setColumns((prevColumns) => prevColumns.filter((column) => column._id !== columnToDelete));
      fetchColumns();
    } catch (error) {
      console.error('Error deleting column:', error);
    }
    setDeleteConfirmationOpen(false);
  };
  const handleEditColumn = (column) => {
    setEditColumn(column);
  };

  const handleCancelDeleteColumn = () => {
    setDeleteConfirmationOpen(false);
  };

  const handleCancelPermanentColumn = () => {
    setAddPermanentColumnOpen(false);
  };

  const handleEditColumnChange = (e) => {
    const { name, value } = e.target;
    setEditColumn((prevColumn) => ({
      ...prevColumn,
      [name]: name === 'width' ? parseInt(value) : value
    }));
  };

  // Edit Columns
  const handleSaveColumn = async () => {
    try {
      const response = await axiosInstance.put(`/vender/columns/${editColumn._id}`, editColumn);

      setColumns((prevColumns) =>
        prevColumns.map((column) => (column._id === response.data._id ? response.data : column))
      );
      setEditColumn(null);
      fetchColumns();
    } catch (error) {
      console.error('Error saving column:', error);
    }
  };

  const handleCancelEditColumn = () => {
    setEditColumn(null);
  };

  // ==================================================================
  // Temp Row Adding Function
  const handleAddRow = async () => {
    const rowValues = columns.map((column) => fieldValues[column.field] || '');
    try {
      const response = await axiosInstance.post('/vender/rows', rowValues);

      console.log('New row added:', response.data);
      fetchRows();

      // Handle any further actions after adding the row
    } catch (error) {
      console.error('Error adding row:', error);
    }
  };
  // Row Update Function
  const handleUpdateRow = async () => {
    try {
      const values = Object.values(selectedRow).filter((key) => key !== selectedRow.id);

      await axiosInstance.put(`/vender/rows/${selectedRow.id}`, values);

      setOpen(false);
      fetchRows();
      setSelectedRow(null);
    } catch (error) {
      console.error('Error updating row:', error);
    }
  };

  const handleSelectionModelChange = (newSelection) => {
    if (newSelection.length > 0) {
      // Select only the first selected row
      const selectedId = newSelection[0];
      const selectedRow = rows.find((row) => row.id === selectedId);
      setSelectedRow(selectedRow);
      setOpen(true);
    } else {
      setSelectedRow(null);
      setOpen(false);
    }
  };

  // Row Delete Function
  const handleDeleteRow = async () => {
    try {
      await axiosInstance.delete(`/vender/rows/${selectedRow.id}`);
      setOpen(false);
      fetchRows();
    } catch (error) {
      console.error('Error deleting row:', error);
    }
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const options = ['Empty'];

  return (
    <Box sx={{ height: 400, width: '100%', marginTop: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {columns.map((column) =>
          column.editable === true ? (
            <div
              key={column._id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '10px'
              }}
            >
              <div>{column.headerName}</div>
              <Button
                variant="outlined"
                style={{ marginTop: '5px' }}
                onClick={() => handleEditColumn(column)}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                style={{ marginTop: '5px' }}
                onClick={() => handleDeleteColumn(column._id)}
              >
                Delete
              </Button>
            </div>
          ) : (
            <div
              key={column._id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '10px'
              }}
            >
              <div>{column.headerName}</div>
              <Button
                variant="outlined"
                style={{ marginTop: '5px' }}
                onClick={() => handleEditColumn(column)}
              >
                Edit
              </Button>
            </div>
          )
        )}
      </div>

      <Dialog open={deleteConfirmationOpen} onClose={handleCancelDeleteColumn}>
        <DialogTitle sx={{ backgroundColor: 'red', color: 'white' }}>
          If a column is deleted, if there is data in the rows related to that column, then the data
          related to that row should be saved as Empty. Then the column can be deleted
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCancelDeleteColumn}>Cancel</Button>
          <Button onClick={handleConfirmDeleteColumn} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      {editColumn && (
        <div style={{ marginTop: '20px' }}>
          <TextField
            label="Column Name"
            name="headerName"
            value={editColumn.headerName}
            onChange={handleEditColumnChange}
          />
          <TextField
            label="Column Width"
            name="width"
            value={editColumn.width}
            onChange={handleEditColumnChange}
          />
          <Button variant="contained" style={{ marginLeft: '10px' }} onClick={handleSaveColumn}>
            Save
          </Button>
          <Button
            variant="contained"
            style={{ marginLeft: '10px' }}
            onClick={handleCancelEditColumn}
          >
            Cancel
          </Button>
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <TextField
          label="Column Name"
          value={customColumnName}
          onChange={(e) => setCustomColumnName(e.target.value)}
        />
        <TextField
          label="Column Width"
          value={customColumnWidth}
          onChange={(e) => setCustomColumnWidth(e.target.value)}
        />

        <Button variant="contained" style={{ marginLeft: '10px' }} onClick={handleAddColumn}>
          Add Nomal Column
        </Button>
        <Button variant="contained" style={{ marginLeft: '10px' }} onClick={handlePermanentColumn}>
          Add Permanent Column
        </Button>
      </div>

      <Dialog open={addPermanentColumnOpen} onClose={handleCancelPermanentColumn}>
        <DialogTitle sx={{ backgroundColor: 'red', color: 'white' }}>
          If you add {customColumnName} it as a permanent column, you can change the name of that
          column to the table, but you cannot change the order of the permanent columns
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCancelPermanentColumn}>Cancel</Button>
          <Button onClick={handleAddPermanentColumn} autoFocus>
            Add Column
          </Button>
        </DialogActions>
      </Dialog>
      <DataGrid
        sx={{ marginTop: '20px', width: '100%' }}
        rows={rows}
        columns={columns}
        pageSize={5}
        disableColumnSelector
        selectionModel={selectionModel}
        pagination
        disableRowSelectionOnClick
        onCellEditCommit={handleUpdateRow}
        onSelectionModelChange={handleSelectionModelChange}
        getRowClassName={(params) => {
          if (selectionModel.includes(params.id)) {
            return 'selected';
          }
          return '';
        }}
      />

      <Modal open={open} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 700,
            maxHeight: '80vh',
            overflowY: 'auto',
            bgcolor: 'whitesmoke',
            boxShadow: 24,
            p: 4
          }}
        >
          <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
            Row Update & Delete
          </Typography>

          {selectedRow &&
            Object.entries(selectedRow)
              .filter(([key]) => key !== 'id')
              .map(([key, value]) => (
                <div key={key} style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <div style={{ marginRight: '10px' }}>{key}</div>
                  <TextField
                    style={{ flex: 1 }}
                    label={key}
                    value={value}
                    onChange={(e) =>
                      setSelectedRow((prevRow) => ({ ...prevRow, [key]: e.target.value }))
                    }
                  />
                  <Button
                    variant="contained"
                    onClick={() => setSelectedRow((prevRow) => ({ ...prevRow, [key]: 'Empty' }))}
                  >
                    Clear
                  </Button>
                </div>
              ))}
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
            <Button variant="contained" onClick={handleUpdateRow}>
              Update
            </Button>
            <Button variant="contained" style={{ marginLeft: '10px' }} onClick={handleDeleteRow}>
              Delete
            </Button>
          </div>
        </Box>
      </Modal>

      <Box>
        <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
          Add Row
        </Typography>{' '}
        {columns.map((column) => (
          <TextField
            key={column._id}
            id={column.field}
            label={column.headerName}
            variant="outlined"
            style={{ marginRight: '10px', marginTop: '5px' }}
            value={fieldValues[column.field] || ''}
            onChange={(e) => handleFieldValueChange(column.field, e.target.value)}
          />
        ))}
        <Button
          variant="contained"
          style={{ marginLeft: '10px', marginTop: '15px', marginBottom: '15px' }}
          onClick={handleAddRow}
        >
          Add Row
        </Button>
      </Box>
    </Box>
  );
}
