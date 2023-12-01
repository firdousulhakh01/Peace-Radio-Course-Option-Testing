import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Avatar, Divider, List, ListItemText, ListItemIcon, ListItem } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';
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
    width: '70vw',
    maxHeight: '60vh',  // Set a maximum height, adjust as needed
    overflowY: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '4px solid #00A881',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '20px',
  },
  avatr: { color: '#00A881', backgroundColor: '#CCEEE6' }
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
                <Avatar className={classes.avatr}><PersonIcon /></Avatar>
              </ListItemIcon>
              <ListItemText primary={member.name} />
            </ListItem>
              <Divider /></div>
          )
        }
        <div>
          <ListItem button>
            <ListItemIcon>
              <Avatar className={classes.avatr}>
                <AddIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary="Add family member" />
          </ListItem>
          <Divider />
        </div>
        <div>
          <ListItem button>
            <ListItemIcon>
              <Avatar className={classes.avatr}>
                <EditIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary={`Edit ${user.memberList[0].name} Profile`} />
          </ListItem>
          <Divider />
        </div>
        <div>
          <ListItem button >
            <ListItemIcon>
              <Avatar className={classes.avatr}>
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
      <Avatar onClick={handleOpen} title={user.memberList[user.selectedUser].name} style={{ color: '#00A881', backgroundColor: '#CCEEE6' }}>
        {photo === true ? <img src={photo} width={40} height={40} alt='firdous' /> : user.memberList[user.selectedUser].name.charAt(0).toUpperCase()}
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
