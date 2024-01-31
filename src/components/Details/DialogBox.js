import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@mui/styles';
import './Details.css'

const useStyles = makeStyles({
    actions: {
        display: "block"
    },
    dialog: {
        width: "80%", // Adjust the width as needed
        height: "60vh", // Adjust the height as needed
        margin: "auto",
      },
  })

export default function FormDialog({ promoCode, setPromoCode, setCorrect}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit =() => {
    if(promoCode){
      if(promoCode === "5USDOFF"){
        setCorrect(true)
    }
    handleClose()
    }
   
   
  }

  const handleChange = (e) => {
    const {value} = e.target
    setPromoCode(value)
    
  }

  const classes = useStyles()
  return (
    <React.Fragment >
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <p style={{cursor: "pointer", color: "rgb(9, 117, 159)", fontWeight: "600", fontSize: "17px"}} onClick={handleClickOpen}>Apply Promo Code</p>
      <div className='dialog'>
      <Dialog
    //   className={classes.dialog}
    sx={{ width: '100%', height: '60vh', margin: 'auto' }} // Adjust the width and height here
        open={open}
        onClose={handleClose}
        // PaperProps={{
        //   component: 'form',
        //   onSubmit: (event) => {
        //     event.preventDefault();
        //     const formData = new FormData(event.currentTarget);
        //     const formJson = Object.fromEntries(formData.entries());
        //     const email = formJson.email;
        //     console.log(email);
        //     handleClose();
        //   },
        // }}
      >
        <DialogTitle>Do you have a promo code</DialogTitle>
        <DialogContent className={classes.actions}>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="code"
            label="Enter promo code"
            type="text"
            fullWidth
            variant="standard"
            value={promoCode}
            onChange={handleChange}
          />
        {/* <input type="text" placeholder="First name" required /> */}
        </DialogContent>
        {/* <DialogActions>
        </DialogActions> */}
        <div className='dialog-button'>
        <button onClick={handleSubmit}>Apply</button>
        </div>
       
        <Button onClick={handleClose}>Cancel</Button>
      </Dialog>
      </div>
    </React.Fragment>
  );
}

// export const Dia