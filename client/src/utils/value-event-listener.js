import { useState, useEffect } from 'react';
import firebaseDatabaseRef from '../FireBase/firebase-database'

export default function valueEventListener(addressString) {
  const [value, setValue] = useState({});

  useEffect(() => {
    const ref = firebaseDatabaseRef(addressString);

    function onNewValue(snapshot) {
      const value = snapshot.val();
      return value ? setValue(value) : setValue({});
    }
    ref.on("value", onNewValue);
  }, [addressString]);
  return value;
}