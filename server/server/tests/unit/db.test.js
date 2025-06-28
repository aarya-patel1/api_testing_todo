const db = require('../../db');
<<<<<<< HEAD
const { setupDB, resetDB, cleanupDB } = require('../setup');
=======
>>>>>>> 6ffa0da716d95f93f6168e86f8eb6961efeb5d0f

describe('Database Operations (Non-mocked)', () => {
  beforeAll(async () => {
    await db.query('CREATE TABLE IF NOT EXISTS test_todos (id INT PRIMARY KEY AUTO_INCREMENT, title VARCHAR(255), completed BOOLEAN)');
  });

  afterAll(async () => {
    await db.query('DROP TABLE IF EXISTS test_todos');
  });

  beforeEach(async () => {
    await db.query('DELETE FROM test_todos');
  });

<<<<<<< HEAD
  test('should insert and retrieve task', async () => {
    const [insertResult] = await db.query(
      'INSERT INTO tasks (title) VALUES (?)',
      ['Test Task']
    );

    const [tasks] = await db.query('SELECT * FROM tasks');
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe('Test Task');
  });

  test('should return expected task from SQL script', async () => {
    await db.query(
      'INSERT INTO tasks (title, completed) VALUES (?, ?)',
      ['Scripted Task', true]
    );

    const [tasks] = await db.query('SELECT * FROM tasks WHERE completed = ?', [true]);
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe('Scripted Task');
    expect(tasks[0].completed).toBe(1);
  });
=======
  test('should insert and retrieve todos', async () => {
    await db.query('INSERT INTO test_todos (title, completed) VALUES (?, ?)', ['Test Todo', false]);
    const [todos] = await db.query('SELECT * FROM test_todos');
    expect(todos.length).toBe(1);
    expect(todos[0].title).toBe('Test Todo');
  });
  beforeAll(async () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      completed BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
});

>>>>>>> 6ffa0da716d95f93f6168e86f8eb6961efeb5d0f
});
