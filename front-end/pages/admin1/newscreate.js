import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../admin1';

const AddNews = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [author, setauthor] = useState('');
  const [content, setcontent] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('content', content);
    formData.append('description', description);
    if (image) {
      formData.append('image', image, image.name);
    }

    const res = await fetch('http://localhost:8000/api/adminnews', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      console.log(res);
      setauthor(''),
      setcontent(''),
      setDescription(''),
      setTitle(''),
      setImage(null)
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
   <Layout>
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add News Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="author" className="block mb-2 font-bold text-gray-700">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={author}
            onChange={(event) => setauthor(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-2">
            Description
          </label>
          <input
            id="description"
            name="description"
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block font-medium mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows="3"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={content}
            onChange={(event) => setcontent(event.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block font-medium mb-2">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        {image && (
          <div className="mb-4">
            <Image src={URL.createObjectURL(image)} alt={image.name} width={640} height={360} className="rounded-md" />
          </div>
        )}
        <div className="mt-6">
          <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Submit
          </button>
        </div>
      </form>
    </div>
    </Layout>
  );
};

export default AddNews;



















// import { useState } from 'react';
// import Layout from '../admin1';

// function AddNewsForm() {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [description, setDescription] = useState('');
//   const [content, setContent] = useState('');
//   const [image, setImage] = useState('');
//   const [error, setError] = useState('');
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const news={title,author,description,content,image}
//     // if (!title) {
//     //   setError('Please enter a title and image URL.');
//     //   return;
//     // }
//     const response = await fetch('http://localhost:8000/api/adminnews', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(news),
//     });
//     const data = await response.json();
//     if (response.ok) {
//       setTitle('');
//       setAuthor('');
//       setDescription('');
//       setContent('');
//       setImage('');
//       setError('');
//       console.log(data);
//     } else {
//       setError(data.message);
//     }
//   };
//   return (
//     <Layout>
//     <div className='h-screen'>
// <div>
//     <h1 className=' font-bold text-gray-700 text-center'>Add News Form</h1>
// </div>
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//       <div className="mb-4">
//         <label htmlFor="title" className="block mb-2 font-bold text-gray-700">
//           Title:
//         </label>
//         <input
//           type="text"
//           id="title"
//           onChange={(e) => setTitle(e.target.value)}
//           value={title}
//           className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="author" className="block mb-2 font-bold text-gray-700">
//           Author:
//         </label>
//         <input
//           type="text"
//           id="author"
//           onChange={(e) => setAuthor(e.target.value)}
//           value={author}
//           className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="description" className="block mb-2 font-bold text-gray-700">
//           Description:
//         </label>
//         <input
//           type="text"
//           id="description"
//           onChange={(e) => setDescription(e.target.value)}
//           value={description}
//           className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="description" className="block mb-2 font-bold text-gray-700">
//           Image:
//         </label>
//         <input
//           type="file"
//           id="image"
//           accept="image/png,image/jpeg"
//           onChange={(e) => setImage(e.target.value)}
//           value={image}
//           className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="content" className="block mb-2 font-bold text-gray-700">
//           Content:
//         </label>
//         <textarea
//           id="content"
//           onChange={(e) => setContent(e.target.value)}
//           value={content}
//           className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//         ></textarea>
//       </div>
     
//       <button
//         type="submit"
//         className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//       >
//         Submit
//       </button>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//     </form>
//     </div>
//     </Layout>
//   );
// }
// export default AddNewsForm;