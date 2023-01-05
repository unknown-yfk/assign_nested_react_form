import { useState } from "react"
import TaskList2 from "./TaskList2"






const TaskForm2 = () => {
    const [hobbyr, setHobbyr] = useState([{firstname:'group2', lastname:''}])


     const handleAddFields = () => {
       setHobbyr([...hobbyr, {firstname:'',lastname:''},
      ])
    }

    const handleRemoveFields = (index) => {

      const values = [...hobbyr];
      values.splice(index, 1);
      setHobbyr(values);


    }
  return (
             <>  

               {
                    hobbyr.map((item,index) => {

                        return (
                            

                            <div>

                           

                <div className="row row-names">
              
                <hr/>
                <div className="col-md-5">
                    <label>#  Grupo</label>

                </div>
        
                <div className="col-md-7">
                    <label>Slot</label>
                </div>
           </div>



                               <div className="row">
           <div className="col-md-5 form-control-div">
           
            

      <button onClick={() =>  handleRemoveFields(index)}   className="btn btn-danger"><i className="fas fa-minus"></i></button>
               <input type="text" className="form-control" placeholder={item.firstname}/>
           </div>


           <div className="col-md-7">
             

                   <TaskList2/>
                   
       
       
           </div>
        </div>
                             </div>
        


                        )
                    })
                }




      
            </>
  )
}

export default TaskForm2
