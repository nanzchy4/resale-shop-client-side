import React from 'react';

const BookingModal = ({selectedItem,setSelectedItem}) => {
    const{categoryName,sellingPrice} = selectedItem;

    const handleBooking = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const itemName = form.itemName.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const place = form.place.value;
        console.log(name,email,itemName,price,phone,place)

        const booking ={
            name,email,itemName,price,phone,place
        }
        console.log(booking)
        setSelectedItem(null);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
                    <h3 className="text-lg font-bold mb-4 text-center text-primary">{categoryName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 w-9/12 mx-auto'>
                    <input name='name' type="text" placeholder="Name" className="input input-primary w-full max-w-xs" />
                    <input name='email' type="email" placeholder="Email" className="input input-primary w-full max-w-xs" />
                    <input name='itemName' type="text" disabled value={categoryName} placeholder="Item Name" className="input input-primary w-full max-w-xs" />
                    <input name='price' type="text" disabled value={sellingPrice} placeholder="Selling Price" className="input input-primary w-full max-w-xs" />
                    <input name='phone' type="text" placeholder="Phone Number" className="input input-primary w-full max-w-xs" />
                    <input name='place' type="text" placeholder="Meeting Location" className="input input-primary w-full max-w-xs" />
                    <input type="submit" value="submit" className='btn btn-primary w-full max-w-xs'/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;