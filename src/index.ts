import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName,
        },
    });
    console.log(res);
}

// insertUser("john", "password", "John", "Doe")

interface UpdateUser {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, { firstName, lastName }: UpdateUser) {
    const res = await prisma.user.update({
        where: {
            username
        },
        data: {
            firstName,
            lastName
        }
    });
    console.log(res);
}

// updateUser("john", { firstName: "Johnny", lastName: "Doe" });

async function getUser (username: string) {
    const res = await prisma.user.findUnique({
        where: {
            username
        }
    });
    console.log(res);
}

// getUser("john");