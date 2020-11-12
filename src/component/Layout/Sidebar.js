import React from 'react'
import './Layout.css'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { makeStyles } from '@material-ui/core/styles'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';



// import './Sidebar.css'

const useStyles = makeStyles({
    delBtn: {
      position:'absolute',
      right: '0',
      cursor:'pointer',
      fontSize: 50
    },
    personIcon: {
        position: 'absolute',
        bottom: -40,
        color: 'rgb(225, 231, 231)',
        backgroundColor: "grey",
        borderRadius: '50%',
        fontSize: 90,
    },
    select: {
        width:'30%',
        minWidth:30,
        height:'100%',
        marginTop: '5%',

    },
    selectBtn: {
        position:'absolute', 
        right:0, 
        marginTop:'3%'
    }
  })

const Sidebar = (props) => {

    console.log(props, "From Sidebar")
    const classes = useStyles()


    return (
        <div className="sidebar-container">

            <div className="sidebar-right">
                <div className="sidebar-nav">
                    <DeleteOutlineIcon className={classes.delBtn}
                                       onClick={() => {props.deleteFunc(props.user.id)}} />
                    <AccountCircleRoundedIcon className={classes.personIcon} />
                </div>

                <div className="sidebar-details">
                    <div>{props.user.name}</div>
                    <div>{props.user.email}</div>
                </div>

                <div className="sidebar-roles">
                    <h6 >APPLICATIONS & ROLES</h6>
                    <hr />
                    {/* <Role /> */}
                </div>

                <div className="sidebar-role-picker">
                <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Application</InputLabel>
                    <Select
                        className={classes.select}
                        label="Application"
                        onChange={props.selectHandler}
                    >
                        <MenuItem value={'PapperLess'}>PapperLess</MenuItem>
                        <MenuItem value={'Conversational'}>Conversational</MenuItem>
                        <MenuItem value={'IntarcatBot'}>IntarcatBot</MenuItem>
                    </Select>
                    </FormControl>

                    <Button className={classes.selectBtn} 
                            onClick={() => props.addRole(props.user.id)}
                            variant="outlined"> 
                        Add
                    </Button>
                </div>
            </div>

            <div className="sidebar-left" onClick={() => props.hideSidebar()} >

            </div>

        </div>
    )
}

export default Sidebar