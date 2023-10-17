import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const ModalB = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backdropFilter: "blur(50px)" }}>
      <div
        style={{
          width: "80%",
          margin: "50px auto",
          background: "#4D4C7D",
          padding: "30px 50px",
          borderRadius: "20px",
        }}
      >
        <div className="d-flex justify-content-between align-items-center my-3">
          <button
            className="btn btn-lg fw-semibold"
            style={{ color: "#fff", background: "#46139F", border: "none" }}
            onClick={() => navigate("/problem-2/modal/modalA")}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg fw-semibold"
            style={{ color: "#fff", background: "#ff7f50", border: "none" }}
            onClick={() => navigate("/problem-2/modal/modalB")}
          >
            Us Contacts
          </button>
          <button
            className="btn btn-lg fw-semibold"
            style={{ color: "#fff", background: "#46139F", border: "none" }}
            onClick={() => navigate("/problem-2")}
          >
            Close
          </button>
          <div
            className="d-flex align-items-center"
            style={{
              border: "2px solid #fff",
              borderRadius: "10px",
              height: "40px",
            }}
          >
            <input
              type="search"
              name=""
              id=""
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                color: "#fff",
                padding: "2px 8px",
              }}
            />
            <span
              style={{
                fontSize: "24px",
                display: "flex",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <BiSearch />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalB;
