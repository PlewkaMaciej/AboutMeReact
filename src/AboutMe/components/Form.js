import '../styles/Form.css';
function Form({setShowForm}) {
 const changeShow=()=>{
    setShowForm(false)
 }
  return (
    <>
   <div className="main-container-form">
    <div className='container-for-collapse-button'>
    <button onClick={changeShow} className='collapse-button'>Collapse the form</button>
    </div>
    <div className='form-and-heading-container'>
    <h1  className='form-heading'>Please fill in the form</h1>
    </div>

   </div>
   </>
  );
}

export default Form;
