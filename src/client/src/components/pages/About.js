import React from "react";
import about from "../../assets/about.png";
import clickPicture from "../../assets/picture-click.jpg";
import recipe from "../../assets/reciepe-2.jpg";
import add from "../../assets/add.jpg";

//component for about page
const About = () => {
  return (
    <div class="container py-5">
      <div class="row h-100 align-items-center py-5">
        <div class="col-lg-6">
          <h1 class="display-4">One Place Stop.</h1>
          <p class="lead text-muted mb-0">
            Get recipes inspiration from the picture of the pantry or any
            ingredients pictures
          </p>
        </div>
        <div class="col-lg-6 d-none d-lg-block">
          <img src={about} alt="" class="img-fluid" />
        </div>
      </div>
      <hr />
      <p class="display-5 mt-5 text-center">How it works?</p>
      <div class="bg-white pt-5">
        <div class="container pb-5">
          <div class="row align-items-center pt-0 mb-5">
            <div class="col-lg-6 order-2 order-lg-1">
              <i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 class="font-weight-light">Upload Picture</h2>
              <p class="font-italic text-muted mb-4">
                On the dashboard upload the picture and click on Get ingridients
              </p>
            </div>
            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img src={clickPicture} alt="" class="img-fluid mb-4 mb-lg-0" />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-5 px-5 mx-auto">
              <img src={add} alt="" class="img-fluid mb-4 mb-lg-0" />
            </div>
            <div class="col-lg-6">
              <i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 class="font-weight-light">Add ingridients if we missed</h2>
              <p class="font-italic text-muted mb-4">
                Once the ingridients is rendered, you can add the missing
                ingridients. You can also delete the ingridients if you want to.
              </p>
            </div>
            <div class="row align-items-center pt-5 my-5">
              <div class="col-lg-6 order-2 pt-2 order-lg-1">
                <i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                <h2 class="font-weight-light">Click On Get Recipes</h2>
                <p class="font-italic text-muted mb-4">
                  Once you are satisfied with the ingridients, click on Get
                  Recipes. This will render recipes based on your ingridients
                  and will give a link with steps to make that dish.
                </p>
              </div>
              <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                <img src={recipe} alt="" class="img-fluid mb-4 mb-lg-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
