import { useState } from "react";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  return (
    <>
      <Modal
        text={"First Modal"}
        isOpen={showModal}
        onClick={() => setShowModal((prev) => !prev)}
      />
      <Modal
        text={"Second Modal"}
        isOpen={showModal2}
        onClick={() => setShowModal2((prev) => !prev)}
      />
      <Button
        text={"Open first modal"}
        onClick={() => setShowModal((prev) => !prev)}
      />
      <Button
        text={"Open second modal"}
        onClick={() => setShowModal2((prev) => !prev)}
      />
    </>
  );
}

export default App;
