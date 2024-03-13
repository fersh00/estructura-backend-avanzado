import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    mail: String,
});

export default mongoose.model('Author', authorSchema);
export { authorSchema };