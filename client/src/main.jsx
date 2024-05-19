import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MyProvider } from './MyContext'
import { FeedbackProvider } from './MyContext'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FeedbackProvider>
      <MyProvider>
        <App />
      </MyProvider>
    </FeedbackProvider>
  </React.StrictMode>,
)
