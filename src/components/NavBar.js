import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
// import { MenuIcon } from '@material-ui/icons'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShareIcon from '@material-ui/icons/Share';
import { UserContext } from '../contexts/UserContext';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    zIndex: 2000
  }
}))

function NavBar() {
  const { user } = useContext(UserContext)
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className=""
            color="inherit"
            aria-label="open drawer"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography color="inherit">
            Courses
          </Typography>
          <div className={classes.grow} />
          <div>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <ShareIcon />
            </IconButton>
          </div>
          <div>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <ExitToAppIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar
