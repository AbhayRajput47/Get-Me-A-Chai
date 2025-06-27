"use client"
import React from 'react'
import Script from 'next/script'
import { useState,useEffect,useRef } from 'react'
import { useSession } from "next-auth/react"
import { fetchuser,fetchpayments,initiate } from '@/actions/useractions'
import {useSearchParams} from 'next/navigation'
import { ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from'react-toastify';
import { useRouter } from 'next/navigation'
import { notFound } from "next/navigation"
import CoverpicSkeleteon from './CoverpicSkeleteon'
import Loader from './Loader'

const PaymentPage = ({username}) => {
     const { data: session } = useSession()
 const [paymentform, setPaymentform] = useState({
     name: "",
  message: "",
  amount: ""
 });
 const [currentUser, setCurrentUser] = useState({})
 const [payments, setPayments] = useState([])
 const [loading, setLoading] = useState(false);
 const searchParams= useSearchParams()
 const router = useRouter();
   const searchRef = useRef()


useEffect(() => {
        getData()
    }, [])

useEffect(() => {
  if(searchParams.get("paymentdone")=="true"){
    toast('Thanks for you donation!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  }
  router.push(`/${username}`)

}, [])


 const handleChange = (e) => {
    setPaymentform({...paymentform, [e.target.name]: e.target.value })
    
 }

const getData = async () => {
  try {
    setLoading(true);
    const [userRes, paymentRes] = await Promise.all([ 
      fetchuser(username),
      fetchpayments(username),
    ]);
    setCurrentUser(JSON.parse(userRes));
    setPayments(JSON.parse(paymentRes));
  } catch (err) {
    console.error("Data fetching failed:", err);
  } finally {
    setLoading(false);
  }
};


 

    const pay = async (amount) => {
        if(!paymentform.name){
            alert("Please fill all the required fields")
            return;
        }   
         if (!username) {
            alert("Username is missing. Please try again.")
            return;
        }  
        // try {                                                
        let a= await initiate(amount,username,paymentform)
        let orderId=a.id
        var options = {
            // "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "./tea.gif",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`, //Your callback URL
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": username, //your customer's name
                "email": session?.user.email,
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
   

    return (
        <>
       
        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

         {/* ***************************************************************************************************************************************** */}
     <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        />

        {loading && <Loader />}
            {currentUser.error && (
                <div className="text-center text-4xl my-20 font-extrabold">
                User {username} not found ☹
                </div>
            )}
            {!currentUser.error && (
        <>
          <div className="bg-cover relative w-full">
            {currentUser.coverpic ? (
              <img
                className="object-cover h-40 md:md:h-[21rem] w-full"
                src={currentUser.coverpic}
                alt="coverImage"
               onError={(e) => (e.target.src = <CoverpicSkeleteon/>)}
              />
            ) : (
              <CoverpicSkeleteon />
            )}
            
             <div className=" size-20 md:size-32 object-center absolute mx-auto right-0 left-0 -bottom-12 md:-bottom-16 border-2 overflow-hidden border-white rounded-full bg-black">
              <img
                className="object-cover size-20 md:size-32 "
                src={
                  currentUser.profilepic
                    ? currentUser.profilepic
                    : "./avatar.gif"
                }
                alt="avatarImage"
                onError={(e) => (e.target.src = "./avatar.gif")}
              />
            </div>
          </div>

          
             {/* ******************************************************************************************************** */}
            <div className="info flex justify-center items-center my-26 mb-32 flex-col gap-2">
                <div className='font-bold text-xl'>
                    @{username}
                    {/* {decodeURIComponent(username)} */}
                </div>
                <div className='text-slate-300'>
                   Let&apos;s help {username} get a chai!
                </div>
                <div className='text-slate-300'>
                   {payments.length} supporters . ₹{payments.reduce((a,b)=>a+b.amount,0)} raised
                </div>
                 {/* ******************************************************************************************************** */}
                <div className="payment flex gap-3 w-[85%] mt-11 flex-col-reverse md:flex-row">
                    <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg   backdrop-blur-sm h-[28rem] p-5 md:p-10 overflow-auto">
                        {/* show list of all supporters as a leaderboard */}
                        <h2 className="text-xl md:text-2xl  font-bold mb-5 "> Supporters</h2>
                            {payments.length==0 && <div>No supporters yet ☹</div> }
                        <ul className="mx-2  text-slate-200 " >
                            {/* {Array.isArray(payments) && payments.map((p,i)=>{ */}
                            {payments.map((p,i)=>{
                                return <li key={p._id} className='my-4 flex gap-2 items-center'>
                                    <img width={33} src="avatar.gif" alt="user avatar" />
                                    {/* <span>{p.name} donated <span className='font-bold'>₹{p.amount/100}</span> with a message "{p.message}"</span> */}
                                    <span className="text-sm md:text-base">{p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message &quot;{p.message}&quot;</span>
                                </li>
                             })}
                           
                           

                        </ul>
                    </div>
                     {/* ******************************************************************************************************** */}

                    <div className="makePayment w-full md:w-1/2  bg-slate-900 rounded-lg p-10">
                        <h2 className='text-2xl font-bold mb-5'>make a Payment</h2>
                        <form action={()=>{searchRef.current.reset()}} ref={searchRef}  className="flex gap-2 flex-col items-center">
                            <input onChange={handleChange} value={paymentform.name} type="text" className='w-full p-3 rounded-lg bg-slate-800 ' name='name' placeholder="Enter Name" />
                            <input onChange={handleChange} value={paymentform.message} type="text" className='w-full p-3 rounded-lg bg-slate-800 ' name='message' placeholder="Enter Message" />
                            <input onChange={handleChange} value={paymentform.amount} type="number" className='w-full p-3 rounded-lg bg-slate-800 ' name='amount' pattern="[0-9]*" placeholder="Enter Amount" />
                            <button onClick={()=>pay(Number.parseInt(paymentform.amount)*100)} type='button' className='text-white bg-gradient-to-br from-purple-900 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-slate-600 disabled:from-purple-100  me-2 mb-2 w-1/2'   disabled={paymentform.name.length<3 ||paymentform.message.length<4|| paymentform.amount.length<1}  >Pay</button>
                        </form>
                        <div className="flex gap-2 mt-4">
                            <button className="bg-amber-200 text-black px-4 py-2 rounded-lg hover:bg-amber-300" onClick={()=> pay(1000)}>₹10</button>
                            <button className="bg-amber-200 text-black px-4 py-2 rounded-lg hover:bg-amber-300" onClick={()=> pay(2000)}>₹20</button>
                            <button className="bg-amber-200 text-black px-4 py-2 rounded-lg hover:bg-amber-300" onClick={()=> pay(3000)}>₹30</button>
                            <button className="bg-amber-200 text-black px-4 py-2 rounded-lg hover:bg-amber-300" onClick={()=> pay(5000)}>₹50</button>
                        </div>
                        <div className="text-slate-400 text-sm mt-2">or choose from these amounts</div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
        )}
        </>
    );
}

export default PaymentPage
