import { Error } from "./errors"

export class Form {
    constructor(data){
        this.globalData = data;
        for(let field in data){
            this[field] = data[field]
        }

        this.error = new Error;
    }
    reset() {
        for(let field in this.globalData){
            this[field] = ''
        }
    }

    data(){
        let data = Object.assign({}, this)

        delete data.globalData
        delete data.error

        return data
    }
}
