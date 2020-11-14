import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Matthew Weaber',
        email: 'matt@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Rebecca Weaber',
        email: 'becca@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Onyx Weaber',
        email: 'onny@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users