"use client";
import React, { useReducer, useEffect } from "react";

// Define the QuizData interface
interface QuizData {
  question: string;
  options: string[];
  answer: string;
}

// Define the array of quiz data
const quizData: QuizData[] = [
  {
    question:
      "What is the primary river that the Namami Gange initiative aims to clean?",
    options: ["Yamuna", "Ganges", "Brahmaputra", "Godavari"],
    answer: "Ganges",
  },
  {
    question: "In which country does the Ganges River flow?",
    options: ["China", "India", "Bangladesh", "Nepal"],
    answer: "India",
  },
  {
    question: "What is the significance of the Ganges River in Indian culture?",
    options: [
      "It is a major trade route",
      "It is considered a sacred river",
      "It is known for its hydroelectric power",
      "It is a natural border between two states",
    ],
    answer: "It is considered a sacred river",
  },
  {
    question: "What is the Namami Gange initiative's main goal?",
    options: [
      "Planting more trees along the riverbanks",
      "Cleaning and conserving the Ganges River",
      "Building dams to control water flow",
      "Promoting fishing activities",
    ],
    answer: "Cleaning and conserving the Ganges River",
  },
  {
    question:
      "Which Indian city is located on the banks of the Ganges and is considered one of the holiest cities in Hinduism?",
    options: ["Jaipur", "Varanasi", "Mumbai", "Kolkata"],
    answer: "Varanasi",
  },
  {
    question: "What does 'Namami Gange' translate to in English?",
    options: [
      "Clean Waters",
      "Ganges Blessings",
      "Salutations to the Ganges",
      "River Devotion",
    ],
    answer: "Salutations to the Ganges",
  },
  {
    question:
      "Which government department is responsible for the implementation of the Namami Gange program?",
    options: [
      "Ministry of Health",
      "Ministry of Environment, Forest and Climate Change",
      "Ministry of Water Resources, River Development, and Ganga Rejuvenation",
      "Ministry of Transportation",
    ],
    answer:
      "Ministry of Water Resources, River Development, and Ganga Rejuvenation",
  },
  {
    question: "What is the main cause of pollution in the Ganges River?",
    options: [
      "Industrial waste",
      "Agricultural runoff",
      "Religious rituals",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "Which state in India is the source of the Ganges River?",
    options: ["Uttar Pradesh", "Himachal Pradesh", "Uttarakhand", "Bihar"],
    answer: "Uttarakhand",
  },
  {
    question:
      "What is the role of the National Mission for Clean Ganga (NMCG) in the Namami Gange initiative?",
    options: [
      "Promoting tourism along the Ganges",
      "Implementing projects for the cleaning and conservation of the Ganges",
      "Regulating fishing activities in the river",
      "Constructing new bridges across the Ganges",
    ],
    answer:
      "Implementing projects for the cleaning and conservation of the Ganges",
  },
  {
    question:
      "Which famous wildlife sanctuary is located along the banks of the Ganges River?",
    options: [
      "Jim Corbett National Park",
      "Sundarbans National Park",
      "Kaziranga National Park",
      "Ranthambhore National Park",
    ],
    answer: "Jim Corbett National Park",
  },
  {
    question:
      "What is the name of the campaign launched under Namami Gange to promote public awareness and participation?",
    options: [
      "Clean Ganga Champions",
      "Ganga Sankalp Abhiyan",
      "River Warriors Initiative",
      "Green Ganges Movement",
    ],
    answer: "Ganga Sankalp Abhiyan",
  },
  {
    question:
      "What are some of the measures taken under the Namami Gange initiative to control industrial pollution in the Ganges?",
    options: [
      "Setting up Effluent Treatment Plants (ETPs)",
      "Promoting eco-friendly industries",
      "Monitoring industrial discharge",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "Which of the following is NOT a tributary of the Ganges River?",
    options: ["Yamuna", "Brahmaputra", "Gandak", "Godavari"],
    answer: "Godavari",
  },
  {
    question: "What is the significance of the Ganges River in Hindu rituals?",
    options: [
      "It is used for irrigation",
      "It is considered the abode of a sacred river goddess",
      "It is a source of drinking water",
      "It is used for transportation",
    ],
    answer: "It is considered the abode of a sacred river goddess",
  },
  {
    question:
      "Which historical figure is associated with the cleaning and maintenance of the Ganges River?",
    options: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Swami Vivekananda",
      "Bal Gangadhar Tilak",
    ],
    answer: "Mahatma Gandhi",
  },
  {
    question:
      "What is the name of the action plan launched under the Namami Gange initiative to address the pollution in the Ganges?",
    options: [
      "Clean Ganga Project",
      "Ganga Action Plan (GAP)",
      "Ganges Conservation Initiative",
      "Ganges Revitalization Scheme",
    ],
    answer: "Ganga Action Plan (GAP)",
  },
  {
    question: "How many states does the Ganges River flow through in India?",
    options: ["4", "5", "6", "7"],
    answer:
      "6 (Uttarakhand, Uttar Pradesh, Bihar, Jharkhand, West Bengal, and a small part of Delhi)",
  },
  {
    question:
      "Which of the following is a traditional boat race that takes place on the Ganges River?",
    options: [
      "Kumbh Mela",
      "Ganga Dussehra",
      "Ganga Sagar Mela",
      "Nag Nathaiya",
    ],
    answer: "Nag Nathaiya",
  },
  {
    question:
      "What is the economic significance of the Ganges River for the local communities along its banks?",
    options: ["Fishing", "Agriculture", "Tourism", "All of the above"],
    answer: "All of the above",
  },
  {
    question:
      "Which of the following is a traditional practice associated with the Ganges River where lamps are floated on the water?",
    options: [
      "Ganga Aarti",
      "Ganges Puja",
      "Ganges Vandana",
      "Ganges Pradakshina",
    ],
    answer: "Ganga Aarti",
  },
  {
    question:
      "What is the importance of the Ganges River for agriculture in the region?",
    options: [
      "It provides irrigation water",
      "It controls floods",
      "It serves as a barrier against pests",
    ],
    answer: "It provides irrigation water",
  },
];
// Define the renderOptions function with checkboxes
const renderOptions = (
  options: string[],
  dispatch: (selectedOption: string) => void
) => {
  return options.map((option, index) => (
    <li key={index} className="text-lg text-left">
      <label>
        <input
          type="checkbox"
          value={option}
          onChange={() => dispatch(option)}
        />
        {option}
      </label>
    </li>
  ));
};

// Define the QuizState and QuizAction types
interface QuizState {
  currentQuestionIndex: number;
  score: number;
}

type QuizAction = { type: "ANSWER"; payload: string } | { type: "RESET" };

// Define the quizReducer function
const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
  switch (action.type) {
    case "ANSWER": {
      const currentQuestion = quizData[state.currentQuestionIndex];

      if (action.payload === currentQuestion.answer) {
        // Correct answer, increase the score
        return { ...state, score: state.score + 1 };
      }

      // Move to the next question
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    }
    case "RESET": {
      // Reset the state to initial values
      return { currentQuestionIndex: 0, score: 0 };
    }
    default:
      return state;
  }
};

// Define the QuizPage component
const QuizPage: React.FC = () => {
  const [{ currentQuestionIndex, score }, dispatch] = useReducer(quizReducer, {
    currentQuestionIndex: 0,
    score: 0,
  });

  useEffect(() => {
    // Reset the question index and score when the component mounts
    dispatch({ type: "RESET" });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gradient-to-b from-[#FFFFFF] to-[#39B5E9] text-black">
      {/* Navbar */}
      <nav className="flex justify-between p-4 w-full bg-transparent">
        <div className="text-xl font-bold">
          Chacha Chaudhary's SARV GANGE VANI
        </div>
        <div>
          <span className="mr-4">{`Question ${currentQuestionIndex + 1} / ${
            quizData.length
          }`}</span>
          <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
      </nav>

      {/* Quiz Container */}
      <div className="flex flex-col items-center p-8 bg-white rounded-md shadow-md mt-8 bg-opacity-75">
        {/* Render current question */}
        {currentQuestionIndex < quizData.length && (
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">{`${
              currentQuestionIndex + 1
            }. ${quizData[currentQuestionIndex].question}`}</h2>
            <ul>
              {renderOptions(
                quizData[currentQuestionIndex].options,
                (selectedOption) =>
                  dispatch({ type: "ANSWER", payload: selectedOption })
              )}
            </ul>
          </div>
        )}

        {/* Render score after quiz completion */}
        {currentQuestionIndex === quizData.length && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-lg">Your Score: {score}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default QuizPage;
