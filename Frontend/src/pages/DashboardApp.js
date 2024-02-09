/* eslint-disable */

// import React, { useEffect, useState } from 'react';
// import AppWebsiteVisits2 from '../components/_dashboard/app/AppWebsiteVisits2';
// import { useSelector } from 'react-redux';
// import { CircularProgress, Grid } from '@mui/material';
// import axios from 'axios';
// function DashboardApp() {
//   const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

//   const [chartData, setChartData] = useState();
//   const [MobitelprojectNamesArray, setMobitelprojectNamesArray] = useState([0]);
//   const [SiteEngineersName, setSiteEngineersName] = useState([0]);
//   const [seletedSiteEngineerName, setSeletedSiteEngineerName] = useState('All siteEngineers');
//   const [seletedMobitelProjectName, setSeletedMobitelProjectName] = useState('All Projects');

//   const getDataForSiteEngineer = async () => {
//     const res = await axiosInstance.get('/siteEngineerForMonthlyWorkProgress', {
//       params: { Engineer: seletedSiteEngineerName, Project: seletedMobitelProjectName }
//     });
//     setChartData(res.data.siteEnginnerForTask);
//   };

//   // get all site engineers names
//   const getSiteEngineersNames = async () => {
//     const res = await axiosInstance.get(`/AllSiteEngineersNames`);
//     setSiteEngineersName(res.data.siteEngineersNamesArray);
//   };

//   // get all mobitel projects names
//   const fetchMobitelProjectNames = async () => {
//     const res = await axiosInstance.get('/mobitelProjectsOverviewTable/ProjectsArray');
//     setMobitelprojectNamesArray(res.data.mobitelProjectsNamesArray);
//   };

//   const mobitelColumnChatDetails = useSelector((state) => state.mobitelColumnChartData);
//   const { mobitelChartColumnLoading, mobitelChartColumData, mobitelChartColumDataError } =
//     mobitelColumnChatDetails;

//   useEffect(() => {
//     getSiteEngineersNames();

//     fetchMobitelProjectNames();
//   }, []);

//     useEffect(() => {
//       getDataForSiteEngineer();
//     }, [seletedSiteEngineerName]);

//     useEffect(() => {
//       getDataForSiteEngineer();
//     }, [seletedMobitelProjectName]);

//   return (
//     <div>
//       <h1>dfds</h1>
//       {mobitelChartColumnLoading ? (
//         <Grid item xs={12} sm={6} md={2.4}>
//           <CircularProgress color="success" />
//         </Grid>
//       ) : mobitelChartColumDataError ? (
//         <h1>error...</h1>
//       ) : (
//         <Grid item xs={12} md={6} lg={8}>
//           <AppWebsiteVisits2
//             tableData={chartData}
//             setSEName={setSeletedSiteEngineerName}
//             name={seletedSiteEngineerName}
//             setPName={setSeletedMobitelProjectName}
//             project={seletedMobitelProjectName}
//             projectsName={MobitelprojectNamesArray}
//             siteEngineerName={SiteEngineersName}
//             xAxisDaysLabel={mobitelChartColumData?.XaxisDataForTheGraphs ?? []}
//           />
//         </Grid>
//       )}
//     </div>
//   );
// }

// export default DashboardApp;

// Dashboard.js

import React, { useEffect, useState } from 'react';
import AppWebsiteVisits2 from '../components/_dashboard/app/AppWebsiteVisits2';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@mui/material';
import axios from 'axios';

function DashboardApp() {
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const [chartData, setChartData] = useState();
  const [MobitelprojectNamesArray, setMobitelprojectNamesArray] = useState([0]);
  const [SiteEngineersName, setSiteEngineersName] = useState([0]);
  const [selectedSiteEngineerName, setSelectedSiteEngineerName] = useState('All siteEngineers');
  const [selectedMobitelProjectName, setSelectedMobitelProjectName] = useState('All Projects');

  const mobitelColumnChatDetails = useSelector((state) => state.mobitelColumnChartData);
  const { mobitelChartColumnLoading, mobitelChartColumData, mobitelChartColumDataError } =
    mobitelColumnChatDetails;

  const getDataForSiteEngineer = async () => {
    const res = await axiosInstance.get('/siteEngineerForMonthlyWorkProgress', {
      params: { Engineer: selectedSiteEngineerName, Project: selectedMobitelProjectName }
    });
    setChartData(res.data.siteEnginnerForTask);
  };

  const getSiteEngineersAndMobitelProjectNames = async () => {
    const [siteEngineersRes, mobitelProjectsRes] = await Promise.all([
      axiosInstance.get(`/AllSiteEngineersNames`),
      axiosInstance.get('/mobitelProjectsOverviewTable/ProjectsArray')
    ]);
    setSiteEngineersName(siteEngineersRes.data.siteEngineersNamesArray);
    setMobitelprojectNamesArray(mobitelProjectsRes.data.mobitelProjectsNamesArray);
  };

  useEffect(() => {
    getSiteEngineersAndMobitelProjectNames();
  }, []);

  useEffect(() => {
    getDataForSiteEngineer();
  }, [selectedSiteEngineerName, selectedMobitelProjectName]);

  return (
    <div>
      <h1>dfds</h1>
      {mobitelChartColumnLoading ? (
        <Grid item xs={12} sm={6} md={2.4}>
          <CircularProgress color="success" />
        </Grid>
      ) : mobitelChartColumDataError ? (
        <h1>error...</h1>
      ) : (
        <Grid item xs={12} md={6} lg={8}>
          <AppWebsiteVisits2
            tableData={chartData}
            setSEName={setSelectedSiteEngineerName}
            name={selectedSiteEngineerName}
            setPName={setSelectedMobitelProjectName}
            project={selectedMobitelProjectName}
            projectsName={MobitelprojectNamesArray}
            siteEngineerName={SiteEngineersName}
            xAxisDaysLabel={mobitelChartColumData?.XaxisDataForTheGraphs ?? []}
          />
        </Grid>
      )}
    </div>
  );
}

export default DashboardApp;
