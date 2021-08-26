import QuestionModel from "../model/question";
import styles from '../styles/Question.module.css'
import Answer from "./Answer";
import Title from "./Title";

interface QuestionProps{
    value: QuestionModel
    onAnswer: (index: number) => void
}

const options = [
    {value: 'A', optionStyle: '#F2C866'},
    {value: 'B', optionStyle: '#F266BA'},
    {value: 'C', optionStyle: '#85D4F2'},
    {value: 'D', optionStyle: '#BCE596'},
]

export default function Question(props: QuestionProps){
    const question = props.value
    function showAnswers(){
        return question.answers.map((answer, index)=>{
            return <Answer 
                key={index}
                value={answer}
                index={index}
                option={options[index].value}
                optionStyle={options[index].optionStyle}
                onAnswer={props.onAnswer}
                />
        })
    }
    return(
        <div className={styles.question}>
            <Title text={question.title}/>
            {showAnswers()}
        </div>
    )
}