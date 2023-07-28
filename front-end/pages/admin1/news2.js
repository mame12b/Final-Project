
// import Layout from '../shareholder'

// import React from 'react'
// import PropTypes from 'prop-types'
// import { FiAlertCircle } from 'react-icons/fi'
// import { IoMdInformationCircle } from 'react-icons/io'

// const NewsCard = ({adminnews}) => {
//   // const icon = type === 'alert' ? <FiAlertCircle /> : <IoMdInformationCircle />
//   // console.log(news.title)
//   console.log(adminnews)
  
//   return (
//     <>
    
//    {adminnews.map(item => (
//           <h1>
//             <div></div>{item.title}
//             {item.author}
//             {item.description}
//             {item.content}
//           </h1>
         
//         ))} 
//     </>)
//     // {/* <div className="font-bold">{adminnews}</div> */}
//     // <div className="bg-white rounded-lg shadow-md p-4 mt-10 mb-4 flex items-center">
//     //   <div className="mr-4 text-indigo-500">{icon}</div>
//     //   <div>
       
//     //     <div className="font-bold">{title}</div>
        
//     //     <div className="text-gray-500">{description}</div>
//     //     {image && (
//     //       <div className="mt-4">
      
//     //         <img src={image} alt={title} className="rounded-lg" />
//     //       </div>
//     //     )}
//     //   </div>
//     //   <div>sdlk</div>
   
//   // )
// }

// // NewsCard.propTypes = {
// //   title: PropTypes.string.isRequired,
// //   description: PropTypes.string.isRequired,
// //   type: PropTypes.oneOf(['alert', 'info']).isRequired,
// //   image: PropTypes.string,
// // }

// export default NewsCard


import Layout from '../shareholder'
import {formatDistanceToNow} from "date-fns"

import React from 'react'
import PropTypes from 'prop-types'
import { FiAlertCircle } from 'react-icons/fi'
import { IoMdInformationCircle } from 'react-icons/io'
import { RiDeleteBin6Fill } from 'react-icons/ri'

const AdminNewsCard = ({adminnews}) => {
  // const icon = type === 'alert' ? <FiAlertCircle /> : <IoMdInformationCircle />
  // console.log(news.title)
  // console.log(adminnews.reverse())
  // console.log(adminnews)
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8000/api/adminnews/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data);
    }
  };
  return (
    <>
    {adminnews && adminnews.map(item => (
       <div >
               {/* {console.log(item._id)} */}
    <div className= 'w-full h-auto p-8 shadow-2xl shadow-black rounded-xl items-center '>
       <div className="font-bold text-blue-700">{item.title}</div>
       {item.author}
       {item.description}
       {item.content}
       <div className="bg-mint text-mint fill-current">
       <img src={`http://localhost:8000/${item.image}`}
       width="200"
       height="200"
       />
       </div>
       <p className='italic text-normal text-right text-blue-950 pb-0 '>{formatDistanceToNow(new Date(item.createdAt),{addSuffix:true})}</p>
       <form action="" method="post">
                    <div>
                      <button
                        className="flex text-center ml-4 bg-red-700"
                        type="submit"
                        onClick={(e) => {
                        //   e.preventDefault();
                          handleDelete(item._id)
                        }}
                      >
                        {/* <Link className="flex text-center ml-4 bg-red-700" href=""> */}
                        <RiDeleteBin6Fill className="mt-1 mr-2 ml-1" />
                        <span> Delete </span>
                        {/* </Link> */}
                      </button>
                    </div>
                  </form>
 </div>
     </div>
       
        ))} 
        </>
        )
        }

export default AdminNewsCard