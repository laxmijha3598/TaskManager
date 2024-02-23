const User = require('../../../database/model/user.model');
const Task = require('../../../database/model/task.model');

const addTask = async (req, res) => {
    const { task, id } = req.body;

    try {
        if (!task) return res.status(400).send('Please enter the task');
        if (task.length < 10) return res.status(400).send('Add minimum 10 characters');
        
        const taskDetail = await new Task({
            task,
            createdBy: id, // typo: corrected "cretedBy" to "createdBy"
        });
        await taskDetail.save();
        return res.status(200).send(taskDetail);
    } catch (error) {
        console.error(error);
        return res.status(400).send('Task addition failed');
    }
};



// const getAllTasks = async (req, res) => {
// 	const { id } = req.query;
// 	try {
// 		let tasklist = await Task.find({ cretedBy: id });
// 		return res.status(200).send(tasklist);
// 	} catch (error) {
// 		return res.status(400).send(error);
// 	}
// };
const getAllTasks = async (req, res) => {
    try {
        let tasklist = await Task.find();
		console.log(tasklist);
        return res.status(200).send(tasklist);
    } catch (error) {
        return res.status(400).send(error);
    }
};


const editTask = async (req, res) => {};

const statusChange = async (req, res) => {
	const { id, string } = req.body;

	try {
		let task = await Task.findById({ _id: id });
		if (string === 'right') {
			if (task.status === 'backlog') {
				task.status = 'todo';
				task.save();
				return res.send(task);
			} else if (task.status === 'todo') {
				task.status = 'doing';
				task.save();
				return res.send(task);
			} else if (task.status === 'doing') {
				task.status = 'done';
				task.save();
				return res.send(task);
			}
		} else {
			if (task.status === 'done') {
				task.status = 'doing';
				task.save();
				return res.send(task);
			} else if (task.status === 'doing') {
				task.status = 'todo';
				task.save();
				return res.send(task);
			} else if (task.status === 'todo') {
				task.status = 'backlog';
				task.save();
				return res.send(task);
			}
		}
	} catch (error) {}
};

const deleteTask = async (req, res) => {
	const { id } = req.params;
	try {
		let response = await Task.findByIdAndDelete(id);
		return res.status(200).send(response);
	} catch (error) {
		return res.status(400).send('deleteFailed');
	}
};

module.exports = {
	addTask,
	getAllTasks,
	editTask,
	statusChange,
	deleteTask,
};