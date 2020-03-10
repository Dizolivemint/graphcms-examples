import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import App from './components/App'
import './index.css'

import registerServiceWorker from './registerServiceWorker'

// Replace this with your project's endpoint
const GRAPHCMS_API = 'https://api-eu-central-1.graphcms.com/v2/ck7lojk8401ds01xm1eprdzjw/master'

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
