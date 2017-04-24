import {Schema,model} from "mongoose";

let PostSchema = new Schema({
    id : String,
    contentHtml : String
});

export default model("Post", PostSchema);
