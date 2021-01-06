import React, {Component} from "react";
import UserComponent from "../user_component/UserComponent";

let users = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false},
        {id: 5, name: 'olya', age: 28, status: false} ];

class UserAll extends Component{

    render(){
        return(
           <div>
           {
                users.map(user => {
                    return(
                        <UserComponent
                        item = {user}
                        key = {user.id}/>
                       )
                 })
            }
            </div>
        )
    }

}

export default UserAll;