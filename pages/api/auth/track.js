import { MongoClient } from 'mongodb';
import { hash } from 'bcryptjs';

async function handler(req, res) {
    //Only POST mothod is accepted
    if (req.method === 'GET') {
        //Getting email and password from body
        const { track } = req.body;
        //Validate
        if (!track) {
            res.status(422).json({ message: 'Invalid Data' });
            return;
        }
        //Connect with database
        /*
        const client = await MongoClient.connect(
            `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}.n4tnm.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        */

        //const client = await MongoClient.connect(
            const client = await MongoClient.connect(
            `${process.env.DB_URL}://${process.env.DB_User}:${process.env.DB_Pssword}/${process.env.MONGO_DB}`
        );

        const db = client.db();

        //Check existing
        const checkExisting = await db
            .collection('customers')
            .findOne({ tracking_id: track });

        //Send error response if duplicate user is found
        if (checkExisting) {
            res.status(422).json({ message: 'Track history found' });
            client.close();
            return;
        }
        
        //Hash password
        // const status = await db.collection('customers.itemtracking').insertOne({
        //     email,
        //     password: await hash(password, 12),
        // });
        
        // //Send success response
        // res.status(201).json({ message: 'User created', ...status });
        
        //Close DB connection
        client.close();
    } else {
        //Response for other than POST method
        res.status(500).json({ message: 'Route not valid' });
    }
}

export default handler;