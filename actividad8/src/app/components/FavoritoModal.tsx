"use client";

import { Dialog } from "@headlessui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

// Esquema Yup
const favoritoSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(5, "El nombre debe tener al menos 2 caracteres")
        .max(50, "El nombre no puede tener más de 50 caracteres")
        .required("El nombre es obligatorio"),
    descripcion: Yup.string()
        .min(10, "La descripción debe tener al menos 5 caracteres")
        .max(150, "La descripción no puede tener más de 150 caracteres")
        .required("La descripción es obligatoria"),
    });

    interface FavoritoModalProps {isOpen: boolean;onClose: () => void; onGuardar: (values: { nombre: string; descripcion: string }) => void;
    }

    export default function FavoritoModal({isOpen, onClose, onGuardar,}: FavoritoModalProps) {
    const [submitted, setSubmitted] = useState(false);

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        {/* Fondo semi-transparente */}
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

        {/* Contenido centrado */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
            <Dialog.Title className="text-lg font-semibold mb-4 text-center">
                Agregar Pokémon a Favoritos
            </Dialog.Title>

            <Formik
                initialValues={{ nombre: "", descripcion: "" }}
                validationSchema={favoritoSchema}
                onSubmit={(values, { resetForm }) => {
                onGuardar(values);
                setSubmitted(true);
                resetForm();
                setTimeout(() => {
                    setSubmitted(false);
                    onClose();
                }, 1000);
                }}
            >
                {({ isSubmitting, dirty, isValid }) => (
                <Form className="flex flex-col gap-4">
                    <div>
                    <label
                        htmlFor="nombre"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Nombre
                    </label>
                    <Field
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Ej. Mi Pokémon favorito"
                        style={{
                            color: "#000",                
                            backgroundColor: "#fff",       
                            border: "1px solid #ccc",
                            borderRadius: "6px",
                            padding: "0.5rem",
                            width: "100%",
                        }}
                    />
                    <ErrorMessage
                        name="nombre"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                    />
                    </div>

                    <div>
                    <label
                        htmlFor="descripcion"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Descripción
                    </label>
                    <Field
                        as="textarea"
                        id="descripcion"
                        name="descripcion"
                        placeholder="Por qué te gusta este Pokémon..."
                        rows={3}
                        style={{
                            color: "#000",
                            backgroundColor: "#fff",
                            border: "1px solid #ccc",
                            borderRadius: "6px",
                            padding: "0.5rem",
                            width: "100%",
                        }}
                    />
                    <ErrorMessage
                        name="descripcion"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                    />
                    </div>

                    <button
                    type="submit"
                    disabled={!dirty || !isValid || isSubmitting}
                    className={`w-full rounded-md py-2 font-semibold transition-colors ${
                        !dirty || !isValid
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-indigo-600 hover:bg-indigo-700 text-white"
                    }`}
                    >
                    {submitted ? "Guardado" : "Guardar favorito"}
                    </button>
                </Form>
                )}
            </Formik>
            </Dialog.Panel>
        </div>
        </Dialog>
    );
}
