
import React from 'react';

const Allrequest = () => {
  return (
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
      <section id="dashboard-analytics">
        <div className="main-dash row">
          <div className="search-view col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 d-flex">
            <form action="javascript:void(0)" className="d-flex">
              <div className="search-req ">
                <h6 className="fw-bolder" style={{ fontSize: '12px' }}>Search for Request</h6>
                <div className="search-div d-flex">
                  <div className="search-request-icon position-absolute text-black fs-6" style={{ padding: '8px 15px' }}><i className="feather icon-search" /></div>
                  <input className="req-input rounded-2 " type="text" placeholder="Search" tabIndex={-1} style={{ border: '1px solid #e6e6e6', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', textIndent: '33px', height: '34px' }} />
                </div>
              </div>
              <div id="req-date">
                <h6 className="fw-bolder mx-1" style={{ fontSize: '12px' }}>Date</h6>
                <input type="text" name="dates" id="datepick" placeholder="Enter date" defaultValue=" Enter date" className="rounded-2 mx-1 " style={{ border: '1px solid #e6e6e6', padding: '6px 8px', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }} />
              </div>
              <div className="view-cat pe-2">
                <h6 className="fw-bolder" style={{ fontSize: '12px' }}>Category</h6>
                <select className="form-select view-cat-select" aria-label="Default select example" style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}>
                  <option selected>View All</option>
                  <option value="Abstract">Abstract</option>
                  <option value="Synopsis">Synopsis</option>
                  <option value="Thesis">Thesis</option>
                </select>
              </div>
              <div className="refresh-btn mx-1 mt-2">
                <button type="reset" style={{ outline: 'none', border: 'none', background: 'transparent' }}>
                  <i className="bi bi-arrow-clockwise" />
                </button>
              </div>
            </form>
          </div>
          <div className="dropdown new-req col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-end mt-2">
            <button className="new-request dropdown-toggle d-flex justify-content-center align-items-center text-white rounded-2" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#183268', boxShadow: 'rgba(44, 71, 107, 0.35) -3px 7px 12px', width: '175px', height: '32px' }}>
              <i className="bi bi-plus d-flex align-items-center fs-6" style={{ padding: '2px' }} />
              New Request
            </button>
            <ul className="dropdown-menu rounded-1 p-0" id="newreq-menu" style={{ backgroundColor: 'rgb(191, 228, 243)', width: '175px' }}>
              <li><a href="#" className="abst-link dropdown-item" data-toggle="modal" data-target="#exampleModalCenter">Abstract</a></li>
              <li><a href="#" className="abst-link dropdown-item" data-toggle="modal" data-target="#exampleModalCenter1">Synopsis</a></li>
              <li><a className="dropdown-item" href="#">Introduction</a></li>
              <li><a className="dropdown-item" href="#">Literature of Review</a></li>
              <li><a className="dropdown-item" href="#">Research Paper</a></li>
              <li><a className="dropdown-item" href="#">Conclusion</a></li>
              <li><a className="dropdown-item" href="#">Dissertation</a></li>
              <li><a className="dropdown-item" href="#">Thesis</a></li>
              <li><a className="dropdown-item" href="#">Report</a></li>
              <li><a className="dropdown-item" href="#">Bibliometric</a></li>
              <li><a className="dropdown-item" href="#">Case Study</a></li>
              <li><a className="dropdown-item" href="#">Add new chapter</a></li>
            </ul>
          </div>
          {/*<div class="main-request d-flex justify-content-center align-items-center pt-5 mt-5">
                            <div class="reqimg" onclick="newreq()" style="height: 100px; width: 100px;">
                            </div>
                        </div>
                        <h6 class="text-center fs-5">Add Request</h6>*/}
          {/* Modal */}
          <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable" role="document">
              <div className="modal-content">
                <div className="modal-body px-3">
                  <div>
                    <h6 className="pt-2 font-weight-bolder">Standard Request</h6>
                    <div className="stnreq-1 position-relative d-flex justify-content-center align-items-center mt-1" style={{ border: '1px solid rgb(207, 205, 205)' }}>
                      <a href="create_request.html" className="text-white"><button type="button" className="btn btn-primary btn-sm">Open
                      </button></a>
                    </div>
                    <p className="stnreq-2title ps-1" style={{ width: '130px' }}>Title
                    </p>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <h6 className="pt-2 font-weight-bolder"> Recent Requests</h6>
                      <input type="text" className="ag-grid-filter form-control w-25 mr-0 mb-0 mt-1 mb-sm-0 " style={{ height: '24px', borderColor: 'rgb(156, 155, 155)' }} id="filter-text-box" placeholder="Search...." />
                    </div>
                    <div className="request-whole-div">
                      <div className="request-scroller position-relative d-flex">
                        <div className="request-element py-1 pe-3">
                          <div className="stnreq-2 fw-2 position-relative d-flex justify-content-center align-items-center" style={{ border: '1px solid rgb(207, 205, 205)' }}>
                          </div>
                          <p className="stnreq-2title ps-1" style={{ width: '130px' }}>Title
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* new request Modal */}
          <div className="modal fade" id="exampleModalCenter1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenter1Title" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable" role="document">
              <div className="modal-content">
                <div className="modal-body px-3">
                  <div>
                    <h6 className="pt-2 font-weight-bolder">Standard Request</h6>
                    <div className="stnreq-1 position-relative d-flex justify-content-center align-items-center mt-1" style={{ border: '1px solid rgb(207, 205, 205)' }}>
                      <a href="create_new_request.html" className="text-white"><button type="button" className="btn btn-primary btn-sm">Open
                      </button></a>
                    </div>
                    <p className="stnreq-2title ps-1" style={{ width: '130px' }}>Title
                    </p>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <h6 className="pt-2 font-weight-bolder"> Recent Requests</h6>
                      <input type="text" className="ag-grid-filter form-control w-25 mr-0 mb-0 mt-1 mb-sm-0 " style={{ height: '24px', borderColor: 'rgb(156, 155, 155)' }} id="filter-text-box" placeholder="Search...." />
                    </div>
                    <div className="request-whole-div">
                      <div className="request-scroller position-relative d-flex">
                        <div className="request-element py-1 pe-3">
                          <div className="stnreq-2 fw-2 position-relative d-flex justify-content-center align-items-center" style={{ border: '1px solid rgb(207, 205, 205)' }}>
                          </div>
                          <p className="stnreq-2title ps-1" style={{ width: '130px' }}>Title
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table list starts */}
      <section id="allrequest-section" className="position-relative px-1 pb-2 pt-1">
        <div className="row">
          <div className="col-6">
            <h5 className="font-weight-bold my-1">All Request</h5>
          </div>
          <div className="col-6">
            <div className="d-flex align-items-center justify-content-end pt-1">
              {/* <i onclick="favFunction(this)"
                                      class="fa-regular fa-star-o fa-lg me-3 cursor-pointer"></i> */}
              <span id="starIcon" className="star-icon me-2 user-select-none" onclick="toggleStar()">☆</span>
              <i className="fa-solid fa-trash-can fa-lg cursor-pointer" data-bs-toggle="modal" data-bs-target="#exampleModal" />
            </div>
          </div>
        </div>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content" style={{ width: '480px', height: '190px' }}>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Delete</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <p>Are you sure ?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary delete-button-conf">Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: '48.5vh' }}>
          <table className="table-request" id="tabreq" style={{ width: '100%' }}>
            <thead>
              <tr className=" row request-tablehead font-weight-bolder rounded-2 d-flex mt-0 " style={{ padding: '10px', border: '1px solid rgb(223, 216, 216)', backgroundColor: 'white', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
                <th scope="col" className="col-3">
                  <fieldset>
                    {/* test */}
                    <div className="checkbox-wrapper-40">
                      <label htmlFor="selectAllCheckbox">
                        <input type="checkbox" id="selectAllCheckbox" defaultValue="false" />
                        <span className="checkbox text-dark ms-5 fs-6 mt-5">Generated
                          Date</span>
                      </label>
                    </div>
                    {/* test end */}
                  </fieldset>
                </th>
                <th scope="col" className="col-2">Module <i className="feather icon-arrow-down" />
                </th>
                <th scope="col" className="col-3">Module Name</th>
                <th scope="col" className="col-3">About/Note</th>
                <th scope="col" className="col-1">Action</th>
              </tr>
            </thead>
            <tbody className="maintab">
              <tr className="row request-table font-weight-bold">
                <td className="col-3">
                  <fieldset>
                    <div className="checkbox-wrapper-40">
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox font-weight-normal ms-5 fs-6">30 Aug
                          2023</span>
                      </label>
                    </div>
                  </fieldset>
                </td>
                <td className="col-2 font-weight-normal">Synopsis</td>
                <td className="col-3 font-weight-normal"> Chemical Name</td>
                <td className="col-3 px-0">
                  <div className="input-group d-flex justify-content-between align-items-center writein">
                    <input type="text" className=" px-1 py-1 rounded-3" id="searchInput" placeholder="Write something which maybe important" oninput="toggleButton(this)" style={{ background: 'rgb(245, 244, 244)', border: '1px solid rgb(213, 214, 214)' }} />
                    <button className="rounded-3 " type="button" id="submitButton" onclick="hideButton(this)" style={{ height: '35px', marginTop: '8px', marginRight: '8px', width: '50px', zIndex: 100, display: 'none', border: 'none', color: 'white', backgroundColor: 'rgb(69, 160, 69)' }}>
                      save
                      {/* <i class="doot vertical-dot bi bi-three-dots-vertical pl-1"></i> */}
                    </button>

                  </div>
                </td>
                <td className="col-1 px-0">
                  <div className="d-flex justify-content-between align-items-center writein">
                    <div className="dropdown delete-div ps-0 ">
                      <button className="btn btn-outline-none dropdown-toggle position-relative d-flex justify-content-center align-items-center " type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '20px' }}>
                        <i className="delete-req fa-solid fa-trash-can fa-lg px-1 " />
                      </button>
                      <ul className="dropdown-menu del-conf-ul rounded-2" style={{ border: '1px solid orangered', backgroundColor: 'rgb(245, 245, 245)' }}>
                        <li><a className="dropdown-item" href="#" style={{ padding: '5px' }}>
                          <div className="del-conf">
                            <h6 className="text-black d-flex justify-content-center align-items-center px-1 fw-bolder fs-6">
                              Are you sure?</h6>
                            <div className="row w-100 m-0">
                              <div className="col-6 d-flex justify-content-center align-items-center del-opt del-opt-yes">
                                <button type="button" className="btn-outline-dark font-weight-bold px-1 rounded-1 border-1" style={{ fontSize: '11px', height: '20px' }}>Yes</button>
                              </div>
                              <div className="col-6 d-flex justify-content-center align-items-center del-opt del-opt-no">
                                <button type="button" className="btn-outline-dark font-weight-bold px-1 rounded-1 border-1" style={{ fontSize: '11px', height: '20px' }} data-bs-dismiss="del-conf-ul">No</button>
                              </div>
                            </div>
                          </div>
                        </a>
                        </li>
                      </ul>
                    </div>
                    <div className="edit-div pe-1 d-flex justify-content-center align-items-center position-relative ">
                      <a href="create_request.html" className="text-decoration-none text-black"><i className="fa-solid fa-pen-to-square fa-lg" /></a>
                    </div>

                    <div className="dropdown showmore-div dynamic-dropdown">
                      <button className="btn btn-outline-none dropdown-toggle position-relative p-0 d-flex justify-content-center align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '15px' }}>
                        <i className="doot vertical-dot bi bi-three-dots-vertical pl-1" />
                      </button>
                      <ul className="dropdown-menu showmore-opt p-0" style={{ border: '1px solid rgb(211, 238, 252)', backgroundColor: 'rgb(206, 236, 252)', width: '50px', fontSize: '10px', transform: 'translate(10px, 52px) !important' }}>
                        <li onclick="showDownloadAlert(this)"><a className="dropdown-item" href="#">Download</a></li>
                        <li><a className="dropdown-item" href="#">Rename</a></li>
                        <li onclick="showDownloadAlert(this)"><a className="dropdown-item" href="#">Add to Favourite</a></li>
                      </ul>
                    </div>
                    {/*  */}
                  </div>
                </td>
              </tr>
              <tr className="row request-table font-weight-bold">
                <td className="col-3">
                  <fieldset>
                    <div className="checkbox-wrapper-40">
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox font-weight-normal ms-5 fs-6">30 Aug
                          2023</span>
                      </label>
                    </div>
                  </fieldset>
                </td>
                <td className="col-2 font-weight-normal">Synopsis</td>
                <td className="col-3 font-weight-normal"> Chemical Name</td>
                <td className="col-3 px-0">
                  <div className="input-group d-flex justify-content-between align-items-center writein">
                    <input type="text" className=" px-1 py-1 rounded-3" id="searchInput" placeholder="Write something which maybe important" oninput="toggleButton(this)" style={{ background: 'rgb(245, 244, 244)', border: '1px solid rgb(213, 214, 214)' }} />
                    <button className="rounded-3 " type="button" id="submitButton" onclick="hideButton(this)" style={{ height: '35px', marginTop: '8px', marginRight: '8px', width: '50px', zIndex: 100, display: 'none', border: 'none', color: 'white', backgroundColor: 'rgb(69, 160, 69)' }}>
                      save
                    </button>
                  </div>
                </td>
                <td className="col-1 px-0">
                  <div className="d-flex justify-content-between align-items-center writein">
                    <div className="dropdown delete-div ps-0 ">
                      <button className="btn btn-outline-none dropdown-toggle position-relative d-flex justify-content-center align-items-center " type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '20px' }}>
                        <i className="delete-req fa-solid fa-trash-can fa-lg px-1 " />
                      </button>
                      <ul className="dropdown-menu del-conf-ul rounded-2" style={{ border: '1px solid orangered', backgroundColor: 'rgb(245, 245, 245)' }}>
                        <li><a className="dropdown-item" href="#" style={{ padding: '5px' }}>
                          <div className="del-conf">
                            <h6 className="text-black d-flex justify-content-center align-items-center px-1 fw-bolder fs-6">
                              Are you sure?</h6>
                            <div className="row w-100 m-0">
                              <div className="col-6 d-flex justify-content-center align-items-center del-opt del-opt-yes">
                                <button type="button" className="btn-outline-dark font-weight-bold px-1 rounded-1 border-1" style={{ fontSize: '11px', height: '20px' }}>Yes</button>
                              </div>
                              <div className="col-6 d-flex justify-content-center align-items-center del-opt del-opt-no">
                                <button type="button" className="btn-outline-dark font-weight-bold px-1 rounded-1 border-1" style={{ fontSize: '11px', height: '20px' }} data-bs-dismiss="del-conf-ul">No</button>
                              </div>
                            </div>
                          </div>
                        </a>
                        </li>
                      </ul>
                    </div>
                    <div className="edit-div pe-1 d-flex justify-content-center align-items-center position-relative ">
                      <a href="create_request.html" className="text-decoration-none text-black"><i className="fa-solid fa-pen-to-square fa-lg" /></a>
                    </div>
                    <div className="dropdown showmore-div dynamic-dropdown">
                      <button className="btn btn-outline-none dropdown-toggle position-relative p-0 d-flex justify-content-center align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '15px' }}>
                        <i className="doot vertical-dot bi bi-three-dots-vertical pl-1" />
                      </button>
                      <ul className="dropdown-menu showmore-opt p-0" style={{ border: '1px solid rgb(211, 238, 252)', backgroundColor: 'rgb(206, 236, 252)', width: '50px', fontSize: '10px', transform: 'translate(10px, 52px) !important' }}>
                        <li onclick="showDownloadAlert(this)"><a className="dropdown-item" href="#">Downloadddd</a></li>
                        <li><a className="dropdown-item" href="#">Rename</a></li>
                        <li onclick="showDownloadAlert(this)"><a className="dropdown-item" href="#">Add to Favourite</a></li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="row request-table font-weight-bold">
                <td className="col-3">
                  <fieldset>
                    <div className="checkbox-wrapper-40">
                      <label>
                        <input type="checkbox" />
                        <span className="checkbox font-weight-normal ms-5 fs-6 text-md">30 Aug
                          2023</span>
                      </label>
                    </div>
                  </fieldset>
                </td>
                <td className="col-2 font-weight-normal">Synopsis</td>
                <td className="col-3 font-weight-normal"> Chemical Name</td>
                <td className="col-3 px-0">
                  <div className="input-group d-flex justify-content-between align-items-center writein">
                    <input type="text" className=" px-1 py-1 rounded-3" id="searchInput" placeholder="Write something which maybe important" oninput="toggleButton(this)" style={{ background: 'rgb(245, 244, 244)', border: '1px solid rgb(213, 214, 214)' }} />
                    <button className="rounded-3 " type="button" id="submitButton" onclick="hideButton(this)" style={{ height: '35px', marginTop: '8px', marginRight: '8px', width: '50px', zIndex: 100, display: 'none', border: 'none', color: 'white', backgroundColor: 'rgb(69, 160, 69)' }}>
                      save
                    </button>
                  </div>
                </td>
                <td className="col-1 px-0">
                  <div className="d-flex justify-content-between align-items-center writein">
                    <div className="dropdown delete-div ps-0 ">
                      <button className="btn btn-outline-none dropdown-toggle position-relative d-flex justify-content-center align-items-center " type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '20px' }}>
                        <i className="delete-req fa-solid fa-trash-can fa-lg px-1 " />
                      </button>
                      <ul className="dropdown-menu del-conf-ul rounded-2" style={{ border: '1px solid orangered', backgroundColor: 'rgb(245, 245, 245)' }}>
                        <li><a className="dropdown-item" href="#" style={{ padding: '5px' }}>
                          <div className="del-conf">
                            <h6 className="text-black d-flex justify-content-center align-items-center px-1 fw-bolder fs-6">
                              Are you sure?</h6>
                            <div className="row w-100 m-0">
                              <div className="col-6 d-flex justify-content-center align-items-center del-opt del-opt-yes">
                                <button type="button" className="btn-outline-dark font-weight-bold px-1 rounded-1 border-1" style={{ fontSize: '11px', height: '20px' }}>Yes</button>
                              </div>
                              <div className="col-6 d-flex justify-content-center align-items-center del-opt del-opt-no">
                                <button type="button" className="btn-outline-dark font-weight-bold px-1 rounded-1 border-1" style={{ fontSize: '11px', height: '20px' }} data-bs-dismiss="del-conf-ul">No</button>
                              </div>
                            </div>
                          </div>
                        </a>
                        </li>
                      </ul>
                    </div>
                    <div className="edit-div pe-1 d-flex justify-content-center align-items-center position-relative ">
                      <a href="create_request.html" className="text-decoration-none text-black"><i className="fa-solid fa-pen-to-square fa-lg" /></a>
                    </div>
                    <div className="dropdown showmore-div">
                      <button className="btn btn-outline-none dropdown-toggle position-relative p-0 d-flex justify-content-center align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '15px' }}>
                        <i className="vertical-dot bi bi-three-dots-vertical pl-1 " />
                      </button>
                      <ul className="dropdown-menu showmore-opt p-0" style={{ border: '1px solid rgb(211, 238, 252)', backgroundColor: 'rgb(206, 236, 252)', width: '50px', fontSize: '10px', transform: 'translate(10px, 52px) !important' }}>
                        <li><a className="dropdown-item" href="#">Download</a></li>
                        <li><a className="dropdown-item" href="#">Rename</a></li>
                        <li><a className="dropdown-item" href="#">Add to Favourite</a></li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="row request-table font-weight-bold">
                <td className="col-3">
                  <fieldset>
                    <label htmlFor="subcheck4" className="d-flex">
                      <div>
                        <input type="checkbox" className="form-check-input check12 ms-1" defaultValue="false" id="subcheck4" />
                        <span className="custom-checkbox1234" />
                      </div>
                      <span className="ms-5 font-weight-normal fs-6">30 Aug 2023</span>
                    </label>
                  </fieldset>
                </td>
                <td className="col-2 font-weight-normal">Synopsis</td>
                <td className="col-3 font-weight-normal"> Chemical Name</td>
                <td className="col-3 px-0">
                  <div className="input-group d-flex justify-content-between align-items-center writein">
                    <input type="text" className=" px-1 py-1 rounded-3" id="searchInput" placeholder="Write something which maybe important" oninput="toggleButton(this)" style={{ background: 'rgb(245, 244, 244)', border: '1px solid rgb(213, 214, 214)' }} />
                    <button className="rounded-3 " type="button" id="submitButton" onclick="hideButton(this)" style={{ height: '35px', marginTop: '8px', marginRight: '8px', width: '50px', zIndex: 100, display: 'none', border: 'none', color: 'white', backgroundColor: 'rgb(69, 160, 69)' }}>
                      save
                    </button>
                  </div>
                </td>
                <td className="col-1 px-0">
                  <div className="d-flex justify-content-between align-items-center writein">
                    <div className="dropdown delete-div ps-0 ">
                      <button className="btn btn-outline-none dropdown-toggle position-relative d-flex justify-content-center align-items-center " type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '20px' }}>
                        <i className="delete-req fa-solid fa-trash-can fa-lg px-1 " />
                      </button>
                      <ul className="dropdown-menu del-conf-ul rounded-2" style={{ border: '1px solid orangered', backgroundColor: 'rgb(245, 245, 245)' }}>
                        <li><a className="dropdown-item" href="#" style={{ padding: '5px' }}>
                          <div className="del-conf">
                            <h6 className="text-black d-flex justify-content-center align-items-center px-1 fw-bolder fs-6">
                              Are you sure?</h6>
                            <div className="row w-100 m-0">
                              <div className="col-6 d-flex justify-content-center align-items-center del-opt del-opt-yes">
                                <button type="button" className="btn-outline-dark font-weight-bold px-1 rounded-1 border-1" style={{ fontSize: '11px', height: '20px' }}>Yes</button>
                              </div>
                              <div className="col-6 d-flex justify-content-center align-items-center del-opt del-opt-no">
                                <button type="button" className="btn-outline-dark font-weight-bold px-1 rounded-1 border-1" style={{ fontSize: '11px', height: '20px' }} data-bs-dismiss="del-conf-ul">No</button>
                              </div>
                            </div>
                          </div>
                        </a>
                        </li>
                      </ul>
                    </div>
                    <div className="edit-div pe-1 d-flex justify-content-center align-items-center position-relative ">
                      <a href="create_request.html" className="text-decoration-none text-black"><i className="fa-solid fa-pen-to-square fa-lg" /></a>
                    </div>
                    <div className="dropdown showmore-div">
                      <button className="btn btn-outline-none dropdown-toggle position-relative p-0 d-flex justify-content-center align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '15px' }}>
                        <i className="vertical-dot bi bi-three-dots-vertical pl-1 " />
                      </button>
                      <ul className="dropdown-menu showmore-opt p-0" style={{ border: '1px solid rgb(211, 238, 252)', backgroundColor: 'rgb(206, 236, 252)', width: '50px', fontSize: '10px', transform: 'translate(10px, 52px) !important' }}>
                        <li><a className="dropdown-item" href="#">Download</a></li>
                        <li><a className="dropdown-item" href="#">Rename</a></li>
                        <li><a className="dropdown-item" href="#">Add to Favourite</a></li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* DataTable ends */}
        {/* pagination start */}
        <div className="row pre-next-btn mt-2" id="pagintab">
          <div className="col-2 d-flex align-items-center justify-content-start">
            <button type="button" className="btn btn-outline-dark" style={{ height: '30px' }} id="prevButton">Previous</button>
          </div>
          <div className="col-8 d-flex align-items-center justify-content-center text-black font-weight-bold" style={{ userSelect: 'none' }}>
            <span>Page <span id="current-page" /> of <span id="total-pages" /></span>
          </div>
          <div className="col-2 d-flex align-items-center justify-content-end">
            <button type="button" className="btn btn-outline-dark" style={{ height: '30px' }} id="nextButton">Next</button>
          </div>
        </div>
        {/* paginnation end */}
      </section>
      {/* Data list view end */}
    </main>
  );
};

export default Allrequest;
