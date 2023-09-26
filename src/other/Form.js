import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName: '',
         comments: '',
         topic: 'react'
      }
    }

    userNameHandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    commentHandler = (event) => {
        this.setState ({
            comments: event.target.value
        })
    }

    topicHandler = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    
    submitHandler = (event) => {
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    
  render() {
    const { userName, comments, topic} = this.state
    return (
      <form onSubmit={this.submitHandler}>
        <div>
            <label>UserName</label>
            <input type='text' value={userName} onChange={this.userNameHandler}></input>
        </div>
        <div>
        <label>comments</label>
        <textarea type='text' value={comments} onChange={this.commentHandler}></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={topic} onChange={this.topicHandler}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='vue'>Vue</option>
            </select>
        </div>
        <div>
            <button type='submit' >Submit</button>
        </div>
      </form>
    )
  }
}

export default Form
