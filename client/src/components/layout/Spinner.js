import React, { Faragment } from 'react';
import spinner from './spinner.gif';


export default () => (
    <Faragment>
        <img
            src={spinner}
            style={{ width: '200px', margin: 'auto', display: 'block'}}
            alt='Loading...'
        />
    </Faragment>
);
