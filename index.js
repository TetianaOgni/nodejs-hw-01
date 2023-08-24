const contacts = require("./contacts")
// const listContacts = require("./contacts.js")
// const yargs = require("yargs")
// const {hideBin} = require("yargs/helpers")

// const { Command } = require('commander');
// const program = new Command();
const {program} = require("commander")



const invokeAction = async({action, id, name, email, phone}) =>{
    switch(action){
        case "list":
            const data = await contacts.listContacts()
            console.table(data)
            break
        case "get":
            const contact = await contacts.getContactById(id)
            console.log(contact)
            break
        case "add":
            const newContact = await contacts.addContact({name, email, phone})
            console.log(newContact)
            break
        case "updateById":
            const renewContact = await contacts.updateContact(id, {name, email, phone})
            console.log(renewContact)
            break
        case "remove":
            const deleteContact = await contacts.removeContact(id)
            console.log(deleteContact)
            break 
            default:
                console.warn('\x1B[31m Unknown action type!');
    }
   
}
// invokeAction({action: "read"})
// invokeAction({action: "getById", id: "qdggE76Jtbfd9eWJHrssH"})
// invokeAction({action: "add", name: "Tanya", email: "tatianaognivenko@gmail.com", phone: "3-13-86"})
// invokeAction({action: "updateById", id: "pLr0e5FVrxepO8MfF5Y5z", name: "Tetiana", email: "tetianaognivenko@gmail.com", phone: "3-13-86"})
// invokeAction({action: "deleteById", id: "VeBQn-VFAh9oMpDSnXnzN"})
// console.log(process.argv)

// const actionIndex = process.argv.indexOf("--action")
// if (actionIndex !== -1){
//     const action = process.argv[actionIndex + 1]
//     console.log("my action", action)
//     invokeAction({action})
// }

// const arr = hideBin(process.argv)
// console.log(arr)
// const {argv} = yargs(arr)
// console.log(argv)


program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
const argv = program.opts();
invokeAction(argv) 



