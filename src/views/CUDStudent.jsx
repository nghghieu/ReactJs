import '../css/cud-student.scss'
import { useState } from 'react'

export function CUDStudent() {
  const [gender, setGender] = useState('')

  function addStudent() {
    if (!gender) {
      console.log(1)
    } else {
      console.log(2)
    }
  }

  return (
    <div className="main-content">
      <div className="left">
        <div className="box-primary">
          <h1 className="title">
            <i className="fas fa-dragon"></i> add students
          </h1>
          <div className="form-student">
            <input
              type="radio"
              checked={gender === 'male'}
              value="male"
              onChange={event => setGender(event.target.value)}
            />
            <label>Male</label>
            <input
              type="radio"
              checked={gender === 'female'}
              value="female"
              onChange={event => setGender(event.target.value)}
            />
            <label>Female</label>
            <input
              type="radio"
              checked={gender === 'other'}
              value="other"
              onChange={event => setGender(event.target.value)}
            />
            <label>Other</label>
            <section>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone Number" />
              <input type="date" placeholder="Date of Birth" />
              <select>
                <option value="">-- Choose City --</option>
              </select>
              <select>
                <option value="">-- Choose District --</option>
              </select>
            </section>
            <button onClick={addStudent}>Add Student</button>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="box-primary">
          <h1 className="title">
            <i className="fas fa-dragon"></i> list students
          </h1>
        </div>
      </div>
    </div>
  )
}
