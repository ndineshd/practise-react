import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {
    return this.state.isLoggedIn && <div>welcome d</div>

// return(
//     this.state.isLoggedIn ? <div>welcome dinesh</div>:<div>welcome Dhinu</div>
// )


    // let message
    // if(this.state.isLoggedIn) {
    //     message = <div>welcome dinesh</div>
    // }else {
    //     message = <div>welcome Dhinu</div>
    // }

    // return <div>{message}</div>

    // if(this.state.isLoggedIn) {
    //     return ( <div>welcome dinesh</div>)
    // } else {
    //     return (<div>welcome Dhinu</div>)
    // }
    
    // return (
    //   <div>
    //     <div>welcome dinesh</div>
    //     <div>welcome Dhinu</div>
    //   </div>
    // )
  }
}

export default ConditionalRendering
