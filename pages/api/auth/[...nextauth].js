import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { MongoClient } from 'mongodb';
import { compare } from 'bcryptjs';

        
    const options = {

    //specify providers
    providers:[
        
        Providers.Twitter({
            clientId: "",
            clientSecret: ""
        }),
        Providers.Facebook({
            clientId: "",
            clientSecret: ""
        }),
        Providers.Instagram({
            clientId: "",
            clientSecret: ""
        }),
       
        Providers.Google({
            clientId: "",
            clientSecret: ""
        }),
        Providers.Credentials({
            async authorize(credentials) {
                
                //Connect to MongoDB DB
                /*const client = await MongoClient.connect(
                    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}.n4tnm.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
                    { useNewUrlParser: true, useUnifiedTopology: true }
                );*/

                const client = await MongoClient.connect(
                    `${process.env.DB_URL}://${process.env.DB_User}:${process.env.DB_Pssword}/${process.env.MONGO_DB}`
                );

                //Get all the users
                const users = await client.db().collection('customers');
                
                //Find user with the email  
                const result = await users.findOne({
                    email: credentials.email,
                });

                //Not found - send error res
                if (!result) {
                    client.close();
                    throw new Error('No user found with the email');
                }

                //Check hashed password with DB password
                const checkPassword = await compare(credentials.passowrd, result.passowrd);

                //Incorrect password - send response
                if (!checkPassword) {
                    client.close();
                    throw new Error('Password doesnt match');
                }

                //Else send success response
                client.close();
                return { email: result.email };
            },
        })
    ],
    pages: {
        signIn: "/login",
      },
      database: {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
      },
}

export default (req, res) => NextAuth(req,res,options)