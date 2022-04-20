import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../shared/constants/routes';
import './Not-found.scss';

const NotFound = (): JSX.Element => {
  const [count, setCount] = useState<number>(3);
  const [, setIntervalId] = useState<NodeJS.Timer | number>(0);

  useEffect(() => {
    const newIntervalId = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    setIntervalId(newIntervalId);
    return () => clearInterval(newIntervalId as NodeJS.Timer);
  }, [count]);

  if (count === 0) return <Navigate to={PATHS.main} />;
  return (
    <div className="error-wrapper">
      <div className="error-wrapper__pic-wrapper">
        {/* <img src="../images/gif/404.gif" alt="" className="error-wrapper__pic" /> */}
      </div>
      <div className="error-wrapper__404">404</div>
      <div className="error-wrapper__not-found">Not found</div>
      <div className="error-wrapper__redirect">
        You will be redirected to main page in{' '}
        <span className="error-wrapper__seconds">{count}</span> seconds
      </div>
    </div>
  );
};

export default NotFound;
