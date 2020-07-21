import React, { useState } from "react";
import "./JoinUsForm.css";

export default function JoinUsForm() {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [acmId, setAcmId] = useState("");
  const [college, setCollege] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const nameChangedHandler = (e) => {
    setName(e.target.value);
  };

  const rollNoChangedHandler = (e) => {
    setRollNo(e.target.value);
  };

  const acmIdChangedHandler = (e) => {
    setAcmId(e.target.value);
  };

  const collegeChangedHandler = (e) => {
    setCollege(e.target.value);
  };

  const phoneNumberChangedHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const emailChangedHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form className="join">
      <h2>Register</h2>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="Name"
          placeholder="Name"
          value={name}
          onChange={nameChangedHandler}
        />
      </div>
      <div className="field multiple">
        <label for="email">Email</label>
        <input
          id="email"
          type="text"
          name="Email"
          placeholder="Email"
          value={email}
          onChange={emailChangedHandler}
        />

        <label for="phone">Phone</label>
        <input
          id="phone"
          type="text"
          name="Phone"
          placeholder="Phone"
          value={phoneNumber}
          onChange={phoneNumberChangedHandler}
        />
      </div>
      <div className="field">
        <label for="rollNo">Roll No</label>
        <input
          id="rollNo"
          type="text"
          name="Roll No"
          placeholder="Roll No"
          value={rollNo}
          onChange={rollNoChangedHandler}
        />
        <label for="acmId">ACM ID</label>
        <input
          id="acmId"
          type="text"
          name="ACM ID"
          placeholder="ACM ID"
          value={acmId}
          onChange={acmIdChangedHandler}
        />
      </div>
      <div className="field">
        <label for="college">Name</label>
        <input
          id="college"
          type="text"
          name="College"
          placeholder="College"
          value={college}
          onChange={collegeChangedHandler}
        />
      </div>
    </form>
  );
}
