require("dotenv").config();
const { createAssignment } = require("../adapters/assignmentsAdapter");
const { createCategory } = require("../adapters/categoriesAdapter");
const { createStudent } = require("../adapters/studentsAdapter");
const { createUser } = require("../adapters/usersAdapter");
const client = require("../client");

async function deleteTables() {
  await client.query(`
    DROP TABLE IF EXISTS student_assignments;
    DROP TABLE IF EXISTS assignments;
    DROP TABLE IF EXISTS categories;
    DROP TABLE IF EXISTS students;
    DROP TABLE IF EXISTS users;
    `);
}

async function createTables() {
  await client.query(`
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
    );
    `);

  await client.query(`
    CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    "firstName" VARCHAR(255) NOT NULL,
    "lastInitial" VARCHAR(255),
    "readingLevel" INTEGER,
    "schoolYear" VARCHAR(255) NOT NULL,
    "teacherId" INTEGER REFERENCES users(id) ON DELETE CASCADE
    );
    `);

  await client.query(`
    CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
    );
    `);

  await client.query(`
    CREATE TABLE assignments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    "totalPoints" INTEGER,
    "dateAssigned" DATE,
    "categoryId" INTEGER REFERENCES categories(id) ON DELETE CASCADE,
    "teacherId" INTEGER REFERENCES users(id) ON DELETE CASCADE
    );
    `);

  await client.query(`
    CREATE TABLE student_assignments (
    id SERIAL PRIMARY KEY,
    "earnedPoints" INTEGER,
    "imageUrl" VARCHAR(255),
    notes TEXT,
    "studentId" INTEGER REFERENCES students(id) ON DELETE CASCADE,
    "assignmentId" INTEGER REFERENCES assignments(id) ON DELETE CASCADE
    );
    `);
}

async function seed() {
  try {
    await client.connect();
    console.log("Deleting tables...");
    await deleteTables();
    console.log("Creating tables...");
    await createTables();
    await createUser({
      username: "tigerclaw",
      firstName: "Tyler",
      lastName: "McMu",
      password: "password",
    });
    await createStudent({
      firstName: "Billy",
      lastInitial: "P.",
      teacherId: 1,
      schoolYear: "2022-23",
    });

    await createCategory("Art");
    await createCategory("ELA");
    await createCategory("Math");
    await createCategory("Writing");
    await createCategory("Social Studies");
    await createCategory("Science");

    await createAssignment({
      name: "Dinosaur Drawing",
      totalPoints: 10,
      dateAssigned: "2023-04-12",
      categoryId: 1,
      teacherId: 1,
    });
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

seed();
