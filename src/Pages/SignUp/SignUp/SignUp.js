import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUp = () => {

    const navigate = useNavigate();
    const {createUser,updateUser} = useContext(AuthContext);

    const handleSignIn =(event)=>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const option = form.select.value;

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            updateUser(name)
            .then(()=> {
                toast.success('Account Created');
                form.reset();
                
                navigate('/');

            })
            .catch(error => console.error(error))
            
        })
        .catch(error => console.log(error))

    } 
    

    return (
        <div className="hero min-h-screen bg-base-200 max-w-5xl mx-auto">
            <div className="hero-content ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSignIn} className="card-body">
                        <h1 className='text-center text-2xl font-semibold'>Sign Up Here</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">User Type:</span>
                            </label>
                            <select name='select' className="select w-full max-w-xs select-bordered">
                                <option  defaultValue='User' value='user'>User</option>
                                <option  value='seller'>Seller</option>

                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;