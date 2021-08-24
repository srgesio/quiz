import questions from '../questionDb'

export default function Survey(req, res){
    
    res.status(200).json(questions.map(question => question.id))
}