export default class AnswerModel{
    #value: string
    #isRight: boolean
    #showed: boolean

    constructor(value: string, isRight: boolean, showed = false){
        this.#value = value
        this.#isRight = isRight
        this.#showed = showed
    }

    get value(){
        return this.#value
    }
    get isRight(){
        return this.#isRight
    }
    get showed(){
        return this.#showed
    }

    static right(value: string){
        return new AnswerModel(value, true)
    }
    static wrong(value: string){
        return new AnswerModel(value, false)
    }
    reveal(){
        return new AnswerModel(this.#value, this.#isRight, true)
    }
    toObject(){
        return {
            value: this.#value,
            isRight: this.#isRight,
            showed: this.#showed,
        }
    }
}