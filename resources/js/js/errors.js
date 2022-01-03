export class Error {

    constructor() {
        this.error = {}
    }

    get(field) {
        if (this.error[field]) {
            return this.error[field][0]
        }
    }

    record(errors) {
        this.error = errors
    }

    clear(field) {
        delete this.error[field]
    }

    has(field) {
        return this.error.hasOwnProperty(field)
    }

    any() {
        return Object.keys(this.error).length > 0
    }
}
