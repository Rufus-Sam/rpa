import bcrypt from 'bcryptjs'

const users = [
    {
        name: "Admin",
        isAdmin: true,
        email: "admin@gmail.com",
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: "John doe",
        isAdmin: false,
        email: "john@gmail.com",
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: "Jane doe",
        isAdmin: false,
        email: "jane@gmail.com",
        password: bcrypt.hashSync('123456', 10)
    },
]

export default users