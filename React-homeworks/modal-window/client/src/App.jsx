import { useState } from "react";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  function showHideModal(dispatch) {
    dispatch((prev) => !prev);
  }
  return (
    <>
      <Modal
        header={"First Modal"}
        text={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quam facere officia totam quis tempore voluptatibus labore ullam eum dolorum?"
        }
        isOpen={showModal}
        onClick={() => showHideModal(setShowModal)}
        actions={
          <>
            <Button
              bgColor="#4285F4"
              text="Ok"
              onClick={() => showHideModal(setShowModal)}
            />
            <Button
              bg="#4285F4"
              text="Cancel"
              onClick={() => showHideModal(setShowModal)}
            />
          </>
        }
      />
      <Modal
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem, ad corrupti aperiam labore quae quidem, eum soluta sequi ipsum vel quam laborum fugit minima quo odio sit enim praesentium."
        }
        header={"Second Modal"}
        isOpen={showModal2}
        onClick={() => showHideModal(setShowModal2)}
        actions={
          <>
            <Button
              bgColor="#4285F4"
              text="Ok"
              onClick={() => showHideModal(setShowModal2)}
            />
            <Button
              bg="#4285F4"
              text="Cancel"
              onClick={() => showHideModal(setShowModal2)}
            />
          </>
        }
      />
      <Button
        text={"Open first modal"}
        bgColor={"#F9A825"}
        onClick={() => showHideModal(setShowModal)}
      />
      <Button
        text={"Open second modal"}
        bgColor={"#4285F4"}
        onClick={() => showHideModal(setShowModal2)}
      />
    </>
  );
}

export default App;
