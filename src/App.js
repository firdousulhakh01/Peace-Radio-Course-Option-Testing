import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import UserLanding from './components/UserLanding';
import Somepage from './components/Somepage';
import NavBar from './components/NavBar';
import MemberCourseList from './components/MemberCourseList';
import ClassPlayer from './components/coursetabs/ClassPlayer'
import { UserContext } from './contexts/UserContext'
import { CourseContext } from './contexts/CourseContext'
import { PlayerContext } from './contexts/PlayerContext'
import theme from './ui/Theme';
import ScrollToTop from './ui/ScrollToTop';
import { login } from './utils/login';
// import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { AnimatePresence } from 'framer-motion';


function App() {

  const location = useLocation()
  const [user, setUser] = useState("");
  const [course, setCourse] = useState("");
  const [player, setPlayer] = useState({
    showPlayer: false,
    loadedClass: false,
    playing: false,
    seek: 0,
    src: '',
  });

  useEffect(() => {
    async function loginAndSetUser() {
      const res = await login();
      setUser(res)

    }
    loginAndSetUser();

  }, [])
  console.log(user)
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ user, setUser }}>
        <CourseContext.Provider value={{ course, setCourse }}>
          <PlayerContext.Provider value={{ player, setPlayer }}>
            <ScrollToTop />
            <div className="App">
              <NavBar></NavBar>
              <AnimatePresence>
                <Routes location={location} key={location.key}>
                  <Route path="/" element={<UserLanding />} />
                  <Route path="/membercourselist" element={<MemberCourseList />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/somepage" element={<Somepage />} />
                </Routes>
              </AnimatePresence>
              <ClassPlayer />
            </div>
          </PlayerContext.Provider>
        </CourseContext.Provider>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
