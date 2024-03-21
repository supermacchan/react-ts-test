import { useState, useEffect } from "react";

import ToDoForm from "../../components/ToDoForm/ToDoForm";
import ToDoList from "../../components/ToDoList/ToDoList";

import data from "../../data/data.json";

const ToDoListPanel = () => {
    const [notes, setNotes] = useState<string[]>(data.notes);

    // filter only works for static data
    const [filter, setFilter] = useState<string>("");

    useEffect(() => {
        filterNotes(filter);
    }, [filter])

    function filterNotes (value: string) {
        setNotes(data.notes.filter((n) => n.toLowerCase().includes(value.toLowerCase())));
    }

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    }
    // end filter

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
        setNotes(notes.filter((n) => n !== item));
    }

    return (
        <section className="bg-blue-100 w-[700px] min-h-[500px] mx-auto p-8 rounded-3xl">
            <h2 className="mb-5 text-blue-800 font-medium">Let's make some notes!</h2>

            <input 
                type="text" 
                onChange={handleFilter} 
                value={filter}
                className="mb-4 py-2 px-3 rounded-md w-[300px]"
                placeholder="Filter list..."
            />

            <ToDoForm actionHandler={addNewNote} />
            <ToDoList data={notes} handleDelete={removeNote} />
        </section>
    )
}

export default ToDoListPanel;