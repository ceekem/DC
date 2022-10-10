import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const decisionAlert = withReactContent(Swal);

const API_URL="https://api.up2tom.com/v3";
const API_KEY="Token 9307bfd5fa011428ff198bb37547f979";
const MYAPI_URL = "http://localhost:3001/DC";

// up2TOM

export const models = async (filter)=>{
    const requestOptions = {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': API_KEY
      }
    };

    const response = await fetch(`${API_URL}/models`, requestOptions);
    const data = await response.json();
    // console.log(data); 
    return data;
}

export const filterModel = async (model) => {

  // console.log("data: ", model);

  const requestOptions = {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': API_KEY
    }
  };

  const response = await fetch(`${API_URL}/models`, requestOptions);
  const data = await response.json();
  
  return data.data.filter(x => {return x.id === model});
 
}

  export const decisionResult = async (decisionINP, id, modelName="") =>{

    const decisionResultOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': API_KEY,
        
      },
      body: JSON.stringify(decisionINP), 
    };  
    const decisionData = await fetch(`${API_URL}/decision/${id}`, decisionResultOptions).then((result)=>{
        if (result.ok) {
            return result.json();
        } else {
            return Promise.reject(result); 
        }
    }).catch((err)=>{
        console.error(err.error);
        if(err.status === 422){
            decisionAlert.fire({
                title: <strong>Decision!</strong>,
                html: <h3 className='decisionER'>Input scenario violates one or more exclusion rules</h3>,
                icon: 'error'
              });
        }else{
            decisionAlert.fire({
                title: <strong>Decision!</strong>,
                html: <h3 className='decisionER'>Something went wrong</h3>,
                icon: 'error'
              });
        }
    });
    
    console.log(decisionData); 

    decisionAlert.fire({
        title: <strong>Decision!</strong>,
        html: <h3 className='decision'>{decisionData.data.attributes.decision}</h3>,
        icon: 'info',
        allowOutsideClick: false,
        allowEscapeKey: false,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
         // alert to save decision
          Swal.fire({
            title: 'Please enter query name..',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Save Decision',
            showLoaderOnConfirm: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            inputValidator: (value) => {
              if (!value) {
                return 'You need to enter a query name!'
              }
            },
            preConfirm: (name) => {
              let dc = {
                  name: name,
                  model: modelName,
                  decision: decisionData.data.attributes.decision,
                  data: decisionData.data
                }

                console.log(dc);
              saveDecision(dc).then(data =>{
                console.log(data);
              }, err =>{
                console.error(err);
              });
            },
            // allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
            }
          })


          
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      });
  }

//Express

export const saveDecision = async (decision) =>{
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(decision)
  };

  const response = await fetch(`${MYAPI_URL}/decision`, requestOptions);
  const data = await response.json();
  // console.log(data); 
  return data
}

export const getAllDecisions = async () =>{
  const requestOptions = {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
    }
  };

  const response = await fetch(`${MYAPI_URL}/getAllDecision`, requestOptions);
  const data = await response.json();
  // console.log(data); 
  return data
}

export const deleteDecision = async (id) =>{
  const requestOptions = {
    method: 'DELETE',
    headers: { 
      'Content-Type': 'application/json',
    }
  };

  const response = await fetch(`${MYAPI_URL}/${id}`, requestOptions);
  const data = await response.json();
  // console.log(data); 
  return data
}