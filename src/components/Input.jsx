export const Input = ({ className, placeholder, value, onChange }) => {
  return (
    <>
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <style jsx="true">{`
        input {
          border-radius: 8px;
          border: none;
          padding: 6px 16px;
          font-size: 18px;
        }
      `}</style>
    </>
  )
};
