import React from 'react';

function Services(props) {
    return (
        <div className="card">
            <h5 className="card-header info-color white-text text-center py-4">
                <strong>Services We Offer</strong>
            </h5>
            
            <div class="container">
                <div class="row">
                    <div class="col">
                        <li>Battery Replacement</li>
                        <li>Brake Replacement</li>
                        <li>Diagnostic Service</li>
                        <li>Engine Tune-Up</li>
                        <li>Fueling</li>
                    </div>
                    <div class="col">
                        <li>Heating and AC Repair</li>
                        <li>Oil and Filter Change</li>
                        <li>Tire Rotation</li>
                        <li>Flat Tire Repair</li>
                        <li>Car Wash and Detailing</li>
                    </div>
                </div>
            </div>
        </div>
    )  
}


export default Services;