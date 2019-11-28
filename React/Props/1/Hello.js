class Hello extends React.component {
  render() {
    const repNum = "!".repeat(this.props.bang);
    return (
      <h3>Hello There {this.props.to} {repNum}</h3>
    )
  }
}