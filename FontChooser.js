class FontChooser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      bold: this.props.bold === 'true',
      size: this.getSizeProp(),
      min: Number(this.props.min) > 0 ? Number(this.props.min) : 1,
      max: (Number(this.props.max) < Number(this.props.min) ?
      Number(this.props.min) : Number(this.props.max))
    };
    this.toggleBold = this.toggleBold.bind(this);
    this.toggleIsHidden = this.toggleIsHidden.bind(this);
    this.decreaseSize = this.decreaseSize.bind(this);
    this.increaseSize = this.increaseSize.bind(this);
    this.setToDefault = this.setToDefault.bind(this);
  }

  getSizeProp() {
    if (Number(this.props.size) < Number(this.props.min)) {
      return Number(this.props.min);
    }
    if(Number(this.props.size) > Number(this.props.max)) {
      return Number(this.props.max);
    }
    return Number(this.props.size);
  }

  toggleBold() {
    this.setState({bold: !this.state.bold});
  }
  toggleIsHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  decreaseSize(){
    this.setState({
        size:
        (this.state.size > Number(this.state.min)) ?
        this.state.size - 1 : this.state.size
      });
    }
  increaseSize() {
    this.setState({
      size:
        (this.state.size < Number(this.state.max)) ?
        this.state.size + 1 : this.state.size
      });
  }

    setToDefault() {
      this.setState({size: Number(this.props.size)});
    }
  render() {
    return (
      <div>
        <input onChange={this.toggleBold}
        checked={this.state.bold}
        type="checkbox" id="boldCheckbox" hidden={this.state.isHidden}/>
        <button onClick={this.decreaseSize} id="decreaseButton" hidden={this.state.isHidden}>-</button>
        <span onDoubleClick={this.setToDefault}
        style={{
          color: (
            this.state.size == this.state.min ||
            this.state.size == this.state.max
            ) ?  'red' : 'black'
        }}
        id="fontSizeSpan" hidden={this.state.isHidden}>{this.state.size}</span>
        <button onClick={this.increaseSize} id="increaseButton" hidden={this.state.isHidden}>+</button>
        <span
        style={{
          fontWeight: this.state.bold ? 'bold' : 'normal',
          fontSize: this.state.size,
        }}
        onClick={this.toggleIsHidden}
        id="textSpan">{this.props.text}</span>
      </div>
    );
  }
}
