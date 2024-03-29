import React, { useRef, useState } from 'react';
import { cn } from '../../../utils/cn';
import emailjs from '@emailjs/browser';
import { BsFillCheckCircleFill } from 'react-icons/bs';

function Index() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const messageSent = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const {
      REACT_APP_SERVICE_ID,
      REACT_APP_TEMPLATE_ID,
      REACT_APP_PUBLIC_KEY
    } = process.env;

    emailjs
      .sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        form.current,
        REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          messageSent();
          console.log(result.text);
          console.log('message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log('message did not send');
          console.log(error.text);
        }
      );
  };

  const inputClassname =
    'w-full rounded border-[1px] border-light h-[29px] bg-transparent mt-1 focus:text-medium pl-2 text-[16px] focus:bg-[#555b6325] hover:bg-[#555b6325]';

  return (
    <>
      <div
        className={cn(
          success
            ? 'bg-background border-green border-[1px]  w-96 h-20 shadow-xl rounded-lg fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-wrap content-center justify-center duration-300 z-50'
            : 'hidden'
        )}>
        <p className="text-[22px] text-green h-min">Successfully sent! </p>
        <div className="w-8 h-8 ml-6">
          <BsFillCheckCircleFill className="inline w-full h-full fill-green" />
        </div>
      </div>
      <h2 className="mb-3 font-semibold text-medium mt-28 lg:mt-52">CONTACT</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="gap-4 text-xs md:grid md:grid-cols-2">
          <div className="group">
            <p className="font-semibold">Name</p>
            <input
              type="text"
              required
              className={inputClassname}
              name="user_name"
            />
          </div>
          <div className="mt-3 md:mt-0">
            <p className="font-semibold">Email</p>
            <input
              type="email"
              required
              className={inputClassname}
              name="email_address"
            />
          </div>
          <div className="col-span-2 mt-3 mb-3 md:mt-0">
            <p className="font-semibold">Message</p>
            <textarea
              type="text"
              required
              name="message"
              className={cn(inputClassname, 'h-[77px] pt-2')}
            />
          </div>
        </div>
        <div className="rounded w-max h-min bg-green">
          <button
            type="submit"
            className="py-3 px-7 text-green border-[1px] border-green text-xs rounded relative top-0 left-0 duration-200 hover:-top-1 hover:-left-1 bg-background z-10">
            Send Message
          </button>
        </div>
      </form>
    </>
  );
}

export default Index;
