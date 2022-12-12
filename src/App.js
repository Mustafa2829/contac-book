import React, { useState } from 'react';
import AddContact from './components/AddContact/AddContact';
import ContactsList from './components/AddContact/ContactsList/ContactsList';
import EditContacs from './components/EditContacs/EditContacs';
function App() {
  let [contacs, setContacts] = useState([]);
  let [editContacs, setEditContacts] = useState({})
  let [isEdit, setIsEdit] = useState(false)

  function handleNewContact(newContact) {
    let newContactsArray = [...contacs];
    newContactsArray.push(newContact)

    setContacts(newContactsArray)

  }

  function handleDeleteContac(id) {
    let newContactsArray = contacs.filter(item => {
      return item.id !== id
    })
    setContacts(newContactsArray)
  }

  function handleEditIndex(index) {
    setIsEdit(true)
    setEditContacts(contacs[index])
  }

  function handleSaveEditedContact(newContact) {
    let newContactsArray = contacs.map(item => {
      if (item.id === newContact.id) {
        return newContact
      }
      return item
    })
    setContacts(newContactsArray)
    setIsEdit(false)

  }


  return (
    <div className="App">
      <AddContact
        handleNewContact={handleNewContact}
      />
      {isEdit ? <EditContacs
        editContacs={editContacs}
        handleSaveEditedContact={handleSaveEditedContact}
      /> : null}

      <ContactsList
        contacs={contacs}
        handleDeleteContac={handleDeleteContac}
        handleEditIndex={handleEditIndex}
      />
    </div>
  );
};

export default App;