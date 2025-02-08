// This will be the parent component for the table
import PresidentTable from "./PresidentTable";
import { presidentsArray } from "./president.constant";

export default function Presidents() {
    // Build a function that can filter through the array to check for which have an undefined passed date.
    const alive = presidentsArray.filter(passedFunction)

        // function passedFunction (alive) {if (presidentsArray.passed === undefined) {
        //     return alive;
        return presidentsArray.passed === undefined;
        }

  return (
    <>
      <h2>Hello from Presidents Component</h2>
      {/* One pres table of living presidents  */}
      <PresidentTable />
      {/* One pres table of passed presidents */}
    </>
  );

