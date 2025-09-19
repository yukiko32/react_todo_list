import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "./components/ui/provider"
import Todo from './Todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      < Todo />
    </Provider>
  </StrictMode>
)
