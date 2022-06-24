import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';
import City from './modules/City';

function London() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <City
      title="LONDON"
      CO={data[1].co}
      NH3={data[1].nh3}
      N0={data[1].no}
      NO2={data[1].no2}
      O3={data[1].o3}
      PM2_5={data[1].pm2_5}
      PM10={data[1].pm10}
      SO2={data[1].so2}
    />
  );
}

export default London;
