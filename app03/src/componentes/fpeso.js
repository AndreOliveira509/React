import React from "react";

export default class fpeso extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <div>
            <label>
                Peso
                <input type="text" value={this.props.p} onChange={(e)=>{this.props.sp(e.target.value)}}/>
            </label>
        </div>
    )
    }
}