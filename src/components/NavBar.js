import React, { useContext } from 'react'
import { AppBar, Typography, IconButton, Toolbar, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
// import { MenuIcon } from '@material-ui/icons'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import PersonIcon from '@material-ui/icons/Person';
// import ShareIcon from '@material-ui/icons/Share';
import { UserContext } from '../contexts/UserContext';
import Modal from './firdous/modal'
import { useLocation, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    zIndex: 2000
  }
}))

function NavBar() {
  const { user, setUser } = useContext(UserContext)
  const classes = useStyles();
  const { pathname } = useLocation();
  const history = useNavigate()
  // console.log(typeof pathname)
  return (
    <>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          {pathname === '/membercourselist' ? <>
            <IconButton
              edge="start"
              className=""
              color="inherit"
              aria-label="open drawer"
              onClick={() => { history('/'); setUser({ ...user, selectedUser: 0 }) }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography color="inherit">
              Home
            </Typography>
          </> : ''}
          {pathname === '/home' ? <>
            <IconButton
              edge="start"
              className=""
              color="inherit"
              aria-label="open drawer"
              onClick={() => history('/membercourselist')}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography color="inherit">
              Dashboard
            </Typography>
          </> : ''}
          <div className={classes.grow} />
          {/* <div> */}
          {/* <IconButton
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
          >
            <ShareIcon />
          </IconButton> */}
          {/* </div> */}
          {/* <div> */}
          {/* <IconButton
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
          > */}
          {user.success === "Y" ? <Modal /> : ''}
          {/* <ExitToAppIcon /> */}
          {/* </IconButton> */}
          {/* <Menu /> */}
          {/* </div> */}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar
