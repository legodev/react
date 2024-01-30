import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  function handleFirstName(e) {
    setForm({ ...form, firstName: e.target.value })
  }

  function handleLastName(e) {
    setForm({ ...form, lastName: e.target.value })
  }

  function handleEmail(e) {
    setForm({ ...form, email: e.target.value })
  }
  return (
    <>
      <form action="">
        <label htmlFor="first">
          First Name:
          <input
            type="text"
            id="first"
            onChange={handleFirstName}
            value={form.firstName}
          />
        </label>
        <label htmlFor="last">
          Last Name:
          <input
            type="text"
            id="last"
            onChange={handleLastName}
            value={form.lastName}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            onChange={handleEmail}
            value={form.email}
          />
        </label>
        <p>
          {form.firstName} {' '} {form.lastName}
        </p>
        <p>{form.email}</p>
      </form>
    </>
  )
}

export default App
