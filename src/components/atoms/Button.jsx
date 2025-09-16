export const Button = ({ children, className, onClick, disabled }) => {
  return (
    <>
      <button
        className={className}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
      <style jsx="true">{`
        button {
          border-radius: 8px;
          border: none;
          padding: 4px 14px;
          margin: 0px 2px;
          &:hover {
            opacity: 0.8;
            cursor: pointer;
          }
          &:disabled {
            background-color: #ccc;
            color: #666;
            cursor: not-allowed;
            opacity: 0.8;  
          }
        }
      `}</style>
    </>
  )
};
