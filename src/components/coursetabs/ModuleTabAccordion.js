import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext';
import { CourseContext } from '../../contexts/CourseContext';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Avatar from '@material-ui/core/Avatar';
import SchoolIcon from '@material-ui/icons/School';
import ClassPlayer from './ClassPlayer';
import ClassReferenceQuestionTab from './ModuleTabQuestionClassReference';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from '@material-ui/icons/Stop';
import Fade from '@material-ui/core/Fade';
import { PlayerContext } from '../../contexts/PlayerContext';
import ListSkeleton from '../../ui/ListSkeleton';


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

function ModuleTabAccordion() {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const { player, setPlayer } = useContext(PlayerContext);
    const { course, setCourse } = useContext(CourseContext);
    const { user, setUser } = useContext(UserContext);

    const removeHtml = /(<([^>]+)>)/ig
    const removeSlashNR = /(?:\r\n|\r|\n)/g

    const handlePlay = (i, c, e) => {
        // e.preventDefault();
        e.stopPropagation();
        console.log(`${course.moduleTabData.modulesList[0].audioLocationPrefix}${c.classAudio}`)
        setPlayer({
            ...player,
            showPlayer: true,
            playing: true,
            loadedClass: c,
            src: `${course.moduleTabData.modulesList[0].audioLocationPrefix}${c.classAudio}`
        });
        // setPlaying(true);
    }

    return (
        <div className={classes.root}>
            { course.moduleTabData && course.moduleTabData.modulesList[0].questionsList.map(
            (cl, index) =>
            <Accordion expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)} key={index} elevation={2}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                    aria-controls={`panel${index + 1}d-content`} id={`panel${index + 1}d-header`}>
                    <Avatar className={classes.avatar}>
                        <SchoolIcon />
                    </Avatar>
                    <Typography className={classes.heading}>Class {cl.class}</Typography>
                    {(!player.showPlayer === !player.showPlayer) && // disabled condition
                        <Fade
                            in={expanded === `panel${(index + 1)}`}
                            timeout={500}
                        >
                            <Avatar onClick={(e) => handlePlay(index, cl, e)} className={classes.avatarPlay}>
                                <PlayArrowIcon />
                            </Avatar>

                        </Fade>
                    }
                </AccordionSummary>
                <AccordionDetails>
                    {/* <Typography className={classes.detailText}>{cl.referenceText.replace(removeHtml, '').replace(/(\r\n|\r|\n)+/g, '$1') }</Typography> */}
                    <ClassReferenceQuestionTab cl={cl} />

                </AccordionDetails>
            </Accordion>
                    )}
        </div>
    )
}

export default ModuleTabAccordion