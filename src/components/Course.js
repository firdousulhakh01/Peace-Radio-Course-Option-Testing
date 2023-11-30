import React, { useContext } from "react"
import { useNavigate } from "react-router-dom";
import CircularProgressWithLabel from './CircularProgressWithLabel';
import { CourseContext } from '../contexts/CourseContext';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import SchoolIcon from '@material-ui/icons/School';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  courseText: {
    paddingRight: "70px"
  },
  primary: {
    fontWeight: 700,
    // color: "red"
  },
  secondary: {
    fontSize: '14px'
  }
}))

function Course({ courseProp, key }) {
  const { course, setCourse } = useContext(CourseContext);
  const classes = useStyles();
  const history = useNavigate();

  const handleCourseClick = () => {
    //console.log('course.selectedCourse', courseProp)
    setCourse({ ...course, selectedCourse: courseProp })
    history("/home");
  }
  console.log(course, "course")
  return (
    <React.Fragment>
      <ListItem button alignItems="flex-start" className={classes.courseText} onClick={handleCourseClick} key={key}>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.primary, secondary: classes.secondary }}
          primary={courseProp.type_name}
          secondary={courseProp.description}
        />
        <ListItemSecondaryAction>
          {courseProp.enrolled !== 'N' ? <CircularProgressWithLabel value={courseProp.percentageCompletion} /> :
            <Button variant="contained">Enroll</Button>}

        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  )
}

export default Course


