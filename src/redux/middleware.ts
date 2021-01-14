import { applyMiddleware, compose, Middleware } from 'redux';
import { createLogger } from 'redux-logger';

const __DEV__ = process.env.NODE_ENV !== 'production';

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

// @ts-ignore next line
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;

const middleware: Array<Middleware> = [];

__DEV__ && middleware.push(logger);

export const enhancedStore = composeEnhancers(applyMiddleware(...middleware));
