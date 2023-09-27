import React from 'react';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers';
import { useReducer } from 'react';
import { addOne, applyNumber, clearDisplay, operationChange, memoryAdd, memoryClear, memoryRecall } from './actions';

function App() {

const [state, dispatch] = useReducer(reducer, initialState);

const handleApplyNumber = (event) => {
  const {value} = event.target;
  dispatch(applyNumber(Number(value)));
}

const handleOperationChange = (event) => {
  dispatch(operationChange(event.target.value));
}

const handleClearDisplay = () => {
  dispatch(clearDisplay());
}

const handleMemoryAdd = (event) => {
  const {value} = event.target;
  if(value === "M+"){
    dispatch(memoryAdd());
  }else if(value === "MR"){
    dispatch(memoryRecall());
  }else if(value === "MC"){
    dispatch(memoryClear());
  }
}

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick= {handleMemoryAdd}/>
              <CalcButton value={"MR"} onClick= {handleMemoryAdd}/>
              <CalcButton value={"MC"} onClick= {handleMemoryAdd}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick= {handleApplyNumber} />
              <CalcButton value={2} onClick= {handleApplyNumber}/>
              <CalcButton value={3} onClick= {handleApplyNumber}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick= {handleApplyNumber}/>
              <CalcButton value={5} onClick= {handleApplyNumber}/>
              <CalcButton value={6} onClick= {handleApplyNumber}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick= {handleApplyNumber}/>
              <CalcButton value={8} onClick= {handleApplyNumber}/>
              <CalcButton value={9} onClick= {handleApplyNumber}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick= {handleOperationChange}/>
              <CalcButton value={"*"} onClick= {handleOperationChange}/>
              <CalcButton value={"-"} onClick= {handleOperationChange}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick= {handleClearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
