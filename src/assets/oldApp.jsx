import Contact from './assets/Contact';
import Counter from './assets/Counter';
import Hello from './assets/Hello';

function App() {
  const helloData = [
    {name: 'Fah', message: 'Hi there'},
    {name: 'Tony', message: 'Hi!'}
  ];

  return (
    <div className='App'>
      < Counter/>
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message}/>
      ))}

      <Contact email="Fahsai.tpd@gmail.com" phone ="0952952241"/>
    </div>
  );
}

export default App;
