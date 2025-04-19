import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Signup = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const endpoint = isSignup ? "http://localhost:3002/signup" : "http://localhost:3002/login";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if(response.ok){
        setMessage(data.message);
        alert(data.message); // Show success message
        navigate("/");
      }else {
        setMessage(data.message || "Signup/Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong!");
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center  min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 style={{textAlign:"center" , margin:"20px"}} className="text-2xl decor font-semibold">{isSignup ? "Signup on Innova" : "Login"}</h2>

        {message && <p className="text-green-500 text-sm mb-2">{message}</p>}

        <form  onSubmit={handleSubmit} className=" m-5 space-y-4">
          {isSignup && (
            <div>
              <label className="block text-sm  m-4 fs-5">Name</label>
              <input
              placeholder="Enetr your name"
                type="text"
                name="name"
                value={formData.name}
                style={{borderRadius:"30px" , width: "50%" }}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}

          <div>
            <label className="block text-sm  m-4 fs-5">Email</label>
            <input
            placeholder="Enter your email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{borderRadius:"30px" , width: "50%" }}
              className="w-full p-2  m-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm m-3 fs-5">Password</label>
            <input
            placeholder="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{borderRadius:"30px" , width: "50%" }}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button style={{width:"30%", borderRadius:"15px"}} type="submit" className="w-full py-2 m-5 hover:bg-blue-600 transition">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="text-sm mt-2 text-center">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button  style={{width:"20%", borderRadius:"15px"}} onClick={() => setIsSignup(!isSignup)} className="text-blue-500 m-3 underline">
            {isSignup ? "Login" : "Signup"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
