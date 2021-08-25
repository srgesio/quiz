import questions from '../questionDb'

export default function Question(req, res) {
    const id = +req.query.id

    const oneQuestionOrNothing = questions.filter(question => question.id == id)

    if(oneQuestionOrNothing.length === 1){
        const selectedQuestion = oneQuestionOrNothing[0].mixAnswers()
        res.status(200).json(selectedQuestion.toObject())
    }else{
        res.status(204).send()
    }
}
