import React from 'react'
import PersonalForm from './PersonalForm'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import './PersonalDetails.css'

const PersonalDetails = () => {
  return (
    <div className='receiver-container'>
    <h2 className='receiver-heading'><ArrowBackSharpIcon color='primary' sx={{marginRight:"4px"}}/>Personal details</h2>
    <h3 className='personal-info'>Personal Information</h3>
<div className='personal-paragraph'>
    <p>Make sure the information matches the ID you'll use at the agent location</p>
    
</div>
<PersonalForm/>
</div>
  )
}

export default PersonalDetails