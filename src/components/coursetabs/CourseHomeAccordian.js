import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary, Badge, Typography } from '@material-ui/core';
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

const CourseHomeAccordion = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expandedd, setExpandedd] = React.useState(false);
  var activeF = 'Active Examination';//Active Examination,Class Test

  const handleChange = (panel) => (event, isExpanded) => {
    if (panel === 'panel3')
      setExpandedd(!isExpanded ? panel : false);
    else
      setExpanded(isExpanded ? panel : false);
    console.log(isExpanded)
  };

  return (
    <div className={classes.root}>
      {/* <div style={{ color: "red" }}>firdous</div> */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={{ expanded: classes.expanded, root: classes.accordionRoot }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls=""
          id=""
          className={classes.summary}
        >
          <Badge badgeContent={3} color="primary"><MailIcon className={classes.headingIcon} /></Badge>

          <Typography className={classes.heading} style={{ marginLeft: '10px' }}>Announcements</Typography>
          {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails className={classes.detail}>
          <Typography className={classes.detailText}>
            Annoor final exam is scheduled on 2020 July 17, 18 and 19. Go for final revision now.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={{ expanded: classes.expanded, root: classes.accordionRoot }} expanded={expandedd !== 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls=""
          id=""
          className={classes.summary}
        >
          <AssignmentIcon className={classes.headingIcon} /><Typography className={classes.heading}>{activeF}</Typography>
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
          aria-controls=""
          id=""
          className={classes.summary}
        >
          <AssignmentIcon className={classes.headingIcon} /><Typography className={classes.heading}>Instructions and Course Calendar</Typography>
          {/* <Typography className={classes.secondaryHeading}>
                        You are currently not an owner
                    </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.detailText}>
            Content here...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={{ expanded: classes.expanded, root: classes.accordionRoot }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls=""
          id=""
          className={classes.summary}
        >
          <AssignmentIcon className={classes.headingIcon} /><Typography className={classes.heading}>Future Card</Typography>
          {/* <Typography className={classes.secondaryHeading}>
                        You are currently not an owner
                    </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.detailText}>
            Content here...
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}

export default CourseHomeAccordion
