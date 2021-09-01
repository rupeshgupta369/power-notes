import Notelist from "./components/NotesList"
import { useState } from "react"
import { nanoid } from "nanoid"

const App = () => {

  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is my first note",
    date: 1 / 9 / 2021
  },
  {
    id: nanoid(),
    text: "This is my second note",
    date: 2 / 9 / 2021
  }, {
    id: nanoid(),
    text: "This is my third note",
    date: 3 / 9 / 2021
  },])
  return <div className="container">
    <Notelist notes={notes} />
  </div>
}
export default App