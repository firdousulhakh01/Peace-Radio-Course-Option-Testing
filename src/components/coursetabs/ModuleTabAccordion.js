import React, { useContext } from 'react'
// import { UserContext } from '../../contexts/UserContext';
import { CourseContext } from '../../contexts/CourseContext';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Avatar from '@material-ui/core/Avatar';
import SchoolIcon from '@material-ui/icons/School';
// import ClassPlayer from './ClassPlayer';
import ClassReferenceQuestionTab from './ModuleTabQuestionClassReference';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
// import StopIcon from '@material-ui/icons/Stop';
import Fade from '@material-ui/core/Fade';
import { PlayerContext } from '../../contexts/PlayerContext';
// import ListSkeleton from '../../ui/ListSkeleton';
import Menu from '../firdous/Menu'
import VideocamIcon from '@material-ui/icons/Videocam';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import samplePDF from '../../files/girls.pdf'


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
  subHead: {
    fontSize: theme.typography.pxToRem(13),
    marginLeft: '20px',
    fontWeight: 700,
    // flexShrink: 0,
    color: theme.palette.primary.dark,
    alignSelf: 'center'
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
}))

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
    // backgroundColor: 'red',
    // borderBottom: '1px solid rgba(0, 0, 0, .125)',
    // position: 'sticky',
    // top: '56px',
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

const ModuleTabAccordion = () => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('');

  var p = 11, q = 6, r = 'ac';

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    console.log(panel)
  };

  const { player, setPlayer } = useContext(PlayerContext);
  const { course } = useContext(CourseContext);
  // const { user, setUser } = useContext(UserContext);

  // const removeHtml = /(<([^>]+)>)/ig
  // const removeSlashNR = /(?:\r\n|\r|\n)/g

  const handlePlay = (i, c, e) => {
    // e.preventDefault();
    e.stopPropagation();
    //console.log(`${course.moduleTabData.modulesList[0].audioLocationPrefix}${c.classAudio}`)
    setPlayer({
      ...player,
      showPlayer: true,
      playing: true,
      loadedClass: c,
      src: `${course.moduleTabData.modulesList[0].audioLocationPrefix}${c.classAudio}`
    });
    // setPlaying(true);
  }
  console.log(course.moduleTabData.modulesList[0].questionsList[1])
  if (p < q || (r === 'ca' && p === q))
    return (
      <div className={classes.root}>
        {course.moduleTabData && course.moduleTabData.modulesList[0].questionsList.filter((cl, i) => i < p).map(
          (cl, index) =>
            <Accordion expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)} key={index} elevation={2} >
              {/* <div style={{ position: 'sticky', top: '10px' }}> */}


              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls={`panel${index + 1}d-content`} id={`panel${index + 1}d-header`}

              >
                <Avatar className={classes.avatar}>
                  <SchoolIcon />
                </Avatar>
                {/* <div> */}
                <Typography className={classes.heading}>Class {cl.class}</Typography>
                {/* <Fade in={expanded === `panel${(index + 1)}`} timeout={500}>
                  <Typography className={classes.subHead}>Class short details</Typography>
                </Fade> */}
                {/* </div> */}
                <Fade
                  in={expanded === `panel${(index + 1)}`}
                  timeout={500}
                >
                  <Avatar className={classes.avatarPlay}>
                    <VideocamIcon />
                  </Avatar>

                </Fade>
                <Fade
                  in={expanded === `panel${(index + 1)}`}
                  timeout={500}
                >
                  <Avatar onClick={(e) => handlePlay(index, cl, e)} className={classes.avatarPlay}>
                    <PlayArrowIcon />
                  </Avatar>

                </Fade>
              </AccordionSummary>
              {/* </div> */}
              <AccordionDetails>
                {/* <Typography className={classes.detailText}>{cl.referenceText.replace(removeHtml, '').replace(/(\r\n|\r|\n)+/g, '$1') }</Typography> */}
                <ClassReferenceQuestionTab cl={cl} />

              </AccordionDetails>
            </Accordion>
        )}

        <Menu classes={classes} label="Course Work" fn={handleChange} abc={expanded} idd="a1" data={{
          d1: `ആശയസ്വീകരണത്തിനും ദൈവസ്മരണകൾക്കും വിനോദത്തിനുമെല്ലാമുള്ള മനുഷ്യന്റെ പ്രധാന സ്രോതസ്സാണ് കേൾവി.
            എന്നാൽ അഹിതമായതിനോട് ചെവിയടക്കാൻ കഴിയാത്തതിനാൽ തന്നെ ശബ്ദഘോഷങ്ങളുടെ മലവെള്ളപ്പാച്ചിലിൽ എല്ലാം കേൾക്കാൻ നിർബന്ധിതനായിരിക്കുന്നു അവൻ.
            നല്ലത് തിരഞ്ഞെടുക്കാൻ പോലും അപ്രിയമായത് കേൾക്കേണ്ട ദുരവസ്ഥയിലാണ് ഓരോരുത്തരും.
            സെലിബ്രിറ്റി മാനസികാവസ്ഥയുള്ള യുവാക്കൾ ഏറിയ പങ്കും പ്രേക്ഷകരായുള്ള ഒരു സംവിധാനത്തിലേക്കാണ് മൂല്യവത്തായ ആശയങ്ങൾ മാത്രമുൾക്കൊള്ളുന്ന പീസ് റേഡിയോ കടന്നുവരുന്നത്..!`, d2: 'content here'
        }} />
        {course.moduleTabData && course.moduleTabData.modulesList[0].questionsList.filter((cl, i) => i >= p && i < q).map(
          (cl, index) =>
            <Accordion expanded={expanded === `panel${index + p + 1}`} onChange={handleChange(`panel${index + p + 1}`)} key={index} elevation={2} >
              {/* <div style={{ position: 'sticky', top: '10px' }}> */}


              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls={`panel${index + p + 1}d-content`} id={`panel${index + p + 1}d-header`}

              >
                <Avatar className={classes.avatar}>
                  <SchoolIcon />
                </Avatar>
                <Typography className={classes.heading}>Class {cl.class}</Typography>
                {/* <Fade
                in={expanded === `panel${(index + p + 1)}`}
                timeout={500}
              >

                <Typography className={classes.subHead}>Class short details</Typography>


              </Fade> */}
                <Fade
                  in={expanded === `panel${(index + p + 1)}`}
                  timeout={500}
                >
                  <Avatar className={classes.avatarPlay}>
                    <VideocamIcon />
                  </Avatar>

                </Fade>
                <Fade
                  in={expanded === `panel${(index + p + 1)}`}
                  timeout={500}
                >
                  <Avatar onClick={(e) => handlePlay(index, cl, e)} className={classes.avatarPlay}>
                    <PlayArrowIcon />
                  </Avatar>

                </Fade>
              </AccordionSummary>
              {/* </div> */}
              <AccordionDetails>
                {/* <Typography className={classes.detailText}>{cl.referenceText.replace(removeHtml, '').replace(/(\r\n|\r|\n)+/g, '$1') }</Typography> */}
                <ClassReferenceQuestionTab cl={cl} />

              </AccordionDetails>
            </Accordion>
        )}
        <Menu classes={classes} label="Assignment" fn={handleChange} abc={expanded} idd="a6" />
        {course.moduleTabData && course.moduleTabData.modulesList[0].questionsList.filter((cl, i) => i >= q).map(
          (cl, index) =>
            <Accordion expanded={expanded === `panel${index + 1 + q}`} onChange={handleChange(`panel${index + 1 + q}`)} key={index} elevation={2} >
              {/* <div style={{ position: 'sticky', top: '10px' }}> */}


              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls={`panel${index + 1 + q}d-content`} id={`panel${index + 1 + q}d-header`}

              >
                <Avatar className={classes.avatar}>
                  <SchoolIcon />
                </Avatar>
                <Typography className={classes.heading}>Class {cl.class}</Typography>
                {/* <Fade
                in={expanded === `panel${(index + p + 1)}`}
                timeout={500}
              >

                <Typography className={classes.subHead}>Class short details</Typography>


              </Fade> */}
                <Fade
                  in={expanded === `panel${(index + 1 + q)}`}
                  timeout={500}
                >
                  <Avatar className={classes.avatarPlay}>
                    <VideocamIcon />
                  </Avatar>

                </Fade>
                <Fade
                  in={expanded === `panel${(index + 1 + q)}`}
                  timeout={500}
                >
                  <Avatar onClick={(e) => handlePlay(index, cl, e)} className={classes.avatarPlay}>
                    <PlayArrowIcon />
                  </Avatar>

                </Fade>
              </AccordionSummary>
              {/* </div> */}
              <AccordionDetails>
                {/* <Typography className={classes.detailText}>{cl.referenceText.replace(removeHtml, '').replace(/(\r\n|\r|\n)+/g, '$1') }</Typography> */}
                <ClassReferenceQuestionTab cl={cl} />

              </AccordionDetails>
            </Accordion>
        )}
        <Menu classes={classes} label="Review" fn={handleChange} abc={expanded} idd="a2" />
        <Menu classes={classes} label="Result" fn={handleChange} abc={expanded} idd="a3" />
        <Menu classes={classes} label="Feedback" fn={handleChange} abc={expanded} idd="a4" />
        <Menu classes={classes} label="Certificate" fn={handleChange} abc={expanded} idd="a5" />


      </div>
    )
  if (p > q || (r === 'ac' && p === q))
    return (
      <div className={classes.root}>
        {course.moduleTabData && course.moduleTabData.modulesList[0].questionsList.filter((cl, i) => i < q).map(
          (cl, index) =>
            <Accordion expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)} key={index} elevation={2} >
              {/* <div style={{ position: 'sticky', top: '10px' }}> */}


              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls={`panel${index + 1}d-content`} id={`panel${index + 1}d-header`}

              >
                <Avatar className={classes.avatar}>
                  <SchoolIcon />
                </Avatar>
                {/* <div> */}
                <Typography className={classes.heading}>Class {cl.class}</Typography>
                {/* <Fade in={expanded === `panel${(index + 1)}`} timeout={500}>
                  <Typography className={classes.subHead}>Class short details</Typography>
                </Fade> */}
                {/* </div> */}
                <Fade
                  in={expanded === `panel${(index + 1)}`}
                  timeout={500}
                >
                  <Avatar className={classes.avatarPlay}>
                    <VideocamIcon />
                  </Avatar>

                </Fade>
                <Fade
                  in={expanded === `panel${(index + 1)}`}
                  timeout={500}
                >
                  <Avatar onClick={(e) => handlePlay(index, cl, e)} className={classes.avatarPlay}>
                    <PlayArrowIcon />
                  </Avatar>

                </Fade>
              </AccordionSummary>
              {/* </div> */}
              <AccordionDetails>
                {/* <Typography className={classes.detailText}>{cl.referenceText.replace(removeHtml, '').replace(/(\r\n|\r|\n)+/g, '$1') }</Typography> */}
                <ClassReferenceQuestionTab cl={cl} />

              </AccordionDetails>
            </Accordion>
        )}
        <Menu classes={classes} label="Assignment" fn={handleChange} abc={expanded} idd="a6" />

        {course.moduleTabData && course.moduleTabData.modulesList[0].questionsList.filter((cl, i) => i >= q && i < p).map(
          (cl, index) =>
            <Accordion expanded={expanded === `panel${index + q + 1}`} onChange={handleChange(`panel${index + q + 1}`)} key={index} elevation={2} >
              {/* <div style={{ position: 'sticky', top: '10px' }}> */}


              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls={`panel${index + q + 1}d-content`} id={`panel${index + q + 1}d-header`}

              >
                <Avatar className={classes.avatar}>
                  <SchoolIcon />
                </Avatar>
                <Typography className={classes.heading}>Class {cl.class}</Typography>
                {/* <Fade
                in={expanded === `panel${(index + p + 1)}`}
                timeout={500}
              >

                <Typography className={classes.subHead}>Class short details</Typography>


              </Fade> */}
                <Fade
                  in={expanded === `panel${(index + q + 1)}`}
                  timeout={500}
                >
                  <Avatar className={classes.avatarPlay}>
                    <VideocamIcon />
                  </Avatar>

                </Fade>
                <Fade
                  in={expanded === `panel${(index + q + 1)}`}
                  timeout={500}
                >
                  <Avatar onClick={(e) => handlePlay(index, cl, e)} className={classes.avatarPlay}>
                    <PlayArrowIcon />
                  </Avatar>

                </Fade>
              </AccordionSummary>
              {/* </div> */}
              <AccordionDetails>
                {/* <Typography className={classes.detailText}>{cl.referenceText.replace(removeHtml, '').replace(/(\r\n|\r|\n)+/g, '$1') }</Typography> */}
                <ClassReferenceQuestionTab cl={cl} />

              </AccordionDetails>
            </Accordion>
        )}

        <Menu classes={classes} label="Course Work" fn={handleChange} abc={expanded} idd="a1" data={{
          d1: `ആശയസ്വീകരണത്തിനും ദൈവസ്മരണകൾക്കും വിനോദത്തിനുമെല്ലാമുള്ള മനുഷ്യന്റെ പ്രധാന സ്രോതസ്സാണ് കേൾവി.
            എന്നാൽ അഹിതമായതിനോട് ചെവിയടക്കാൻ കഴിയാത്തതിനാൽ തന്നെ ശബ്ദഘോഷങ്ങളുടെ മലവെള്ളപ്പാച്ചിലിൽ എല്ലാം കേൾക്കാൻ നിർബന്ധിതനായിരിക്കുന്നു അവൻ.
            നല്ലത് തിരഞ്ഞെടുക്കാൻ പോലും അപ്രിയമായത് കേൾക്കേണ്ട ദുരവസ്ഥയിലാണ് ഓരോരുത്തരും.
            സെലിബ്രിറ്റി മാനസികാവസ്ഥയുള്ള യുവാക്കൾ ഏറിയ പങ്കും പ്രേക്ഷകരായുള്ള ഒരു സംവിധാനത്തിലേക്കാണ് മൂല്യവത്തായ ആശയങ്ങൾ മാത്രമുൾക്കൊള്ളുന്ന പീസ് റേഡിയോ കടന്നുവരുന്നത്..!`, d2: 'content here'
        }} />
        {course.moduleTabData && course.moduleTabData.modulesList[0].questionsList.filter((cl, i) => i >= p).map(
          (cl, index) =>
            <Accordion expanded={expanded === `panel${index + 1 + p}`} onChange={handleChange(`panel${index + 1 + p}`)} key={index} elevation={2} >
              {/* <div style={{ position: 'sticky', top: '10px' }}> */}


              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                aria-controls={`panel${index + 1 + p}d-content`} id={`panel${index + 1 + p}d-header`}

              >
                <Avatar className={classes.avatar}>
                  <SchoolIcon />
                </Avatar>
                <Typography className={classes.heading}>Class {cl.class}</Typography>
                {/* <Fade
                in={expanded === `panel${(index + p + 1)}`}
                timeout={500}
              >

                <Typography className={classes.subHead}>Class short details</Typography>


              </Fade> */}
                <Fade
                  in={expanded === `panel${(index + 1 + p)}`}
                  timeout={500}
                >
                  <Avatar className={classes.avatarPlay}>
                    <VideocamIcon />
                  </Avatar>

                </Fade>
                <Fade
                  in={expanded === `panel${(index + 1 + p)}`}
                  timeout={500}
                >
                  <Avatar onClick={(e) => handlePlay(index, cl, e)} className={classes.avatarPlay}>
                    <PlayArrowIcon />
                  </Avatar>

                </Fade>
              </AccordionSummary>
              {/* </div> */}
              <AccordionDetails>
                {/* <Typography className={classes.detailText}>{cl.referenceText.replace(removeHtml, '').replace(/(\r\n|\r|\n)+/g, '$1') }</Typography> */}
                <ClassReferenceQuestionTab cl={cl} />

              </AccordionDetails>
            </Accordion>
        )}
        <Menu classes={classes} label="Review" fn={handleChange} abc={expanded} idd="a2" />
        <Menu classes={classes} label="Result" fn={handleChange} abc={expanded} idd="a3" />
        <Menu classes={classes} label="Feedback" fn={handleChange} abc={expanded} idd="a4" />
        <Menu classes={classes} label="Certificate" fn={handleChange} abc={expanded} idd="a5" />


      </div>
    )
}

export default ModuleTabAccordion
