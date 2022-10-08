import React, {useState} from 'react';

function App() {

  const [show, setShow] = useState(false);

  return (
    <>
      <button type='button' name='btn-show' onClick={() => setShow(!show)}>
        {show ? "esconder" : "visualizar"}
      </button>
      {
        show && (<h2>Olá mundo</h2>)
      }
      
    </>
  );
}

export default App;
