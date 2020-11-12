import React, { Component } from 'react'
import FormNewUser from '../FormNewUser'
import NewUserButton from '../NewUserButton'
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux'
import Users from './Users/Users'
import Sidebar from './Sidebar';
import './Layout.css'


const styles = theme => ({
    root: {
        width:'70%'
    },
    button:{
        borderRadius:'50px'
    },
    searchButton: {
        borderRadius:'10%',
        width:'30%',
        height:'15px',
        marginTop:'2%'
    }
  });


class Layout extends Component {

    submitHandler = () => {
        this.props.formSubmit(this.props.name, this.props.email)
    }

    onChangeNameHandler = (e) => {
        this.props.changeNameHandler(e.target.value)
    }

    onChangeEmailHandler = (e) => {
        this.props.changeEmailHandler(e.target.value)
    }


    displayForm = () => {
        let flag = this.props.flag
        this.props.showForm(flag)
    }


    displaySidebar = (myprops) => {
        let id = myprops.id
        let flag = this.props.sidebarFlag

        this.props.showSidebar(flag,id)
    }


    deleteUser = (id) => {
        console.log(id, 'Del user')
        this.props.deleteUser(id)
    }


    hideSidebar = () => {
        this.props.closeSidebar()
    }


    searchHandler = (e) => {
        this.props.searchHandler(e.target.value)
    }

    selectHandler = (e) => {
        console.log(e.target.value)
        this.props.selectHandler(e.target.value)
    }

    addRole = (id) => {
        this.props.addRole(id,this.props.selected)
    }


    render() {

        const { classes } = this.props;
        let filteredUsers = this.props.users.filter(user => user.name.toLowerCase().indexOf(this.props.input) !== -1 && user.name !== "")

        return (
            <div className="container">

                {this.props.sidebarFlag ? 
                    <Sidebar user={this.props.users[this.props.id]}
                    deleteFunc={this.deleteUser}
                    hideSidebar={this.hideSidebar}
                    selectHandler={this.selectHandler}
                    addRole={this.addRole}
                /> : null}

                <div className="navbar"></div>
                <   NewUserButton clicked={this.displayForm}
                    searchHandler={this.searchHandler}
                />

                {this.props.flag ? 
                    <FormNewUser changed={this.onChangeNameHandler}
                    changedEmail={this.onChangeEmailHandler}
                    submitted={this.submitHandler}
                />
                : null}

                <Users userList={filteredUsers}
                    displayProfile={this.displaySidebar}
                />  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        flag: state.flag,
        id: state.id,
        name: state.name,
        email: state.email,
        input: state.input,
        selected: state.selected,
        sidebarFlag: state.sidebarFlag
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showForm: (flag) => { dispatch({type:'DISPLAY_FORM', payload: !flag})},
        showSidebar: (flag,id) => { dispatch({type:'DISPLAY_SIDEBAR', payload: [!flag,id]})},
        changeNameHandler: (name) => { dispatch( { type:'TEXT_NAME', name:name })} ,
        changeEmailHandler: (email) => { dispatch( { type:'TEXT_EMAIL', email:email })},
        searchHandler: (name) => { dispatch( { type:'SEARCH_HANDLER', payload: { name }})}, 
        selectHandler: (val) => { dispatch( { type:'SELECT_HANDLER', payload: { selected: val }})},
        addRole: (id,val) => { dispatch( { type:'ADD_ROLE', payload: { id:id, selected: val }})},
        formSubmit: (name,email) => { dispatch( { type:'FORM_SUBMIT', payload:{name,email}})}, 
        deleteUser: (id) => { dispatch( { type:'DELETE_USER', payload:{id: id}})} ,
        closeSidebar: () => { dispatch( { type:'CLOSE_SIDEBAR' })} 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Layout))