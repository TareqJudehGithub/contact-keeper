import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/contactContext";
import ContactItems from "./ContactItems";
import Spinner from "../layout/Spinner";

const Contacts = () => {
     const contactContext = useContext(ContactContext);
     const { contacts, filtered, getContacts, loading } = contactContext;

     useEffect(() => {
          getContacts();
         
          //eslint-disable-next-line
     }, [])

     if(contacts !== null && contacts.length === 0 && !loading){
          return <h4 style={{textAlign: "center"}}>Your Contacts List is empty!</h4>
     }
     
     return (
          <React.Fragment>
               {
                    contacts !== null && !loading
                    ?
                    (
                         <TransitionGroup>
               {
                              filtered
                              ?
                              filtered.map(contact =>
                              (
                                   <CSSTransition  
                                        key={contact._id}
                                        timeout={500}
                                        classNames="item"
                                   >
                                        <ContactItems contact={contact}/>
                                   </CSSTransition>    
                              )
                              )    
                              :
                              contacts.map(contact => 
                              (
                                   <CSSTransition  
                                        key={contact._id}
                                        timeout={500}
                                        classNames="item"
                                   >
                                        <ContactItems contact={contact}/>
                                   </CSSTransition> 
                              )
                    )    
               }
                         </TransitionGroup>
                    )
                    :
                    <Spinner /> 
               }     
          </React.Fragment>
     )
}

export default Contacts;
