import { useEffect, useState } from 'react';
import './App.css';
import data from './data';
import Review from './card';
import Toggle from './toggle';

function App() {

  const [id, setId] = useState(0);

  const [person, setPerson] = useState(data[0]);

  const [opacity, setOpacity] = useState("100%")

  const smoothEffect = () => {
    setOpacity("0%");
    setTimeout(() => {
      setOpacity("100%");
    }, 500)
  }

  const next = () => {
    setId(() => {
      return (id + 1) % 4;
    });
  }
  const previous = () => {
    if (id === 0) {
      setId(data.length - 1);
    }
    else {
      setId(id - 1);
    }

  }
  const random = () => {
    let randomNum = Math.floor(Math.random() * 4);
    while (randomNum === id) {
      randomNum = Math.floor(Math.random() * 4);
    }
    setId(randomNum);
  }
  useEffect(() => {
    setPerson(data[id]);
  }, [id]);

  return (
    <div className='mainContainer'>
      <h1>Team</h1>
      <Review
        link={person.image}
        name={person.name}
        job={person.job}
        about={person.text}
        opacity={opacity}
      />
      <Toggle
        next={next}
        previous={previous}
        random={random}
        smoothEffect={smoothEffect}
      />
    </div>

  );
}

export default App;
