import React, { useEffect ,useState, Fragment } from 'react';
import AddUserForm from './addUserForm';
import EditUserForm from './editUserForm';
import UserTable from './userTable';
import IntlMessages from "util/IntlMessages";
import ApiService from 'app/services/ApiServices';
import { URL } from 'constants/ActionTypes';

const MyTextField = () => {
  // Data
	const initialFormState = { id: null, name: '', username: '', email: '', password: '', user_type: '', company: '' }

	const [ users, setUsers ] = useState([])
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

  const  settingUsers = async () =>{
    try {
      const api = new ApiService();
      const response = await api.fetchGet(`${URL}/users`,{})
      setUsers(response)

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    settingUsers();
  }, [])

	// CRUD operations
	const addUser = user => {
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className="container">
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2><IntlMessages id="edit.user" /></h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2><IntlMessages id="user.info" /></h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2><IntlMessages id="mod.users" /></h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default MyTextField