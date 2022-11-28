import ButtonCom from "../../components/ButtonCom";

export default function Introduction() {
  return (
    <>
      <h1>PART 1</h1>
      <p>Survey 1</p>
      <p>Police View Scenario</p>
      <p>
        You will be given 5 seconds to read a question and then can type your
        answer or speak into the microphone
      </p>
      <ButtonCom btnName={"To Survey"} btnLink="scenario" />
    </>
  );
}
