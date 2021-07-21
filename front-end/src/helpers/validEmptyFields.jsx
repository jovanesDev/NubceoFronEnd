
const validateOneField = (field) => {

    if(field.trim() === ""){

        return true;
    }

}

const validateFields = (fields) => {

    let invalid = false;
       

   for (let i= 0; i < fields.length; i++) {

        if(validateOneField(fields[i])){

            invalid = true;
            
        }
    
   }

   return invalid;

}

export default validateFields;