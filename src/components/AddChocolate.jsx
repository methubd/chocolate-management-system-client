import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddChocolate = () => {

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const newProduct = {name, country, category};
        console.log(newProduct);

        fetch('http://localhost:4000/chocolates', {
            method: 'POST', 
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your product has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  form.reset();
            }
        })
    }
    return (
        <div className="w-1/2 mx-auto mt-5 ">
            <Link className="border px-5 py-2" to='/'>All Chocolate</Link>
            <div className="bg-slate-100 px-10 py-10">
                <h1 className="text-center text-2xl font-bold">New Chocolate</h1>
                <p className="text-center">Use the below form to create a new product</p>
                <form onSubmit={handleAddProduct}>
                    <label className="font-bold" htmlFor="name">Name</label> <br />
                    <input className="w-full py-2 px-5 mt-2" type="text" name="name" id="name" placeholder="Hot Pink Chocolate" />
                    <label className="font-bold" htmlFor="name">Country</label> <br />
                    <input className="w-full py-2 px-5 mt-2" type="text" name="country" id="country" placeholder="Enter Country Name" />
                    <label className="font-bold" htmlFor="name">Category</label> <br />
                    <input className="w-full py-2 px-5 mt-2" type="text" name="category" id="category" placeholder="Category Name" />
                    <input className="w-full bg-amber-700 rounded-lg py-2 mt-5 text-white font-bold" type="submit" value="Save" />
                </form>
            </div>
        </div>
    );
};

export default AddChocolate;