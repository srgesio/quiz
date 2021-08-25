import Head from 'next/head'
import Image from 'next/image'
import Question from '../components/Question'
import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'
import styles from '../styles/Home.module.css'

export default function Home() {
  const test = new QuestionModel(1, "Melhor cor?",[
    AnswerModel.wrong('Verde'),
    AnswerModel.wrong('Vermelha'),
    AnswerModel.wrong('Azul'),
    AnswerModel.wrong('Preta'),
  ])
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Question value={test}/>

    </div>
  )
}
