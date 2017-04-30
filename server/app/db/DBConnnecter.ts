import { connect } from "mongoose";


function dbConnect(){

    const dbUrl = 'mongodb://localhost:27017/kira';
    const dbOption = {
        db: { native_parser: true },
        server: { poolSize: 5 },
        user: 'kiradev',
        pass: 'kiradev'             
    };
    let connection = connect(dbUrl, dbOption ,(err)=>{
        console.error("DB CONNETCION !!!"); // TEST
        console.error(err); // TEST
    });

}
export default dbConnect;