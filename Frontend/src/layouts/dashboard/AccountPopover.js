import { Icon } from '@iconify/react';

import { useRef, useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';

// import { useDispatch } from 'react-redux';
import homeFill from '@iconify/icons-eva/home-fill';
import personFill from '@iconify/icons-eva/person-fill';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// material
import { alpha } from '@mui/material/styles';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
//
import account from '../../_mocks_/account';

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: homeFill,
    linkTo: '/dashboard/home'
  },
  {
    label: 'Profile',
    icon: personFill,
    linkTo: '/dashboard/userProfile'
  }
];
// ---------------------------------------------------------------------
export default function AccountPopover() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [fullScreenMode, setfullScreenMode] = useState('off');
  const [jsonDecInfo, setjsonDecInfo] = useState('');

  useEffect(() => {
    // getUserData();
    fetchFullScreenStatus();
  }, []);

  const userName = localStorage.getItem('name');
  const userLastName = jsonDecInfo.lastName;
  const userEmail = localStorage.getItem('email');

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const logoutHandler = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('accessprivilege');
    localStorage.removeItem('name');
    localStorage.removeItem('email');

    navigate('/login');
  };

  const FullScreenHandler = () => {
    localStorage.setItem('mode', 'off');
    setfullScreenMode('off');
    navigate(0, { replace: true });
  };

  const FullScreenOffHandler = () => {
    localStorage.setItem('mode', 'on');
    setfullScreenMode('on');
    navigate(0, { replace: true });
  };

  const fetchFullScreenStatus = () => {
    setfullScreenMode(localStorage.getItem('mode'));
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" sx={{ color: 'white' }} noWrap>
            {userName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'white' }} noWrap>
            {userEmail}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box sx={{ my: 1.5, px: 2.5 }}>
          {!fullScreenMode || fullScreenMode === 'on' ? (
            <Button onClick={FullScreenHandler} fullWidth color="primary" variant="contained">
              Full screen on
            </Button>
          ) : (
            <Button onClick={FullScreenOffHandler} fullWidth color="primary" variant="contained">
              Full screen off
            </Button>
          )}
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'subtitle4', py: 1, px: 2.5 }}
          >
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button onClick={logoutHandler} fullWidth color="error" variant="contained">
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
