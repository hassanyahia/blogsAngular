export class Blogs {
    constructor(
        public _id: string,
        public title: string,
        public body: string,
        public Author: string,
        public blogImg: string,
        public createdAt:Date,
        public comments?:[Comment]
        ){}
}
