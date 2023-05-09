import Swal from "sweetalert2";

const ChocolateCard = ({chocolate}) => {
    const {_id, name, country, category } = chocolate;

    const handleDeteleProduct = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })

        fetch(`http://localhost:4000/chocolates/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className="bg-slate-200 py-5 px-5 rounded-lg">
            <h1>Chocolate Name : {name}</h1>
            <p>{country}</p>
            <p>{category}</p>
            <button onClick={() => handleDeteleProduct(_id)} className="bg-red-600 px-2 text-white my-2 mx-1">Delete</button>
            <button className="bg-green-600 px-2 text-white my-2 mx-1">Update</button>
        </div>
    );
};

export default ChocolateCard;