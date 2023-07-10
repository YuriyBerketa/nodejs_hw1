import fs from "fs/promises";
import { nanoid } from "nanoid";
import part from "path";

const contactsParth = part.resolve("db", "contacts.json");
console.log(contactsParth);

const updateContactsStorage = (contact) =>
  fs.writeFile(contactsParth, JSON.stringify(contact, null, 2));

export const listContacts = async () => {
  const data = await fs.readFile(contactsParth);
  return JSON.parse(data);
};

export const getContactById = async (id) => {
  const contact = await listContacts();
  const result = contact.find((item) => item.id === id);
  return result || null;
};

export const removeContact = async (id) => {
  const contact = await listContacts();
  const index = contact.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const result = contact.splice(index, 1);
  await updateContactsStorage(contact);
  return result;
};

export const addContact = async (name, email, phone) => {
  const contact = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
    };
    contact.push(newContact);
    await updateContactsStorage(contact);
    return newContact;
};

export default {
  listContacts,
  getContactById,
    removeContact,
  addContact,
};
