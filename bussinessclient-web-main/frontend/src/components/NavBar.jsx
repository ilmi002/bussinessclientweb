export default function NavBar({ onOpen, onSearch}) {
    const handleSearchChange = (event) => {
        onSearch(event.target.value); 
    };

    return (
        <>
        <div className="navbar bg-yellow-100 p-4">
        <div className="navbar-start">
            <a className="text-2xl font-bold text-black sm:text-3xl">Cepy Bussiness Clients</a>
        </div>
        <div className="navbar-center ">
            <div className="form-control">
            <input type="text" placeholder="Search" onChange={handleSearchChange} className="input input-bordered w-full 
            rounded-md border-yellow-300 bg-yellow-50 p-3 text-yellow-700 shadow-sm transition focus:border-yellow-500 
            focus:outline-none focus:ring focus:ring-yellow-300" />
            </div>
        </div>
        <div className="navbar-end">
            <a className="btn btn-primary bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-400" onClick={onOpen}>Tambahkan Client</a>
        </div>
        </div>
        </>
    )
}
