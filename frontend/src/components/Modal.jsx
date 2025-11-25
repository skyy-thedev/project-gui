import "../styles/Modal.css";

export default function Modal({ type = "error", title, message, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>×</button>

        <h2>{title}</h2>
        <p>{message}</p>

        <button onClick={onClose} className="btn-save-user">
          Fechar
        </button>
      </div>
    </div>
  );
}
