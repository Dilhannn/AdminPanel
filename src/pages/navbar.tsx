import { styled, alpha } from '@mui/material/styles';
import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { Avatar, Drawer, List, ListItem, ListItemText } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: '#202531' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        open={open}
                        onClose={() => setOpen(false)}
                        sx={{
                            '& .MuiDrawer-paper': {
                                width: 250,
                            },
                        }}
                    >
                        <List sx={{ bgcolor: "#202531" }}>
                            <ListItem
                                sx={{ bgcolor: "#202531", cursor: 'pointer' }}
                                onClick={() => {
                                    setOpen(false),
                                        navigate(`/categories`)
                                }}
                            >
                                <CategoryIcon sx={{ color: "white", padding: 1 }} />
                                <ListItemText primary="Kategoriler" sx={{ color: "white" }} />
                            </ListItem>
                            <ListItem sx={{ bgcolor: "#202531", cursor: 'pointer' }}>
                                <SettingsIcon sx={{ color: "white", padding: 1 }} />
                                <ListItemText primary="Settings" sx={{ color: "white" }} />
                            </ListItem>
                            <ListItem sx={{ bgcolor: "#202531", cursor: 'pointer' }}>
                                <PersonIcon sx={{ color: "white", padding: 1 }} />
                                <ListItemText primary="Profile" sx={{ color: "white" }} />
                            </ListItem>
                        </List>
                    </Drawer>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        ADMIN PANEL
                    </Typography>
                    <Search sx={{marginRight:2}}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <IconButton>
                    <Avatar  alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
