import { useState, useEffect } from 'react';
import firebaseDatabaseRef from '../FireBase/firebase-database';

export default function valueEventOnceListener(addressString) {
  const [value, setValue] = useState({});

  useEffect(() => {
    const ref = firebaseDatabaseRef(addressString);
    
    function onceNewValue(snapshot) {
      const value = snapshot.val();
      value ? setValue(value) : setValue({});
    }
    ref.once("value", onceNewValue);
  }, [addressString]);
  return value;
}