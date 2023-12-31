import React from 'react';
import { Typography, Avatar, Button, TextField } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    margin: "10px 10px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(14),
    // flexBasis: '100%',
    fontWeight: 700,
    // flexShrink: 0,
    color: theme.palette.primary.dark,
    alignSelf: 'center',
  },
  detailText: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.primary.dark,
    whiteSpace: 'pre-line',
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
  },
  avatarPlay: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    // alignSelf: 'flex-end',
    marginLeft: 'auto',
    marginRight: theme.spacing(0),
    transition: theme.transitions.create(["transform"], {
      duration: theme.transitions.duration.short
    })
  },
  expandIcon: {
    color: theme.palette.primary.main,
  },
  openTransition: {
    transform: "rotate(0)",
  },
  closeTransition: {
    transform: "rotate(-180deg)",
  },
  player: {
    position: 'fixed',
    bottom: theme.spacing(2),
    margin: theme.spacing(1),
    right: theme.spacing(3),
  },
  button: {
    marginLeft: '70px',
    //marginTop: '15px'
  },
  textField: {
    width: '130px',
    //display: 'inline-block'
  }
}));

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
    // backgroundColor: 'lightgrey',
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

const LateExamRequest = (props) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const classes = useStyles();


  return (
    <Accordion expanded={props.expanded === props.id} onChange={props.handleChange(props.id)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
        aria-controls=""
        id=""
      >
        <Avatar className={classes.avatar}>
          <MenuBookIcon />
        </Avatar>
        <Typography className={classes.heading}>Late Exam Request</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div style={{ padding: '25px' }}>
          <Typography style={{ marginBottom: '15px' }}>Content here...</Typography>
          <form>
            <FormControl component="fieldset">
              <FormLabel component="legend" style={{ marginBottom: '15px' }}>Select the reason for request:</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="Reason 1" control={<Radio />} label="Reason 1" />
                <FormControlLabel value="Reason 2" control={<Radio />} label="Reason 2" />
                <FormControlLabel value="Reason 3" control={<Radio />} label="Other" style={{ marginBottom: '15px' }} />
                {value === 'Reason 3' && <TextField id="standard-basic" variant="outlined" size='small' placeholder="Type here" style={{ marginBottom: '15px' }} />}
              </RadioGroup>
              <Typography style={{ marginBottom: '15px' }}>Select date:</Typography>
              <TextField
                id="date"
                label="From"
                type="date"
                //defaultValue="18-12-2023"
                style={{ marginBottom: '15px' }}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="date"
                label="To"
                type="date"
                //defaultValue="2017-05-24"
                style={{ marginBottom: '15px' }}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button variant="outlined" color="primary" className={classes.button}>
                Submit
              </Button>
            </FormControl>

          </form>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default LateExamRequest
