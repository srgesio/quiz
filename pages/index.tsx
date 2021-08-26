import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Question from '../components/Question'
import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'
import styles from '../styles/Home.module.css'

const test = new QuestionModel(1, "Melhor cor?",[
  AnswerModel.wrong('Verde'),
  AnswerModel.wrong('Vermelha'),
  AnswerModel.wrong('Azul'),
  AnswerModel.wrong('Preta'),
])

export default function Home() {
  const [question, setQuestion] = useState(test)

  function onAnswer(index:number){

    console.log(index)
    setQuestion(question.replyWith(index))
  }

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Question value={question}
        onAnswer={onAnswer}
      />

    </div>
  )
}
