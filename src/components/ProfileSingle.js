import { useContext, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../contexts/UserContext';
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 5, 0),
    zIndex: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  inline: {
    display: 'inline',
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "8vw",
    marginBottom: "16px",
    maxWidth: "500px",
    color: theme.palette.primary.dark
  },
  textp: {
    fontSize: "12px",
    color: theme.palette.primary.dark
  },
  buttonStyle: {
    margin: theme.spacing(1, 2),
    textTransform: "none",
    fontSize: "14px",
    color: theme.palette.primary.dark
  },
  root2: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  root3: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 0.5, 1),
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "left",
  },
  texth5: {
    textAlign: "left",
    fontSize: "5vw",
    paddingLeft: "16px",
    paddingBottom: "10px",
    maxWidth: "500px",
    color: theme.palette.primary.main
  },
  textBadge: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    padding: "3px 8px",
    fontSize: "0.7em",
    borderRadius: "4px",
    fontWeight: 700,
    marginBottom: '5px',
  }

}));

function Profile() {

  const { user, setUser } = useContext(UserContext);
  const history = useNavigate();
  const handleSelectUserButton = () => {
    history("/");
    setUser({ ...user, selectedUser: 0 })
  }

  const classes = useStyles();
  return (
    user.success === "Y" ? (
      <Container className={classes.root2}>
        <Container m={2} className={classes.root}>
          <Typography className={classes.text} variant="h4">{user.memberList[user.selectedUser].name}</Typography>
          {user.selectedUser !== 0 ? <Typography className={classes.textBadge} variant="body1">Selected Family Member</Typography> : ""}
          {/* <Typography className={classes.textp} variant="body1">muhammadanas@gmail.com</Typography> */}
          <Typography className={classes.textp} variant="body1">Mobile: {user.memberList[user.selectedUser].mobile}</Typography>
          <Typography className={classes.textp} variant="body1">Country: {user.memberList[user.selectedUser].country}</Typography>
          <Typography className={classes.textp} variant="body1">Age: {user.memberList[user.selectedUser].age}</Typography>
          <Typography className={classes.textp} variant="body1">Roll Number: {user.memberList[user.selectedUser].rollNumber}</Typography>
          <Button className={classes.buttonStyle} variant="contained" color="secondary" disableElevation onClick={handleSelectUserButton} >Change User</Button>
        </Container>

        {/* <Divider variant="middle" /> */}
      </Container>) : (
      <Container className={classes.root2}>
        <Container m={2} className={classes.root}>
          <Typography className={classes.text} variant="h4">User not logged in</Typography>
        </Container>
      </Container>)
  )
}

export default Profile
