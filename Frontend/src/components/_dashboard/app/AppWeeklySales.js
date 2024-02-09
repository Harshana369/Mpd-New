import react, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import site from '@iconify/icons-eva/radio-outline';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  width: theme.spacing(25),
  height: theme.spacing(27),
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------
export default function AppWeeklySales({ CommissionedData }) {
  const [TOTAL, setTOTAL] = useState('0');

  const mobitelTilesDetails = useSelector((state) => state.mobileTilesData);

  const { loading, error, mobitelTilesData } = mobitelTilesDetails;

  useEffect(() => {
    if (Number.isNaN(Number(CommissionedData)) === false) {
      setTOTAL(CommissionedData);
    }
  }, [CommissionedData]);

  const handleClickOpen = () => {
    // const newWindow = window.open(
    //   `https://projectonline.mobitel.lk/mpd/DatabasesMobitelProjects/AllMobitelScopeData`,
    //   'Scope Details',
    //   'width=1000px,height=400px'
    // );

    // const newWindow = window.open(
    //   `http://35.78.68.113/mpd/DatabasesMobitelProjects/AllMobitelScopeData`,
    //   'Scope Details',
    //   'width=1000px,height=400px'
    // );

    const newWindow = window.open(
      `http://localhost:3001/mpd/DatabasesMobitelProjects/AllMobitelCommissionedData`,
      'Scope Details',
      'width=1000px,height=400px'
    );

    // const newWindow = window.open(
    //   `http://172.22.110.186:8072/mpd/DatabasesMobitelProjects/AllMobitelCommissionedData`,
    //   'Scope Details',
    //   'width=1000px,height=400px'
    // );
    newWindow.arrayData = mobitelTilesData.projectsCommissionedData;
  };
  return (
    <RootStyle>
      <IconWrapperStyle onClick={handleClickOpen}>
        <Icon icon={site} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{TOTAL}</Typography>
      <Typography variant="subtitle1" sx={{ opacity: 1 }}>
        Commissioned
      </Typography>
    </RootStyle>
  );
}