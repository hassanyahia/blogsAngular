export class Users {
    constructor(
        public username: String,
        public password: String,
        public email: String,
        public firstname: String,
        public lastname: String,
        public userImg: String,
        public _id?: String,
        public follower?: [number],
        public following?: [number]) { }
        
    }

