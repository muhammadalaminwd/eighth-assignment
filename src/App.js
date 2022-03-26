import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import QuestionOne from './components/Question-Answer/QuestionOne/QuestionOne';
import QuestionTwo from './components/Question-Answer/QuestionTwo/QuestionTwo';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Shop></Shop>
    <QuestionOne></QuestionOne>
    <QuestionTwo></QuestionTwo>
    </div>
  );
}

export default App;
