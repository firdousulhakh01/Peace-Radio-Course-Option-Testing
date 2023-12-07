import React from 'react'
import { Typography, Avatar, Fade } from '@material-ui/core'
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
  var c = 'lightcoral'
  // console.log(props.abc === props.idd)
  return (
    <Accordion onChange={props.fn(props.idd)} expanded={props.abc === props.idd} elevation={2}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={props.classes.expandIcon} />}
        aria-controls=""
        id=""
        style={{ backgroundColor: props.label === 'Course Work' ? `${c}` : '' }}
      >
        <Avatar className={props.classes.avatar}>
          <SchoolIcon />
        </Avatar>
        <Typography className={props.classes.heading}>{props.label}</Typography>
        {props.label === 'Course Work' ? <Fade
          in={props.abc === props.idd}
          timeout={500}
        >
          <Avatar className={props.classes.avatarPlay}>
            <GetAppIcon />
          </Avatar>

        </Fade> : ''}

      </AccordionSummary>
      <AccordionDetails>
        {props.label === 'Course Work' ? <>
          {/* <img src={logo} alt='peaceradio' style={{ paddingLeft: '20px', width: '33.33%' }} /> */}
          <Typography variant='subtitle1' style={{ padding: '0 25px', backgroundColor: 'lightgrey', color: 'black' }}>Course Work heading</Typography>
          <div style={{ padding: '25px' }}>
            ആശയസ്വീകരണത്തിനും ദൈവസ്മരണകൾക്കും വിനോദത്തിനുമെല്ലാമുള്ള മനുഷ്യന്റെ പ്രധാന സ്രോതസ്സാണ് കേൾവി.
            എന്നാൽ അഹിതമായതിനോട് ചെവിയടക്കാൻ കഴിയാത്തതിനാൽ തന്നെ ശബ്ദഘോഷങ്ങളുടെ മലവെള്ളപ്പാച്ചിലിൽ എല്ലാം കേൾക്കാൻ നിർബന്ധിതനായിരിക്കുന്നു അവൻ.
            നല്ലത് തിരഞ്ഞെടുക്കാൻ പോലും അപ്രിയമായത് കേൾക്കേണ്ട ദുരവസ്ഥയിലാണ് ഓരോരുത്തരും.
            സെലിബ്രിറ്റി മാനസികാവസ്ഥയുള്ള യുവാക്കൾ ഏറിയ പങ്കും പ്രേക്ഷകരായുള്ള ഒരു സംവിധാനത്തിലേക്കാണ് മൂല്യവത്തായ ആശയങ്ങൾ മാത്രമുൾക്കൊള്ളുന്ന പീസ് റേഡിയോ കടന്നുവരുന്നത്..!
          </div>
        </> : <div style={{ padding: '25px' }}>Content here</div>}

      </AccordionDetails>
    </Accordion>
  )
}

export default Menu
