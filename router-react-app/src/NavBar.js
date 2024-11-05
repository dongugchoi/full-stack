import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){

    return(
        <nav>
            {/* Html의 <a>태그와 비슷한 역할을 한다 <link> */}
            <Link to="/home">홈</Link>
            <br/>
            <Link to="/about">소개</Link>
        </nav>
    )


}

export default NavBar;