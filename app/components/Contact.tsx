import { IoMail } from "react-icons/io5";
import { TfiGithub } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="flex main-bg flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-center text-lg mb-8">Feel free to reach out to me on any of the following platforms:</p>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-4 hover:scale-105 transition-all">
          <IoMail className="text-2xl mr-2 fill-purple-400" />
          <a href="mailto:lcontrerasmartinez235@gmail.com" className="text-blue-500 hover:underline">lcontrerasmartinez235@gmail.com</a>
        </div>
        <div className="flex items-center justify-center mb-4 hover:scale-105 transition-all">
          <TfiGithub className="text-2xl mr-2 fill-purple-400" />
          <a href="https://github.com/NexWan" className="text-blue-500 hover:underline">NexWan</a>
        </div>
        <div className="flex items-center justify-center mb-4 hover:scale-105 transition-all">
          <FaLinkedin className="text-2xl mr-2 fill-purple-400" />
          <a href="https://www.linkedin.com/in/leonardo-contreras-martinez-a30843229/" className="text-blue-500 hover:underline">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
