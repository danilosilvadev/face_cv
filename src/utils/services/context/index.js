import React from 'react';

const Context = React.createContext({
  bgContext: {
    color: 'white',
  },
  pointsContext: 0,
});

export default Context;