import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Menu, 
  MenuItem, 
  useTheme, 
  useMediaQuery,
  Tooltip,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ toggleColorMode, mode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: 'Dashboard', path: '/' },
    { text: 'Transactions', path: '/transactions' },
    { text: 'Categories', path: '/categories' },
    { text: 'Reports', path: '/reports' },
  ];

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: theme.palette.mode === 'dark' ? '#1f2937' : '#ffffff',
        color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
        boxShadow: theme.palette.mode === 'dark' ? 'none' : '0 1px 3px rgba(0,0,0,0.12)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography 
            variant="h6" 
            component={Link}
            to="/"
            sx={{ 
              flexGrow: 0, 
              fontWeight: 'bold',
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              mr: { xs: 1, sm: 4 },
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            Expense Tracker
          </Typography>
          
          {isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
                sx={{ mr: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                PaperProps={{
                  sx: {
                    mt: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#1f2937' : '#ffffff',
                    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
                    minWidth: '200px',
                    '& .MuiMenuItem-root': {
                      padding: '8px 16px',
                      '&:hover': {
                        backgroundColor: theme.palette.mode === 'dark' 
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.04)',
                      },
                    },
                  },
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem 
                    key={item.text} 
                    component={Link} 
                    to={item.path}
                    onClick={handleClose}
                    sx={{ 
                      borderRadius: '4px',
                      mx: 1,
                      my: 0.5 
                    }}
                  >
                    {item.text}
                  </MenuItem>
                ))}
              </Menu>
              <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
                <IconButton 
                  onClick={toggleColorMode} 
                  color="inherit"
                  size="large"
                >
                  {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                </IconButton>
              </Tooltip>
            </Box>
          ) : (
            <>
              <Box sx={{ display: 'flex', gap: { sm: 1, md: 2 }, mx: 'auto' }}>
                {menuItems.map((item) => (
                  <Button 
                    key={item.text}
                    color="inherit" 
                    component={Link} 
                    to={item.path}
                    sx={{ 
                      px: { sm: 2, md: 3 },
                      '&:hover': { 
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.04)'
                      },
                      '&.active': {
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.2)'
                          : 'rgba(0, 0, 0, 0.08)'
                      }
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
              <Box>
                <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
                  <IconButton 
                    onClick={toggleColorMode} 
                    color="inherit"
                    size="large"
                  >
                    {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                  </IconButton>
                </Tooltip>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;