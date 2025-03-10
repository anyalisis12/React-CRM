import React from 'react'
import './NewEntry.css'

const NewEntry = () => {
  return (
    <>
   <div ClassName="container">
    
    <h2>Registration Form</h2>
    <div class="form">
    <form class="row g-4">
   <div class="col-md-4">
    <label for="inputName" class="form-label">Farmer Name</label>
    <input type="Name" class="form-control" id="inputName"placeholder="Full Name(Required)"/>
  </div>
  <div class="col-md-4">
    <label for="inputNumber" class="form-label">Mobile Number</label>
    <input type="tel" class="form-control" id="inputNumber" pattern="[0-9]{10}" placeholder="Mobile number(Required)"/>
  </div>
  <div class="col-md-4">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
  </div>

  <div class="col-4">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="House No. Building Name(Required)"/>
  </div>
  <div class="col-md-4">
    <label for="inputTaluka" class="form-label">Taluka</label>
    <input type="text" class="form-control" id="inputTaluka" placeholder="Taluka(Required)"/>
  </div>
  <div class="col-md-4">
    <label for="inputVillage" class="form-label">Village</label>
    <input type="text" class="form-control" id="inputVillage" placeholder="Village(Required)"/>
  </div>
  <div class="col-md-4">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" placeholder="City(Required)"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Maharashtra</option>
      <option>Madhya Pradesh</option>
      <option>Gujarat</option>
      <option>Hydrabad</option>
    </select>
  </div>
  <div class="col-md-4">
    <label for="inputZip" class="form-label">Pin</label>
    <input type="text" class="form-control" id="inputZip" placeholder="PIN(Required)"/>
  </div>
  <div class="col-md-4">
    <label for="inputTotalland" class="form-label">Total Land</label>
    <input type="number" class="form-control" id="inputTotalland"placeholder="Total Land(Required)"/>
  </div>
  <div class="col-md-4">
    <label for="inputIrrigatedArea" class="form-label">Irrigated Area</label>
    <input type="number" class="form-control" id="inputIrrigatedArea"  placeholder="IrrigatedArea(Required)"/>
  </div>
  <div class="col-md-4">
    <label for="inputDripArea" class="form-label">DripArea</label>
    <input type="number" class="form-control" id="inputDripArea" placeholder="DripArea(Required)"/>
  </div>
  <div class="col-md-4">
    <label for="inputSystemRequirementArea" class="form-label">System Requirement Area</label>
    <input type="number" class="form-control" id="inputSystemRequirementArea" placeholder="SystemRequirementArea(Required)"/>
  </div>
  <div class="col-md-4">
    <label for="inputComapanyName" class="form-label">Comapany Name</label>
    <select id="inputComapanyName" class="form-select">
      <option selected>Choose</option>
      <option>Netafim</option>
      <option>Kothari</option>
      <option>Jain</option>
      <option>other</option>
    </select>
  </div>
  <div class="col-md-4">
    <label for="inputCrop" class="form-label">Crop</label>
    <select id="inputCrop" class="form-select">
      <option selected>Choose</option>
      <option>Mango</option>
      <option>Soya</option>
      <option>Banana</option>
      <option>Tomato</option>
      <option>Wheat</option>
      <option>Rice</option>
      <option>Cucumber</option>
      <option>Lemon</option>
    </select>
  </div>
  <div class="col-md-4">
<label for="followUpDate" class="form-label">Next Follow-up Date:</label>
<input type="date" id="followUpDate" name="followUpDate" required/> 
  </div>
  <div class="col-md-4">
  <label for="UploadPhoto" class="form-label">Upload Photo</label>
<input type="file" id="photoUpload" accept="image/*"></input>
</div>
  <div class="col-md-4">
  <label for="UploadPhoto" class="form-label">Upload File</label>
  <input type="file" class="form-control" id="inputGroupFile02"/>
</div>


  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
</div>
</div>
</>
  )
}

export default NewEntry
  