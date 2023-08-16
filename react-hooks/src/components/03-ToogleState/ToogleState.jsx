import React, { useState } from 'react';

export const ToogleState = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>    
      <p>Estado: {isOn ? 'Encendido' : 'Apagado'}</p>
      <button className='w-max h-max rounded-sm pointer-events-auto bg-slate-600 text-white' onClick={() => setIsOn(!isOn)}>Toggle</button>
    </>    
  );
}
