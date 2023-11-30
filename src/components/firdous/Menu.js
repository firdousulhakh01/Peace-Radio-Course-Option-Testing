import React from 'react'
import { Typography, Avatar } from '@material-ui/core'
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';
import SchoolIcon from '@material-ui/icons/School';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Mqs from '../coursetabs/QuestionDisplay'

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
  // console.log(props.abc === props.idd)
  return (
    <Accordion onChange={props.fn(props.idd)} expanded={props.abc === props.idd} elevation={2} style={{ position: 'sticky', top: '300px' }}>
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
        <div style={{ padding: '25px' }}>
          <Mqs qsObj={props.samD[0].questions} />
          <Mqs qsObj={props.samD[1].questions} />
          <Mqs qsObj={props.samD[2].questions} />
          <Mqs qsObj={props.samD[3].questions} />
          <Mqs qsObj={props.samD[4].questions} />
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default Menu
