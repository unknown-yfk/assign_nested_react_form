  import { useState } from "react"
  
  
  
  const TaskList2 = () => {

   
      const [hobby2, setHobby2] = useState([{firstname:'g2_slot1', lastname:''},
                                          {firstname:'g2_slot2', lastname:''},
                                      ])
    


   

    
    const handleAddFields = () => {
       setHobby2([...hobby2, {firstname:'',lastname:''}])
    }


    const handleRemoveFields = (index) => {

      const values = [...hobby2];
      values.splice(index, 1);
      setHobby2(values);


    }
  
    return (
    <>

            
            {

            hobby2.map((item,index) => {
                    
                return(
                  
         <div key={item.id}className="input-group-sm form-control-div1">
             <input type="text" className="form-control" placeholder={item.firstname}/>
              <button onClick={() =>  handleRemoveFields(index)} className="btn btn-danger btn-sm"><i className="fas fa-minus"></i></button>
         </div>
                     )
                    })
               
                 }
                 
                 

                 
             <hr/>
           <button className="btn btn-info btn-sm mt-5" onClick={() => 
    handleAddFields()}><i className="fas fa-plus"></i>Add Slot</button>
         
         
    </>
  )
}

export default TaskList2
