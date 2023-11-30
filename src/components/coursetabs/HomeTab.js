import React, { useContext, useEffect, useState } from 'react';
// import CourseSelectionCard from './CourseSelectionCard';
import CourseHomeAccordion from './CourseHomeAccordian';
import homeTabFetch from '../../utils/hometab';
import { UserContext } from '../../contexts/UserContext';
import { CourseContext } from '../../contexts/CourseContext';

function HomeTab() {
  const { course, setCourse } = useContext(CourseContext);
  const { user } = useContext(UserContext);
  const [, setHomeTabData] = useState(null)

  useEffect(() => {
    async function getHomeTabData() {
      // console.log(`homeTab`)
      const res = await homeTabFetch(window.myToken, course.selectedCourse.type, user.memberList[user.selectedUser].rollNumber);
      setHomeTabData(res)
      setCourse({ ...course, homeTabData: res })
    }
    getHomeTabData();
  }, [])
  // console.log(course, "test")
  return (
    <React.Fragment>
      {/* <CourseSelectionCard /> */}
      <CourseHomeAccordion />
    </React.Fragment>
  )
}

export default HomeTab
