import React from "react";
import { Store } from "@/context";
import { onMouseEnterOnTitle } from "@/src/components/home/landing";
import { onmouseleave } from "@/src/custom-cursor";
import Navigation from "@/src/components/navigation";
import Headers from "@/src/components/headers";
import Footer from "@/src/components/footer";
import { toast } from "react-toastify";
import MobileNavigation from "@/src/components/mobileNavigation";
import DownArrow from "@/src/components/common/DownArrow";

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
        <MobileNavigation />
        <Headers />
        <div className="flex flex-1 justify-center items-center">
          <div className="lg:w-[60%] text-black items-center lg:items-start flex flex-col w-full mt-16 lg:mt-0 px-6 sm:px-16 lg:px-0">
            <div
              className=" font-[Arial] leading-[14vw] text-[11vw]  sm:text-[9.5vw] sm:leading-[11vw] w-auto sm:w-[90%] lg:w-full lg:leading-[4vw] lg:text-[3.5vw] flex flex-col"
              onMouseEnter={onMouseEnterOnTitle}
              onMouseLeave={onmouseleave}
            >
              <div className="flex flex-col text-center lg:text-start ">
              Lets make it easy for both of us
              </div>
              {/* <span className=" font-[Arial]  text-center lg:text-start">
                
              </span> */}
            </div>
            <span className="hidden font-[PPNeueMontreal] leading-[1.5] flex-col lg:flex mt-10 text-sm lg:text-[1.5vw] tracking-wide font-[350]">
              {`If you can help us with some details about\n
               your project goals and some insights about\n
                vision, we can help you build a highly desired\n
                 product. Answer the questions below to help\n 
                 us get you started right away.`
                .split("\n")
                .map((line, i) => (
                  <span key={i + line}>{line}</span>
                ))}
            </span>
            <span className="flex font-[PPNeueMontreal] text-center lg:text-start leading-[1.5] flex-col lg:hidden mt-[4vw] text-[4vw] sm:text-[2.4vw] lg:text-[1.5vw] tracking-wide font-[350]">
              {`If you can help us with some details about
               your project goals and some insights about
                vision, we can help you build a highly desired
                 product. Answer the questions below to help
                 us get you started right away.`
                .split("\n")
                .map((line, i) => (
                  <span key={i + line}>{line}</span>
                ))}
            </span>
          </div>
        </div>
        <DownArrow title={"Let's start"} />
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
                      value={"build new website"}
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
                      value={"redesign website"}
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
                      value={"yes"}
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
                      value={"no"}
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
                      value={"yes"}
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
                      value={"no"}
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
                      value={"yes"}
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
                      value={"no"}
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
