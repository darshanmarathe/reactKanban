import React from 'react';
import {render} from 'react-dom';
import App from 'components/App';


const states  =  [
    'backlog',
    'this sprint',
    'analisys',
    'developement',
    'Testing',
    'Fixing',
    'Done'
]


render(<App Title="From Darshan Marathe" /> , document.getElementById("app"));