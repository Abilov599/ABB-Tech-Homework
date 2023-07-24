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
        text={"First Modal"}
        isOpen={showModal}
        onClick={() => showHideModal(setShowModal)}
      />
      <Modal
        text={"Second Modal"}
        isOpen={showModal2}
        onClick={() => showHideModal(setShowModal2)}
      />
      <Button
        text={"Open first modal"}
        onClick={() => showHideModal(setShowModal)}
      />
      <Button
        text={"Open second modal"}
        onClick={() => showHideModal(setShowModal2)}
      />
    </>
  );
}

export default App;
