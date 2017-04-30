import {Schema,model} from "mongoose";

let PostSchema = new Schema({
    id : String,
    imgUrl:String,
    postContent : String          
});

export default model("Post", PostSchema);
