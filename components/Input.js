
const Input = ({ value, setValue, type, label }) => {

  return (
      <div className='relative h-8 w-full border border-gray-300 rounded-[4px] flex flex-col focus-within:border-gray-500'>
          <label className={`${value.trim() ? 'relative text-[9px] -mt-2.5 -ml-1.5' : 'absolute text-xs'} z-0 top-1.5 left-3 text-gray-500 `}>{label}</label>
          <input 
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`${value.trim() ? 'relative py-0.5' : 'absolute px-3 py-1.5'} top-0 left-0 w-full text-xs z-1 bg-transparent border-none focus:border-none focus:ring-0 focus:outline-none`}
          />
      </div>
  )
}

export default Input;
