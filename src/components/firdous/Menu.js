import React from 'react'
import { Typography, Avatar, Fade, Button } from '@material-ui/core'
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';
import SchoolIcon from '@material-ui/icons/School';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GetAppIcon from '@material-ui/icons/GetApp';
// import logo from '../../files/Peaceradio-logo.png';
// import Mqs from '../coursetabs/QuestionDisplay'

const Accordion = withStyles({
  root: {
    // border: '1px solid rgba(0, 0, 0, .125)',
    // boxShadow: 'none',
    // '&:not(:last-child)': {
    //     borderBottom: 0,
    // },
    // '&:before': {
    //     display: 'none',
    // },
    // '&$expanded': {
    //     margin: 'auto',
    // },
  },
  expanded: {
    '&$expanded': {
      margin: '12px 0',
      borderRadius: '5px',
    },
  },
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    // backgroundColor: 'rgba(0, 0, 0, .03)',
    // borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    fontWeight: 700,
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
  },
}))(MuiAccordionDetails);

const Menu = (props) => {
  var c = 'lightgreen', a = 'lightblue'
  // console.log(props.abc === props.idd)
  if (props.label === 'Course Work') {
    return (
      <Accordion onChange={props.fn(props.idd)} expanded={props.abc === props.idd} elevation={2}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={props.classes.expandIcon} />}
          aria-controls=""
          id=""
          style={{ backgroundColor: `${c}` }}
        >
          <Avatar className={props.classes.avatar}>
            <SchoolIcon />
          </Avatar>
          <Typography className={props.classes.heading}>{props.label}</Typography>
          <Fade
            in={props.abc === props.idd}
            timeout={500}
          >
            <Avatar className={props.classes.avatarPlay}>
              <GetAppIcon />
            </Avatar>

          </Fade>

        </AccordionSummary>
        <AccordionDetails>

          <Typography variant='subtitle1' style={{ padding: '0 25px', backgroundColor: 'lightgrey', color: 'black' }}>Course Work heading</Typography>
          <div style={{ padding: '25px' }}>
            {props.data.d1}
          </div>


        </AccordionDetails>
      </Accordion>

    )
  }
  if (props.label === 'Assignment') {
    return (
      <Accordion onChange={props.fn(props.idd)} expanded={props.abc === props.idd} elevation={2}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={props.classes.expandIcon} />}
          aria-controls=""
          id=""
          style={{ backgroundColor: `${a}` }}
        >
          <Avatar className={props.classes.avatar}>
            <SchoolIcon />
          </Avatar>
          <Typography className={props.classes.heading}>{props.label}</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <div style={{ padding: '25px' }}>Content here</div>
          <Button variant='contained' style={{ width: '25%', margin: '10px auto', textTransform: 'none' }} color='secondary'>Upload</Button>

        </AccordionDetails>
      </Accordion>
    )
  }
  return (
    <Accordion onChange={props.fn(props.idd)} expanded={props.abc === props.idd} elevation={2}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={props.classes.expandIcon} />}
        aria-controls=""
        id=""
      >
        <Avatar className={props.classes.avatar}>
          <SchoolIcon />
        </Avatar>
        <Typography className={props.classes.heading}>{props.label}</Typography>

      </AccordionSummary>
      <AccordionDetails>
        <div style={{ padding: '25px' }}>Content here</div>

      </AccordionDetails>
    </Accordion>
  )
}

export default Menu
