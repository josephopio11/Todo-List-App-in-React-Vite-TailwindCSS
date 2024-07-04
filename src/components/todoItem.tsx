import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface TodoItemProps {
  item: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ item, onCompletedChange, onDelete }: TodoItemProps) => {
  return (
    <div className="flex items-center gap-1">
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 grow">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={(e) => onCompletedChange(item.id, e.target.checked)}
          className="scale-125"
        />
        <span className={item.completed ? "line-through text-gray-400" : ""}>
          {item.title}
        </span>
      </label>
      <button className="p-2" onClick={() => onDelete(item.id)}>
        <Trash2 size={20} className="text-gray-500" />
      </button>
    </div>
  );
};

export default TodoItem;
