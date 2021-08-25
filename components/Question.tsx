import QuestionModel from "../model/question";
import styles from '../styles/Question.module.css'
import Answer from "./Answer";
import Title from "./Title";

interface QuestionProps{
    value: QuestionModel
}

export default function Question(props: QuestionProps){
    const question = props.value
    function showAnswers(){
        return question.answers.map((answer, index)=>{
            return <Answer key={index} value={answer} index={index} option={'A'} optionStyle='#f2c866'/>
        })
    }
    return(
        <div className={styles.question}>
            <Title text={question.title}/>
            {showAnswers()}
        </div>
    )
}