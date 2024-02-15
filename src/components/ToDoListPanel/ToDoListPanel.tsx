import { useState } from "react";

import ToDoForm from "../../components/ToDoForm/ToDoForm";
import ToDoList from "../../components/ToDoList/ToDoList";

import data from "../../data/data.json";

const ToDoListPanel = () => {
    const [notes, setNotes] = useState<string[]>(data.notes);

    const addNewNote = (newNote: string) => {
        const index = notes.findIndex(i => i.toLowerCase() === newNote.toLowerCase());

        if (index < 0) {
            setNotes([...notes, newNote]);
        } else {
            const updatedNotes = [...notes];
            updatedNotes.splice(index, 1);

            setNotes([...updatedNotes, newNote]);
        }
    }

    const removeNote = (item: string) => {
        const index = notes.findIndex(i => i.toLowerCase() === item.toLowerCase());

        if (index >= 0) {
            const updatedNotes = [...notes];
            updatedNotes.splice(index, 1);

            setNotes([...updatedNotes]);
        }
    }

    return (
        <section className="bg-blue-100 w-[700px] min-h-[500px] mx-auto p-8 rounded-3xl">
            <h2 className="mb-5 text-blue-800 font-medium">Let's make some notes!</h2>

            <ToDoForm actionHandler={addNewNote} />
            <ToDoList data={notes} handleDelete={removeNote} />
        </section>
    )
}

export default ToDoListPanel;