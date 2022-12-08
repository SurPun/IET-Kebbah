import React from "react";

export default function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3bf3aa5c-dcff-40dc-aa11-4253a9541d37");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="[&>*]:mb-3 flex">
        <input type="text" name="name" placeholder="name..." className="mr-5" />

        <input
          type="email"
          name="email"
          placeholder="email..."
          className="mr-5"
        />

        <textarea
          name="message"
          placeholder="write message here..."
          className="mr-5"
        ></textarea>

        <input
          type="submit"
          className="bg-dim-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
        />

        {result}
      </form>
    </div>
  );
}
