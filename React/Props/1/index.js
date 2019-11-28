class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          from="Siam"
          to="Russel"
          bang="4"
        />
        <NumPicker />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));