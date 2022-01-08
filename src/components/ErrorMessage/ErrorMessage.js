import React from 'react'

const ErrorMessage = () => {
    return (
        <div style={{
            width:"100%",
            padding:5,
            borderRadius:4,
            backgroundColor:'red',
            textAlign:'center',
            color:'white',
            marginBottom:10
        }}>
             <h6>Fill the form properly</h6>
        </div>
    )
}
export default ErrorMessage;