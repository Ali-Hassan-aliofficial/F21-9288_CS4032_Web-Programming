import mongoose from 'mongoose';

const Connection = async () => {
    const DB_LINK = 'mongodb+srv://hassan:hassan@cluster0.sodnnyw.mongodb.net/';
    try {
        await mongoose.connect(DB_LINK, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Successfully');
    } catch(error) {
    }
};

export default Connection;
