import { createSlice } from "@reduxjs/toolkit";

interface Assignment {
    name: string;
    description: string;
    points: string;
    dueDateTime: string;
    _id: string,
    course: string;
    availableFromDate: string;
    availableUntilDate: string;
  }

const initialState = {
    assignments: [] as Assignment[],
    assignment: {
        name: "New Assignment",
        description: "New Description",
        points: 100,
        course: "hi",
        _id: "",
        dueDateTime: new Date().toISOString().slice(0, 16),
        availableFromDate: new Date().toISOString().slice(0, 16),
        availableUntilDate: new Date().toISOString().slice(0, 16)
    }
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
          },
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
        cancelAssignmentUpdate: (state, action) => {
            state.assignment = initialState.assignment;
        },
    },
});


export const { addAssignment, deleteAssignment, setAssignments,
    updateAssignment, setAssignment, cancelAssignmentUpdate } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;