import React from "react";
import { Store } from "@/context";
import { onMouseEnterOnTitle } from "@/src/components/home/landing";
import { onmouseleave } from "@/src/custom-cursor";
import Navigation from "@/src/components/navigation";
import Headers from "@/src/components/headers";
import Image from "next/image";
import ArrowDown from "@/assets/arrowDown.svg";
import Footer from "@/src/components/footer";

const SmallText = (props) => {
  return (
    <div className="flex flex-col mt-5 sm:mt-0 text-white">
      <h1 className=" capitalize">{props.title}</h1>
      <h1 className=" uppercase text-3xl underline ">
        <Link href={props.link}>{props.otherText}</Link>
      </h1>
    </div>
  );
};

const ElevatedBox = ({ childern, title, notBorder = false }) => {
  return (
    <div className="w-full mr-5 mt-10 mb-5">
      <div
        className={`w-full ${
          !notBorder && "border border-[#1F1D1D]"
        } text-[#1F1D1D] h-full py-8 lg:py-[3vw] rounded-[3.5rem] sm:rounded-[5rem] px-6 sm:px-20 `}
      >
        <div className="text-xl lg:text-[2vw] font-[Arial]">{title}</div>
        <div className="mt-3 sm:ml-4">{childern}</div>
      </div>
    </div>
  );
};

export default function StartAProject() {
  const { height } = React.useContext(Store);
  const [form, setForm] = React.useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full scroll-smooth">
      <div
        className="w-full relative bg-[#FDFDFD] flex flex-col"
        style={{ height }}
      >
        <Navigation />
        <Headers />
        <div className="flex flex-1 justify-center items-center">
          <div className="lg:w-[60%] w-full mt-16 lg:mt-0 px-6 sm:px-16 lg:px-0">
            <div
              className=" font-[Arial] text-6xl sm:text-8xl lg:text-[4.3vw] flex flex-col"
              onMouseEnter={onMouseEnterOnTitle}
              onMouseLeave={onmouseleave}
            >
              <div className="flex flex-col lg:flex-row">
                Incididunt. tempor.
              </div>
              <span className=" font-[Arial] text-6xl sm:text-8xl lg:text-[4.3vw]">
                Consec.
              </span>
            </div>
            <span className="font-[PPNeueMontreal] leading-[1.5] flex-col flex mt-10 text-sm lg:text-[1.5vw] tracking-wide font-[350]">
              {`Lorem ipsum dolor sit amet, consectetur\n 
              adipiscing elit, sed do eiusmod tempor\n 
              incididunt ut labore et dolore magna\n 
              aliqua.`
                .split("\n")
                .map((line, i) => (
                  <span key={i + line}>{line}</span>
                ))}
            </span>
          </div>
        </div>
        <div className="flex w-full lg:absolute bottom-10 justify-center">
          <div className="flex w-[85%] justify-end">
            <div
              onClick={() => window.scrollTo(0, height)}
              className="button cursor-pointer w-32 lg:w-48 h-32 lg:h-48 flex flex-col items-center justify-between"
            >
              <div className="lg:w-36 w-24 h-24 lg:h-36 bg-transparent border-black hover:border-transparent transition-colors duration-300 ease-in-out hover:bg-[#F0C808] flex rounded-full border justify-center items-center">
                <Image src={ArrowDown} />
              </div>
              <h1 className="font-bold text-xl lg:text-[1.6vw] font-[PPNeueMontreal] tracking-widest">
                lorem ipsum
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
                    // toast.promise(saveStartAProject(), {
                    //   pending: "Sending information...",
                    //   error: "Something went wrong! We are fixing the problem",
                    // });
                  }}
                  className="text-white button hover:bg-[#F0C808] hover:text-black transition-colors  ease-in-out duration-200 text-3xl lg:text-[4vw] py-5 lg:py-[2vw] px-10 lg:px-[2vw] font-[PPNeueMontreal] tracking-widest rounded-3xl lg:rounded-[4vw] font-bold bg-[#1F1D1D]"
                >
                  SUBMIT
                </button>
              </div>
            </div>
            <h1 className="mt-10  lg:mt-[5vw] font-[PPNeueMontreal] text-xl lg:text-[2vw]">
              We typically reach you in hrs.,
            </h1>
          </div>
        </div>
      </div>

      <Footer isDark />
    </div>
  );
}
