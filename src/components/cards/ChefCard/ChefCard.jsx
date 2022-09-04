import React, { useState} from 'react';
import PropTypes from "prop-types";
import Button from "../../../components/inputs/Button/Button";
import Text from "../../../components/inputs/Text/Text";
import Textarea from "../../../components/inputs/Textarea/Textarea";
import {modifyChef, deleteChef} from "../../../services/chefsService";

/**
 * chef card component
 * @param {Object} chef
 * @param {string} chef.firstname
 * @param {string} chef.lastname
 * @param {string} chef.description
 * * @param {string} chef.photo
 * @returns {JSX.Element}
 * @constructor
 */
function ChefCard({chef, chefs,
    setChefs}) {
        const [isHideForm, setIsHideForm] = useState(true);
        function toggleForm() {
          setIsHideForm(!isHideForm);
        }
   /**********************************
     * Promise callback for update
     **********************************/

  function resolveChefUpdate(chef) {
    setChefs([...chefs, chef]);
  }
  function rejectChefUpdate(error) {
    console.error(error);
  }

  function update(event) {
    event.preventDefault();
    const form = event.target.form;
    modifyChef(
      {
        firstname: form.elements["firstname"].value,
        lastname: form.elements["lastname"].value,
        description: form.elements["description"].value,
      },
      resolveChefUpdate.bind({ setChefs, chefs }),
      rejectChefUpdate,
      window.location.reload(false)
    );
  }
  // --------------UPDATE-----------------

  /**********************************
     * Promise callback for delete
     **********************************/

  function resolveChefDelete(chef) {
    setChefs([...chefs, chef]);
  }
  function rejectChefDelete(error) {
    console.error(error);
  }


  function submit(event) {
    event.preventDefault();
    deleteChef(resolveChefDelete.bind({ setChefs, chefs }), rejectChefDelete);
  }

 // -----------------DELETE--------------

    return ( <article className="card">
    <header>
      {chef.firstname} {chef.lastname}
    </header>
    <div style={{ diplay: "flex", flexDirection: "row" }}>
      <div
        style={{
          width: "150px",
          height: "100px",
          overflow: "hidden",
          marginBottom: "20px",
        }}
      >
        <img
          src={chef.photo}
          alt="chef"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div>{chef.description}</div>
    </div>
    <div style={{ diplay: "flex", flexDirection: "column" }}>
      <Button onClick={toggleForm}>+Update chef</Button>
      <form className={`card chef-form${isHideForm ? " hidden" : ""}`}>
        <Text
          name={"firstname"}
          label={"Firstname"}
          placeholder={chef.firstname}
          value={""}
         
        />
        <Text
          name={"lastname"}
          label={"Lastname"}
          placeholder={chef.lastname}
          value={""}
         
        />
        <Textarea
          name={"description"}
          label={"Chef description"}
          placeholder={chef.description}
          value={""}
        
        />
        <Button onClick={update}>Update chef</Button>
      </form>
      <Button onClick={submit}>Delete chef</Button>
    </div>
  </article>);
}

ChefCard.propTypes = {
    chef: PropTypes.shape({
       firstname: PropTypes.string.isRequired,
       lastname: PropTypes.string.isRequired,
       description: PropTypes.string.isRequired
    }).isRequired
}

export default ChefCard;

