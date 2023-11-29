import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext';
import { CourseContext } from '../contexts/CourseContext';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Course from './Course';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import { listVariants, listItemXVariants, listItemYVariants } from '../ui/MotionVariants';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    zIndex: 0,
  },
  inline: {
    display: 'inline',
  },
  texth5: {
    textAlign: "left",
    fontSize: "20px",
    paddingTop: "25px",
    paddingLeft: "0px",
    paddingBottom: "0px",
    maxWidth: "500px",
    color: theme.palette.primary.main
  },
}));

export default function CoursesList() {
  const classes = useStyles();
  const { user, setUser } = useContext(UserContext);
  const { course, setCourse } = useContext(CourseContext);

  return (
    <Container m={2} className={classes.root}>
      <Container m={2}>
        <motion.div initial="hidden" animate="visible" variants={listItemYVariants}>
          <Typography className={classes.texth5} variant="h5">Enrolled Courses</Typography>
        </motion.div>
      </Container>
      <List component="nav" className={classes.root}>
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          {user.memberList[user.selectedUser].coursesList.filter(course => course.enrolled === 'Y').map((course, index) =>
            <motion.div variants={listItemXVariants} key={index}>
              <Course courseProp={course}></Course>
            </motion.div>
          )}
        </motion.div>
      </List>
      <Container m={2} className={classes.root3}>
        <motion.div initial="hidden" animate="visible" variants={listItemYVariants}>
          <Typography className={classes.texth5} variant="h5">Un-enrolled Courses</Typography>
        </motion.div>
        {/* <Divider /> */}
      </Container>
      <List component="nav" className={classes.root}>
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          {user.memberList[user.selectedUser].coursesList.filter(course => course.enrolled === 'N').map((course, index) =>
            <motion.div variants={listItemXVariants} key={index}>
              <Course courseProp={course}></Course>
            </motion.div>
          )}
        </motion.div>
      </List>
    </Container>
  );
}
