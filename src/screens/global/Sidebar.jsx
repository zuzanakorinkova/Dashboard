import {useState} from 'react';
import {Sidebar as ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import {Link, NavLink} from 'react-router-dom';
import {tokens} from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import BarChartOutlinedIcon  from '@mui/icons-material/BarChartOutlined';


const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
        <Link to={to} style={{textDecoration: "none"}}> 
            <MenuItem active={selected === title} style={{color: colors.primary[300]}} onClick={() => setSelected(title)} icon={icon}>
            <Typography>{title}</Typography>
            </MenuItem>   
        </Link>
    )
}

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard')

    return (
        <Box
        sx={{
            "& .pro-sidebar-inner": {
                backgroundColor: `${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper": {
                backgroundColor: `transparent !important`
            },
            "& .pro-inner-item": {
                padding: `5px 35px 5px 20px !important`
            },
            "& .pro-inner-item:hover": {
                color: `#868dfb !important`
            },
            "& .pro-menu-item.active": {
                color: `#6870fa !important`
            },
        }}
        >
            <ProSidebar collapsed={isCollapsed} style={{height: "100vh"}}>
                <Menu iconShape="square">
                    <MenuItem onClick={() => setIsCollapsed(!isCollapsed)} icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                    style={{margin: "10px 0 20px 0", color: colors.primary[300]}}>
                        {!isCollapsed && (
                            <Box
                            ml="15px">
                    
                                <IconButton >
                                    <MenuOutlinedIcon />
                                </IconButton>

                            </Box>
                        )}
                    </MenuItem>
                    {!isCollapsed && (
                        <Box mb="25px" paddingLeft={isCollapsed ? undefined : '20%'}>
                            
                            <Box>
                                <Typography variant="h2" sx={{m: "30px 0 0 0"}}>S&J</Typography>
                                <Typography>@electric</Typography>
                            </Box>
                        </Box>
                    )}
                    <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                        <Item
                        title="Dashboard"
                        to="/"
                        icon={<HomeOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Contacts"
                        to="/contacts"
                        icon={<ContactsOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Typography variant="h6" color={colors.primary[200]} sx={{m: "15px 0 5px 20px"}}>Charts</Typography>
                        <Item
                        title="Bar Chart"
                        to="/bar"
                        icon={<BarChartOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                         <Item
                        title="Line Chart"
                        to="/line"
                        icon={<TimelineOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
        )
}

export default Sidebar;