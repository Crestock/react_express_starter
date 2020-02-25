import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Query = ({ query }) => {
  const { deleteQuery } = useContext(GlobalContext);

  const sign = query.length < 0 ? '-' : '+';

  return (
    <li className={query.length < 0 ? 'minus' : 'plus'}>
          {query.text} <span>{sign}{query.length}{query.width}{query.thickness}</span><button onClick={() => deleteQuery(query.id)} className="delete-btn">x</button>
    </li>
  )
}
