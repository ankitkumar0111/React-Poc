import React from 'react'

const PersonalForm = () => {
  return (
    <div className='personal-form'>
        <form>
        <div className="first-name-2">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>
        <div className="middle-name">
          <label>
            <input type="checkbox" />I have middle/second last name.
          </label>
        </div>
        </form>
    </div>
  )
}

export default PersonalForm