import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Register = () => {
    const { creatUser } = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value
        console.log(email, password, name)

        creatUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.log(error))


    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 w-1/2">
                    <div className="card-body">
                        <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-orange-600 border-0" type="submit" value="Login" />
                            </div>
                        </form>
                        <p>Already have an account ? <Link className='text-orange-500 font-bold' to={'/login'}>Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;