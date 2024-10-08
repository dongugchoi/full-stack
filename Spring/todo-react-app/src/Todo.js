import React,{useState} from "react";
import {ListItem,
     ListItemText, 
     InputBase, Checkbox, 
     ListItemSecondaryAction,
     IconButton} from "@mui/material";
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
//useState
//리액트에서 사용되는 Hook중 하나로 함수형 컴포넌트에서 상태 변수를
//사용할 수 있도록 해준다.
//훅을 사용하면 리액트가 제공하는 기능과 상태변수를 사용할 수 있다.

//함수 생성 방법
/*
    1.function 함수명(){
    
    }

    2. let 함수명 = function(){ -> let 함수명 =() => {}
        
        
    }
    
    화살표 함수 규칙
    1. 매개변수가 1개면 소괄호 생략 가능
    2. 명령이 한 줄이면서 retrun이 있다면, 중괄호와 return 같이 생략 가능
 
*/

/*
    const [item, setItem] = useState(props.item);
    item = 상태를 추적할 객체
    setImet = 업데이트
*/



const Todo  = (props) => {
    const [item, setItem] = useState(props.item);
    const [readOnly, setReadOnly] = useState(true);
    const turnOffReadOnly = () => {
        setReadOnly(false);
    }
    
    const turnOnReadOnly = (e) =>{
        if(e.key === "Enter"){
            setReadOnly(true);
            editItem(item);
        }
    }

    
    const editItem = props.editItem;
    
    const editEventHandler = (e) => {
        setItem({...item,title:e.target.value});
    }
    
    const checkboxEventHandler = (e) => {
        item.done = e.target.checked;
        editItem(item);
    }
    const deleteItem = props.deleteItem;
    const deleteEventHandler = () => {
        deleteItem(item);
    }
    return(
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEventHandler} />
            <ListItemText>
                <InputBase
                    inputProps={{ "aria-label": "naked", readOnly : readOnly}}
                    onClick={turnOffReadOnly}
                    onKeyDown={turnOnReadOnly}
                    onChange={editEventHandler}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true} 
                    />
            </ListItemText>
        <ListItemSecondaryAction>
            <IconButton aria-label="Delete ToDo"
                onClick={deleteEventHandler}>
                <DeleteOutlined/>
                </IconButton>
        </ListItemSecondaryAction>
        </ListItem>
    );
}
export default Todo;