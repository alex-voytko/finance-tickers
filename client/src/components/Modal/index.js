import {createPortal} from 'react'

function Modal() {
    return createPortal(
    <div id="backdrop-modal" onClick={()}>
      <div className="modal-content">
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
}
