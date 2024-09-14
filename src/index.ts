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

async function getUser(username: string) {
    const res = await prisma.user.findUnique({
        where: {
            username
        }
    });
    console.log(res);
}

// getUser("john");

async function createTodo(userId: number, title: string, description: string) {
    const todo = await prisma.todos.create({
      data: {
        title,
        description,
        userId
      },
    });
    console.log(todo);
  
  }
  
//   getUser(1, "go to gym", "go to gym and do 10 pushups");

//   getUser(1, "go to gym", "go to gym and do 10 pushups");

async function getTodos(userId: number, ) {
    const todos = await prisma.todos.findMany({
        where: {
        userId: userId,
        },
    });
    console.log(todos);
}

getTodos(1);

async function getTodosAndUserDetails(userId: number, ) {
    const todos = await prisma.todos.findMany({
        where: {
            userId: userId,
        },
        select: {
            user: true,
            title: true,
            description: true
        }
    });
    console.log(todos);
}

getTodosAndUserDetails(1);