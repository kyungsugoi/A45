import mongoose from "mongoose";

const MonsterSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    name: String,
    username: String,
    email: String,
    address: [{
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: [{
            lat: String,
            lng: String 
        }]
    }],
    phone: String,
    website: String,
    company: [{
        name: String,
        catchPhrase: String,
        bs: String
    }],
    image_url: String,
});

const Monster = mongoose.model('Monster', MonsterSchema);

export default Monster;