import React, { Component } from 'react';

class AddItem extends Component {

  constructor() {
    super();
    this.state = {
      newItem:{}
    }
  }

  handleSubmit = (e) => {
    e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
      // Implement the rest of this function here!
      const item = document.querySelector(`#add${this.props.idName}>input[type="text"]`).value;
      this.props.addItem({list: this.props.idName, itemName: item});
  }


  render() {
    var divName = 'add' + this.props.idName;
    return (
      <div className='addItemDiv'>
      <h4>Add {this.props.idName}</h4>
      <form ref='form' onSubmit={this.handleSubmit}>
      <div id={divName} ref={divName}>
        <label>Name</label><br />
        <input type='text' ref='id' />
        </div>
        <br />
        <input type='submit' value='Submit' />
        <br />
      </form>
      </div>
    );
  }

}

export default AddItem;
