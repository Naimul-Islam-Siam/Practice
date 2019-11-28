class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          from="Siam"
          to="Russel"
          bang="4"
        />

        <Hello
          to="Simon"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));