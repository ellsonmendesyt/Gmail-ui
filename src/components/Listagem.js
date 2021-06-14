import React from 'react'
import {Link} from 'react-router-dom'
const Listagem = () => {

    const [tipo,setTipo]=React.useState('principal')

    return (
        <div className='container-fluid'>

         <div className="row">
             <div className="col-md-10 ml-auto ">
             <nav className="nav d-flex justify-space-evenly w-md-100  w-sm-50">
                <div className="nav-item  tipos-box w-25">
                <Link className='btn tipos' onClick={(e)=>{setTipo('principal')}}><i className="fa fa-tablet" aria-hidden="true"></i> Principal</Link>
                </div>
                <div className="nav-item tipos-box w-25">
                <Link className='btn tipos' onClick={(e)=>{setTipo('social')}}><i className="fa fa-users" aria-hidden="true"></i> Social</Link>
                </div>
                <div className="nav-item tipos-box w-25">
                <Link className='btn tipos' onClick={(e)=>{setTipo('promocoes')}}><i className="fa fa-tag" aria-hidden="true"></i> Promocões</Link>
                </div>
              
                
                </nav>
             </div>
         </div>
         <div className="row my-5">
             <div className="col-md-10 mx-auto">
                 <p className='text-center'>tipo: {tipo}</p>
             </div>
         </div>
        
        </div>
    )
}

export default Listagem
