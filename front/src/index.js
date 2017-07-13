import header from './header.md';
import main from './main.md';

import 'normalize.css/normalize.css';
import 'github-markdown-css/github-markdown.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import './github-corner.css';

document.getElementById('header').innerHTML = header;
document.getElementById('main').innerHTML = main;
