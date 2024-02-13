// import React, { useState } from "react";
// import axios from "axios";

// const FileUpload: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       setFile(event.target.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (file) {
//       const formData = new FormData();
//       formData.append("image", file);

//       try {
//         const response = await axios.post(
//           "http://localhost:3000/user-profile",
//           formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//           },
//         );
//         console.log("Файл загружен", response.data);
//       } catch (error) {
//         console.error("Ошибка при загрузке файла", error);
//       }
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Загрузить</button>
//     </div>
//   );
// };

// export default FileUpload;
