import React from 'react';
import axios from 'axios';
import HTMLFlipBook from 'react-pageflip';

function Bookcomponant() {
  const [proverbs, setProverbs] = useState([]);

  useEffect(async () => {
    const getProverbs = () => {
      const url = '/api/v1/';
      return axios.get(url);
    };

    const response = await getMainCities().catch((err) => {
      console.error(`Error in fetching cities ${err}`);
    });

    if (response) {
      const { data } = response;
      setCities(data);
      console.log('data', data);
    }
  }, []);
  return (
    <HTMLFlipBook width={300} height={500} style={{ boxShadow: '0px 0px 20px 5px' }}>
      <div className="demoPage" style={{ background: 'blue' }}>Page 1</div>
      <div className="demoPage">Page 2</div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div>
    </HTMLFlipBook>
  );
}

export default Bookcomponant;
