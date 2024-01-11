import React from 'react';

const CommentForum = () => {
  return (
    <section style={{ backgroundColor: '#EBFFE5' }}>
      <div className="container my-5 py-5 text-dark">
        {/* Title */}
        <div className="comment-forum-title" style={{ textAlign: 'center', color: '#0e3b03' }}>
          <h1>Comment Forum</h1>
        </div>
        <div className="container my-5 py-5 text-dark">
          {/* New container for input field and button */}
          <div className="row mb-1">
            <div className="col">
              <div className="input-group" >
                <div className="form-floating">
                  <textarea className="form-control" placeholder="State comment" id="floattext" style={{ height: '130px' }}></textarea>
                  <label htmlFor="floatText">Share your thoughts</label>
                </div>
              </div>
              <div className="d-md-flex justify-content-md-end">
                <button className="btn btn-success mt-2" type="button" id="post-comment">Post</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center" >
          <div className="col-md-11 col-lg-9 col-xl-7">
            <div className="d-flex flex-start mb-4">
              <img className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp" alt="avatar" width="65"
                height="65"  />
              <div className="card w-100">
                <div className="card-body p-4" >
                  <div className="inside">
                    <h5>Kim Mingyu</h5>
                    <div className="dropdown position-absolute top-0 end-0">
                      <a className="link-muted"  href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className='bx bx-dots-horizontal-rounded' ></i>
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" >
                        <li><a className="dropdown-item" href="#">Edit</a></li>
                        <li><a className="dropdown-item" href="#">Delete</a></li>
                      </ul>
                    </div>
                    <p className="small">3 hours ago</p>
                    <p>
                      Does anyone are having a hard time to understand the Chapter 2 of Java?
                      Tell me your insights. I would really love to share mine.
                    </p>
                    <div className="d-flex justify-content-between align-items-center" style={{ backgroundColor: '#ffffff'}}>
                      <div className="d-flex align-items-center" style={{ backgroundColor: '#ffffff'}}>
                        <a href="#!" className="link-muted me-2"><i className='bx bx-like' ></i>132</a>
                        <a href="#!" className="link-muted"><i className='bx bx-dislike' ></i>15</a>
                      </div>
                      <a href="#!" className="link-muted" >Reply</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-start" >
              <img className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" alt="avatar" width="65"
                height="65" />
              <div className="card w-100">
                <div className="card-body p-4">
                  <div className="inside">
                    <h5>El Lui</h5>
                    <div className="dropdown position-absolute top-0 end-0">
                      <a className="link-muted" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className='bx bx-dots-horizontal-rounded'></i>
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Edit</a></li>
                        <li><a className="dropdown-item" href="#">Delete</a></li>
                      </ul>
                    </div>
                    <p className="small">5 hours ago</p>
                    <p>
                      Can someone help me? It seems that my snippet is continuously having
                      a lot of errors. Especially the part where bootstrap is included.
                    </p>
                    <div className="d-flex justify-content-between align-items-center" style={{ backgroundColor: '#ffffff'}}>
                      <div className="d-flex align-items-center" style={{ backgroundColor: '#ffffff'}}>
                        <a href="#!" className="link-muted me-2"><i className='bx bx-like'></i>158</a>
                        <a href="#!" className="link-muted"><i className='bx bx-dislike'></i>13</a>
                      </div>
                      <a href="#!" className="link-muted">Reply</a>
                    </div>
                    {/* Nested Reply */}
                    <div className="nested-reply mt-3" >
                      <div className="d-flex flex-start" style={{ backgroundColor: '#ffffff'}}>
                        <img className="rounded-circle shadow-1-strong me-3"
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width="55"
                          height="55" />
                        <div className="card w-100">
                          <div className="card-body p-3">
                            <div className="inside">
                              <h6>Jane Doe</h6>
                              <div className="dropdown position-absolute top-0 end-0">
                                <a className="link-muted" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                  <i className='bx bx-dots-horizontal-rounded'></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                  <li><a className="dropdown-item" href="#">Edit</a></li>
                                  <li><a className="dropdown-item" href="#">Delete</a></li>
                                </ul>
                              </div>
                              <p className="small">Just now</p>
                              <p>
                                Dang! I had a problem like yours.
                              </p>
                              <div className="d-flex justify-content-between align-items-center" style={{ backgroundColor: '#ffffff'}}>
                                <div className="d-flex align-items-center" style={{ backgroundColor: '#ffffff'}}>
                                  <a href="#!" className="link-muted me-2"><i className='bx bx-like'></i>132</a>
                                  <a href="#!" className="link-muted"><i className='bx bx-dislike'></i>15</a>
                                </div>
                                <a href="#!" className="link-muted">Reply</a>
                              </div>
                            </div>
                          </div>
                        </div>
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
  );
};

export default CommentForum;
