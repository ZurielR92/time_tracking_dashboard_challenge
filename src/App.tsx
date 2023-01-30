import { useState } from 'react'
import { Card } from "./components/Card";
import { CardsGrid } from "./components/CardsGrid/CardsGrid";
import { HubCard } from './components/HubCard/HubCard';
import Data from './data.json'
import { iData } from "./utils/types";

const colors: string[] = [
  'hsl(15, 100%, 70%)',
  'hsl(195, 74%, 62%)',
  'hsl(348, 100%, 68%)',
  'hsl(145, 58%, 55%)',
  'hsl(264, 64%, 52%)',
  'hsl(43, 84%, 65%)'
]

function App() {

  const data:iData[] = Data

  const [ mode, setMode ] = useState('daily')

  return (
    <CardsGrid mode= { mode }>

      <HubCard mode={ mode } handleClick={ setMode }/>

      {
        data.map( ( d, index ) => {
          return (
            <Card key={ d.title } data={ d } mode={ mode } color={ colors[index] }/>
          )
        } )
      }
    </CardsGrid>
  );
}

export default App;
