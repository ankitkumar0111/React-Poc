import * as React from "react";
// import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@mui/styles";
import { Icon } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done'



// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );
const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "320px",
    height: "120px",
    marginLeft: 40,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2) !important",
    transition: "0.3s !important",
    borderRadius: "7px !important",
  },
  content: {

  },
  icon: {
    display: "flex",
    justifyContent: "center"
  },
  name: {
    fontSize: 19,
    fontWeight: 700,
    padding: 8,
  },
//   tickSymbol: {
//     position: 'absolute',
//     top: '8px',
//     right: '8px',
//     fontSize: '24px',
//     color: 'green',
//     visibility: 'hidden',
//   },
  cardClicked: {
    // '& $tickSymbol': {
    //   visibility: 'visible',
    //   position: "absolute"
    // },
    border: "2px solid black",
    // position:"relative"
  },
  tickSymbol: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    fontSize: '24px',
    color: 'green',
    visibility: 'hidden',
  },
  tickVisible: {
    visibility: 'visible',
  },
});

const BasicCard = ({ name, icon,isSelected, onClick }) => {
  const classes = useStyles();
  // const [clicked, setClicked] = useState(false)

  // const handleCardClick = () => {
  //   setClicked(!clicked)
  // }
  return (
    <Card className={`${classes.root} ${isSelected ? classes.cardClicked  : ""}`} onClick={onClick}>
       {/* <div className={classes.tickSymbol}>&#10003;</div> */}
       {isSelected && (
        <DoneIcon className={`${classes.tickSymbol} ${classes.tickVisible}`} />
      )}
      <CardContent className={classes.content}>
        <div className={classes.icon}>
        {icon &&
        <Icon>
            {icon}
        </Icon>
    }
     </div>
     <div className={classes.name}>
        {name}
        </div>
       
      </CardContent>
    </Card>
  );
};

export default BasicCard;
