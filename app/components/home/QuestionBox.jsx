import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const QuestionBox = ({ id, question, answer, selected, setSelectedQuestion }) => {
  const handleClick = () => {
    setSelectedQuestion(id);
  }
  return (
    <div>
        <button className='text-start w-full cursor-pointer flex justify-between items-center border border-white/10 px-6 py-3'
        onClick={handleClick}
        >
            <h6>
                {question}
            </h6>
            <IoIosArrowDown className={`transition-all duration-300 ${selected ? "rotate-180" : ""}`} />
        </button>
        <div className={`grid ${selected ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-all duration-300`}>
          <div className='overflow-hidden'>
            <p className='p-2 md:p-8'>
              {answer}
            </p>
          </div>
        </div>
    </div>
  )
}

export default QuestionBox