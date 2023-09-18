import { useEffect, useState } from 'react';

function useInterval(interval, limit) {
    const [value, setValue] = useState(0);

      
        useEffect(() => {
          const intervalId = setInterval(() => {
            if (value < limit) {
              setValue(value + 1);
            } else {
              setValue(0);
            }
          }, interval);
          return () => clearInterval(intervalId);
        }, [value, interval, limit]);
      
        return value;
      
}
export default useInterval;
