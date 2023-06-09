import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const CheckOut = () => {

    const { user } = useContext(AuthContext)
    const services = useLoaderData()
    const { _id, title, price, img } = services

    const handleServices = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        form.reset()

        const booking = {
            customerName: name,
            email,
            img,
            Service: title,
            date,
            price: price,
            service_id: _id
        }

        console.log(booking)
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"

            },
            body: JSON.stringify(booking)
        }

        )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId > 0) {
                    alert('data is added')
                } else {
                    alert('No data add at database !')
                }
            })
    }

    return (
        <div>
            <h1>Book Service :{title}</h1>
            <form onSubmit={handleServices}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.DisplayName} placeholder="text" name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />

                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name="price" type="text" defaultValue={'$' + price} placeholder="number" className="input input-bordered" />

                    </div>

                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-orange-500 btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>

    );
};

export default CheckOut;