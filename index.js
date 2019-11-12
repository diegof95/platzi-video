import React from 'react';
import {render} from 'react-dom';
import Feed from './src/feed';

import data from './src/api.json';

const app = document.getElementById('app');

render(<Feed data={data} />, app);