"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import User from "@/models/User"
import connectDb from "@/db/connectDb"
import bcrypt from "bcryptjs"

export const initiate = async (amount,to_username,paymentform) => {
    // Connect to MongoDB
    await connectDb()
    //fetch the secret of the user who is getting the payment
    let user = await User.findOne({ username: to_username })
   
    const secret = user?.razorpaysecret
    const id = user?.razorpayid;

   var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })

let options={
    amount:Number.parseInt(amount),
    currency: "INR",
}
 
 let x=await instance.orders.create(options)

 //create a payment object which shows a pending payment in database
 await Payment.create({oid: x.id,
    amount: amount/100,
    to_user:to_username,
    name:paymentform.name,
    message: paymentform.message
})
 
 return x;
}

export const fetchuser = async (username) => {
  await connectDb();
  let u = await User.findOne({ username: username });
  if (u) {
    let user = u.toObject({ flatternObjectIds: true });
    return JSON.stringify(user);
  }
  return JSON.stringify({ error: "User not found" });
};



export const fetchpayments = async (username)=>{
    // Connect to MongoDB
    await connectDb()
    // find all payment by decreasing  order of amount and flatten the objectIds
    // let p= await Payment.find({to_user:username ,done:true}).sort({amount: -1}).limit(10).lean()
    let p= await Payment.find({to_user:username ,done:true}).sort({amount: -1}).lean()
    // return p
    return JSON.stringify(p);

}



 
export const updateProfile = async (data, oldUsername) => {
  await connectDb();
  let newData = Object.fromEntries(data);

  const oldUser = await User.findOne({ username: oldUsername });

  // Create new user if not found
  if (!oldUser) {
    await connectDb();
    const newUser = await User.create(newData);
    return JSON.stringify({
      message: "New user created successfully",
      data: newUser,
    });
  }

  // If username is changed, check for conflict
  if (oldUsername !== newData.username) {
    const conflict = await User.findOne({ username: newData.username });
    if (conflict) {
      return JSON.stringify({ message: "Username already exists" });
    }

    const updatedProfile = await User.findOneAndUpdate(
      { email: oldUser.email },
      { ...newData, email: oldUser.email },
      { new: true }
    );

    if (updatedProfile) {
      await Payment.updateMany(
        { to_user: oldUsername },
        { to_user: newData.username },
        { new: true }
      );
    }

    return JSON.stringify({
      message: "Profile Updated Successfully",
      data: updatedProfile,
    });
  }

  // If user is found and username is same, update profile
  const updatedProfile = await User.findOneAndUpdate(
    { email: oldUser.email },
    { ...newData, email: oldUser.email },
    { new: true }
  );

  return JSON.stringify({
    message: "Profile Updated Successfully",
    data: updatedProfile,
  });
};
