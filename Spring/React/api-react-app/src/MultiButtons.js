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
            case 'news':
                navigate('/news')
                break;
            case 'map':
                navigate('/map')
                break;
            case 'map2':
                navigate('/map2')
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
            <button id="news" onClick={handleButtonClick}>
                뉴스찾기 api
            </button>
            <button id="map" onClick={handleButtonClick}>
                지도보기 api
            </button>
            <button id="map2" onClick={handleButtonClick}>
                지도보기 api2
            </button>
        </div>
    );
}

export default MultiButtons;