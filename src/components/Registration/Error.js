import React from "react";

function Error({ values, errors, touched }) {
    
   return (
     <div className ="container_error">
       <p className="container_error-item">Не удалось продолжить регистрацию. Попробуйте ещё раз</p>
     </div>
   );
 }
 
 export default Error;