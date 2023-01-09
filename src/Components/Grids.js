import React from "react";
import styled from "styled-components";
import "../Styles/Grids.css";

function Grids() {
  return (
    <div className="Prescript">
      <div className="container">
        <div className="item item-1">
          <h1>Prescription and Medication Information</h1>
        </div>
        <div className="item item-2">
          <label for="name">Pet Name</label>
          <input type="text" name="name" id="name" />

          <label for="medicationType">Medication Type</label>
          <input type="text" name="medicationType" id="medicationType" />

          <label for="medicationName">Medication Name</label>
          <input type="text" name="medicationName" id="medicationName" />

          <label for="prescribingVet">Prescribing Vet</label>
          <input type="text" name="prescribingVet" id="prescribingVet" />

          <label for="dosage">Dosage</label>
          <input type="text" name="dosage" id="dosage" />

          <label for="frequency">Frequency</label>
          <input type="text" name="frequency" id="frequency" />

          <div className="second">
            <div className="first">
              <label for="startDate">Start Date</label> <br />
              <input type="text" name="startDate" id="startDate" />
            </div>

            <div className="next">
              <label for="duration">Duration</label> <br />
              <input type="text" name="duration" id="duration" />
            </div>
          </div>
        </div>
        <div className="item item-3">
          <label for="dosage">Dosage</label>
          <input type="text" name="dosage" id="dosage" />

          <div className="other">
            <label for="pharmacyName">Pharmacy Name</label>
            <input type="text" name="pharmacyName" id="pharmacyName" />

            <label for="pharmacyPhone">Pharmacy Phone</label>
            <input type="text" name="pharmacyPhone" id="pharmacyPhone" />

            <label for="prescriptionNumber">Prescription Number</label>
            <input
              type="text"
              name="prescriptionNumber"
              id="prescriptionNumber"
            />
          </div>
        </div>

        <div className="item item-6">
          <div className="button">
            <button className="button1">Submit</button>

            <button className="button2">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grids;

// const HeaderTitle = styled.div`

// position: absolute;
// /* width: 405px; */
// height: 68px;
// left: 444px;
// top: 114px;

// font-family: 'Omnes',sans-serif;
// font-size: 20px;
// font-style: normal;
// font-weight: 500;
// line-height: 23px;

// color: #000000;

// `
