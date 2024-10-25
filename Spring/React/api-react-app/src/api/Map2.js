import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function MyMap2() {
    //사용자가 클릭한 마커의 정보를 저장하는 상태
    const [info, setInfo] = useState(null);

    //지도에 표시된 마커들의 리스트 상태
    const [markers, setMarkers] = useState([]);

    //생성된 맵 객체를 저장할 상태
    const [map, setMap] = useState(null);

    //검색어를 저장할 상태
    const [keyword, setKeyword] = useState('');


    

    //카카오 장소 검색 API를 호출하는 함수
    const searchPlaces = (searchKeyword) => {
        if (!map || !window.kakao || !window.kakao.maps || !window.kakao.maps.services) {
            return;
        }

        const ps = new window.kakao.maps.services.Places();

        ps.keywordSearch(searchKeyword, (data, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                const bounds = new window.kakao.maps.LatLngBounds();

                const newMarkers = data.map(place => ({
                    position: {
                        lat: place.y,
                        lng: place.x
                    },
                    content: place.place_name, // 상호명
                    address: place.road_address || place.address_name, // 도로명 주소
                    phone: place.phone || "전화번호 없음" // 전화번호
                }));

                newMarkers.forEach(marker => bounds.extend(new window.kakao.maps.LatLng(marker.position.lat, marker.position.lng)));

                setMarkers(newMarkers);
                map.setBounds(bounds);
            } else {
                alert('검색결과가 없습니다.');
            }
        });
    }

    const handleSearch = () => {
        if (keyword === '') {
            alert('검색어를 입력해주세요');
            return;
        }
        searchPlaces(keyword);
    }

    return (
        <div>
            {/* 검색창과 버튼 */}
            <div style={{ marginBottom: "10px" }}>
                <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="검색어를 입력하세요"
                    style={{ padding: "5px", marginRight: "5px" }} />
                <button onClick={handleSearch}>검색</button>
            </div>

            {/* 지도 표시 */}
            <Map
                center={{
                    lat: 37.566826,
                    lng: 126.9786567
                }}
                style={{
                    width: "400px",
                    height: "400px"
                }}
                level={3}
                onCreate={setMap}
            >
                {markers.map((marker, index) => (
                    <MapMarker
                        key={`marker=${index}`}
                        position={marker.position}
                        // onMouseOver={() => setInfo(marker)} // 마우스 오버 시 마커 정보 저장
                        // onMouseOut={() => setInfo(null)} // 마우스 아웃 시 정보 초기화
                        onClick={() => setInfo(marker)} // 마커 클릭 시 정보 저장
                    >
                        {/* 마우스 오버 시 상호명 표시 */}
                        {info && info.position.lat === marker.position.lat && info.position.lng === marker.position.lng && (
                            <div style={{ color: "#000" }}>{marker.content}</div>
                        )}
                    
                    </MapMarker>
                ))}
                <button onClick={() => setInfo(null)}>초기화</button>

                

                {info && (
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        padding: '10px',
                        borderRadius: '5px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                        zIndex: 1 // 다른 요소 위에 표시되도록
                    }}>
                        <div><strong>상호명:</strong> {info.content}</div>
                        <div><strong>주소:</strong> {info.address}</div>
                        <div><strong>전화번호:</strong> {info.phone}</div>
                    </div>
                )}
            </Map>
        </div>
    );
}

export default MyMap2;
