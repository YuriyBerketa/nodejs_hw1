import yargs from "yargs";
import phoneBook from "./contacts.js";


const invokeAction= async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
          const allContacts = await phoneBook.listContacts();
          return console.log(allContacts);
    //   break;

    case 'get':
          const oneContact = await phoneBook.getContactById(id);
          return console.log(oneContact);
      break;

    case 'add':
          const newContact = await phoneBook.addContact(name, email, phone);
          return console.log(newContact);
      break;

    case 'remove':
          const deleteContact = await phoneBook.removeContact(id);
          return console.log(deleteContact);
    //   break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}


// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "rsKkOQUi80UsgVPCcLZZW" });
// invokeAction({ action: "remove", id: "rsKkOQUi80UsgVPCcLZZW"});
// invokeAction({ action: "add", name: "ne trogai kozy", email: "renegat@gmail.com", phone:"(777) 888-1111" });

// console.log(process.argv);

const { argv } = yargs(process.argv.slice(2));
// console.log(argv);
invokeAction(argv);