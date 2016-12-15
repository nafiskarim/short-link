import React, { Component } from 'react'

class LinkCreate extends Component {
  render () {
    return (
      <form>
        <div className="form-group">
          <input className="form-control" />
        </div>
        <button className="btn btn-primary"> Shorten </button>
      </form>
    )
  }
}

export default LinkCreate;
