// This will be a table component, child of the Presidents, parent to PresidentRow
import PresidentRow from "./PresidentRow"

export default function PresidentTable(props) {
  return (
    <>
<h2>[TITLE OF TABLE]</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Birth Year</th>
                        {/* Stretch Goal, add age, if living */}
                    </tr>
                </thead>
                <tbody>
                    <PresidentRow 
                        key = {i}
                        first = {presidentsArray.first}
                        last = {presidentsArray.last}
                        
                    />
                </tbody>
            </table>
    </>
  )
}
