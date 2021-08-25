import { mix } from "../functions/arrays"
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
    get isAnswered(){
        for(let answer of this.#answers){
            if(answer.showed) return true
        }
        return false
    }

    replyWith(index:number):QuestionModel{
        const isRight = this.#answers[index]?.isRight
        const answers = this.#answers.map((answer, id)=>{
            const selectedAnswer = index === id
            const shouldReveal = selectedAnswer || answer.isRight
            return shouldReveal ? answer.reveal() : answer
        })
        return new QuestionModel(this.id, this.title, answers, isRight)
    }

    mixAnswers(){
        let mixedAnswers = mix(this.#answers)
        return new QuestionModel(this.#id, this.#title, mixedAnswers, this.#isRight)
    }

    toObject(){
        return {
            id: this.#id,
            title: this.#title,
            isAnswered: this.isAnswered,
            isRight: this.#isRight,
            answers: this.#answers.map(answer=>answer.toObject()),
        }
    }
}