import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MailIcon from '@material-ui/icons/Mail';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    margin: "10px 10px",

  },
  summary: {
  },
  expanded: {
    margin: '0px 0',
    color: 'red',
    '&$expanded': {
      margin: '0px 0 0px',
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(14),
    flexBasis: '100%',
    fontWeight: 700,
    flexShrink: 0,
    color: theme.palette.primary.dark,
  },
  detailText: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.primary.dark,
  },
  detail: {
    // padding: '0px 16px 16px',
  },
  expandIcon: {
    color: theme.palette.primary.main,
  },
  accordionRoot: {
    backgroundColor: 'white',
    color: theme.palette.primary.dark,
    margin: '0',
    '&.Mui-expanded': {
      // backgroundColor: 'red',
      margin: '6px 0',
    }
  },
  headingIcon: {
    fontSize: 20, paddingRight: '10px', alignSelf: 'center',
    color: theme.palette.primary.main,
  },
}));

function CourseHomeAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {/* <div style={{ color: "red" }}>firdous</div> */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={{ expanded: classes.expanded, root: classes.accordionRoot }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.summary}
        >
          <MailIcon className={classes.headingIcon} /><Typography className={classes.heading}>Announcements</Typography>
          {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails className={classes.detail}>
          <Typography className={classes.detailText}>
            Annoor final exam is scheduled on 2020 July 17, 18 and 19. Go for final revision now.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordionRoot} expanded={true}>
        <AccordionSummary

          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className={classes.summary}
        >
          <AssignmentIcon className={classes.headingIcon} /><Typography className={classes.heading}>Active Examination</Typography>
          {/* <Typography className={classes.secondaryHeading}>
                        You are currently not an owner
                    </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.detailText}>
            The examination which is active today will be displayed in this area. At time of regular classes, class test questions appear here. At period of model exam, model exam start button appears here.  At time of final examination, final exam start button appear here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={{ expanded: classes.expanded, root: classes.accordionRoot }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className={classes.summary}
        >
          <AssignmentIcon className={classes.headingIcon} /><Typography className={classes.heading}>Instructions and Course Calendar</Typography>
          {/* <Typography className={classes.secondaryHeading}>
                        You are currently not an owner
                    </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.detailText}>
            The examination which is active today will be displayed in this area. At time of regular classes, class test questions appear here. At period of model exam, model exam start button appears here.  At time of final examination, final exam start button appear here.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}

export default CourseHomeAccordion
