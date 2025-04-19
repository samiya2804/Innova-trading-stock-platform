/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row  p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>
      <div className="row  p-3 text-muted fs-6" style={{ lineHeight: "1.8" }}>
        <div className="col-lg-6 col-sm-12 p-3 text-center">
          <img
            src="media/images/samiyanew.jpg"
            alt="samiya"
            style={{ borderRadius: "100%", height: "300px", width: "300px" }}
          />
          <h4 className="mt-5"> Samiya</h4>
          <h6>Founder</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Samiya bootstrapped and cloned Innova in 2025 to overcome the
            hurdles people face during there decade long stint as a trader.
            Today, Innova has changed the landscape of the Indian broking
            industry.
          </p>
          <p>
            She is the Software Developer with an interest in making beautiful
            and innovative Websites.
          </p>
          <p>Fitness and Sports is her zen.</p>
          <p>
            Connect on &nbsp;
            <a style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/samiya-06100729a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              Linkedin &nbsp;
            </a>
            <a style={{ textDecoration: "none" }} href="https://www.instagram.com/samiya_saaqi?igsh=MzRpbGpnODdhdDg5">Instagram</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
