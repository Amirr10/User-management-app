import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor:'white'
    },
    form: {
        display:'flex',
        justifyContent: 'center',
        height: '25%',
        width:'100%'
    },
    submitBtn: {
        marginLeft:'3%'
    }
});

const FormNewUser = (props) => {
    const classes = useStyles()
    return (
        <div className="user-form">

            <form className={classes.form}>
                <TextField className={classes.root}
                           onChange={(e) => props.changed(e)}
                            name="name"
                            id="outlined-basic"
                            label="Name"
                            variant="outlined" />

                <TextField className={classes.root}
                           onChange={(e) => props.changedEmail(e)}
                            name="email"
                            style={{marginLeft:'3%'}}
                            id="outlined-basic"
                            label="Email"
                            variant="outlined" />

                <Button onClick={() => props.submitted()}
                        // style={{marginLeft:'3%'}}
                        className={classes.submitBtn}
                        variant="contained"
                        color="secondary">
                    Submit
                </Button>
            </form>

        </div>
    )
}

export default FormNewUser