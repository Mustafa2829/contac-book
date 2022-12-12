import React, { useState } from 'react';

const EditContacs = (props) => {

    console.log(props);
    const [editName, setEditName] = useState(props.EditContacs.name);
    const [editSurname, setEditSurname] = useState(props.EditContacs.surname);
    const [editPhone, setEditPhone] = useState(props.EditContacs.phone);
    function handleSaveClick() {
        let contact = { ...props.editContact }
        contact.name = editName;
        contact.surname = editSurname;
        contact.phone = editPhone;

        props.handleSaveEditedContact(contact)
        setEditName("")
        setEditSurname("")
        setEditPhone("")

    }

    return (
        <div>
            <input
                onChange={(e) => setEditName(e.target.value)}
                type="text"
                placeholder="Name"
                value={editName} />
            <input
                onChange={(e) => setEditSurname(e.target.value)}
                type="text"
                placeholder='editSurname'
                value={editSurname} />
            <input
                onChange={(e) => setEditPhone(e.target.value)}
                type="text"
                placeholder='Number'
                value={editPhone} />
            <button onClick={handleSaveClick}>Save</button>


        </div>
    );
};

export default EditContacs;