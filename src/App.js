import React, {Component} from "react";
import CarAll from "./car_list/CarAll";
import UserAll from "./user_list/UserAll";


class App extends Component{

    render(){

        return(
            <div>
               <h2>Cars : </h2> <CarAll/>
                <h2>Users : </h2> <UserAll/>
            </div>
        )

    }

}

export default App;
