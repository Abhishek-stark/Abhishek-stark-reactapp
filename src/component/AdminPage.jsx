import axios from "axios";
import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// import { reset, getAllusers } from '../reducers/authSlice';
import "./dashboard.css";
import Error from "./Error";
const AdminPage = () => {
  var detail = [];
  const user = JSON.parse(localStorage.getItem("user"));
  let token = user.token;
  useEffect(() => {
    getallUsers();
  }, []);
  const getallUsers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/v1/users/", {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      });

      // if (response.data) {
      //   const { data } = response.data;
      //   localStorage.setItem('userdetail', JSON.stringify(data));
      const { data } = response.data.data;
      detail.push(data);
      console.log(detail);
    } catch (error) {
      // console.log(error);
      <Error />;
    }
  };

  const userdetail = JSON.parse(localStorage.getItem("userdetail"));

  return (
    <div className="allUsers_card">
      <h2>name</h2>
    </div>
  );
};

export default AdminPage;
