import React from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.css";

function ContactForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="contact">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-4 contactgrid">
            <input
              name="name"
              type="text"
              className="text"
              placeholder="Name"
              defaultValue=""
              ref={register}
            />
          </div>
          <div className="col-md-4 contactgrid">
            <input
              name="email"
              type="text"
              className="text"
              placeholder="email"
              defaultValue=""
              ref={register}
            />
          </div>
          <div className="col-md-4 contactgrid">
            <input
              name="phone"
              type="text"
              className="text"
              placeholder="phone"
              defaultValue=""
              ref={register}
            />
          </div>
          <div className="col-md-8 contactgrid1">
            <textarea
              name="message"
              placeholder="Your Message"
              defaultValue=""
              ref={register}
            ></textarea>
          </div>
          <div className="col-md-4 contactgrid2">
            <input type="submit" value="[send message]" />
          </div>
          <div className="clearfix"></div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
