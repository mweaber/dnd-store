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
        email: 'onyx@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Scarlet Weaber',
        email: 'scarlet@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Boris Weaber',
        email: 'boris@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
]

export default users