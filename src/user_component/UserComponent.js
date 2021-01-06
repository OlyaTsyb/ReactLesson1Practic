import React, {Component} from "react";



class UserComponent extends Component{

    render(){
        let {item} = this.props;
        return(
        <div>
            <h3>user id :{item.id}</h3>
            name : {item.name},
            age : {item.age},
            status : {item.status.toString()}
        </div>
        )
    }

}

export default UserComponent;