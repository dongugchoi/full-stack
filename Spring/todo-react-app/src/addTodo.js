import React, {useState} from 'react';
import {Button, button, Grid, TextField} from '@mui/material';

const AddTodo = (props) => {
    const [item, setitem] = useState({title : ""});
    //새로운 객체를 배열에 추가해주는 메서드 
    const addItem = props.addItem;


    //onButtonClick
    const onButtonClick =() => {
        addItem(item); //addItem 함수사용
        setitem({title : ""});
    }


    //onInputChange
    const onInputChange=(e) =>{
        setitem({title:e.target.value});
        console.log(item);
    };

    //enterKeyEventHandler
    const enterKeyEventHandler =(e) => {
        if(e.key === 'Enter'){
            onButtonClick();
        }
    }

    return(
        <Grid container style={{marginTop:20}}>
            <Grid xs={11} md={11} item style={{paddingRight:16}}>
                <TextField placeholder='Add Todo Here' fullWidth onChange={onInputChange} value={item.title}
                onKeyPress={enterKeyEventHandler}/>

            </Grid>
            <Grid xs={1} md={1} item>
                <Button fullWidth style={{height: '100%'}} color='"secondary' variant="outlined" onClick={onButtonClick}>
                    +
                </Button>
            </Grid>
        </Grid>



    )
}

export default AddTodo;