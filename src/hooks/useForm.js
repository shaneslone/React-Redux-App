import { useState } from 'react';
export const useForm = initiaValues => {
  const [value, setValue] = useState(initiaValues);

  const handleChanges = e => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const clearSearch = () => {
    setValue({ ...value, summonerName: '' });
  };

  return [value, handleChanges, clearSearch];
};
