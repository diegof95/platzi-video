import React from 'react';
import {render} from 'react-dom';
import Media from './src/media';

const app = document.getElementById('app');

render(<Media type="audio" title="Post" author="Bj&ouml;rk" />, app);