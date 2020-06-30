import React ,{ useContext } from 'react';
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";


const ContactItems = ({ contact }) => {
     
     const contactContext = useContext(ContactContext);
     const { deleteContact, setCurrent, clearCurrent } = contactContext;
     const { id, name, email, phone, type } = contact;
     
     const deleteContactHandler = () => {
          deleteContact(id);
          clearCurrent();
     }
     
     return (
          <div className="card bg-light">
               <h3 className="text-primary text-left">
                    {name}{" "}
                    <span style={{ float: "right"}}
                    className={"badge " + (type === "professional"
                                                  ? 
                                                  "badge-success"
                                                  :
                                                  "badge-primary"          
                                        )}
                    >
                    {/* Make type first letter an uppercase: */}
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
               </h3>
               <ul className="list">
                    {
                    email && 
                    (<li>
                         <i className="fas fa-envelope-open">{email}</i>
                    </li>)
                    }
                    {
                         phone && 
                         (<li className="fas fa-phone">{phone}</li>)
                    }
               </ul>
               <p>
                    <button className="btn btn-primary btn-sm"
                         onClick={() => setCurrent(contact)}>
                         Edit
                    </button>

                    <button className="btn btn-danger btn-sm"
                    onClick={deleteContactHandler}
                    >
                         <i className="fas fa-trash"></i>
                    </button>
               </p>
          </div>
     )
}
ContactItems.prototype = {
     contact: PropTypes.object.isRequired
}
export default ContactItems;
