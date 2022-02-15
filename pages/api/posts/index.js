import formidable from 'formidable';
import { getSession } from "next-auth/react";
import { connectToDatabase } from '../../../lib/db';

export const config = {
    api: {
      bodyParser: false,
    },
};

async function handler(req, res) {
    const session = await getSession({ req })
    if(!session) {
        return res.status(401).json({ error: 'Unauthorized!' })
    }

    if (req.method === 'POST') {
        const form = new formidable.IncomingForm({
            uploadDir: './public/uploads/',
            filename: true,
            keepExtensions: true
        });
        form.parse(req, (err, fields, files) => {
            if(err) res.status(400).json({ error: 'Something went wrong!' });

            const { caption } =  fields 
            const imagePath = `/uploads/${files.file.newFilename}`

            const client = await connectToDatabase();
            const db = client.db();

            const result = await db.collection('posts').insertOne({
                user_id: session.id,
                username: session.username,
                profileImage: session.profileImage,
                caption: caption,
                image: imagePath,
                comments: []
            });

            client.close()
            res.status(201).json({ 
              message: 'Post created!'
            })
        });

    }
}

export default handler;