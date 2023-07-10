import yargs from "yargs";
import phoneBook from "./contacts.js";


const invokeAction= async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
          const allContacts = await phoneBook.listContacts();
          return console.log(allContacts);
    

    case 'get':
          const oneContact = await phoneBook.getContactById(id);
          return console.log(oneContact);
      

    case 'add':
          const newContact = await phoneBook.addContact(name, email, phone);
          return console.log(newContact);
      

    case 'remove':
          const deleteContact = await phoneBook.removeContact(id);
          return console.log(deleteContact);


    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}



const { argv } = yargs(process.argv.slice(2));

invokeAction(argv);