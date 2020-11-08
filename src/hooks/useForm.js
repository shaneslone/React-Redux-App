import { useState } from 'react';
export const useForm = initiaValues => {
  const [value, setValue] = useState(initiaValues);

  const handleChanges = e => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return [value, handleChanges];
};
