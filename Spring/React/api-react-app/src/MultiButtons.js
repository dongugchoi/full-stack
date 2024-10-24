import { useNavigate, Navigate } from "react-router-dom";

function MultiButtons(){
    
    const navigate = useNavigate();

    const handleButtonClick =(e) =>{
        const buttonId = e.target.id;

        switch(buttonId){
            case 'address':
                navigate('/address')
                break;
            case 'bookSearch':
                navigate('/search')
                break;
        }
    }

    return(
        <div>
            <button id="address" onClick={handleButtonClick}>
                주소찾기 api
            </button>
            <button id="bookSearch" onClick={handleButtonClick}>
                도서찾기 api
            </button>
        </div>
    );
}

export default MultiButtons;