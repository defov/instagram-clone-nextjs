import { hashPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;

  const { email, username, password } = data;

  if (
    !email ||
    !email.includes('@') ||
    !username ||
    !password ||
    password.trim().length < 3
  ) {
    res.status(422).json({
      message:
        'Invalid input',
    });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const existingUser = await db.collection('users').findOne({ $or: [{ email: email },{ username: username }] });

  if (existingUser) {
    client.close();
    res.status(422).json({ message: 'User exists already!' });
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('users').insertOne({
    email: email,
    username: username,
    password: hashedPassword,
  });

  client.close();
  res.status(201).json({ message: 'User created!' });
}

export default handler;