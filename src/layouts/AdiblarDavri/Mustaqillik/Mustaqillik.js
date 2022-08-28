import React, { useEffect, useState,  } from 'react';
import axios from 'axios'
import { Author } from '../../../Components/Author/Author';
export const Mustaqillik = () => {
  const [data, setData] = useState([])
	useEffect(() => {
		axios
			.get('https://book-service-layer.herokuapp.com/author/genreId/4')
			.then(function (response) {
        setData(response.data)
			})
			.catch(function (error) {
				console.log(error);
			})
	}, []);
  console.log(data);
	return <div>
    {
      data.length && <ul className='author__list'>
        {
          data.map(e => (
            <Author key={e.id} obj={e} />
          ))
        }
      </ul>
    }
  </div>;
};
