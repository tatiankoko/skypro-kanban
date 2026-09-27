import PopBrowse from "../components/popups/popBrowse/PopBrowse.jsx";

const CardPage = ({tasks, updateTasks}) => {
    return (
        <PopBrowse tasks={tasks} updateTasks={updateTasks} />
    );
}

export default CardPage;