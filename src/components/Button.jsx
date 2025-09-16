export const Button = ({ children, className, onClick }) => {
  return (
    <>
      <button
        className={className}
        onClick={onClick}
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
        }
      `}</style>
    </>
  )
};
