"use client"
import React from 'react'
import QuestionBox from './QuestionBox'
import { faqs } from './../../../constants/faqs';

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = React.useState(1)
  return (
    <section id='faq' className='py-20'>
      <h2
      className='text-center mb-12 font-black text-3xl'
      >
        Frequently Asked Questions
      </h2>
      <div className="max-w-xl mx-auto">
        {
          faqs.map((question) => (
            <QuestionBox id={question.id} selected={question.id == selectedQuestion} setSelectedQuestion={setSelectedQuestion} question={question.question} answer={question.answer} key={question.id} />
          ))
        }
      </div>
    </section>
  )
}

export default FAQ