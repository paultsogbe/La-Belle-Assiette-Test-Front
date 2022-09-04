import React, { useState, useEffect } from 'react';
import Text from "../components/inputs/Text/Text";
import Textarea from "../components/inputs/Textarea/Textarea";
import Button from "../components/inputs/Button/Button";
import ChefCardList from "../components/lists/ChefCardList/ChefCardList";
import {addChef, getChefs} from "../services/chefsService";

/**
 * Content for chef page /chefs
 * @returns {JSX.Element}
 * @constructor
 */
function ChefsPage() {
    const [isHideForm, setIsHideForm] = useState(true);
    const [chefs, setChefs] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    /**********************************
     * Promise callback for chefslist
     **********************************/
    function resolveChefsList(result) {
        setIsLoaded(true);
        setChefs(result);
    }
    function rejectChefsList(error) {
        setIsLoaded(true);
        setError(error);
    }

    /**********************************
     * Promise callback for addChef *
     **********************************/
    function resolveChefAdd(chef) {
        setChefs([...chefs, chef]);
    }
    function rejectChefAdd(error) {
        console.error(error)
    }

    useEffect(() => {
        getChefs(resolveChefsList.bind({setIsLoaded, setChefs}), rejectChefsList.bind({setIsLoaded, setError}))
    }, [])

    function toggleForm() {
        setIsHideForm(!isHideForm);
    }

    /**
     * submit form button
     * @param {event} event
     */
    function submit(event) {
        event.preventDefault();
        const form = event.target.form;
        addChef({
            firstname: form.elements["firstname"].value,
            lastname: form.elements["lastname"].value,
            description: form.elements["description"].value,
        }, resolveChefAdd.bind({setChefs, chefs}), rejectChefAdd)
    }

    return (<div>
        <ChefCardList chefs={chefs}  setChefs={setChefs}/>
        { error && (<div>Erreur : {error.message}</div>) }
        { !isLoaded && (<div>Chargement...</div>) }
        <Button onClick={() => toggleForm()}>+ New chef</Button>
        <form className={`card chef-form${isHideForm ? ' hidden' : ''}`}>
            <Text name={'firstname'} label={'Firstname'} placeholder={"Chef Firstname"} value={''} />
            <Text name={'lastname'} label={'Lastname'} placeholder={"Chef Lastname"} value={''} />
            <Textarea name={'description'} label={'Chef description'} placeholder={'Introduce chef in few words'} value={''} />
            <Button onClick={submit}>Add chef</Button>
        </form>
    </div>);
}

export default ChefsPage;