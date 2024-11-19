import { useState } from 'react';
import Header from './components/Header'
import UserInput from './components/UserInput';
import { ResultTable } from './components/ResultTable';

const INPUT_FIELDS = [
  {
      label: "Initial Investment",
      value: ""
  },
  {
      label: "Annual Investment",
      value: ""
  },
  {
      label: "Expected Return",
      value: ""
  },
  {
      label: "Duration",
      value: ""
  }
]

function App() {

  const [inputValues, setInputValues] = useState(INPUT_FIELDS);

  function onFieldValueChange(event, label) {
    setInputValues(currentValues => {
        let newValues = [...currentValues]
        for (let i=0; i < newValues.length; i++) {
            if (newValues[i].label === label) {
                newValues[i].value = event.target.value;
            }
        }
        return newValues
    });
  }

  return (
    <main className='center'>
      <Header></Header>
      <UserInput userInput={inputValues} onUserInputChange={onFieldValueChange}></UserInput>
      <ResultTable userInput={inputValues}></ResultTable>
    </main>
  );
}

export default App
