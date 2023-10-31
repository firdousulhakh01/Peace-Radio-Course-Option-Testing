import { useState, useRef } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TabPanel from './TabPanel';
import SwipeableViews from 'react-swipeable-views';
import HomeTab from './coursetabs/HomeTab'
import ModuleTab from './coursetabs/ModuleTab'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.light,
        zIndex: 1500,
        boxShadow: "none",
        height: "100vh",
        overflow: 'auto',
        // marginTop: "14vw",
    },
    tab: {
        backgroundColor: theme.palette.primary.dark,
        position: "relative",
        zIndex: 1500,
        boxShadow: '0 2px 5px 2px rgba(0, 0, 0, .2)',
    },
    removeShadow: {
        boxShadow: "none"
    },
    tabPanel: {
        // backgroundColor: "grey",
    }

}));

export default function IconLabelTabs() {
    const myRef = useRef();
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
    
    const handleChangeTab = (event, index) => {
        setValue(index);
    };

    return (
        <Paper className={classes.root}>
            <AppBar ref={myRef} position="static" className={classes.removeShadow}>
                <Toolbar>
                </Toolbar>
            </AppBar>
            <Tabs
                className={classes.tab}
                value={value}
                onChange={handleChangeTab}
                variant="fullWidth"
                indicatorColor="primary"
                scrollButtons="off"
            // textColor="primary"
            >
                <Tab icon={<HomeIcon />} label="Home" />
                <Tab icon={<SchoolIcon />} label="Module" />
                <Tab icon={<MenuBookIcon />} label="History" />
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeTab}
                style={{ }}
            >
                <TabPanel value={value} index={0} className={classes.tabPanel}>
                    <HomeTab handleChangeTab={handleChangeTab} />
                </TabPanel>
                <TabPanel value={value} index={1} className={classes.tabPanel}>
                    <ModuleTab handleChangeTab={handleChangeTab} />                   
                </TabPanel>
                <TabPanel value={value} index={2} className={classes.tabPanel}>
                    Item Three
                </TabPanel>
            </SwipeableViews>
        </Paper>
    );
}
