import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const User = ({ card }: any) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: card.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="bg-zinc-200 h-[300px] w-[300px] rounded-3xl"
    >
      <h1 className="text-black text-center font-bold font-mono text-2xl">
        {card.name}
      </h1>
    </div>
  );
};

export default User;
