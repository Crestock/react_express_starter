import React, { useContext } from 'react';
import {Query } from './Query';

import { GlobalContext } from '../context/GlobalState';

export const QueryList = () => {
  const { queries } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {queries.map(query => (<Query key={query.id} query={query} />))}
      </ul>
    </>
  )
}
