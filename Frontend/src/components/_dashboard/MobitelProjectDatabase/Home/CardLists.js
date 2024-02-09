// material
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Link } from '@mui/material';
import PendingTasks from './PendingTasks';
import AllMobitelProjects from './AllMobitelProjects';
// ----------------------------------------------------------------------
export default function CardLists() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={2.4}>
        <Link
          underline="none"
          component={RouterLink}
          to="/dashboard/DatabasesMobitelProjects/AllMobitelProjects"
        >
          <AllMobitelProjects />
        </Link>
      </Grid>
      {/* <Grid item xs={12} sm={6} md={2.4}>
        <Link
          underline="none"
          component={RouterLink}
          to="/dashboard/DatabasesMobitelProjects/PendingMobitelTasks"
        >
          <PendingTasks />
        </Link>
      </Grid> */}
    </Grid>
  );
}
