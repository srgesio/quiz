import AnswerModel from "./answer"

export default class QuestionModel{
    #id: number
    #title: string
    #answers: AnswerModel[]
    #isRight: boolean

    constructor(id: number, title: string, answers: AnswerModel[], isRight = false){
        this.#id=id
        this.#title=title
        this.#answers=answers
        this.#isRight=isRight
    }

    get id(){
        return this.#id
    }
    get title(){
        return this.#title
    }
    get answers(){
        return this.#answers
    }
    get isRight(){
        return this.#isRight
    }
    get isAnswerd(){
        for(let answer of this.#answers){
            if(answer.showed) return true
        }
        return false
    }

    toObject(){
        return {
            id: this.#id,
            title: this.#title,
            answers: this.#answers.map(answer=>answer.toObject()),
            isRight: this.#isRight,
        }
    }
}