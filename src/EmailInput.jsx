import React from 'react';

const EmailInput = (props) => {

    const onEmailChange = (event) => {
        var email = event.target.value;
    
        //this is lifting the state value to the parent
        this.props.onEmailInputchange(email);
        
    };

    return(
        <div className="form-group">
            <label htmlFor="exampleInputEmail1"></label>
            <input
                aria-describedby="emailHelp"
                className = "form-control"
                id="exampleInputEmail"
                onChange={onEmailChange}
                placeholder="Enter email"
                type="email"
                value={this.state.email}
            />
        </div>
    )
}

export default EmailInput;