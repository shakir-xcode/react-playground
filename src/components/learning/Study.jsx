import React from "react";
import { questions } from "../../config/questions";
import { answers } from "../../config/answers";
import { jsQuestions } from "../../config/jsQuestions";

const Study = () => {
  return (
    <div className="px-9">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl text-center">
          {/* {questions[0].company || ""} */}Javascript Fundamentals
        </h1>
        <h2 className="font-bold text-3xl text-center">
          {/* {questions[0].interviewType || ""} */}
        </h2>
      </div>
      <div className=" border-slate-300 p-1 pt-5 rounded-md ">
        {jsQuestions.map((item, index) => {
          return (
            <div className=" mb-[48px]  flex flex-col gap-3">
              <div className=" font-bold text-xl p-2 bg-red-50 border border-red-200 rounded-md">
                <b>Q{index + 1}. </b>
                {item.question}
              </div>
              <div className=" font-semibold text-xl p-2 bg-slate-100  border border-cyan-200 rounded-md">
                <b>Ans. </b>
                {item.answer}
              </div>
              {/* <div className="border border-gray-400 scale-105 "></div> */}
            </div>
          );
        })}
      </div>
      {/* 
      <div className="border border-slate-300 p-1 pt-5 rounded-md ">
        {questions[0].questions.map((question, index) => {
          return (
            <div className=" mb-[48px]  flex flex-col gap-3">
              <div className=" font-bold text-xl p-2 bg-red-50 border border-red-200 rounded-md">
                {question}
              </div>
              <div className=" font-semibold text-xl p-2 bg-slate-100  border border-cyan-200 rounded-md">
                {answers[0].answers[index]}
              </div>
              {/* <div className="border border-gray-400 scale-105 "></div> 
            </div>
          );
        })}
      </div>
       */}
    </div>
  );
};

export default Study;
