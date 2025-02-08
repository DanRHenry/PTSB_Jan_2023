// this is the parent

import DisplayTotals from "./DisplayTotals";

function PresidentVotes () {
        const votes = [
            { name: "Abe Lincoln", count: 139033},
            { name: "Stephen Douglas", count: 115509},
          ]
          return(
            <>
                <h1>Presidents</h1>
                {
                    votes.map((pres, index) => (  
                        <DisplayTotals
                        name = {pres.name}
                        count = {pres.count}
                        key = {index}
                        />
                        ))
                }
            </>
        )
}


export default PresidentVotes;