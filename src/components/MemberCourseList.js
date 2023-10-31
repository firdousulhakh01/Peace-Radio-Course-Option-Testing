import React, { useContext, useRef } from 'react';
import ProfileSingle from './ProfileSingle';
import CoursesList from './CoursesList';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { UserContext } from '../contexts/UserContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    zIndex: 1500,
    boxShadow: "none",
    // marginTop: "14vw",
  },
  tab: {
    position: "relative",
    zIndex: 1500,
    boxShadow: '0 2px 5px 2px rgba(0, 0, 0, .2)',
  },
  removeShadow: {
    boxShadow: "none"
  },
  tabPanel: {
    backgroundColor: "white"
  }

}));

function MemberCourseList() {
  const classes = useStyles();
  const theme = useTheme();
  const appBar = useRef()
  const { user, setUser } = useContext(UserContext);
  const scrollToTop = (index) => {
    window.scrollTo(0, appBar.current.offsetTop)
  };
  console.log(user, "MCL")
  return (
    <Paper ref={appBar} className={classes.root}>
      <AppBar position="static" className={classes.removeShadow}>
        <Toolbar>
        </Toolbar>
      </AppBar>
      <ProfileSingle />
      <CoursesList />
    </Paper>

  )
}

export default MemberCourseList