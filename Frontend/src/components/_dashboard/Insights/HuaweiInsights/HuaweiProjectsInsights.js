import { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// material
import { Grid, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../../../Page';
//
import {
  LastUpdatesVendor,
  AppWebsiteVisits,
  AppWebsiteVisits1,
  AppNewUsers,
  AppBugReports,
  AppBugReports1,
  AppItemOrders,
  AppWeeklySales
} from '..';

import AppCurrentVisits0 from '../New folder/AppCurrentVisits0';
import AppCurrentVisits from '../AppCurrentVisits';
import AppCurrentVisits1 from '../New folder/AppCurrentVisits1';
import AppCurrentVisits2 from '../New folder/AppCurrentVisits2';
import AppCurrentVisits3 from '../New folder/AppCurrentVisits3';
import AppCurrentVisits4 from '../New folder/AppCurrentVisits4';
import AppCurrentVisits5 from '../New folder/AppCurrentVisits5';

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

export default function HuaweiProjectsInsights() {
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  const [projectNamesArray, setprojectNamesArray] = useState([]);

  const [ScopeData, setScopeData] = useState([]);
  const [HandoverData, setHandoverData] = useState([]);
  const [PATPassData, sePATPassData] = useState();
  const [OnAirData, setOnAirData] = useState();
  const [HoldSitesData, setHoldSitesData] = useState();
  const [ChartDatForColumnGraph, setChartDatForColumnGraph] = useState([
    {
      name: 'On Air',
      type: 'column',
      data: []
    },
    {
      name: 'PAT',
      type: 'column',
      data: []
    },
    {
      name: 'SAR',
      type: 'column',
      data: []
    },
    {
      name: 'Commissioned',
      type: 'column',
      data: []
    },
    {
      name: 'Installed',
      type: 'column',
      data: []
    }
  ]);
  const [XaxisData, setXaxisData] = useState([]);
  const [ProjectCompletion, setProjectCompletion] = useState([0, 0, 0]);
  const [SitesOnAir, setSitesOnAir] = useState([0, 0, 0]);
  const [PatCompletionData, setPatCompletionData] = useState([0, 0, 0]);
  const [SARData, setSARData] = useState([0, 0, 0]);
  const [CommissioningData, setCommissioningData] = useState([0, 0, 0]);
  const [InstallationData, setInstallationData] = useState([0, 0, 0, 0, 0, 0]);
  const [MobilizationData, setMobilizationData] = useState([0, 0, 0]);
  const [XAxisDaysLabel, setxAxisDaysLabel] = useState([]);
  const [WeeklyProgressData, setweeklyProgressData] = useState([]);
  const [CompletedSites, setcompletedSites] = useState([]);
  const [dropdownValue, setDropdownValue] = useState('All Huawei Projects');
  const [VendorLastUpdates, setVendorLastUpdates] = useState([]);
  const [Last30day, setLast30Day] = useState([]);

  const projectNames = projectNamesArray;
  const implementationBy = 'Huawei';

  const handleChange = (event) => {
    setDropdownValue(event.target.value);
  };

  // useEffect(() => {
  //   fetchProjectNames();
  //   fetchData();
  //   fetchChartDataforColumnGraphs();
  //   fetchVendorProjectsLastUpdates();
  // }, [dropdownValue]);

  const fetchProjectNames = async () => {
    try {
      const response = await axiosInstance.get('/filteredHuaweiProjectsNamesArray');
      const { projectsNamesArray } = response.data;
      setprojectNamesArray(projectsNamesArray);
    } catch (error) {
      console.error('Error while fetching project names:', error);
      // Handle the error appropriately (e.g., show an error message)
    }
  };

  const fetchChartDataforColumnGraphs = async () => {
    try {
      const response = await axiosInstance.get('/vendorProjectsDatabasesChartDataColumnChartData', {
        params: { Project: dropdownValue }
      });

      const { chartDataForFrontEnd, dataForTheGraphs } = response.data;
      if (chartDataForFrontEnd) {
        setChartDatForColumnGraph(chartDataForFrontEnd);
      } else {
        // set Login Baffer
      }

      setXaxisData(dataForTheGraphs);
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  };

  const fetchTilesData = async () => {
    try {
      const response = await axiosInstance.get('/vendorProjectsDatabases', {
        params: { Project: dropdownValue }
      });

      setScopeData(response.data.projectsScopeDataCount);
      setHandoverData(response.data.handOverDataCount);
      sePATPassData(response.data.projectsPatDataCount);
      setOnAirData(response.data.projectsOnAirDataCount);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchCompletion = async () => {
    try {
      const response = await axiosInstance.get('/HuaweivendorProjectsDatabasesCompletion', {
        params: { Project: dropdownValue }
      });

      setProjectCompletion(response.data.ProjectCompletionForFrontEnd);
      setPatCompletionData(response.data.PatPassForFrontEnd);
      setSARData(response.data.SarPassForFrontEnd);
      setCommissioningData(response.data.CommissionedFrontEnd);
      setweeklyProgressData(response.data.weeklyProgressDataForFrontEnd);
      setweeklyProgressData(response.data.weeklyProgressDataForFrontEnd);
      setLast30Day(response.data.SevenDaysOfWeek);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchVendorProjectsLastUpdates = () => {
    axiosInstance
      .get('/huaweiProjectsLastUpdates', {
        params: { Project: dropdownValue }
      })
      .then((res) => {
        setVendorLastUpdates(res.data.existingPosts);
      });
  };

  useEffect(() => {
    fetchProjectNames();
  }, []);

  useEffect(() => {
    // fetchProjectNames();
    fetchTilesData();
    fetchChartDataforColumnGraphs();
    fetchCompletion();
    fetchVendorProjectsLastUpdates();
  }, [dropdownValue]);

  //  ------------------------------------------------------------------------------------------------
  //  ------------------------------------------------------------------------------------------------
  return (
    <Page title="Vendor Projects Insights | Mobitel Projects Dashboard">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h6" gutterBottom>
            Vendor Projects Insights - Huawei Projects
          </Typography>
          <Typography variant="h9" gutterBottom />
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="caption1">Select project</Typography>
          <TextField
            style={{ float: 'right' }}
            sx={{ width: 200 }}
            size="small"
            id="outlined-select-currency"
            select
            value={dropdownValue}
            onChange={handleChange}
          >
            {projectNames.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppWeeklySales scopeData={ScopeData} />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppBugReports1 handoverData={HandoverData} />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppItemOrders patData={PATPassData} />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppNewUsers onAirData={OnAirData} />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <AppBugReports holdData={HoldSitesData} />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits chartData={ChartDatForColumnGraph} xaxisData={XaxisData} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits projectCompletion={ProjectCompletion} />
          </Grid>
          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits0 sitesOnAir={SitesOnAir} />
          </Grid> */}
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits1 patCompletionData={PatCompletionData} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits2 sarData={SARData} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits3 commissioningData={CommissioningData} />
          </Grid>
          {/* <Grid item xs={12} md={6} lg={8}>
            <AppCurrentVisits4 installationData={InstallationData} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits5 mobilizationData={MobilizationData} />
          </Grid> */}

          <Grid item xs={12} md={6} lg={12} mb={0}>
            <AppWebsiteVisits1
              xAxisDaysLabel={Last30day}
              completedSitesMobitel={WeeklyProgressData}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <LastUpdatesVendor vendorLastUpdates={VendorLastUpdates} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
