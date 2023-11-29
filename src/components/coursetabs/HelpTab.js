import React from 'react'
import HelpData from './HelpTabData'

const HelpTab = () => {
  const [expanded, setExpanded] = React.useState('');
  // const [test, setTest] = useState(['Course Work', 'Review'])

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div style={{ margin: '10px' }}>
      <HelpData id='h1' label='FAQ' fn={handleChange} exp={expanded} />
      <HelpData id='h2' label='Late Exam Request' fn={handleChange} exp={expanded} />
      <HelpData id='h3' label='Enrollment Page' fn={handleChange} exp={expanded} />
      {/* <HelpData id='h1' label='FAQ' /> */}
    </div>
  )
}

export default HelpTab
