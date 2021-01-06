import React, {Component} from "react";

class CarComponent extends Component{

    render(){
        let{item} = this.props;
        return(

            <div>
                <h3>Car : {item.producer}</h3>
                 model : {item.model},
                 year : {item.year},
                 color : { item.color},
                 type : {item.type},
                 engine : {item.type},
                 volume : {item.volume},
                 power : {item.power}
            </div>
        )
    }
}
export default CarComponent;