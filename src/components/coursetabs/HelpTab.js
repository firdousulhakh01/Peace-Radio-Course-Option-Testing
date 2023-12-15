import React from 'react'
import Faq from './HelpCards/Faq'
import LateExamRequest from './HelpCards/LateExamRequest';
import Sample from './HelpCards/Sample';

const HelpTab = () => {
  const [expanded, setExpanded] = React.useState('');
  // const [test, setTest] = useState(['Course Work', 'Review']) 

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div style={{ margin: '10px' }}>
      <Faq id='h1' handleChange={handleChange} expanded={expanded} />
      <LateExamRequest id='h2' handleChange={handleChange} expanded={expanded} />
      <Sample id='h3' label='Testimonials' handleChange={handleChange} expanded={expanded} />
      <Sample id='h4' label='Doubt Submission' handleChange={handleChange} expanded={expanded} />
    </div>
  )
}

export default HelpTab
