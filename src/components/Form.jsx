import { useState } from "react"

export default function From() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  const [as, setAs] = useState('')

  function handleFirstName(e) {
    setForm({ ...form, firstName: e.target.value })
    setAs(e.target.value)
    console.log(as)
  }

  function handleLastName(e) {
    setForm({ ...form, lastName: e.target.value })
  }

  function handleEmail(e) {
    setForm({ ...form, email: e.target.value })
  }
  return (
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
        {form.firstName} {form.lastName}
      </p>
      <p>{form.email}</p>
      <p>{as}</p>
    </form>
  )
}
