import { connect } from "mongoose";

const dbUrl = 'mongodb://localhost:32768/kiradb';
const dbOption = {
    db: { native_parser: true },
    server: { poolSize: 5 },
    user: 'xxxx',
    pass: 'xxxx'             
};
let connection = connect(dbUrl, dbOption ,(err)=>{
    console.log(err); // TEST
    
});


export default connection;