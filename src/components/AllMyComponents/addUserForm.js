import React, { useState } from 'react'
import './mystyles.css';
import IntlMessages from "util/IntlMessages";



const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '', email: '', password: '', user_type: '', company: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
            className="formInput"
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
            <label className="label "><IntlMessages id="appModule.name" /></label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label className="label "><IntlMessages id="appModule.username" /></label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <label className="label "><IntlMessages id="sidebar.appModule.mail" /></label>
			<input type="text" name="email" value={user.email} onChange={handleInputChange} />
            <label className="label "><IntlMessages id="appModule.password" /></label>
			<input type="text" name="password" value={user.password} onChange={handleInputChange} />
            <label className="label "><IntlMessages id="company.userType" /></label>
			<input type="text" name="user_type" value={user.user_type} onChange={handleInputChange} />
            <label className="label "><IntlMessages id="company.name" /></label>
			<input type="text" name="company" value={user.company} onChange={handleInputChange} />
            <button className=" button button2"><IntlMessages id="add.new.user"/></button>
		</form>
	)
}

export default AddUserForm