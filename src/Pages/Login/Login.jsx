import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
const Login = () => {

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        form.reset()
        console.log(email, password)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 w-1/2">
                    <div className="card-body">
                        <h1 className='text-3xl font-bold text-center'>Login Now</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
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
                        <p>New this website? <Link className='text-orange-500 font-bold' to={'/register'}>Sign Up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;