import React, { useState } from 'react'

const SchoolTeachers = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div>
        <h1 className="text-2xl font-bold">Teachers</h1>
        
    </div>
  )
}

export default SchoolTeachers