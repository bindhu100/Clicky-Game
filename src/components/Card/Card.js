import React from "react";
import "./Card.css"

const Card = props => (
  <div className = "card" onClick = {() => props.clickCount(props.id)}>
   <div className = "img-container">
<img alt={props.name} src = {props.image}/>

   </div>
  </div>
 
);

// <!--Notes Modal-->

// eslint-disable-next-line no-unused-expressions
{/* <div id="noteModal" class="modal fade modalNote"  tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div id="notehead" class="modal-header">
  
        <h4 class="modal-title">Notes for </h4>
      </div>
      <div id="notebody" class="modal-body"> */}
        {/* ${this.state.score}
        ${this.state.highscore}
      */}
     
        
       
    
      
//         <div class="form-group">
        
//         </div>

      

//         <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
//       </div>
//     </div>
//   </div>
// </div>

export default Card;
