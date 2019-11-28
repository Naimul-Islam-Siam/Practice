class App extends React.Component {
   render() {
      return (
         <div>
            <Friends
               name='Frost'
               hobbies={['Singing', 'Playing', 'Swimming']}
            />

            <Friends
               name='Rocky'
               hobbies={['Cooking', 'Running', 'Reading']}
            />
         </div>
      )
   }
};

ReactDOM.render(<App />, document.getElementById('root'));