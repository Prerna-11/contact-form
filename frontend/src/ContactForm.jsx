import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const[name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const sendMail = () => {
    axios
      .get("http://localhost:5000/", {
        params: {
          name,
          email,
          subject,
          message,
        },
      })
      .then(() => {
        navigate('/welcome');
        console.log("success");
      })
      .catch(() => {
        console.log("failure");
      });
  };

  return (
    <div className='bg-dark text-center vh-100'>
      <div className="container-lg vh-100">
        <div className="row">
          <div className="col-md-12">
            <h1 className='text-center text-white mt-2 mb-5'>React Contact Form</h1>
            <form onSubmit={sendMail}>
              <div className="mb-3 d-flex justify-content-between">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control bg-gray-900 text-white mr-2" // Added mr-2 class for right margin
                  style={{ backgroundColor: 'grey', maxWidth: '550px', color: 'white' }}
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control bg-gray-900 text-white ml-2"
                  style={{ backgroundColor: 'grey', maxWidth: '550px', color: 'white' }}
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Subject"
                  className="form-control bg-gray text-white"
                  style={{ backgroundColor: 'grey', color: 'white' }}
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control bg-gray text-white"
                  style={{ backgroundColor: 'grey', color: 'white' }}
                  rows="5"
                  placeholder="Message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button type="submit"  className='btn btn-primary w-25'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
