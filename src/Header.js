import React, { useContext } from 'react';
import { ToastContext } from './context/ToastContext';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { createMockFormSubmission } from './service/mockServer';

export default function Header() {
  const { setVertical, setHorizontal, setOpen } = useContext(ToastContext);

  const handleClick = () => {
    createMockFormSubmission();
    setOpen(true);
    setVertical('bottom');
    setHorizontal('right');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: '120px', backgroundColor: '#000' }}>
        <Toolbar sx={{ height: '120px' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Toast Exercise
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="success"
            onClick={handleClick}
            sx={{ padding: '15px 20px', fontSize: '15px' }}
          >
            New Submission
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
