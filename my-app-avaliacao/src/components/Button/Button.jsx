import styles from './button.module.css'


export function Button({ type, message, onClick, className = ""  }) {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick} type={type}>
      {message}
    </button>
  );
}
