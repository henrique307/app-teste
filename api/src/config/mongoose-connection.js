import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://henrique:<senha>@app-teste-db.hdicmbt.mongodb.net/?retryWrites=true&w=majority')
let db = mongoose.connection

export {db}