import React from "react";
import { Formik, Form, Field } from "formik";

export const Searchbar = ({ onSubmit }) => {
   const handleSubmit = (values, actions) => {
        onSubmit(values)
        actions.resetForm()
    }

    return (
        <Formik initialValues={{search: ''}} onSubmit={handleSubmit}>
            <Form className="form-find">
                <button type="submit" className="button-SearchForm">
                    <span>Search</span>
                </button>

                <label>
                    <Field 
                    className="SearchForm-input"
                    type="text"
                    name='search'
                    autoFocus
                        placeholder="Search images and photos"
                    />
                </label>
            </Form>
        </Formik>
    );
};