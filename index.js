const contacts = require("./contacts")
const {program} = require("commander")

const invokeAction = async({action, id, name, email, phone}) =>{
    switch(action){
        case "list":
            const data = await contacts.listContacts()
            console.table(data)
            break
        case "get":
            const contact = await contacts.getContactById(id)
            console.table(contact)
            break
        case "add":
            const newContact = await contacts.addContact({name, email, phone})
            console.table(newContact)
            break
        case "updateById":
            const renewContact = await contacts.updateContact(id, {name, email, phone})
            console.table(renewContact)
            break
        case "remove":
            const deleteContact = await contacts.removeContact(id)
            console.table(deleteContact)
            break 
            default:
                console.warn('\x1B[31m Unknown action type!');
    }
   
}

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
const argv = program.opts();
invokeAction(argv) 



