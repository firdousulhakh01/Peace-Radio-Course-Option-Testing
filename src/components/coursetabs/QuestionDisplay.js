import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  detailText: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.primary.dark,
    whiteSpace: 'pre-line',
  },
  detailQuestionText: {
    fontSize: theme.typography.pxToRem(12),
    color: theme.palette.primary.dark,
    whiteSpace: 'pre-line',
    marginBottom: '1rem',
    marginTop: '1.8rem',
  },
  tabsAppBar: {
    boxShadow: 'none',
  },
  tabNames: {
    textTransform: 'none',
  },
  detailOptionText: {
    fontSize: theme.typography.pxToRem(12),
    color: theme.palette.primary.dark,
    whiteSpace: 'pre-line',
  },
  detailOptionRoot: {
    marginBottom: '0.2rem'
  },
  radioRoot: {
    padding: '8px 9px'
  },
  optionGroup: {
    marginBottom: '1rem'
  }
}));


function QuestionDisplay(props) {
  const { qsObj } = props;
  const [value0, setValue0] = React.useState(0);
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);

  const classes = useStyles();
  const handleChange = (i, event) => {
    switch (i) {
      case 0:
        setValue0(event.target.value)
        break;
      case 1:
        setValue1(event.target.value)
        break;
      case 2:
        setValue2(event.target.value)
        break;
      default:
        break;
    }
    // setValue(event.target.value);
  };
  // console.log(`https://prms.peaceradio.com/courses_new/${qsObj[0].questionAudio}`)
  return (
    <div>
      <audio controls>
        <source src={`https://prms.peaceradio.com/courses_new/${qsObj[0].questionAudio}`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Typography className={classes.detailQuestionText}>{qsObj[0].question}</Typography>
      <FormControl component="fieldset" classes={{ root: classes.optionGroup }}>
        <RadioGroup aria-label="answer" name="answer1" value={value0} onChange={e => handleChange(0, e)}>
          <FormControlLabel classes={{ root: classes.detailOptionRoot, label: classes.detailOptionText }} value="A" control={<Radio classes={{ root: classes.radioRoot }} />} label={qsObj[0].answerOptionA} />
          <FormControlLabel classes={{ root: classes.detailOptionRoot, label: classes.detailOptionText }} value="B" control={<Radio classes={{ root: classes.radioRoot }} />} label={qsObj[0].answerOptionB} />
          <FormControlLabel classes={{ root: classes.detailOptionRoot, label: classes.detailOptionText }} value="C" control={<Radio classes={{ root: classes.radioRoot }} />} label={qsObj[0].answerOptionC} />
        </RadioGroup>
      </FormControl>
      <Divider />
      <audio controls>
        <source src={`https://prms.peaceradio.com/courses_new/${qsObj[1].questionAudio}`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Typography className={classes.detailQuestionText}>{qsObj[1].question}</Typography>
      <FormControl component="fieldset" classes={{ root: classes.optionGroup }}>
        <RadioGroup aria-label="answer" name="answer1" value={value1} onChange={e => handleChange(1, e)}>
          <FormControlLabel classes={{ root: classes.detailOptionRoot, label: classes.detailOptionText }} value="A" control={<Radio classes={{ root: classes.radioRoot }} />} label={qsObj[1].answerOptionA} />
          <FormControlLabel classes={{ root: classes.detailOptionRoot, label: classes.detailOptionText }} value="B" control={<Radio classes={{ root: classes.radioRoot }} />} label={qsObj[1].answerOptionB} />
          <FormControlLabel classes={{ root: classes.detailOptionRoot, label: classes.detailOptionText }} value="C" control={<Radio classes={{ root: classes.radioRoot }} />} label={qsObj[1].answerOptionC} />
        </RadioGroup>
      </FormControl>
      <Divider />
      <audio controls>
        <source src={`https://prms.peaceradio.com/courses_new/${qsObj[2].questionAudio}`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Typography className={classes.detailQuestionText}>{qsObj[2].question}</Typography>
      <FormControl component="fieldset" classes={{ root: classes.optionGroup }}>
        <RadioGroup aria-label="answer" name="answer1" value={value2} onChange={e => handleChange(2, e)}>
          <FormControlLabel classes={{ root: classes.detailOptionRoot, label: classes.detailOptionText }} value="A" control={<Radio classes={{ root: classes.radioRoot }} />} label={qsObj[2].answerOptionA} />
          <FormControlLabel classes={{ root: classes.detailOptionRoot, label: classes.detailOptionText }} value="B" control={<Radio classes={{ root: classes.radioRoot }} />} label={qsObj[2].answerOptionB} />
          <FormControlLabel classes={{ root: classes.detailOptionRoot, label: classes.detailOptionText }} value="C" control={<Radio classes={{ root: classes.radioRoot }} />} label={qsObj[2].answerOptionC} />
        </RadioGroup>
      </FormControl>
    </div>

  )
}

export default QuestionDisplay
