import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';
import * as express from 'express';
import * as proxy from 'http-proxy-middleware';
import PROXY_CONFIG from './proxy.conf.js';
import { join } from 'path';

// Faster server renders w/prod mode (dev mode isn't needed)
enableProdMode();

// Fix the `Event is not defined` error https://github.com/angular/universal/issues/844
global['Event'] = null;

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP, ngExpressEngine, provideModuleMap } = require('./main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Proxy API requests
app.use('/api', proxy(PROXY_CONFIG['/api']));

// Serve static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
