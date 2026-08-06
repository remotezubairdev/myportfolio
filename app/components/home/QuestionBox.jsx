import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const QuestionBox = ({ id, question, answer, selected, setSelectedQuestion }) => {
  const handleClick = () => {
    setSelectedQuestion(id);
  }
  return (
    <article>
      <header>
        <button className='text-start w-full cursor-pointer flex justify-between items-center border border-white/10 px-6 py-3'
        onClick={handleClick}
        >
            <h3>
                {question}
            </h3>
            <IoIosArrowDown className={`transition-all duration-300 ${selected ? "rotate-180" : ""}`} />
        </button>
      </header>
        <div className={`grid ${selected ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-all duration-300`}>
          <div className='overflow-hidden'>
            <h4 className='p-2 md:p-8'>
              {answer}
            </h4>
          </div>
        </div>
    </article>
  )
}

export default QuestionBox