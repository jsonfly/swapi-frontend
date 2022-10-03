import './App.css';
import MyButton from './components/MyButton/MyButton';
import PeopleContainer from './components/PeopleContainer/PeopleContainer';

function App() {
  return (
    <div className="App">
      <MyButton color={'red'}>
        <h1>Sziasztok!</h1>
        <p>Hétfő van.</p>
      </MyButton>
      <PeopleContainer />
    </div>
  );
}

export default App;

