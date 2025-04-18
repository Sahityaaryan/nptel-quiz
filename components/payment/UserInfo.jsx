'use client';
import { useState, useEffect } from 'react';
import { getUserSession } from '@/app/lib/session';

export default function UserInfo({user}) {
//   const { data: session } = useSession();
const [fName, lName] = user.name.split(' ');
  const [firstName, setFirstName] = useState(fName || '');
  const [lastName, setLastName] = useState(lName||'');
  const [email, setEmail] = useState(user.email||'');


//   useEffect(()=>{
    
//     const info = async () => {
//         const user = await getUserSession();
//         const [fName, lName] = user.name.split(' ');
//         console.log("user[payment]: ", user)
//         setFirstName(fName);
//         setLastName(lName);
//         setEmail(user.email);
//     }

//      info();
//   },[]);

  return (
    <div className="card bg-base-100 shadow-xl p-6">
      <h2 className="text-2xl font-semibold text-primary mb-4">Your Information</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
            <span className="label-text m-2 text-base font-semibold">First Name</span>
            </label>
            <input
              type="text"
              placeholder="John"
              className="input input-bordered w-full"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
            <span className="label-text m-2  text-base font-semibold">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="input input-bordered w-full"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-base m-2  font-semibold label-text">Email Address</span>
          </label>
          <input
            type="email"
            placeholder="john.doe@example.com"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}