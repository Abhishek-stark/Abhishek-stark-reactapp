import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51LhXM5SBrxf9grZuKlaBjNwd4LPft9O4c06bUKX8eBsgSBgcxaxMcm2jDFZZtTcRmVitjammnAkHhD19KLepU0ns00ZPAKOmmI"
);

const bookTour = async (tourId) => {
  // 1) Get checkout session from API
  const session = await axios.get(
    `https://apifortour.onrender.com/api/v1/bookings/checkout-session/${tourId}`
  );

  const stripe = await stripePromise;
  await stripe.redirectToCheckout({
    sessionId: session.data.session.id,
  });
};

//

// const API_URL = '/api/v1/users/';

// Register user
const register = async (userData) => {
  const response = await axios.post(
    "https://apifortour.onrender.com/api/v1/users/signup",

    userData
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const update = async (userData) => {
  const response = await axios.patch(
    "https://apifortour.onrender.com/api/v1/users/updateMe",
    userData,
    { withCredentials: true }
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const updatePassword = async (userData) => {
  const response = await axios.patch(
    "https://apifortour.onrender.com/api/v1/users/updateMyPassword",
    userData,
    { withCredentials: true }
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(
    "https://apifortour.onrender.com/api/v1/users/login",
    userData
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
// const logout = () => {
//     localStorage.removeItem('user');
// };
const logout = async () => {
  const res = await axios.get(
    "https://apifortour.onrender.com/api/v1/users/logout"
  );
  if (res.data.status === "success") {
    localStorage.clear();
  }
  return res;
};

const getOneTour = async (slug) => {
  const response = await axios.get(
    "https://apifortour.onrender.com/tour" + slug,
    { withCredentials: true }
  );
  if (response.data) {
    console.log(response.data);
    localStorage.setItem("tourdetail", JSON.stringify(response.data));
  }
  return response.data;
};
const WriteReview = async (data, token) => {
  const response = await axios.post(
    "http://127.0.0.1:8000/api/v1/reviews",
    data,
    { withCredentials: true },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (response.data) {
    console.log(response.data);
  }
  return response.data;
};

const getAllusers = async () => {
  const response = await axios.get("http://127.0.0.1:8000/api/v1/users");
  if (response.data) {
    console.log(response.data);
  }
  return response.data;
};

const authService = {
  register,
  logout,
  login,
  update,
  // getTour,
  // bookTour,
  getOneTour,
  updatePassword,
  WriteReview,
  getAllusers,
};

export default authService;
