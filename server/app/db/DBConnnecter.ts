import { connect } from "mongoose";

function dbConnect(){

    const dbUrl = 'mongodb://localhost:32001/kira'; 
    const dbOption = {
        db: { native_parser: true },
        server: { poolSize: 5 },
        user: 'kira',
        pass: 'kira'         
    };
    let connection = connect(dbUrl, dbOption ,(err)=>{
        console.error("DB CONNETCION !!!"); // TEST 
        console.error(err); // TEST
    });

}
export default dbConnect;