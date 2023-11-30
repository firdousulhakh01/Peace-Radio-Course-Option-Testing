import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Avatar, Divider, List, ListItemText, ListItemIcon, ListItem } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
import photo from '../../files/fir.jpg'

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    top: '50%',
    width: '50vw',
    maxHeight: '40vh',  // Set a maximum height, adjust as needed
    overflowY: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '4px solid #00A881',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '20px',
  },
  text: {
    //color: theme.palette.text.primary, // Set the default text color
    transition: 'color 0.3s', // Add a smooth transition for the color change
    '&:hover': {
      color: '#004431', // Set the color on hover
    }
  },
  test: { color: '#00A881', marginLeft: "15px" }
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const { user, setUser } = useContext(UserContext)
  const history = useNavigate()
  const changeUser = (ind) => {
    setUser({ ...user, selectedUser: ind })
    history("/membercourselist");
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <List component="nav" aria-label="main mailbox folders">

        {/* <div style={{ borderRadius: '20px', backgroundColor: "#E0FFFF" }}> */}

        {
          user.memberList.map((member, i) =>
            <div key={i}><ListItem button onClick={() => { changeUser(i); handleClose() }}>
              <ListItemIcon>
                <Avatar><PersonIcon /></Avatar>
              </ListItemIcon>
              <ListItemText className={classes.text} primary={member.name} />
            </ListItem>
              <Divider /></div>
          )
        }
        <div>
          <ListItem button className={classes.text}>
            <ListItemIcon>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary="Add family member" />
          </ListItem>
          <Divider />
        </div>
        <div>
          <ListItem button className={classes.text}>
            <ListItemIcon>
              <Avatar>
                <ExitToAppIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary={`Sign out ${user.memberList[0].name}`} />
          </ListItem>
          {/* <Divider /> */}
        </div>
        {/* </div> */}
      </List>
    </div>
  );
  // console.log(photo)
  return (
    <div>
      {/* <button type="button" onClick={handleOpen}> */}
      <Avatar onClick={handleOpen} title={user.memberList[user.selectedUser].name}>
        {photo === true ? <img src={photo} width={40} height={40} alt='firduos' /> : user.memberList[user.selectedUser].name.charAt(0).toUpperCase()}
      </Avatar>
      {/* </button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
