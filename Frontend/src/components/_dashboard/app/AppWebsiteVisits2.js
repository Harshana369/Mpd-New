import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';

// material
import {
  Card,
  CardHeader,
  Box,
  Alert,
  Typography,
  Stack,
  TextField,
  Grid,
  CircularProgress
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';

//
import { BaseOptionChart5 } from '../../charts';

// ---------------------------  Daily work progress graph in dashboard----------------------------

export default function AppWebsiteVisits2({
  tableData,
  setSEName,
  setPName,
  projectsName,
  siteEngineerName,
  name,
  project,
  xAxisDaysLabel,
  loaddata
}) {
  const [alert1, setAlert1] = useState(false);
  const [alertContent1, setAlertContent1] = useState('');
  const [open1, setOpen1] = React.useState(false);
  // const [selectedSEPRO, setSelectedSEPRO] = useState([{}, {}, {}]);

  const handleSiteEngineerDropdownValue = (event) => {
    setSEName(event.target.value);
  };

  const handleMobitelDropdownValue = (event) => {
    setPName(event.target.value);
  };

  // --------- Assigning Data To Graph ---------------------------------

  const allSiteEngineersName = siteEngineerName.concat({
    value: 'All siteEngineers',
    label: 'All siteEngineers'
  });

  const MobitelprojectNames = projectsName.concat({
    value: 'All Projects',
    label: 'All Projects'
  });

  const xAxisData = xAxisDaysLabel;

  const CHART_DATA = tableData;

  const CompletedSites = xAxisData;

  const chartOptions = merge(BaseOptionChart5(), {
    stroke: { width: [3, 1] },
    plotOptions: {
      bar: {
        columnWidth: '35%',
        borderRadius: 2,
        dataLabels: {
          position: 'bottom'
        }
      }
    },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: xAxisData,
    xaxis: { type: 'day' },
    tooltip: {
      shared: true,
      intersect: false,
      x: {},
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} Sites`;
          }
          return y;
        }
      }
    },
    chart: {
      events: {
        // this click event used to show the Daily On Air sites when clcik on the Chart Column
        click(event, chartContext, config) {
          if (config.dataPointIndex.toString() === '0') {
            setAlertContent1(`${CompletedSites[0]}`);
            setAlert1(true);
          } else if (config.dataPointIndex.toString() === '1') {
            setAlertContent1(`${CompletedSites[1]}`);
            setAlert1(true);
          } else if (config.dataPointIndex.toString() === '2') {
            setAlertContent1(`${CompletedSites[2]}`);
            setAlert1(true);
          } else if (config.dataPointIndex.toString() === '3') {
            setAlertContent1(`${CompletedSites[3]}`);
            setAlert1(true);
          } else if (config.dataPointIndex.toString() === '4') {
            setAlertContent1(`${CompletedSites[4]}`);
            setAlert1(true);
          } else if (config.dataPointIndex.toString() === '5') {
            setAlertContent1(`${CompletedSites[5]}`);
            setAlert1(true);
          } else {
            setAlertContent1(`${CompletedSites[6]}`);
            setAlert1(true);
          }
          // ---------------------------------------------------------------------------------------
        },
        animationEnd: undefined,
        beforeMount: undefined,
        mounted: undefined,
        updated: undefined,
        mouseMove: undefined,
        mouseLeave: undefined,
        legendClick: undefined,
        markerClick: undefined,
        selection: undefined,
        dataPointSelection: undefined,
        dataPointMouseEnter: undefined,
        dataPointMouseLeave: undefined
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Monthly Work Progress For SiteEnginners & Projects" />
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="caption1" style={{ marginLeft: '23px' }}>
          Select Options
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={1}
            mb={0}
          >
            <TextField
              style={{ float: 'right' }}
              sx={{ width: 200 }}
              size="small"
              id="outlined-select-currency"
              select
              value={project}
              onChange={handleMobitelDropdownValue}
            >
              {MobitelprojectNames.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              style={{ float: 'right' }}
              sx={{ width: 200 }}
              size="small"
              id="outlined-select-currency"
              select
              value={name}
              onChange={handleSiteEngineerDropdownValue}
            >
              {allSiteEngineersName.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Stack>
      </Stack>
      {loaddata ? (
        <Grid item xs={12} sm={6} md={2.4}>
          <CircularProgress color="success" />
        </Grid>
      ) : (
        <Box sx={{ p: 3, pb: 1 }} dir="ltr">
          <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={311} />
        </Box>
      )}

      <Box sx={{ width: '100%' }}>
        <Collapse in={open1}>
          {alert1 ? (
            <Alert
              variant="outlined"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen1(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              <Typography variant="subtitle8" gutterBottom>
                {alertContent1}
              </Typography>
            </Alert>
          ) : (
            <></>
          )}
        </Collapse>
        <Button
          disabled={open1}
          variant="text"
          onClick={() => {
            setOpen1(true);
          }}
        >
          View
        </Button>
      </Box>
    </Card>
  );
}
