import React from "react";

function ContactButtons() {
    return (
        <div className="main--contact">

            <div className="contact-btn email">
                <i class="fa-solid fa-envelope"></i>
                <a>Email</a>
            </div>

            <div className="contact-btn linkedin">
                <i class="fa-brands fa-linkedin"></i>
                <a>LinkedIn</a>
            </div>
        </div>
    )
}

export default ContactButtons