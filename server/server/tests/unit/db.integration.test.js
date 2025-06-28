const db = require('../../db');
const { setupDB, resetDB, cleanupDB } = require('../setup');

describe('Database Operations - Real Database', () => {
  beforeAll(async () => {
<<<<<<< HEAD
    await setupDB();
  });

  afterAll(async () => {
    await cleanupDB();
  });

  beforeEach(async () => {
    await resetDB();
  });

  test('should insert and retrieve task', async () => {
    await db.query('INSERT INTO tasks (title, completed) VALUES (?, ?)', ['Test Task', false]);
    const [tasks] = await db.query('SELECT * FROM tasks');
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe('Test Task');
    expect(tasks[0].completed).toBe(0);
  });

  test('should update task status', async () => {
    const [insertResult] = await db.query('INSERT INTO tasks (title, completed) VALUES (?, ?)', ['Another Task', false]);
    const taskId = insertResult.insertId;

    await db.query('UPDATE tasks SET completed = ? WHERE id = ?', [true, taskId]);

    const [updated] = await db.query('SELECT * FROM tasks WHERE id = ?', [taskId]);
    expect(updated.length).toBe(1);
    expect(updated[0].completed).toBe(1); // BOOLEAN returns 1/0 in MySQL
=======
    await db.query('CREATE TABLE IF NOT EXISTS tasks (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), description TEXT, completed BOOLEAN DEFAULT FALSE)');
  });

  afterAll(async () => {
    await db.query('DROP TABLE IF EXISTS tasks');
  
  
  });

  beforeEach(async () => {
    await db.query('DELETE FROM tasks');
  });

  test('should insert and retrieve tasks', async () => {
    const [result] = await db.query('INSERT INTO tasks (title, completed) VALUES (?, ?)', ['Test Task', false]);
    const [tasks] = await db.query('SELECT * FROM tasks');
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe('Test Task');
>>>>>>> 6ffa0da716d95f93f6168e86f8eb6961efeb5d0f
  });
test('should update task status', async () => {
  const [result] = await db.query('INSERT INTO tasks (title, completed) VALUES (?, ?)', ['Test Task', false]);
  const taskId = result.insertId;
  await db.query('UPDATE tasks SET completed = ? WHERE id = ?', [true, taskId]);
  const [tasks] = await db.query('SELECT * FROM tasks WHERE id = ?', [taskId]);
  
  // Fix boolean comparison
  expect(Boolean(tasks[0].completed)).toBe(true);
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


});
