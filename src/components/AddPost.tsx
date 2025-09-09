import '../style/AddPost.css'

export default function AddPost(){



    return (
        <section className="addpost">
            <form className='form'>
            <h1 className="titleap">Share someting today </h1>
            <textarea name="" id="" rows={4} cols={60} className='inputap' placeholder='Share in the kodkod community..'></textarea>
            <button onSubmit={()=>{}} className='btnform'>Send</button>
            </form>
        </section>  

    )
}