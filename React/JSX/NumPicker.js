function getNum() {
  return Math.floor(Math.random() * 10 + 1);
};


class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;

    if (num === 1) {
      msg =
        <div>
          <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
          <p>Congrats You Won!!!</p>
        </div>
    } else {
      msg =
        <div>
          <p>Sorry Better Luck Next Time.</p>
        </div>
    }

    return (
      <div>
        <h4>Your Number is: {num}</h4>
        {msg}
      </div>
    );
  }
};