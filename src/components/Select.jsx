// import { useId } from "react"
// import React from 'react'

// const Select = ({
//     options,
//     label,
//     classname,
//     ...props
// },ref) => {
//     const id=useId()
//   return (
//     <div classname="w-full">
//       {label && <label className=""
//       htmlFor={id} >
//         </label>}
//         <select>
//             {...props}
//             id={id}
//             ref={ref}    
//             classname={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`},
//             {options?.map((option)=>(
//                 <option key={option} value={option}>
//                     {option}
//                 </option>
//             ))}
//         </select>
//     </div>
//   )
// }

// export default React.forwardRef(Select)


import { useId } from "react";
import React from "react";

const Select = (
  { options, label, className = "", ...props },
  ref
) => {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 font-medium text-sm" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        {...props}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.forwardRef(Select);
