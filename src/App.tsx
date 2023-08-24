import { DndContext, DragOverEvent, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import User from "./components/User";

const App = () => {
  const [people, setPeople] = useState([
    { name: "Doing", id: 1 },
    { name: "Done", id: 2 },
    { name: "To Do", id: 3 },
  ]);

  const handlDragEnd = (event: DragOverEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setPeople((people) => {
        const oldIndex = people.findIndex((person) => person.id === active.id);
        const newIndex = people.findIndex((person) => person.id === over?.id);

        return arrayMove(people, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <DndContext collisionDetection={closestCenter} onDragEnd={handlDragEnd}>
        <h1 className="text-2xl font-bold font-mono">Workspace visible</h1>
        <SortableContext items={people} strategy={verticalListSortingStrategy}>
          {/* components */}
          <div className="grid grid-cols-3 gap-4">
            {people.map((card) => {
              return <User card={card} />;
            })}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default App;
