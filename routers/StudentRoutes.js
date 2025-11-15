import * as Studentcontroller from '../controllers/StudentController.js'
import express from 'express'

const studentRoutes = express.Router();

studentRoutes.get('/all', Studentcontroller.fetchStudents);
studentRoutes.post('/new', Studentcontroller.createStudent);
studentRoutes.put('/edit/:studentId', Studentcontroller.editStudent);
studentRoutes.delete('/delete/:studentId', Studentcontroller.deleteStudent);

export default studentRoutes;