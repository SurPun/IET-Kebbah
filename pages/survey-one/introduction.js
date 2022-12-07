import ButtonCom from "../../components/ButtonCom";
import HeadComp from "../../components/HeadComp";

export default function Introduction() {
  return (
    <>
      <HeadComp title={"Survey I Intro"} />
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col rounded-lg bg-dim-gray items-center p-10 [&>*]:pb-3">
          <h1>PART ONE</h1>
          <p>Survey I</p>
          <p>Police View Scenario</p>
          
          <ButtonCom btnName={"To scenario"} btnLink="scenario" />
        </div>
      </main>
    </>
  );
}
