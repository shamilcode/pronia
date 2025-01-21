import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { postProduct } from '../redux/thunks/products/thunks';

const AdminPanelForm = () => {
    const dispatch = useDispatch<AppDispatch>();

    const formik = useFormik({
        initialValues: {
            thumbnail: '',
            title: '',
            price: '',
        },
        onSubmit: values => {
            dispatch(postProduct(values))
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
                id="thumbnail"
                name="thumbnail"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.thumbnail}
            />
            <label htmlFor="title">Title</label>
            <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
            />
            <label htmlFor="price">Price</label>
            <input
                id="price"
                name="price"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.price}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AdminPanelForm;