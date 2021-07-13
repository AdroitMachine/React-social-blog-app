import React from 'react'
import Page from './Page'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <Page title="Not Found">
        <div className="text-center">
          <h2>Whoops, we can't find that page.</h2>
          <p className="lead text-muted">You can always visit the <Link to="/">Homepage</Link> to get a fresh start.</p>
        </div>
      </Page>
    )
}

export default NotFound