import React, { Component } from 'react'
import User from '../User/User'
import './Users.css'

class Users extends Component {
    render() {
        return (
            <div className="user-container">
               <div className="user-grid">
                 {this.props.userList.map(user => 
                        <User name={user.name}
                              email={user.email}
                              role={user.role}
                              id={user.id}
                              displayProfile={this.props.displayProfile}
                              />
                )}
               </div>
              </div>
        )
    }
}

export default  Users