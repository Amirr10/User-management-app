import React, { Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Layout/Layout.css'
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
    root: {
        width:'70%',
        color:'blue'
    },
    button:{
        width:'20%',
        marginBottom:'2%',
        borderRadius:'50px'
    },
    searchField: {
        width: '30%',
        height:'7vh',
        marginTop: '3%',
        borderRadius: '50px',
        outline: 'none',
        backgroundColor:'white'
    }
});


const NewUserButton = (props) => {
    const classes = useStyles(props);

    return (
        <Fragment>
        <div className="new-user"> 
                <TextField className={classes.root}
                    value="Users"
                    disabled
                    InputProps={{
                        endAdornment: <Button className={classes.button}
                            onClick={() => props.clicked()}
                            variant="contained"
                            color="primary">New User
                                            </Button>
                    }}
                />
        </div>

        <div className="search-user">
            <Input className={classes.searchField}
                        disableUnderline={true}  
                        placeholder="Search"
                        onChange={(e) => props.searchHandler(e)}
                        startAdornment={
                            <InputAdornment style={{ color:'grey' }} position="start">
                              <SearchIcon />
                            </InputAdornment>
                          }
                        />
        </div>
        </Fragment>
    )
}

export default NewUserButton