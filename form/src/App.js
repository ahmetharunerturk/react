import { useState } from "react";

function App() {

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
    prompts: [{
      prompt: "",
      answer: "",
      timestamp: new Date().getTime(),
    }]
  });

  console.log(userInfo);

  const handleInput = e => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const handlePromptInput = (e, i) => {
    const { name, value } = e.target;
    let newPrompts = [...userInfo.prompts];
    newPrompts[i][name] = value;
    
    setUserInfo({
      ...userInfo,
      prompts: newPrompts
    });
  };

  const handleAddPrompt = () => {
    setUserInfo({
      ...userInfo,
      prompts: [
        ...userInfo.prompts,
        {
          prompt: "",
          answer: "",
          timestamp: new Date().getTime(),
        }
      ]
    });
  };

  return (
    <>
      <h1 className='text-3xl text-center my-4 py-2'>React Form</h1>
      <form action="" className="w-5/6 max-w-md mx-auto">
        <fieldset className="flex flex-col border py-1 px-4">
          <legend className="text-2xl font-semibold">
            About you
          </legend>

          <div>
            <label htmlFor="firstName" className="text-3xl font-semibold">What's your name?</label>
            <input
              className="border rounded text-lg leading-tight py-3 px-2 mt-4 mb-3 focus:outline-indigo-200 w-3/5"
              type="text"
              id="firstName"
              name="firstName"
              placeholder='First name'
              onChange={handleInput}
            />

            <input
              className="border rounded text-lg leading-tight py-3 px-2 mb-4 focus:outline-indigo-200 w-3/5"
              type="text"
              id="lastName"
              name="lastName"
              placeholder='Last name'
              onChange={handleInput}
            />
          </div>

          <div>
            <label htmlFor="email" className="text-3xl font-semibold">What's your email?</label>
            <input
              className="border rounded text-lg leading-tight py-3 px-2 mt-4 mb-3 focus:outline-indigo-200 w-3/5"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleInput}
            />
          </div>

          <div>
            <label htmlFor="dob" className="text-3xl font-semibold">What's your date of birth?</label>
            <input
              className="border rounded text-lg leading-tight py-3 px-2 mt-4 mb-3 focus:outline-indigo-200 w-3/5"
              id="dob"
              name="dob"
              type="date"
              max="2005-01-01"
              placeholder="Date of birth"
              onChange={handleInput}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="gender" className="text-3xl font-semibold">What's your gender?</label>
            <select
              name="gender"
              id="gender"
              className="border rounded text-lg leading-tight py-3 px-2 mt-4 mb-3 focus:outline-indigo-200 w-3/5"
              onChange={handleInput}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

        </fieldset>

        <fieldset className="flex flex-col border py-1 px-4">
          <legend className="text-2xl font-semibold">Prompts</legend>

          {userInfo.prompts.map((prompt, i) => (
            <div key={prompt.timestamp} className="flex flex-col">
              <label htmlFor={`prompt-${i}`} className="text-3xl font-semibold">Select a prompt</label>
              <select
                name="prompt"
                id={`prompt-${i}`}
                className="border rounded text-lg leading-tight py-3 px-2 mt-4 mb-3 focus:outline-indigo-200 w-3/5"
                onChange={e => handlePromptInput(e, i)}
              >
                <option value="Prompt 1">Prompt 1</option>
                <option value="Prompt 2">Prompt 2</option>
                <option value="Prompt 3">Prompt 3</option>
                <option value="Prompt 4">Prompt 4</option>
              </select>

              <textarea
                className="border border-dashed py-3 px-2"
                name="answer"
                id={`answer-${i}`}
                rows={5}
                placeholder="Enter your answer"
                onChange={e => handlePromptInput(e, i)}
              />
            </div>
          ))}

          <div className="w-full flex justify-center">
            <button
              className="border bg-indigo-400 py-1 px-2 rounded-lg text-white font-bold text-xl"
              type="button"
              onClick={handleAddPrompt}
            >
              Add prompt
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;
