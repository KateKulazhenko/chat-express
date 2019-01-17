import * as React from 'react';

import '../../styles/styles.scss';

const App  = () => {
  return (
    <div className='app'>
    <svg height='50' width='50' className='circle --small'>
        <circle  cx='25' cy='25' r='25' fill='#ffdbad'/>
      </svg>
      <svg height='500' width='500' className='circle --big'>
        <circle  cx='250' cy='250' r='250' fill='#ffdbad'/>
      </svg>
    </div>
  );
}

export default App;
