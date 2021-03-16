import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import EventHandling from './components/EventHangling';
import QuillEditor from './components/QuillEditor';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Polin">
        <p>This is the sub element of</p>
      </Greet>
      <Greet name="Misha"/>
      <Welcome />
      <Hello />
      <Message /> */}
      <Counter />
      <EventHandling />
      <QuillEditor
        label="Quill Editor"
      />
    </div>
  );
}

export default App;
