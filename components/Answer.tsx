import AnswerModel from "../model/answer";
import styles from '../styles/Answer.module.css'

interface AnswerProps{
    value: AnswerModel
    index: number
    option: string
    optionStyle: string
}

export default function Answer(props: AnswerProps){
    const answer = props.value
    return (
        <div className={styles.answer}>
            <div className={styles.answerContent}>
                <div className={styles.frontCard}>
                    <div className={styles.option}>
                        {props.option}
                    </div>
                    <div className={styles.value}>
                        {answer.value}
                    </div>
                </div>
                <div className={styles.backCard}>

                </div>
            </div>
        </div>
    )
}