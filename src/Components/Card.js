import React, { Component } from 'react'
export default class Card extends Component {
state={
    name:"****************",
    cardnumber:"**** **** **** ****",
    validThru:"**/**",

}
Namechange =(n)=>{
    if(n.target.value.length<21){
      this.setState({
        name:n.target.value
      })

    this.setState({ name:n.target.value.toUpperCase()})  
    
    }
  
  
  }

  Numberchange=(event)=> {
    event.target.value = event.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    if (event.target.value.length < 20)
    {  this.setState({

        cardnumber : event.target.value

    })}

 }
    Datechange=(d)=>{  
        if(d.target.value.substring(0,2)<13)       
              this.setState({
        
                validThru: (d.target.value).split("").slice(0,2).join("")+"/"+(d.target.value).split("").slice(2,4).join(""),
        
            })
            
          }
    
















    render() {
     return (
            <div className="Bigcontainer">

            <div className="creditcard">
                <h2 className="title">Comapny name</h2>
                <img className="sim" src="https://img.icons8.com/plasticine/2x/sim-card-chip.png" height="100px" width="100px"/>
                <p className="numbers">{this.state.cardnumber}</p>
                <div className="username">
                    <img className="master" src="https://yt3.ggpht.com/a/AGF-l787G5DrxFmgql8xjPbJ6WFwGDAdCo1yfjhDSw=s900-c-k-c0xffffffff-no-rj-mo" height="100px" width="100px" />
                    <p className="validity">{this.state.validThru}</p>

                </div>    
                <p className="name" >{this.state.name}</p>            
            </div>

            <div className="inputcontainer">
                <input type="text" placeholder="cardnumber" maxlength="19" onChange={this.Numberchange} ></input>
                <input type="text" placeholder="name" maxlength="20" onChange={this.Namechange} ></input>
                <input type="text" placeholder="validThru" maxlength="4" onChange={this.Datechange}></input>

            </div>
            
            </div>

        );
     }
    }


