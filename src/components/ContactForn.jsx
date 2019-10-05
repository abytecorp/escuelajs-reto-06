import React, { useState, useEffect } from 'react';

function ContactForm() {
    //const declaration
    const [contact, setContact] = useState([]);

    return (
        <div>
            <h5>Contactanos...</h5>
				<form action="#">
					<label for="firstname">
						<i className="cntfrmicn fa fa-user"></i>
						<input name="firstname" className="form-fields" type="text" />
					</label>
					<label for="email">
						<i className="cntfrmicn fa fa-envelope"></i>
						<input name="email" className="form-fields" type="text" />
					</label>
					<label for="contact">
						<i className="cntfrmicn fa fa-phone"></i>
						<input name="contact" className="form-fields" type="text" />
					</label>
					<label for="textarea">
						<i className="cntfrmicn fa fa-comment"></i>
						<textarea className="form-fields" name="textarea" id="" cols="30" rows="10"></textarea>
					</label>
					<button className="form-fields button" value="Send" type="submit">Send <i className="fa fa-paper-plane"></i></button>
				</form>
        </div>
    );

}

export default ContactForm;