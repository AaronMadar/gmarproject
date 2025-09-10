import '../style/AddPost.css'
import fileuploadlogo from '../Assets/up-loading.png'
import { useRef, useState } from 'react';

export default function AddPost() {
    const hiddenFileInput = useRef(null);
    const [fileName, setFileName] = useState('');
    const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", fileName);

    const res = await fetch("http://localhost:3001/api/post/upload", {
      method: "POST",
      body: data,
    });

    const { url } = await res.json();
    setUrl(`http://localhost:3001/public/uploads${url}`);

  };

    const handleClick = ()=> {
        hiddenFileInput.current.click();
    };

    const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

    return (
        <section className="addpost">
            <form className='form' onSubmit={handleSubmit}>
                <h1 className="titleap">Share someting today </h1>
                <textarea name="" id="" rows={4} cols={60} className='inputap' placeholder='Share in the kodkod community..'></textarea>
                <img src={fileuploadlogo} alt="logo" onClick={handleClick } className='logoUpload' />
                <input type="file" style={{ display: 'none' }} ref={hiddenFileInput} onChange={handleChange} />
                {url && <img src={url} alt="post" width={200} />}
                <button type='submit' className='btnform'>Send</button>
            </form>
        </section>

    )   
}