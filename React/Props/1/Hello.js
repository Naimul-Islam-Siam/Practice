class Hello extends React.component {
  //default props
  static defaultProps = {
    from: 'Anonymous',
    bang: 2
  }

  render() {
    let repNum = "!".repeat(this.props.bang);
    return (
      <h3>Hello There {this.props.to} {repNum}</h3>
    )
  }
}