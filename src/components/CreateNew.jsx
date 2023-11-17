import React, { useState } from "react";
import { createPortal } from "react-dom";
import sprite from "../../assets/symbol-defs.svg";
import classes from "./CreateNew.module.scss";

import Modal from "./Modal";
import ProjectForm from "./ProjectForm";

export default function CreateNew() {
  const [ showFormModal, setShowFormModal ] = useState(false);

  const openModal = () => {
    setShowFormModal(true);
  }

  const closeModal = () => {
    setShowFormModal(false);
  }


  return (
    <div className={classes["new-project"]}>
      <h3 className="heading-3">Create a Project</h3>
      <span>
        <svg className={classes["new-project__icon"]}>
          <use xlinkHref={`${sprite}#icon-text-document`} />
        </svg>
      </span>
      <button onClick={openModal} className={classes["new-project__btn"]}>New Project</button>

      {showFormModal && createPortal(
        <Modal onClose={closeModal}>
          <ProjectForm />
        </Modal>,
        document.body
      )}
    </div>
  );
}
