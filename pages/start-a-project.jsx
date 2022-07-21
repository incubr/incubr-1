import React from "react";
import { Store } from "@/context";
import { onMouseEnterOnTitle } from "@/src/components/home/landing";
import { onmouseleave } from "@/src/custom-cursor";
import Navigation from "@/src/components/navigation";
import Headers from "@/src/components/headers";
import Image from "next/image";
import ArrowDown from "@/assets/arrowDown.svg";
import Footer from "@/src/components/footer";
import { toast } from "react-toastify";

const ElevatedBox = ({ childern, title, notBorder = false }) => {
  return (
    <div className="w-full mr-5 mt-10 mb-5">
      <div
        className={`w-full ${
          !notBorder && "border border-[#1F1D1D]"
        } text-[#1F1D1D] h-full py-8 lg:py-[3vw] rounded-[3.5rem] sm:rounded-[5rem] px-6 sm:px-20 `}
      >
        <div className="text-xl lg:text-[2vw] lg:leading-[2.2vw] font-[Arial]">
          {title}
        </div>
        <div className="mt-3 sm:ml-4">{childern}</div>
      </div>
    </div>
  );
};

const validation_keys = [
  "exist",
  "dBussiness",
  "serviceOffer",
  "target",
  "unique",
  "features",
  "marketing",
  "maintaince",
  "budget",
  "date",
  "guide",
  "name",
  "company",
  "email",
  "phNumber",
];

export default function StartAProject() {
  const { height } = React.useContext(Store);
  const [form, setForm] = React.useState({ guides: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate_form = () => {
    let valid = true;
    validation_keys.forEach((key) => {
      if (!form[key]) {
        valid = false;
      }
    });
    return valid;
  };

  const saveStartAProject = async () => {
    if (validate_form()) {
      const response = await fetch("/api/start-a-project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Your request has been sent successfully");
      } else {
        toast.error("Something went wrong");
      }
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <div className="w-full scroll-smooth">
      <div
        className="w-full relative bg-[#fff] flex flex-col"
        style={{ height: height, paddingBottom: height * 0.05 }}
      >
        <Navigation />
        <Headers />
        <div className="flex flex-1 justify-center items-center">
          <div className="lg:w-[60%] text-black items-center lg:items-start flex flex-col w-full mt-16 lg:mt-0 px-6 sm:px-16 lg:px-0">
            <div
              className=" font-[Arial] leading-[14vw] text-[11vw]  sm:text-7xl w-auto sm:w-[90%] lg:w-full lg:leading-[4vw] lg:text-[3.5vw] flex flex-col"
              onMouseEnter={onMouseEnterOnTitle}
              onMouseLeave={onmouseleave}
            >
              <div className="flex flex-col text-center lg:text-start ">
                Want to talk about your project?
              </div>
              {/* <span className=" font-[Arial]  text-center lg:text-start">
                
              </span> */}
            </div>
            <span className="hidden font-[PPNeueMontreal] leading-[1.5] flex-col lg:flex mt-10 text-sm lg:text-[1.5vw] tracking-wide font-[350]">
              {`Fill out the contact form for us to\n 
              understand your needs and a Client\n 
              Partner will be in touch right away.`
                .split("\n")
                .map((line, i) => (
                  <span key={i + line}>{line}</span>
                ))}
            </span>
            <span className="flex font-[PPNeueMontreal] text-center lg:text-start leading-[1.5] flex-col lg:hidden mt-[4vw] text-[4vw] sm:text-3xl lg:text-[1.5vw] tracking-wide font-[350]">
              {`Fill out the contact form for us to\n 
              understand your needs and a Client\n 
              Partner will be in touch right away.`
                .split("\n")
                .map((line, i) => (
                  <span key={i + line}>{line}</span>
                ))}
            </span>
          </div>
        </div>
        <div className="flex w-full lg:absolute h-[18vh]  lg:h-auto bottom-10 justify-center">
          <div className="flex w-[85%] justify-center lg:justify-end">
            <div
              onClick={() => window.scrollTo(0, height)}
              className="button cursor-pointer sm:w-48 sm:h-48 flex flex-col items-center lg:justify-between"
            >
              <div className="sm:w-36 w-[22vw] h-[22vw] sm:h-36 border-black border bg-transparent hover:bg-[#F0C808]  hover:border-transparent transition-colors duration-300 ease-in-out flex rounded-full justify-center items-center">
                <svg
                  width="31"
                  height="74"
                  viewBox="0 0 31 74"
                  fill="none"
                  className="lg:block hidden"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.5634 72.9347C16.2563 73.3974 15.8414 73.6958 15.4101 73.7642C14.9788 73.8327 14.5664 73.6657 14.2636 73.2999L0.561567 56.748C0.258733 56.3822 0.0903052 55.8476 0.0933311 55.2618C0.096357 54.6759 0.270591 54.0869 0.577705 53.6242C0.884817 53.1616 1.29965 52.8632 1.73095 52.7947C2.16225 52.7262 2.57468 52.8932 2.87751 53.2591L13.8231 66.4812L14.1483 3.09009C14.1498 2.79965 14.1934 2.50537 14.2766 2.22405C14.3598 1.94273 14.481 1.67987 14.6333 1.45049C14.7855 1.22111 14.9659 1.0297 15.164 0.887187C15.3621 0.744673 15.5742 0.653846 15.788 0.619894C16.0018 0.585942 16.2133 0.60953 16.4102 0.689308C16.6072 0.769087 16.7859 0.903495 16.936 1.08486C17.0861 1.26622 17.2048 1.49099 17.2853 1.74633C17.3657 2.00166 17.4063 2.28257 17.4048 2.57301L17.0751 65.9649L28.1754 49.2422C28.4825 48.7795 28.8973 48.4811 29.3286 48.4126C29.7599 48.3441 30.1723 48.5112 30.4752 48.877C30.778 49.2428 30.9464 49.7775 30.9434 50.3633C30.9404 50.9491 30.7661 51.5381 30.459 52.0008L16.5634 72.9347Z"
                    fill="#000"
                  />
                </svg>
                <svg
                  width="19"
                  height="45"
                  viewBox="0 0 19 45"
                  fill="none"
                  className="block lg:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.4456 43.5671C10.2643 43.8432 10.0192 44.0209 9.76423 44.0613C9.50926 44.1017 9.26528 44.0014 9.08597 43.7824L0.97272 33.8754C0.793406 33.6565 0.693447 33.3368 0.694834 32.9868C0.696219 32.6368 0.798837 32.2851 0.980111 32.009C1.16138 31.733 1.40647 31.5552 1.66144 31.5148C1.91642 31.4744 2.1604 31.5748 2.33971 31.7937L8.82084 39.7077L8.96946 1.83242C8.97014 1.65889 8.99572 1.48311 9.04473 1.31513C9.09374 1.14715 9.16522 0.990246 9.2551 0.853386C9.34497 0.716527 9.45147 0.602389 9.56852 0.517489C9.68557 0.432589 9.81088 0.378589 9.93729 0.358574C10.0637 0.338559 10.1887 0.35292 10.3053 0.400837C10.4218 0.448753 10.5275 0.529287 10.6164 0.637841C10.7053 0.746395 10.7756 0.880842 10.8234 1.03351C10.8711 1.18617 10.8953 1.35406 10.8946 1.5276L10.7433 39.4033L17.2953 29.4257C17.4766 29.1497 17.7216 28.9719 17.9766 28.9315C18.2316 28.8912 18.4756 28.9915 18.6549 29.2104C18.8342 29.4294 18.9342 29.7491 18.9328 30.0991C18.9314 30.4491 18.8288 30.8008 18.6475 31.0769L10.4456 43.5671Z"
                    fill="#000"
                  />
                </svg>
              </div>
              <h1 className="font-bold text-xl text-black mt-[2vw] lg:mt-0 lg:text-[1.6vw] font-[PPNeueMontreal] tracking-widest">
                Let's start
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-6 sm:px-16 ml-1 font-[Helvetica] flex justify-center  ">
        <div className="flex flex-col w-full mt-8 lg:w-[80%] 2xl:w-[70%] items-center ">
          <ElevatedBox
            title="1. Do you want to build a new website or redesign an existing one?"
            childern={
              <div className="flex flex-col sm:flex-row py-5">
                <span className=" text-xl mb-3 sm:mb-0 bg-[#1F1D1D]  font-bold text-white flex justify-between items-center py-2 px-8 rounded-full">
                  <label className="container font-[500] flex mt-3 items-center">
                    Build new website
                    <input
                      type="radio"
                      name="exist"
                      value={false}
                      onChange={handleChange}
                    />
                    <span className="checkmark" style={{ top: 0 }}></span>
                  </label>
                </span>
                <span className=" text-xl mb-3 sm:mb-0 sm:ml-10 bg-[#1F1D1D]  font-bold text-white flex justify-between items-center py-2 px-8 rounded-full">
                  <label className="container font-[500] flex mt-3 items-center">
                    Re-design website
                    <input
                      type="radio"
                      name="exist"
                      value={true}
                      onChange={handleChange}
                    />
                    <span className="checkmark" style={{ top: 0 }}></span>
                  </label>
                </span>
              </div>
            }
          />
          <ElevatedBox
            title="2. Describe your business in a few sentences"
            childern={
              <div className="flex w-full py-2">
                <textarea
                  placeholder="Share the motivation of starting the company, its vision, mission and values in maximum of 250 words."
                  rows={6}
                  name="dBussiness"
                  className=" placeholder:text-gray-600 bg-transparent border border-[#1F1D1D] rounded-3xl p-4 text-sm w-full"
                  value={form.dBussiness}
                  onChange={handleChange}
                ></textarea>
              </div>
            }
          />
          <ElevatedBox
            title="3. What services do you offer?"
            childern={
              <div className="flex w-full py-2">
                <textarea
                  placeholder="Share with us in maximum 250 words."
                  rows={6}
                  className=" placeholder:text-gray-600 bg-transparent border border-[#1F1D1D] rounded-3xl p-4 text-sm w-full"
                  value={form.serviceOffer}
                  onChange={handleChange}
                  name="serviceOffer"
                ></textarea>
              </div>
            }
          />

          <ElevatedBox
            title="4. Who is your target audience?"
            childern={
              <div className="flex w-full py-2">
                <textarea
                  placeholder="Share the demographic factors of your target customers such as age, gender, location and other details like industry, Company size, job titles and more in maximum 250 words."
                  rows={6}
                  className=" placeholder:text-gray-600 bg-transparent border border-[#1F1D1D] rounded-3xl p-4 text-sm w-full"
                  value={form.target}
                  name="target"
                  onChange={handleChange}
                ></textarea>
              </div>
            }
          />

          <ElevatedBox
            title="5. What makes your services unique?"
            childern={
              <div className="flex w-full py-2">
                <textarea
                  placeholder="Share your Unique Selling Point in maximum 250 words."
                  rows={6}
                  className=" placeholder:text-gray-600 bg-transparent border border-[#1F1D1D] rounded-3xl p-4 text-sm w-full"
                  value={form.unique}
                  name="unique"
                  onChange={handleChange}
                ></textarea>
              </div>
            }
          />

          <ElevatedBox
            title="6. What features do you need to include in your website, to make it successful?"
            childern={
              <div className="flex w-full py-2">
                <textarea
                  placeholder="Share your requirements maximum in 250 words."
                  rows={6}
                  className=" placeholder:text-gray-600 bg-transparent border border-[#1F1D1D] rounded-3xl p-4 text-sm w-full"
                  value={form.features}
                  name="features"
                  onChange={handleChange}
                ></textarea>
              </div>
            }
          />

          <ElevatedBox
            title="7. Mention your three favourite websites (Reason)?"
            childern={
              <div className="flex w-full py-2">
                <textarea
                  placeholder="Share with us in maximum 250 words."
                  rows={6}
                  className=" placeholder:text-gray-600 bg-transparent border border-[#1F1D1D] rounded-3xl p-4 text-sm w-full"
                  value={form.reference}
                  name="reference"
                  onChange={handleChange}
                ></textarea>
              </div>
            }
          />

          <ElevatedBox
            title="9. Are you interested in content marketing services?"
            childern={
              <div className="flex flex-col sm:flex-row py-5">
                <span className="uppercase text-xl mb-3 sm:mb-0 bg-[#1F1D1D]  font-bold text-white flex justify-between items-center py-2 px-8 rounded-full">
                  <label className="container font-[500] flex mt-3 items-center">
                    Yes
                    <input
                      type="radio"
                      name="marketing"
                      value={true}
                      onChange={handleChange}
                    />
                    <span className="checkmark" style={{ top: 0 }}></span>
                  </label>
                </span>
                <span className="uppercase text-xl mb-3 sm:mb-0 sm:ml-10 bg-[#1F1D1D]  font-bold text-white flex justify-between items-center py-2 px-8 rounded-full">
                  <label className="container font-[500] flex mt-3 items-center">
                    No
                    <input
                      type="radio"
                      name="marketing"
                      value={false}
                      onChange={handleChange}
                    />
                    <span className="checkmark" style={{ top: 0 }}></span>
                  </label>
                </span>
              </div>
            }
          />

          <ElevatedBox
            title="9. Would you like us to provide ongoing support and maintenance?"
            childern={
              <div className="flex flex-col sm:flex-row py-5">
                <span className="uppercase text-xl mb-3 sm:mb-0 bg-[#1F1D1D]  font-bold text-white flex justify-between items-center py-2 px-8 rounded-full">
                  <label className="container font-[500] flex mt-3 items-center">
                    Yes
                    <input
                      type="radio"
                      name="maintaince"
                      value={true}
                      onChange={handleChange}
                    />
                    <span className="checkmark" style={{ top: 0 }}></span>
                  </label>
                </span>
                <span className="uppercase text-xl mb-3 sm:mb-0 sm:ml-10 bg-[#1F1D1D]  font-bold text-white flex justify-between items-center py-2 px-8 rounded-full">
                  <label className="container font-[500] flex mt-3 items-center">
                    No
                    <input
                      type="radio"
                      name="maintaince"
                      value={false}
                      onChange={handleChange}
                    />
                    <span className="checkmark" style={{ top: 0 }}></span>
                  </label>
                </span>
              </div>
            }
          />

          <ElevatedBox
            title="10. What is your budget?"
            childern={
              <div className="flex flex-col flex-wrap sm:flex-row py-5">
                <span className="uppercase text-xl mb-3 sm:mb-0 bg-[#1F1D1D]  font-bold text-white flex justify-between items-center py-2 px-8 lg:px-[1.5vw] rounded-full">
                  <label
                    style={{ fontSize: "20px" }}
                    className="container font-[500] flex mt-3 items-center"
                  >
                    5-10k
                    <input
                      type="radio"
                      name="budget"
                      value={"5-10k"}
                      onChange={handleChange}
                    />
                    <span className="checkmark" style={{ top: 0 }}></span>
                  </label>
                </span>
                <span className="uppercase text-xl mb-3 sm:mb-0 sm:ml-10 bg-[#1F1D1D]  font-bold text-white flex justify-between items-center py-2 px-8 lg:px-[1.5vw] rounded-full">
                  <label
                    style={{ fontSize: "20px" }}
                    className="container font-[500] flex mt-3 items-center"
                  >
                    10-20k
                    <input
                      type="radio"
                      name="budget"
                      value={"10-20k"}
                      onChange={handleChange}
                    />
                    <span className="checkmark" style={{ top: 0 }}></span>
                  </label>
                </span>
                <span className="uppercase mb-3 sm:mt-3 lg:mt-0 sm:mb-0 lg:ml-10 bg-[#1F1D1D]  font-bold text-white flex justify-between items-center py-2 px-8 lg:px-[1.5vw] rounded-full">
                  <label
                    style={{ fontSize: "20px" }}
                    className="container font-[500] flex mt-3 items-center"
                  >
                    20-40k
                    <input
                      type="radio"
                      name="budget"
                      value={"20-40k"}
                      onChange={handleChange}
                    />
                    <span className="checkmark" style={{ top: 0 }}></span>
                  </label>
                </span>
                <span className="w-full sm:w-auto uppercase text-xl mb-3 sm:mt-3 xl:mt-0 sm:mb-0 sm:ml-3 xl:ml-10 bg-[#1F1D1D]  font-bold text-white flex justify-between items-center py-2 px-8 lg:px-[1.5vw] rounded-full">
                  <label
                    style={{ fontSize: "20px" }}
                    className="container font-[500] flex mt-3 items-center"
                  >
                    40k and above
                    <input
                      type="radio"
                      name="budget"
                      value={"40k and above"}
                      onChange={handleChange}
                    />
                    <span className="checkmark" style={{ top: 0 }}></span>
                  </label>
                </span>
              </div>
            }
          />

          <ElevatedBox
            title="11. What is your ideal launch date for the website?"
            childern={
              <div className="flex w-full py-2">
                <textarea
                  placeholder="Share with us in maximum 250 words."
                  rows={6}
                  value={form.date}
                  name="date"
                  onChange={handleChange}
                  className="placeholder:text-gray-600 bg-transparent border border-[#1F1D1D] rounded-3xl p-4 text-sm w-full"
                ></textarea>
              </div>
            }
          />

          <ElevatedBox
            title="12. Do you have any existing style guides and guidelines?"
            childern={
              <div className="flex flex-col sm:flex-row py-5">
                <span className="uppercase text-xl mb-3 sm:mb-0 bg-[#1F1D1D]  font-bold text-white flex justify-between items-center py-2 px-8 rounded-full">
                  <label className="container font-[500] flex mt-3 items-center">
                    Yes
                    <input
                      type="radio"
                      name="guide"
                      value={true}
                      onChange={handleChange}
                    />
                    <span className="checkmark" style={{ top: 0 }}></span>
                  </label>
                </span>
                <span className="uppercase text-xl mb-3 sm:mb-0 sm:ml-10 bg-[#1F1D1D]  font-bold text-white flex justify-between items-center py-2 px-8 rounded-full">
                  <label className="container font-[500] flex mt-3 items-center">
                    No
                    <input
                      type="radio"
                      name="guide"
                      value={false}
                      onChange={handleChange}
                    />
                    <span className="checkmark" style={{ top: 0 }}></span>
                  </label>
                </span>
              </div>
            }
          />

          <ElevatedBox
            title="13. If yes, then share the guides and guideline with us"
            childern={
              <div className="flex w-full py-2">
                <textarea
                  placeholder="Share with us in maximum 250 words."
                  rows={6}
                  value={form.guides}
                  name="guides"
                  className="placeholder:text-gray-600 bg-transparent border border-[#1F1D1D] rounded-3xl p-4 text-sm w-full"
                  onChange={handleChange}
                ></textarea>
              </div>
            }
          />

          <ElevatedBox
            title="14. Details please"
            notBorder
            childern={
              <div className="flex py-1 pb-5 w-full flex-col space-y-4 font-[PPNeueMontreal] ">
                <input
                  placeholder="Full Name*"
                  type={"text"}
                  value={form.name}
                  name="name"
                  className="bg-transparent tracking-widest placeholder:tracking-widest placeholder:text-gray-600 border border-[#1F1D1D] rounded-xl p-4 px-8 text-sm w-full"
                  onChange={handleChange}
                />
                <input
                  placeholder="Company Name*"
                  type={"text"}
                  value={form.company}
                  name="company"
                  className="bg-transparent tracking-widest placeholder:tracking-widest placeholder:text-gray-600 border border-[#1F1D1D] rounded-xl p-4 px-8 text-sm w-full"
                  onChange={handleChange}
                />
                <input
                  placeholder="Professional Email*"
                  type={"text"}
                  value={form.email}
                  name="email"
                  className="bg-transparent tracking-widest placeholder:tracking-widest placeholder:text-gray-600 border border-[#1F1D1D] rounded-xl p-4 px-8 text-sm w-full"
                  onChange={handleChange}
                />
                <input
                  placeholder="Phone Number*"
                  type={"text"}
                  value={form.phNumber}
                  name="phNumber"
                  className="bg-transparent tracking-widest placeholder:tracking-widest placeholder:text-gray-600 border border-[#1F1D1D] rounded-xl p-4 px-8 text-sm w-full"
                  onChange={handleChange}
                />
              </div>
            }
          />

          <div className="flex py-10 w-full flex-col items-center">
            <div className="flex justify-center items-center mt-10  ">
              <div className=" shadow-inherit">
                <button
                  onClick={() => {
                    toast.promise(saveStartAProject(), {
                      pending: "Sending information...",
                      error: "Something went wrong! We are fixing the problem",
                    });
                  }}
                  className="text-white button hover:bg-[#F0C808] hover:text-black transition-colors  ease-in-out duration-200 text-3xl lg:text-[4vw] py-5 lg:py-[2vw] px-10 lg:px-[2vw] font-[PPNeueMontreal] tracking-widest rounded-3xl lg:rounded-[4vw] font-bold bg-[#1F1D1D]"
                >
                  SUBMIT
                </button>
              </div>
            </div>
            <h1 className="mt-10  lg:mt-[5vw] font-[PPNeueMontreal] text-xl lg:text-[2vw]">
              We will reach you in 24 hours.
            </h1>
          </div>
        </div>
      </div>
      <div className="h-[20vh]"></div>
      <Footer isDark />
    </div>
  );
}
