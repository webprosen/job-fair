import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const addToDb = id => {
    let jobsCart = getJobsCart();
    // add quantity
    const exists = jobsCart[id];
    if (!exists) {
        jobsCart[id] = 1;
        toast.success('Job applied sucessfully');
    }
    else {
        toast.warn('Your already applied this job!');
    }
    localStorage.setItem('jobs-cart', JSON.stringify(jobsCart));
}

const getJobsCart = () => {
    let jobsCart = {};
    const storedCart = localStorage.getItem('jobs-cart');
    if (storedCart) {
        jobsCart = JSON.parse(storedCart);
    }
    return jobsCart;
}

export {
    addToDb,
    getJobsCart
}
