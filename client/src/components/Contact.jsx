import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-us-left">
        <div className="row">
        <div className="row-left">
        <div className="row-1">
    <div className="first-container">
        <div className="first-child1">
        <p><label htmlFor="">First Name</label></p>
        <input type="text" className='fname'/>
        </div>
        <div className="first-child2">
        <p><label htmlFor="">Email</label></p>
        <input type="email" className='email'/>
        </div>
    </div>
<div className="second-container">
    <div className="second-child1">
    <p><label htmlFor="">Last Name</label></p>
    <input type="text" className='lname'/>
    </div>
    <div className="second-child2">
    <p><label htmlFor="">Phone Number</label></p>
    <input type="tel" className='phone'/>
    </div>
</div>
</div>
</div>

</div>
<div className="third-container">
    <p><label htmlFor="">What do you have in your mind</label></p>
    <input type="text" name="" id="" className='mind' placeholder=''/>
</div>
      </div>
      <div className="contact-us-right">
        <h2 className="title">Contact US</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ratione distinctio voluptates quo fuga ea nostrum commodi a soluta illo cumque sunt sed, rerum eius libero. Quisquam nulla exercitationem in?</p>
        <div className="phone">
            <p>Phone: +1234567890</p>
            <div className="phoneimg">
      <img src="https://cdn-icons-png.flaticon.com/128/597/597177.png" alt="" />
      </div>
      </div>
      </div>

    </div>
  )
}

export default Contact

