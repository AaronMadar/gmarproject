import '../style/Subscribe.css'
import Title from './Title'

export default function Subscribe() {



    return (
        <> 
         <form onSubmit={()=>{}} className="formsub">
            <Title text={'Join to LinKodkod'}/>
            <input type="text" placeholder='Enter your username' className='inputim'/>
            <input type="password" placeholder='Enter your password' className='inputim' />
            <button className='btnsubscribe'>subscribe</button>
        </form>
           
        </>
    )
}