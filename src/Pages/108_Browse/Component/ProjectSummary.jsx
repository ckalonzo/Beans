import React from "react";
import ProjectDetial from "./ProjectDetail";

const ProjectSummary = ({ jobs }) => {
  return (
    <article class="itemlist">
      <div class="row row-sm">
        {/* <aside class="col-sm-3">
          <div class="img-wrap">
            <img src="images/items/1.jpg" class="img-md" />
          </div>
        </aside> */}
        <div class="col-sm-6">
          <div class="text-wrap">
            <h4 class="title"> {jobs.service} </h4>
            <p className="text-secondary">
              <small className="text-muted">
                posted By: {jobs.firstName} {jobs.lastName}
              </small>
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim
              ad minim veniam{" "}
            </p>
            <p class="rating-wrap my-0 text-muted">
              <span class="label-rating">
                Number of bids: 11 {jobs.bidders}
              </span>
              {/* <span class="label-rating">154 orders </span> */}
            </p>
          </div>
        </div>
        <aside class="col-sm-3">
          <div class="border-left pl-3">
            <div class="price-wrap">
              <span class="h3 price"> ${jobs.budget} </span>
            </div>
            <p>
              <a href="#" class="btn btn-warning">
                {" "}
                Bid now{" "}
              </a>
              <a href="#" class="btn btn-light">
                {" "}
                Details{" "}
              </a>{" "}
            </p>
          </div>
        </aside>
      </div>
    </article>

    // <section className="projectSummary">
    //     <div className="col-12">
    //         <div className="card mb-2">
    //             <div className="card-body">
    //                 <div className="row">
    //                     <div className="col-12">
    //                         <h5 className="">{jobs.service}</h5>
    //                     </div>
    //                 </div>
    //                 <div className="row mb-5">
    //                     <div className="col-12">
    //                         <p className="text-secondary"> Number of bids: 11 {jobs.bidders}</p>
    //                     </div>
    //                     <div className="col-6 offest-2">
    //                         {/* <p className="text-secondary">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
    //                         <p className="text-secondary"><small className="text-muted">posted By: {jobs.firstName}  {jobs.lastName}</small></p>
    //                         <p className="text-secondary"><small className="text-muted">Avalibility</small></p>
    //                     </div>
    //                     <div className="col-6">
    //                         <p className="text-secondary">{`Remaining: ${jobs.budget}`}</p>
    //                         <p className="text-secondary">City: {jobs.city}</p>
    //                         <p className="text-secondary">{jobs.bids}</p>
    //                     </div>

    //                 </div>
    //                 <a href="#" className="btn btn-secondary float-left">More Details</a>
    //                 <a href="#" className="btn btn-success float-right">Bid Now</a>

    //             </div>

    //         </div>
    //     </div>
    // </section>
  );
};

export default ProjectSummary;
