import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/control/home';

import data from '../api.json';

const home = document.getElementById('home');

render(<Home data={data} />, home);