import React, {useState} from 'react';
import Card from './Ui/Card';
import Button from './Ui/Button';
import classes from './AddUser.module.css';




const AddUser = function (props)
{

   const [enteredUsername , setEnteredUsername] = useState('');
   const [enteredAge , setEnteredAge] = useState('');

   const usernameChangeHandler = function(event)
   {
   
    setEnteredUsername(event.target.value);
    
   };
   const ageChangeHandler = function (event)
   {
    setEnteredAge(event.target.value);
   };


    const addUserHandler = function(event)
    {
       
        event.preventDefault();

        if(enteredUsername.trim().length ===0 || enteredAge.trim().length === 0)
        {
            return ; 
        }
        if(+enteredAge <1)
        {
            return ;
        }

       props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
       
    }
    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input type='text' value={enteredUsername} id = 'username' onChange={usernameChangeHandler}/>
            <label htmlFor='age'>Age</label>
            <input type='number' value={enteredAge} id = 'age' onChange={ageChangeHandler}/>

            <Button type='submit'>Add User</Button>

        </form>
        </Card>
      
    );
}


export default AddUser ; 