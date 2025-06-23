import React, { useRef } from 'react';

function AddType() {
  const num1 = useRef(null);
  const addRef = useRef(null);

  const AddingType = () => {
    const n1 = num1.current.value || 0; 
    addRef.current.textContent = n1;
  };

  return (
    <div>
      <h2>TYPE SOMTHING HERE</h2>
      <div>
       
        <input type="number" ref={num1} onChange={AddingType} />
      </div>
     
      <div>
        <label>OUTPUT</label><br/>
        
        <span ref={addRef}></span>
      </div>
    </div>
  );
}

export default AddType;
