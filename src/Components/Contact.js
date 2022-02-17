import React from "react";
export default function Contact(props) {
  return (
    <div className='container my-4'>
      <form>
        <div className="mb-1">
          <label htmlFor="exampleInputEmail1" className={`form-label text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            Email address
          </label>
          <input
            style={props.mode === 'light' ? { backgroundColor: 'white' } : { backgroundColor: '#afafaf' }}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text text-light">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="textbox"
            style={{ height: '200px' }}
          ></textarea>
          <label htmlFor="floatingTextarea2">Type Message here</label>
        </div>
        <button type="submit" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} my-4`}>
          Submit
        </button>
      </form>
    </div>
  );
}
