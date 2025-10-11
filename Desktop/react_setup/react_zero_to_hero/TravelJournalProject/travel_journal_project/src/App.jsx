import Header from "../src/components/Header";
import Entry from "../src/components/Entry";
import "./App.css";
import data from "./data";

export default function App() {
  const EntryElements = data.map((entry) => (
    <Entry key={entry.id} {...entry} />
  ));
  return (
    <>
      <Header />
      <main>{EntryElements}</main>
    </>
  );
}
