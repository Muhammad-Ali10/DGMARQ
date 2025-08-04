import React from "react";

const PopularTopics = () => {
  const topics = [
    { title: "My payment/transaction failed. What should I do?" },
    { title: "The digital item that I purchased doesn’t work or stopped working. What should I do?" },
    { title: "How can I contact the seller if I have a question or problem with my item?" },
    { title: "I noticed a monthly payment to G2A. What is this payment for?" },
    { title: "My order is processing. What does that mean?" },
    { title: "I didn’t receive my digital key or any email. What should I do?" },
    { title: "What is G2A PLUS?" },
  ];

  return (
    <div className=" py-12">
      <div className="max-w-[1170px] px-3 mx-auto text-center mb-8">
        <h2 className="text-2xl font-semibold">Popular topics</h2>
      </div>
      <ul className="max-w-[1170px] px-3 mx-auto bg-white  rounded-lg divide-y divide-gray-200">
        {topics.map((topic, index) => (
          <li
            key={index}
            className="px-6 py-4 hover:bg-gray-100 flex items-center justify-between"
          >
            <span>{topic.title}</span>
            {/* Add icon if necessary */}
            {index === 2 && (
              <span className="text-gray-400 text-sm flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25m-7.5 0V9m9.75 5.25v3.75m-9.75 0V14.25M2.25 9.75v4.5A2.25 2.25 0 004.5 16.5h15a2.25 2.25 0 002.25-2.25v-4.5"
                  />
                </svg>
                video
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularTopics;
