import React from "react";
import { Formik } from "formik";

export const Searchbar ({ onSubmit }) => {
    hendleSubmit = (values, actions) => {
        onSubmit(values)
        actions.resetForm()
    }

    return (
        <></>
    );
};