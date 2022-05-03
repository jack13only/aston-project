import { useState } from 'react';

const useInput = (initial: string) => {
  const [value, setValue] = useState<string>(initial);

  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
  };
};

export default useInput;
