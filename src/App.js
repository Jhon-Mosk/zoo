import {
  useEffect,
  useState
} from 'react';
import './App.css';
import Animal from './components/Animal';
import Button from './components/Button';
import randomNumber from './utils/randomNumber';

function App() {
  const [zoo, setZoo] = useState([]);
  const [freeId, setFreeId] = useState();
  let animals = [{
    number: 1,
    id: Date.now(),
    type: 'Giraph',
    param: {
      type: 'height',
      value: randomNumber(1, 5),
    }
  },
  {
    number: 2,
    id: Date.now(),
    type: 'Wolf',
    param: {
      type: 'speed',
      value: randomNumber(1, 5),
    }
  },
  {
    number: 3,
    id: Date.now(),
    type: 'Hippo',
    param: {
      type: 'weight',
      value: randomNumber(1, 5),
    }
  },
  ]

  const randomAnimal = (animals) => {
    let number = randomNumber(1, 3);
    return animals.filter(animal => animal.number === number);
  }

  const addToZoo = () => {
    let animal = randomAnimal(animals);
    setZoo(zoo.concat([< Animal key={animal[0].id} id={animal[0].id} type={animal[0].type} param={animal[0].param} free={freeHandelClick} />]));
  }

  useEffect(() => {
    setZoo(zoo.filter(animal => (freeId !== animal.props.id)))
  }, [freeId]);

  const freeHandelClick = (id) => {
    setFreeId(id);
  }

  return (
    <div className="container" >
      <Button onClick={addToZoo} name="Catch" />
      <div className='zoo' >
        {(zoo.length) ? zoo.map(animal => animal) : 'Empty'}
      </div>
    </div>
  );
}

export default App;
