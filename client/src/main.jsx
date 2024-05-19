import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MyProvider, PointsProvider, FeedbackProvider } from './MyContext'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PointsProvider>
      <FeedbackProvider>
        <MyProvider>
          <App />
        </MyProvider>
      </FeedbackProvider>
    </PointsProvider>
  </React.StrictMode>,
)
