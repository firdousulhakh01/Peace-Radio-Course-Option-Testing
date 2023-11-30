import React, { useContext, useEffect, useState } from 'react';
import moduleTabFetch from '../../utils/moduletab';
import { UserContext } from '../../contexts/UserContext';
import { CourseContext } from '../../contexts/CourseContext';
import ModuleTabAccordion from './ModuleTabAccordion';
// import { makeStyles} from '@material-ui/core/styles';
import ListSkeleton from '../../ui/ListSkeleton';

function ModuleTab() {
  const { course, setCourse } = useContext(CourseContext);
  const { user } = useContext(UserContext);
  const [loader, setLoader] = useState(true);
  // const [ moduleTabData, setModuleTabData ] = useState(null)

  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     color: theme.palette.primary.dark
  //   }
  // }))

  useEffect(() => {
    // setLoader(true);
    async function getModuleTabData() {
      // console.log(`ModuleTab`)
      const res = await moduleTabFetch(window.myToken, course.selectedCourse.type, user.memberList[user.selectedUser].rollNumber);
      // setModuleTabData(res)
      setLoader(false);
      setCourse({ ...course, moduleTabData: res })
    }
    getModuleTabData();
  }, [])
  console.log(course, 'tHome')
  return (
    <React.Fragment>
      {(!loader) ?
        <ModuleTabAccordion /> :
        <ListSkeleton />}
    </React.Fragment>
  )
}

export default ModuleTab
