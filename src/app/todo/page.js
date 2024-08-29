import AddNew from "./components/AddNew";
import SortButton from "./components/SortButton";

export default function ToDo() {
  return (
    <main className="flex flex-1 flex-col overflow-hidden bg-verylight-org">
      <div className="flex h-14 items-center justify-between border-b bg-primary px-4 lg:px-6">
        <h1 className="text-2xl text-verylight-org font-bold">Welcome to ToDo Dashboard</h1>
        <div className="flex items-center space-x-2">
          <SortButton />
          <AddNew />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 lg:p-6">\
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((i) => (
            <div key={i} className="rounded-lg border bg-white p-4 shadow">
              <h2 className="mb-2 text-lg font-semibold">Card {i}</h2>
              <p className="text-gray-600">This is some placeholder content for card {i}.</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
