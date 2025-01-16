import { useState, useEffect } from "react"

export default function ModalForm({ isOpen , onClose, mode, OnSubmit,clientData}) {
    const [rate, setRate] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');
    const [status, setStatus] = useState(false);

    const handleStatusChange = (e) => {
        setStatus(e.target.value === 'Aktif'); 
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const clientData = {name, email, job, rate: Number(rate) , isactive: status}
            await OnSubmit(clientData)
            onClose();
        } catch (err) {
            console.error("Error adding client" , err);
        }
        
    }

    useEffect(() => {
        if (mode === 'edit' && clientData) {
            setName(clientData.name);
            setEmail(clientData.email);
            setJob(clientData.job);
            setRate(clientData.rate);
            setStatus(clientData.isActive); 
        } else {
            setName('');
            setEmail('');
            setJob('');
            setRate('');
            setStatus(false);
        }
    }, [mode, clientData]);


    return (



        
        <>
            <dialog id="my_modal_3" className="modal" open={isOpen}>
                <div className="modal-box bg-yellow-50">
                    <h3 className="font-bold text-lg py-4 text-gray-800">{mode === 'edit' ? 'Edit Client' : 'Client Details' }</h3>
                    <form method="dialog" onSubmit={handleSubmit}>
                        <label className="input input-bordered my-4 flex items-center gap-2">
                            Nama:
                            <input type="text" className="grow" value={name} onChange={(e) => setName(e.target.value)}/>
                        </label>
                        <label className="input input-bordered my-4 flex items-center gap-2">
                            Email:
                            <input type="text" className="grow" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label className="input input-bordered my-4 flex items-center gap-2">
                            Pekerjaan:
                            <input type="text" className="grow" value={job} onChange={(e) => setJob(e.target.value)}/>
                        </label>

                        <div className="flex mb-4 justify-between my-4">
                            <label className="input input-bordered mr-4 flex items-center gap-2">
                                Rate:
                                <input type="number" className="grow" value={rate} onChange={(e) => setRate(e.target.value)}/>
                            </label>
                            <select value={status ? 'Aktif' : 'Tidak Aktif'} className="select select-bordered w-full max-w-xs" onChange={handleStatusChange}>
                                <option>Tidak Aktif</option>
                                <option>Aktif</option>
                            </select>
                        </div>

                        <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                        <button type="submit" className="btn btn-success bg-green-500 hover:bg-green-600">{mode === 'edit' ? 'Save Changes' : 'Add Client' }</button>
                    </form>
                </div>
            </dialog>
        </>
    )
}