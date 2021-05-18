import { applyMiddleware, compose } from 'redux';
import type { Middleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const DEV = process.env.NODE_ENV !== 'production';

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#FF0005',
  },
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore next line
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = DEV && devtools ? devtools : compose;

const middleware: Array<Middleware> = [thunk];

if (DEV) middleware.push(logger);

export const enhancedStore = composeEnhancers(applyMiddleware(...middleware));
