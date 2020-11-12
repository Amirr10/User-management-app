import React from 'react'
import { withStyles } from '@material-ui/styles';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import './User.css'


const styles = theme => ({
    root: {
        width:'70%'
    },
    imgIcon: {
        fontSize: 80,
        color: 'grey'
    }
  });


const User = (props) => {
    console.log(props.role)
    const { classes } = props;

    return (
        <div className="user-box" onClick={() => props.displayProfile(props)} >

            <div className="user-details">
                <AccountCircleOutlinedIcon className={classes.imgIcon} />
                <h5>{props.name}</h5>
            </div>

            
            <div className="user-role">
            <hr className="role-line"></hr>
            {/* <h5></h5> */}
                {/* <Role /> */}
            </div>

        </div>
    )
}

export default withStyles(styles)(User)