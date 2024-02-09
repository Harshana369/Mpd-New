/* eslint-disable */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoJS from 'react-native-crypto-js';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RefreshIcon from '@mui/icons-material/Refresh';
import moment from 'moment';
import Tooltip from '@mui/material/Tooltip';
import {
  DataGrid,
  GridToolbarDensitySelector,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarFilterButton,
  gridPaginatedVisibleSortedGridRowIdsSelector,
  gridSortedRowIdsSelector,
  gridVisibleSortedRowIdsSelector,
  useGridApiContext,
  useGridApiRef
} from '@mui/x-data-grid';
import { createSvgIcon } from '@mui/material/utils';
import { Box, Stack } from '@mui/material';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
/* eslint-disable camelcase */

const getRowsFromCurrentPage = ({ apiRef }) => gridPaginatedVisibleSortedGridRowIdsSelector(apiRef);

const getUnfilteredRows = ({ apiRef }) => gridSortedRowIdsSelector(apiRef);

const getFilteredRows = ({ apiRef }) => gridVisibleSortedRowIdsSelector(apiRef);

const ExportIcon = createSvgIcon(
  <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" />,
  'SaveAlt'
);

const useDummyMutation = () =>
  React.useCallback(
    (post) =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve(post);
        }, 500)
      ),
    []
  );

export default function Datagrid() {
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  const [columns, setColumns] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [rows, setRows] = useState([]);

  const apiRef = useGridApiRef();
  const [pageSize, setPageSize] = React.useState(10);
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [snackbar, setSnackbar] = React.useState(null);
  const [state, setState] = React.useState([]);
  const handleCloseSnackbar = () => setSnackbar(null);

  const getRowsFromCurrentPage = ({ apiRef }) =>
    gridPaginatedVisibleSortedGridRowIdsSelector(apiRef);

  const getUnfilteredRows = ({ apiRef }) => gridSortedRowIdsSelector(apiRef);

  const getFilteredRows = ({ apiRef }) => gridVisibleSortedRowIdsSelector(apiRef);

  const ExportIcon = createSvgIcon(
    <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" />,
    'SaveAlt'
  );

  const CustomToolbar = () => {
    const apiRef = useGridApiContext();

    const handleExport = (options) => apiRef.current.exportDataAsCsv(options);

    const buttonBaseProps = {
      color: 'primary',
      size: 'small',
      startIcon: <ExportIcon />
    };

    return (
      <GridToolbarContainer>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={0}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={1}
            mb={0}
          >
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
            <GridToolbarDensitySelector />
            <Button
              {...buttonBaseProps}
              onClick={() => handleExport({ getRowsToExport: getUnfilteredRows })}
            >
              All Database
            </Button>
            <Button
              {...buttonBaseProps}
              onClick={() => handleExport({ getRowsToExport: getFilteredRows })}
            >
              Filtered
            </Button>
            <Button
              {...buttonBaseProps}
              onClick={() => handleExport({ getRowsToExport: getRowsFromCurrentPage })}
            >
              Current page
            </Button>
          </Stack>
          {/* <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={1}
            mb={0}
          >
            <Tooltip title="Refresh">
              <IconButton
                color="secondary"
                style={{ float: 'right' }}
                // onClick={() => {
                //   fetchData();
                //   fetchProjectNames();
                //   fetchSiteEngineerNames();
                // }}
              >
                <RefreshIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton
                // onClick={() => {
                //   const selectedIDs = selectionModel;
                //   if (selectedIDs.length === 1) {
                //     navigate(
                //       `/dashboard/DatabasesVendorProjects/HuaweiProjects/Edit/${selectionModel}`
                //     );
                //   } else if (selectedIDs.length === 0) {
                //     alert('Please select any project details to edit !');
                //   } else if (selectedIDs.length > 1) {
                //     alert('Can not edit multiple project details at once !');
                //   }
                // }}
                aria-label="edit"
                color="secondary"
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton style={{ float: 'right' }} color="secondary">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Stack> */}
        </Stack>
      </GridToolbarContainer>
    );
  };
  useEffect(() => {
    const updatedRows = rowData.map((row) => {
      const obj = {
        id: row._id
      };

      for (let i = 0; i < row.values.length; i++) {
        if (columns[i]) {
          const columnName = columns[i].field; // Get the column field name
          obj[columnName] = row.values[i];
        }
      }

      return obj;
    });

    setRows(updatedRows);
  }, [rowData, columns]);

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

  useEffect(() => {
    const fetchRows = async () => {
      try {
        const response = await axiosInstance.get('/Huawei/rows');
        setRowData(response.data);
      } catch (error) {
        console.error('Error fetching rows:', error);
      }
    };

    fetchRows();
  }, []);
  return (
    <Box
      sx={{
        height: 515,
        width: '100%',
        '& .super-app-theme--header': {
          backGridolor: 'rgba(0,0,0,0)',
          color: 'rgb(198,198,198)',
          fontWeight: '600'
        },
        '& .super-app-theme--cell': {
          backGridolor: 'rgba(0,0,0,0)',
          color: 'rgb(128,128,128)',
          fontWeight: '200'
        }
      }}
    >
      <DataGrid
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        components={{ Toolbar: CustomToolbar }}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20, 50, 100]}
        pagination
        density="compact"
        disableSelectionOnClick
        onSelectionModelChange={(ids) => {
          setSelectionModel(ids);
        }}
        editMode="row"
        sx={{
          boxShadow: 0,
          border: 0.1,
          borderColor: 'secondary.main',
          '& .MuidataGrid-cell:hover': {
            color: 'secondary.main'
          }
        }}
      />
      {!!snackbar && (
        <Snackbar open onClose={handleCloseSnackbar} autoHideDuration={5000}>
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </Box>
  );
}
