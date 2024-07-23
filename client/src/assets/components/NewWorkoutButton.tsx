import { Link } from 'react-router-dom';
import { Plus } from './Icons';

const NewWorkoutButton = () => {
  return (
    <Link
      title="New Workout"
      to="/create"
      className="group dark:text-neutral-100 bg-neutral-300 hover:bg-neutral-400 text-neutral-900 dark:bg-neutral-800 dark:hover:bg-neutral-900"
    >
      <Plus />
      <p className="screen-reader-text">Create a new workout</p>
    </Link>
  );
};

export default NewWorkoutButton;
