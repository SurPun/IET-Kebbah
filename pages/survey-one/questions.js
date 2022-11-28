// Render question to page
// form to send user answers to Airtable DB

import CountdownTimer from "../../components/CountdownTimer";

export default function Questions() {
  return (
    <>
      <p>What is the first thing you will say to him?</p>

      <input
        type="text"
        placeholder="type here"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <button>SEND</button>

      <CountdownTimer />
    </>
  );
}
