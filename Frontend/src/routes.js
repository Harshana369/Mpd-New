/* eslint-disable */

import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useRoutes } from 'react-router-dom';
import CryptoJS from 'react-native-crypto-js';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import OtherLogin from '../src/components/authentication/login/otherLogin';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Home from './pages/Home';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import Unauthorized from './pages/Unauthorized';
import Databases from './pages/Databases';
import VendorProjectsInsightsHome from './pages/VendorProjectsInsights';
import VendorProjectsInsights from './components/_dashboard/Insights/AllVendorInsights/AllVendorProjectsInsights';
import HuaweiProjectsInsights from './components/_dashboard/Insights/HuaweiInsights/HuaweiProjectsInsights';
import ZTEProjectsInsights from './components/_dashboard/Insights/ZTE Insights/ZTEProjectsInsights';
import Tasks from './pages/Tasks';
import Other from './pages/Other';
import Addnew from './pages/Addnew';
import MobitelProjectsOverview from './pages/MobitelProjectsOverview';
import MobitelSubProjects from './pages/MobitelSubProjects';
import MobitelProjectsFinance from './pages/MobitelProjectsFinance';
import MobitelProjectsInsights from './pages/MobitelProjectsInsights';
import MobitelProjectsSiteEngineers from './pages/MobitelProjectsSiteEngineers';
import VendorProjectsOverview from './pages/VendorProjectsOverview';
import AllVendorProjectsOverview from './components/_dashboard/VendorProjectsOverview/AllVendors/AllVendorProjectsOverview';
import VendorProjectsOverviewHuawei from './components/_dashboard/VendorProjectsOverview/HuaweiOverview/VendorProjectsOverviewHuawei';
import VendorProjectsOverviewZTE from './components/_dashboard/VendorProjectsOverview/ZTEOverview/VendorProjectsOverviewZTE';
import VendorProjectsMilestones from './pages/VendorProjectsMilestones';
import VendorProjectsMilestonesAll from './components/_dashboard/VendorProjectsMilestones/AllVendorProjects/AllVendorProjectsMilestones';
import VendorProjectsMilestonesHuawei from './components/_dashboard/VendorProjectsMilestones/HuaweiProjects/HuaweiProjectsMilestones';
import VendorProjectsMilestonesZTE from './components/_dashboard/VendorProjectsMilestones/ZTEProjects/ZTEProjectsMilestones';
import VendorProjectsDatabase from './pages/VendorProjectsDatabase';
import VendorProjectsDatabaseAll from './components/_dashboard/VendorProjectDatabase/AllVendors/AllVendorsDatabases';
import VendorProjectsDatabaseAllProjectsViewOnly from './components/_dashboard/VendorProjectDatabase/AllVendorProjectsDatabasesView/AllVendorsDatabases';
import VendorProjectsDatabaseHuawei from './components/_dashboard/VendorProjectDatabase/Huawei/VendorsDatabasesHuawei';
// vendor prjects All vendor projects pending tasks
import DatabasesVendorProjectsAllVendorPendingTasks from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/PendingTasksHome/VendorDatabasesPendingTasksHome';
import DatabasesVendorProjectsPendingVendorProjectsHODetails from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/HODetails/HODetailsPage';
import DatabasesVendorProjectsPendingVendorProjectsAssign from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Assign/AssignPage';
import DatabasesVendorProjectsPendingVendorProjectsTeamAllocation from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/TeamAllocation/TeamAllocationPage';
import DatabasesVendorProjectsPendingVendorProjectsDependencies from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Dependencies/DependenciesPage';
import DatabasesVendorProjectsPendingVendorProjectsPRPO from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/PRPOProgress/PRPOProgressPage';
import DatabasesVendorProjectsPendingVendorProjectsLogistics from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Logistics/LogisticsPage';
import DatabasesVendorProjectsPendingVendorProjectsImplementation from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Implementation/ImplementationPage';
import DatabasesVendorProjectsPendingVendorProjectsAcceptance from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Acceptance/AcceptancePage';
import DatabasesVendorProjectsPendingVendorProjectsPayment from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Payment/PaymentPage';
// vendor projects Huawei vendor projects pending tasks
import DatabasesVendorProjectsHuaweiPendingTasks from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/PendingTasksHome/VendorDatabasesPendingTasksHome';
import DatabasesVendorProjectsPendingHuaweiProjectsHODetails from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/HODetails/HODetailsPage';
import DatabasesVendorProjectsPendingHuaweiProjectsAssign from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Assign/AssignPage';
import DatabasesVendorProjectsPendingHuaweiProjectsTeamAllocation from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/TeamAllocation/TeamAllocationPage';
import DatabasesVendorProjectsPendingHuaweiProjectsDependencies from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Dependencies/DependenciesPage';
import DatabasesVendorProjectsPendingHuaweiProjectsPRPO from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/PRPOProgress/PRPOProgressPage';
import DatabasesVendorProjectsPendingHuaweiProjectsLogistics from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Logistics/LogisticsPage';
import DatabasesVendorProjectsPendingHuaweiProjectsImplementation from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Implementation/ImplementationPage';
import DatabasesVendorProjectsPendingHuaweiProjectsAcceptance from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Acceptance/AcceptancePage';
import DatabasesVendorProjectsPendingHuaweiProjectsPayment from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Payment/PaymentPage';
// vendor projects ZTE vendor projects pending tasks
import DatabasesVendorProjectsZTEPendingTasks from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/PendingTasksHome/VendorDatabasesPendingTasksHome';
import DatabasesVendorProjectsPendingZTEProjectsHODetails from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/HODetails/HODetailsPage';
import DatabasesVendorProjectsPendingZTEProjectsAssign from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Assign/AssignPage';
import DatabasesVendorProjectsPendingZTEProjectsTeamAllocation from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/TeamAllocation/TeamAllocationPage';
import DatabasesVendorProjectsPendingZTEProjectsDependencies from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Dependencies/DependenciesPage';
import DatabasesVendorProjectsPendingZTEProjectsPRPO from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/PRPOProgress/PRPOProgressPage';
import DatabasesVendorProjectsPendingZTEProjectsLogistics from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Logistics/LogisticsPage';
import DatabasesVendorProjectsPendingZTEProjectsImplementation from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Implementation/ImplementationPage';
import DatabasesVendorProjectsPendingZTEProjectsAcceptance from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Acceptance/AcceptancePage';
import DatabasesVendorProjectsPendingZTEProjectsPayment from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Payment/PaymentPage';
// vendor projects ZTE projects
import VendorProjectsDatabaseZTE from './components/_dashboard/VendorProjectDatabase/ZTE/VendorsDatabasesZTE';
import DatabasesFileUpload from './pages/DatabasesFileUpload';
import VendorProjectsDatabasesFileUpload from './components/_dashboard/DatabasesFilesUploads/VendorProjects/VendorProjectsDatabasesFileUpload';
import MobitelProjectsDatabasesFileUpload from './components/_dashboard/DatabasesFilesUploads/MobitelProjects/MobitelProjectsDatabasesFileUpload';
import MobitelProjectsDatabasesExcelEdit from './components/_dashboard/DatabasesFilesUploads/ExcellEditMobitelProjects/MobitelProjectsDatabasesExcelEdit';
import VendorProjectsDatabasesExcelEdit from './components/_dashboard/DatabasesFilesUploads/ExcellEditVendorProjects/VendorProjectsDatabasesExcelEdit';
import MobitelProjectsMilestones from './pages/MobitelProjectsMilestones';
import MobitelProjectsDatabase from './pages/MobitelProjectsDatabase';
// Mobitel Databases

import DatabasesMobitelProjectsAllMobitelProjects from './components/_dashboard/MobitelProjectDatabase/AllMobitelProjects/AllMobitelProjectsPage';
import DatabasesMobitelProjectsAllMobitelScopeData from './components/_dashboard/MobitelProjectDatabase/AllMobitelProjects/AllMobitelScopeData';
import DatabasesMobitelProjectsAllMobitelHandoverData from './components/_dashboard/MobitelProjectDatabase/AllMobitelProjects/AllMobitelHandoverData';
import DatabasesMobitelProjectsAllMobitelPatPassData from './components/_dashboard/MobitelProjectDatabase/AllMobitelProjects/AllMobitelPatPassData';
import DatabasesMobitelProjectsAllMobitelOnAirData from './components/_dashboard/MobitelProjectDatabase/AllMobitelProjects/AllMobitelOnAirData';
import DatabasesMobitelProjectsAllMobitelHoldData from './components/_dashboard/MobitelProjectDatabase/AllMobitelProjects/AllMobitelHoldData';
import DatabasesMobitelProjectsPendingMobitelProjects from './components/_dashboard/MobitelProjectDatabase/PendingTasks/PendingTasksHome/MobitelDatabasesPendingTasksHome';
import DatabasesMobitelProjectsPendingMobitelProjectsInstallation from './components/_dashboard/MobitelProjectDatabase/PendingTasks/installation/InstallationDetailsPage';
import DatabasesMobitelProjectsPendingMobitelProjectsCommissioning from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Commissioning/CommissioningPage';
import DatabasesMobitelProjectsPendingMobitelProjectsPat from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Pat/PatPage';
import DatabasesMobitelProjectsPendingMobitelProjectsSar from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Sar/SarPage';
import DatabasesMobitelProjectsPendingMobitelProjectsOnAir from './components/_dashboard/MobitelProjectDatabase/PendingTasks/onAir/OnAirPage';
import DatabasesMobitelProjectsPendingMobitelProjectsMaterialReturn from './components/_dashboard/MobitelProjectDatabase/PendingTasks/materialReturn/MaterialReturnPage';
import DatabasesMobitelProjectsPendingMobitelProjectsPr from './components/_dashboard/MobitelProjectDatabase/PendingTasks/pr/PrPage';
import DatabasesMobitelProjectsPendingMobitelProjectsPo from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Po/PoPage';
import DatabasesMobitelProjectsPendingMobitelProjectsInvoice from './components/_dashboard/MobitelProjectDatabase/PendingTasks/invoice/InvoicePage';
import DatabasesMobitelProjectsPendingMobitelProjectsPoClosure from './components/_dashboard/MobitelProjectDatabase/PendingTasks/poClosure/PoClosurePage';
import DatabasesMobitelProjectsAllMobitelProjectsViewOnly from './components/_dashboard/MobitelProjectDatabase/ViewOnlyMobitelDatabase/ViewOnlyMobitelProjectsPage';

// Users
import RegisterUsers from './pages/RegisterUsers';
import UserList from './pages/UserList';
import UserProfile from './pages/UserProfile';
import TestDb1 from './pages/TestDb1';
import TestDb1CreatePost from './pages/TestDb1CreatePost';
import TestDb1ViewPost from './pages/TestDb1ViewPost';
import EditDetailsVOT from './components/_dashboard/VendorProjectsOverview/EditDetails';
import AddNewVendorProject from './components/_dashboard/VendorProjectDatabase/AllVendors/AddNewVendorProject';
import AddNewHuaweiVendorProject from './components/_dashboard/VendorProjectDatabase/Huawei/AddNewVendorProject';
import AddNewZTEVendorProject from './components/_dashboard/VendorProjectDatabase/ZTE/AddNewVendorProject';
// Edit vendor projects database by forms
import EditAllVendorProjectsDatabase from './components/_dashboard/VendorProjectDatabase/AllVendors/EditAllVendorProjectsDatabase';
import EditProjectHODetails from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/HODetails/EditProjectHODetails';
import EditProjectAssign from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Assign/EditProjectAssign';
import EditTeamAllocation from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/TeamAllocation/EditTeamAllocation';
import EditProjectDependencies from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Dependencies/EditProjectDependencies';
import EditPRPOProgress from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/PRPOProgress/EditPRPOProgress';
import EditProjectLogistics from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Logistics/EditProjectLogistics';
import EditImplementation from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Implementation/EditProjectImplementation';
import EditProjectAcceptance from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Acceptance/EditProjectAcceptance';
import EditProjectPayment from './components/_dashboard/VendorProjectDatabase/AllVendors/PendingTasks/Payment/EditProjectPayment';
// Edit Huawei projects database by forms
import EditHuaweiVendorProjectsDatabase from './components/_dashboard/VendorProjectDatabase/Huawei/EditAllVendorProjectsDatabase';
import EditHuaweiProjectHODetails from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/HODetails/EditProjectHODetails';
import EditHuaweiProjectAssign from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Assign/EditProjectAssign';
import EditHuaweiTeamAllocation from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/TeamAllocation/EditTeamAllocation';
import EditHuaweiProjectDependencies from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Dependencies/EditProjectDependencies';
import EditHuaweiPRPOProgress from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/PRPOProgress/EditPRPOProgress';
import EditHuaweiProjectLogistics from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Logistics/EditProjectLogistics';
import EditHuaweiImplementation from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Implementation/EditProjectImplementation';
import EditHuaweiProjectAcceptance from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Acceptance/EditProjectAcceptance';
import EditHuaweiProjectPayment from './components/_dashboard/VendorProjectDatabase/Huawei/PendingTasks/Payment/EditProjectPayment';
// Edit ZTE projects database by forms
import EditZTEVendorProjectsDatabase from './components/_dashboard/VendorProjectDatabase/ZTE/EditZTEProjectsDatabase';
import EditZTEProjectHODetails from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/HODetails/EditProjectHODetails';
import EditZTEProjectAssign from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Assign/EditProjectAssign';
import EditZTETeamAllocation from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/TeamAllocation/EditTeamAllocation';
import EditZTEProjectDependencies from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Dependencies/EditProjectDependencies';
import EditZTEPRPOProgress from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/PRPOProgress/EditPRPOProgress';
import EditZTEProjectLogistics from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Logistics/EditProjectLogistics';
import EditZTEImplementation from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Implementation/EditProjectImplementation';
import EditZTEProjectAcceptance from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Acceptance/EditProjectAcceptance';
import EditZTEProjectPayment from './components/_dashboard/VendorProjectDatabase/ZTE/PendingTasks/Payment/EditProjectPayment';
// Edit ZTE Vendor Projects Database
import AddNewMobitelProject from './components/_dashboard/MobitelProjectDatabase/AllMobitelProjects/AddNewMobitelProject';
import EditMobitelProject from './components/_dashboard/MobitelProjectDatabase/AllMobitelProjects/EditMobitelProject';
import EditMobitelProjectHandover from './components/_dashboard/MobitelProjectDatabase/PendingTasks/installation/EditMobitelProjectHODetails';
import EditMobitelProjectWorkAllocation from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Commissioning/EditMobitelProjectAssign';
import EditMobitelProjectTeamAllocation from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Pat/EditMobitelProjectTeamAllocation';
import EditMobitelProjectDependencies from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Sar/EditMobitelProjectDependencies';
import EditMobitelProjectLogistic from './components/_dashboard/MobitelProjectDatabase/PendingTasks/materialReturn/EditMobitelProjectLogistics';
import EditMobitelProjectPRPOProgress from './components/_dashboard/MobitelProjectDatabase/PendingTasks/onAir/EditMobitelProjectPRPOProgress';
import EditMobitelProjectImplementation from './components/_dashboard/MobitelProjectDatabase/PendingTasks/pr/EditMobitelProjectImplementation';
import EditMobitelProjectAcceptance from './components/_dashboard/MobitelProjectDatabase/PendingTasks/Po/EditMobitelProjectAcceptance';
import EditMobitelProjectPayment from './components/_dashboard/MobitelProjectDatabase/PendingTasks/invoice/EditMobitelProjectPayment';
import EditDetailsMOT from './components/_dashboard/MobitelProjectsOverview/EditDetails';
import TestDatagrid from './pages/TestDatagrid';
import Settings from './pages/Settings';
import SettingsVendorProjectsHome from './components/_dashboard/Settings/VendorProjects/VendorProjectsSetingsHome';
import SettingsMobitelProjectsHome from './components/_dashboard/Settings/MobitelProjects/MobitelProjectsSetingsHome';
import SettingsMobitelProjectsSiteEngineers from './components/_dashboard/Settings/MobitelProjects/SiteEngineers/MobitelProjectsSettingsSiteEngineers';
import SettingsMobitelProjectsSpecialTag from './components/_dashboard/Settings/MobitelProjects/SpecialTag/MobitelProjectsSettingsSpecialTag';
import SettingsMobitelProjectsDependency from './components/_dashboard/Settings/MobitelProjects/Dependency/MobitelProjectsSettingsDependency';
import SettingsMobitelProjectsSiteStatus from './components/_dashboard/Settings/MobitelProjects/SiteStatus/MobitelProjectsSettingSiteStatus';
import SettingsMobitelProjectsResponsible from './components/_dashboard/Settings/MobitelProjects/Responsible/MobitelProjectsSettingsResponsible';
import SettingsMobitelProjectsScope from './components/_dashboard/Settings/MobitelProjects/Scope/MobitelProjectsSettingsScope';
import SettingsMobitelProjectsNewRAT from './components/_dashboard/Settings/MobitelProjects/New_RAT/MobitelProjectsSettingsNew_RAT';
import SettingsMobitelProjectsSubContractor from './components/_dashboard/Settings/MobitelProjects/Sub_Contractor/MobitelProjectsSettingsSub_Contractor';

// Admin matiriyal
import Material from './pages/Material';
import MobitelSiteEngineersDayPlan from './pages/MobitelSiteEngineersDayPlan';
import store from './Redux/store';
import GivingAccessPendingTasks from './pages/GivingAccessPendingTasks';
import PrivateRoute from './PrivateRoute';
import Layout from './components/Layour';
import RequireAuth from '../src/components/RequireAuth';
import { userRoles } from '../src/components/routing/Constants';
import LoginCheck from './loginCheck';
import { WindowSharp } from '@mui/icons-material';

import VenderDatabaseTableFormatEdit from './pages/VenderDatabasePage';

export default function Router() {
  // const [userRole, setUserRole] = useState('Admin');

  const userRole = localStorage.getItem('accessprivilege');
  // useEffect(() => {
  //   const roles = localStorage.getItem('accessprivilege');
  //   if (roles !== 'undefined' || roles !== null) {
  //     setUserRole(roles);
  //   }
  // }, []);

  // console.log(userRole);

  return useRoutes([
    {
      path: '/login',
      element: <Login />
    },

    {
      path: '/OtherLogin',
      element: <OtherLogin />
    },
    {
      path: '/dashboard',
      element: (
        <RequireAuth>
          <DashboardLayout />
        </RequireAuth>
      ),
      children: [
        // Admin mod
        {
          path: 'app',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DashboardApp />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'databases',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <Databases />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },

        {
          path: 'Material',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <Material />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },

        {
          path: 'MobitelSiteEngineersDayPlan',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <MobitelSiteEngineersDayPlan />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },

        // Admin mod vendor
        {
          path: 'VendorProjectsOverview',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <VendorProjectsOverview />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsOverviewAll',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <AllVendorProjectsOverview />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsOverviewHuawei',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <VendorProjectsOverviewHuawei />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsOverviewZTE',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <VendorProjectsOverviewZTE />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsOverview/EditDetails/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditDetailsVOT />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsInsights',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <VendorProjectsInsightsHome />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsInsightsAll',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <VendorProjectsInsights />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsInsightsHuawei',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <HuaweiProjectsInsights />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsInsightsZTE',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <ZTEProjectsInsights />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsMilestones',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <VendorProjectsMilestones />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsMilestonesAll',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <VendorProjectsMilestonesAll />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsMilestonesHuawei',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <VendorProjectsMilestonesHuawei />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'VendorProjectsMilestonesZTE',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <VendorProjectsMilestonesZTE />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <VendorProjectsDatabase />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsAll',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <VendorProjectsDatabaseAll />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsAll/ViewOnly',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <VendorProjectsDatabaseAllProjectsViewOnly />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsAll/PendingTasks/Home',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsAllVendorPendingTasks />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsAll/PendingTasks/Handover',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingVendorProjectsHODetails />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsAll/PendingTasks/WorkAllocation',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingVendorProjectsAssign />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsAll/PendingTasks/TeamAllocation',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingVendorProjectsTeamAllocation />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsAll/PendingTasks/Dependencies',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingVendorProjectsDependencies />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsAll/PendingTasks/PRPOProgress',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingVendorProjectsPRPO />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsAll/PendingTasks/Logistics',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingVendorProjectsLogistics />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsAll/PendingTasks/Implementation',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingVendorProjectsImplementation />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsAll/PendingTasks/Acceptance',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingVendorProjectsAcceptance />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsAll/PendingTasks/Payment',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingVendorProjectsPayment />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsHuawei/PendingTasks/Home',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsHuaweiPendingTasks />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsHuawei/PendingTasks/Handover',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingHuaweiProjectsHODetails />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsHuawei/PendingTasks/WorkAllocation',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Vendor - Huawei' ? (
              <DatabasesVendorProjectsPendingHuaweiProjectsAssign />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsHuawei/PendingTasks/TeamAllocation',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingHuaweiProjectsTeamAllocation />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsHuawei/PendingTasks/Dependencies',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingHuaweiProjectsDependencies />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsHuawei/PendingTasks/PRPOProgress',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingHuaweiProjectsPRPO />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsHuawei/PendingTasks/Logistics',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingHuaweiProjectsLogistics />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsHuawei/PendingTasks/Implementation',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingHuaweiProjectsImplementation />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsHuawei/PendingTasks/Acceptance',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingHuaweiProjectsAcceptance />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsHuawei/PendingTasks/Payment',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingHuaweiProjectsPayment />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsZTE/PendingTasks/Home',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsZTEPendingTasks />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsZTE/PendingTasks/Handover',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingZTEProjectsHODetails />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsZTE/PendingTasks/WorkAllocation',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingZTEProjectsAssign />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsZTE/PendingTasks/TeamAllocation',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingZTEProjectsTeamAllocation />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsZTE/PendingTasks/Dependencies',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingZTEProjectsDependencies />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsZTE/PendingTasks/PRPOProgress',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingZTEProjectsPRPO />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsZTE/PendingTasks/Logistics',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingZTEProjectsLogistics />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsZTE/PendingTasks/Implementation',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingZTEProjectsImplementation />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsZTE/PendingTasks/Acceptance',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingZTEProjectsAcceptance />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsZTE/PendingTasks/Payment',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesVendorProjectsPendingZTEProjectsPayment />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsHuawei',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <VendorProjectsDatabaseHuawei />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjectsZTE',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <VendorProjectsDatabaseZTE />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/AddNew',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <AddNewVendorProject />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/AddNew/Huawei',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <AddNewHuaweiVendorProject />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/AddNew/ZTE',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <AddNewZTEVendorProject />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesUploadProjectFiles',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesFileUpload />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesUploadProjectFiles/VendorProjects',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <VendorProjectsDatabasesFileUpload />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesUploadProjectFiles/VendorProjects/ExcelEdit',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <VendorProjectsDatabasesExcelEdit />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/AllProjects/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditAllVendorProjectsDatabase />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/AllHandover/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditProjectHODetails />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/AllWorkAllocation/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditProjectAssign />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/AllTeamAllocation/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditTeamAllocation />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/AllDependencies/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditProjectDependencies />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/AllPRPOProgress/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditPRPOProgress />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/AllLogistics/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditProjectLogistics />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/AllImplementation/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditImplementation />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/AllAcceptance/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditProjectAcceptance />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/AllPayment/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditProjectPayment />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/HuaweiProjects/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditHuaweiVendorProjectsDatabase />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/Huawei/Handover/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditHuaweiProjectHODetails />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/Huawei/WorkAllocation/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditHuaweiProjectAssign />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/Huawei/TeamAllocation/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditHuaweiTeamAllocation />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/Huawei/Dependencies/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditHuaweiProjectDependencies />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/Huawei/PRPOProgress/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditHuaweiPRPOProgress />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/Huawei/Logistics/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditHuaweiProjectLogistics />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/Huawei/Implementation/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditHuaweiImplementation />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/Huawei/Acceptance/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditHuaweiProjectAcceptance />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/Huawei/Payment/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditHuaweiProjectPayment />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/ZTEProjects/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditZTEVendorProjectsDatabase />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/ZTE/Handover/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditZTEProjectHODetails />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/ZTE/Assign/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditZTEProjectAssign />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/ZTE/TeamAllocation/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditZTETeamAllocation />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/ZTE/Dependencies/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditZTEProjectDependencies />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/ZTE/PRPOProgress/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditZTEPRPOProgress />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/ZTE/Logistics/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditZTEProjectLogistics />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/ZTE/Implementation/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditZTEImplementation />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/ZTE/Acceptance/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditZTEProjectAcceptance />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesVendorProjects/ZTE/Payment/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditZTEProjectPayment />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        // Admin mod
        {
          path: 'MobitelProjectsOverview',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <MobitelProjectsOverview />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'MobitelProjectsOverview/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditDetailsMOT />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'MobitelProjectsInsights',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <MobitelProjectsInsights />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'MobitelProjectsMilestones',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <MobitelProjectsMilestones />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'MobitelProjectsFinance',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <MobitelProjectsFinance />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'MobitelProjects/SubProjects',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <MobitelSubProjects />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'MobitelProjects/SiteEngineers',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <MobitelProjectsSiteEngineers />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        // Admin mod editor
        {
          path: 'DatabasesMobitelProjects',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <MobitelProjectsDatabase />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/AllMobitelProjects',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesMobitelProjectsAllMobitelProjects />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },

        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesMobitelProjectsPendingMobitelProjects />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks/Installation',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesMobitelProjectsPendingMobitelProjectsInstallation />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks/Commissioning',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesMobitelProjectsPendingMobitelProjectsCommissioning />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks/Pat',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesMobitelProjectsPendingMobitelProjectsPat />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks/Sar',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesMobitelProjectsPendingMobitelProjectsSar />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks/OnAir',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesMobitelProjectsPendingMobitelProjectsOnAir />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks/MaterialReturn',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesMobitelProjectsPendingMobitelProjectsMaterialReturn />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks/Pr',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesMobitelProjectsPendingMobitelProjectsPr />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks/Po',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesMobitelProjectsPendingMobitelProjectsPo />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks/Invoice',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesMobitelProjectsPendingMobitelProjectsInvoice />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },

        {
          path: 'DatabasesMobitelProjects/PendingMobitelTasks/PoClosure',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <DatabasesMobitelProjectsPendingMobitelProjectsPoClosure />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },

        {
          path: 'DatabasesMobitelProjects/AddNew',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <AddNewMobitelProject />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditMobitelProject />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/Handover/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditMobitelProjectHandover />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/WorkAllocation/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditMobitelProjectWorkAllocation />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/TeamAllocation/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditMobitelProjectTeamAllocation />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/Dependencies/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditMobitelProjectDependencies />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/PRPOProgress/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditMobitelProjectPRPOProgress />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/Logistic/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditMobitelProjectLogistic />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/Implementation/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditMobitelProjectImplementation />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/Acceptance/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditMobitelProjectAcceptance />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesMobitelProjects/Payment/Edit/:id',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <EditMobitelProjectPayment />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        // {
        //   path: 'DatabasesMobitelProjects/AllMobitelProjects/ViewOnly',
        //   element:
        //     userRole === 'Admin' ||
        //     userRole === 'Moderator' ||
        //     userRole === 'Editor' ||
        //     userRole === 'View Only' ? (
        //       <DatabasesMobitelProjectsAllMobit elProjectsViewOnly />
        //     ) : (
        //       <Navigate to="/unauthorized" />
        //     )
        // },

        {
          path: 'DatabasesUploadProjectFiles/MobitelProjects',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <MobitelProjectsDatabasesFileUpload />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'DatabasesUploadProjectFiles/MobitelProjects/ExcelEdit',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <MobitelProjectsDatabasesExcelEdit />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        { path: 'home', element: <Home /> },
        { path: 'tasks', element: <Tasks /> },
        { path: 'userProfile', element: <UserProfile /> },
        { path: 'TestDb1', element: <TestDb1 /> },
        { path: 'TestDb1/addpost', element: <TestDb1CreatePost /> },
        { path: 'TestDb1/post/:id', element: <TestDb1ViewPost /> },
        { path: 'other', element: <Other /> },
        { path: 'addnew', element: <Addnew /> },
        { path: 'user', element: <User /> },
        { path: 'blog', element: <Blog /> },
        { path: 'TasksTestDatagrid', element: <TestDatagrid /> },
        // Admin
        {
          path: 'Users/registerUser',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <RegisterUsers />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'Users/userList',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <UserList />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'settings',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <Settings />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'settings/Givingaccesstopendingtasks',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <GivingAccessPendingTasks />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },

        {
          path: 'settings/VenderTableFormatEdit',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <VenderDatabaseTableFormatEdit />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'settings/VendorProjects',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <SettingsVendorProjectsHome />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'settings/MobitelProjects',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <SettingsMobitelProjectsHome />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'settings/MobitelProjects/SiteEngineers',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <SettingsMobitelProjectsSiteEngineers />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'settings/MobitelProjects/SpecialTag',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <SettingsMobitelProjectsSpecialTag />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'settings/MobitelProjects/Dependency',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <SettingsMobitelProjectsDependency />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'settings/MobitelProjects/SiteStatus',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <SettingsMobitelProjectsSiteStatus />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'settings/MobitelProjects/Responsible',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <SettingsMobitelProjectsResponsible />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'settings/MobitelProjects/Scope',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <SettingsMobitelProjectsScope />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'settings/MobitelProjects/NewRAT',
          element:
            userRole === 'Admin' || userRole === 'Project_Div_Head' ? (
              <SettingsMobitelProjectsNewRAT />
            ) : (
              <Navigate to="/unauthorized" />
            )
        },
        {
          path: 'settings/MobitelProjects/SubCon',
          element:
            userRole === 'Admin' ||
            userRole === 'Project_Div_Head' ||
            userRole === 'Project_TO' ||
            userRole === 'Project_Coor' ||
            userRole === 'Project_PM' ||
            userRole === 'Planning' ? (
              <SettingsMobitelProjectsSubContractor />
            ) : (
              <Navigate to="/unauthorized" />
            )
        }
      ]
    },

    // popup window

    {
      path: 'DatabasesMobitelProjects/AllMobitelScopeData',
      element:
        userRole === 'Admin' ||
        userRole === 'Project_Div_Head' ||
        userRole === 'Project_TO' ||
        userRole === 'Project_Coor' ||
        userRole === 'Project_PM' ||
        userRole === 'Planning' ? (
          <DatabasesMobitelProjectsAllMobitelScopeData />
        ) : (
          <Navigate to="/unauthorized" />
        )
    },
    {
      path: 'DatabasesMobitelProjects/AllMobitelHandoverData',
      element:
        userRole === 'Admin' ||
        userRole === 'Project_Div_Head' ||
        userRole === 'Project_TO' ||
        userRole === 'Project_Coor' ||
        userRole === 'Project_PM' ||
        userRole === 'Planning' ? (
          <DatabasesMobitelProjectsAllMobitelHandoverData />
        ) : (
          <Navigate to="/unauthorized" />
        )
    },
    {
      path: 'DatabasesMobitelProjects/AllMobitelPatPassData',
      element:
        userRole === 'Admin' ||
        userRole === 'Project_Div_Head' ||
        userRole === 'Project_TO' ||
        userRole === 'Project_Coor' ||
        userRole === 'Project_PM' ||
        userRole === 'Planning' ? (
          <DatabasesMobitelProjectsAllMobitelPatPassData />
        ) : (
          <Navigate to="/unauthorized" />
        )
    },
    {
      path: 'DatabasesMobitelProjects/AllMobitelOnAirData',
      element:
        userRole === 'Admin' ||
        userRole === 'Project_Div_Head' ||
        userRole === 'Project_TO' ||
        userRole === 'Project_Coor' ||
        userRole === 'Project_PM' ||
        userRole === 'Planning' ? (
          <DatabasesMobitelProjectsAllMobitelOnAirData />
        ) : (
          <Navigate to="/unauthorized" />
        )
    },

    { path: 'unauthorized', element: <Unauthorized /> },
    { path: '404', element: <NotFound /> },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
