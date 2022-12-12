import React, { useState } from 'react';

const EditContacs = (props) => {

    console.log(props);
    const [editName, setEditName] = useState(props.editContacs.name);
    const [editSurname, setEditSurname] = useState(props.editContacs.surname);
    const [editPhone, setEditPhone] = useState(props.editContacs.phone);
    function handleSaveClick() {
        let contact = { ...props.editContacs }
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
                placeholder='Surname'
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