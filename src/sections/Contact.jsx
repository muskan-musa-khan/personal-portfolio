import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import ContactSvg from "@/components/ContactSvg"; 
import ContactSvgBlack from "@/components/ContactSvgBlack";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const [result, setResult] = React.useState("");
const { theme } = useContext(ThemeContext);
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "59180d7c-652a-41aa-a1b4-f3db0313625b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <div id={"contact"} className="min-h-screen lg:px-32 ">
      <h1 className="text-5xl font-bold md:pt-20 text-center p-5 pt-14">
        <span className="">Got something cool in mind?</span>
        <span
          className="text-teal-600  [text-stroke:2px_#14b8a6]
               [text-shadow:0_0_20px_#14b8a6] hover:[text-shadow:0_0_25px_#14b8a6] transition-all duration-300 pl-2"
        >
          Let's connect!
        </span>
        <hr className="w-20 border-t-4  mt-5 mx-auto" />
      </h1>
      <div className="flex flex-col md:flex-row justify-between lg:gap-6 pt-20 px-5">
        <div className=" md:w-[45%] ">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col  ">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                name="Name"
                className="border-2   border-teal-900 rounded-sm p-2"
                required
              />
            </div>
            <div className="flex flex-col mt-4 gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="Email"
                className="border-2   border-teal-900 rounded-sm p-2"
                required
              />
            </div>
            <div className="flex flex-col mt-4 gap-1">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={6}
                placeholder="Drop a message..."
                name="Message"
                className="border-2 border-teal-900 p-2  rounded-sm"
                required
              />
              <Button type ="submit" className="bg-teal-800 text-amber-50 rounded-md text-l  hover:scale-97 mt-2   ">
              {result ? result : "Send"}
            </Button>
            </div>
            
          </form>
        </div>
        <div className="hidden md:flex w-[50%] lg:w-120  ">
          {theme === "dark" ? (
             <ContactSvgBlack  />
            ) : (
          <ContactSvg  />
            )}
         
        </div>
      </div>
    </div>
  );
};

export default Contact;