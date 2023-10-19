import mongoose from "mongoose"

const connection = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(() => console.log(`MONGODB IS RUNNING AT PORT ${process.env.DB_URL}`)).catch((error) => console.log(error))    
}

export default connection;