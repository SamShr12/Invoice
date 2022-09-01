import { Create, Data, Detail, Invoice, Show } from "./components"
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Data />}/>
        <Route path="/create" element={<Create />} />
        <Route path="/:name" element={<Detail />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/useradmin/create" element={<Create /> } />
        <Route path="/useradmin" element={<Show />} />
      </Routes>
    </div>
  )
}

export default App
