import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import QuestionDisplay from './QuestionDisplay';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    detailText: {
        fontSize: theme.typography.pxToRem(14),
        color: theme.palette.primary.dark,
        whiteSpace: 'pre-line',
    },
    detailQuestionText: {
        fontSize: theme.typography.pxToRem(12),
        color: theme.palette.primary.dark,
        whiteSpace: 'pre-line',
    },
    tabsAppBar: {
        boxShadow: 'none',
    },
    tabNames: {
        textTransform: 'none',
    }
}));

export default function ScrollableTabsButtonAuto( {cl} ) {
    const removeHtml = /(<([^>]+)>)/ig
    const removeSlashNR = /(\r\n|\r|\n)+/g

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" className={classes.tabsAppBar}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    
                >
                    <Tab className={classes.tabNames} label="Class Test" {...a11yProps(0)} />
                    <Tab className={classes.tabNames} label="Reference" {...a11yProps(1)} />

                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <QuestionDisplay qsObj={cl.questions}></QuestionDisplay>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography className={classes.detailText}>{cl.referenceText.replace(removeHtml, '').replace(removeSlashNR, '$1') }</Typography>
            </TabPanel>

        </div>
    );
}
