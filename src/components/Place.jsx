import React from "react";

function Place(props) {
    const {imageUrl, title, location, googleMapsUrl, startDate, endDate, description} = props;
    
    const country = location.toUpperCase();


    return (
        <div className="component">
            <div className="image">
                <img src={imageUrl} alt="image" />
            </div>

            <div className="main-info">
                <div className="location">
                    <div className="container">
                        <i class="fa-solid fa-location-dot"></i>
                        <p className="country">{country}</p>
                    </div>
                    
                    <a href={googleMapsUrl} className="google-maps-link">View On Google Maps</a>
                </div>
                <h2 className="name">
                    {title}
                </h2>
                <div className="date">
                    <p>
                        <span className="start-date">{startDate}</span>
                         - 
                        <span className="end-date">{endDate}</span>
                    </p>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Place