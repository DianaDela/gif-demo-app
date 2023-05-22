import { useState } from 'react'

function App() {
  const[categories, setCategories] = useState(["Dragon Ball", "One Piece"])

  return(
    <div className="mms-5 mt-5 me-5">
      <h3>Gif Demo App</h3>
      <hr />
      <input
        placeholder="serch term"
        type="text"
      />
      <button
        className="btn btn-primary btn-sm ms-2"
        type="button"
      >
       Search
      </button>
      <br />
      <ol>
        {
          categories.map((category) => (
            <li key={category}>
              {category}
           </li>
         ))
      }
      </ol>
    </div>

  )
}

export default App
