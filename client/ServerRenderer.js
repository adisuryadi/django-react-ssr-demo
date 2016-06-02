import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './routes'

export default class ServerRenderer {
  constructor(res) {
    this.res = res
  }

  render(path, data={}) {
    match({ routes, location: path }, (error, redirectLocation, renderProps) => {
      if (error) {
        this.res.status(500).send(error.message)
      } else if (redirectLocation) {
        this.res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        const appElement = (
            <RouterContext
                {...renderProps}
                createElement={(Component, props) =>
                  <Component data={data} {...props} />
                }
            />
        );
        this.res.status(200).send(renderToString(appElement))
      } else {
        this.res.status(404).send('Not found')
      }
    })
  }
}