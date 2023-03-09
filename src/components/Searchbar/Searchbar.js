import React from "react";
import { Formik, Form, Field } from "formik";
import './search.styled.css';

export const Searchbar = ({ onSubmit }) => {
   const handleSubmit = (values, actions) => {
        onSubmit(values)
        actions.resetForm()
    }

    return (
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <Form className="form-find">
          <button type="submit" className="button button-SearchForm">
            <span>&#128270;</span>
          </button>

          <label>
            <Field
              className="SearchForm-input"
              type="text"
              name="search"
              autoFocus
              placeholder="Search images and photos"
            />
          </label>
        </Form>
      </Formik>
    );
};