import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory, applyRouterMiddleware } from 'react-router'
import routes from './routes'

const initialData = window.INITIAL_DATA || {}

const useExtraProps = {
  renderRouteComponent: child => React.cloneElement(child, { data: initialData })
}

ReactDOM.render(
    <Router
        data={initialData}
        history={browserHistory}
        routes={routes}
        render={applyRouterMiddleware(useExtraProps)} />,
    document.getElementById('app')
);
