import { useState, useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateAssignment = () => {
    const { user } = useContext(AuthContext);
    const [assignmentData, setAssignmentData] = useState({
        title: '',
        description: '',
        marks: '',
        thumbnailUrl: '',
        difficulty: '',
        dueDate: new Date()
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAssignmentData({
            ...assignmentData,
            [name]: value
        });
    };

    const handleDateChange = (date) => {
        setAssignmentData({
            ...assignmentData,
            dueDate: date
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate API call for assignment creation
        console.log('Assignment Data:', assignmentData);

        // Simulate success
        setSuccessMessage('Assignment created successfully!');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Create Assignment</h2>

            {successMessage && (
                <div className="alert alert-success mb-6">
                    <span>{successMessage}</span>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="title">
                        Assignment Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={assignmentData.title}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        placeholder="Enter assignment title"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={assignmentData.description}
                        onChange={handleInputChange}
                        className="textarea textarea-bordered w-full"
                        placeholder="Enter assignment description"
                        rows="4"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="marks">
                        Marks
                    </label>
                    <input
                        type="number"
                        id="marks"
                        name="marks"
                        value={assignmentData.marks}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        placeholder="Enter assignment marks"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="thumbnailUrl">
                        Thumbnail Image URL
                    </label>
                    <input
                        type="text"
                        id="thumbnailUrl"
                        name="thumbnailUrl"
                        value={assignmentData.thumbnailUrl}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        placeholder="Enter image URL"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="difficulty">
                        Difficulty Level
                    </label>
                    <select
                        id="difficulty"
                        name="difficulty"
                        value={assignmentData.difficulty}
                        onChange={handleInputChange}
                        className="select select-bordered w-full"
                        required
                    >
                        <option value="" disabled>
                            Select difficulty
                        </option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="dueDate">
                        Due Date
                    </label>
                    <DatePicker
                        id="dueDate"
                        selected={assignmentData.dueDate}
                        onChange={handleDateChange}
                        className="input input-bordered w-full"
                        dateFormat="MM/dd/yyyy"
                        required
                    />
                </div>

                <div className="mt-6">
                    <button type="submit" className="btn btn-primary w-full">
                        Create Assignment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateAssignment;