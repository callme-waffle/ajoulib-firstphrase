'use server';

import { getSentence } from "../../../api/request";


export async function TextArea() {
  console.log("sejfio");
  const sentence = await getSentence();

  return (
    <section className="w-full p-5 flex justify-center items-center">
      <span className="text-base leading-normal text-gray-800">
        {sentence}
      </span>
    </section>
  );
}

export default TextArea;