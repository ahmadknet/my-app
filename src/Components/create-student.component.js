// CreateStudent Component for add new student

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";

// CreateStudent Component
const CreateStudent = () => {
const [formValues, setFormValues] =
	useState({ name: '', email: '', rollno: '' })

	
// Return student form
return(
	<StudentForm>
	Create Student
	</StudentForm>
)
}

// Export CreateStudent Component
export default CreateStudent
