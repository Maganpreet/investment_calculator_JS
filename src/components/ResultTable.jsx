import { calculateInvestmentResults, formatter } from "../util/investment"

export function ResultTable({userInput}) {

    let variables = {};
    const keys = ['initialInvestment', 'annualInvestment', 'expectedReturn', 'duration']; 
    for(let i=0; i < userInput.length; i++) {
        variables[keys[i]] = Number(userInput[i].value);
    }

    const annualData = calculateInvestmentResults(variables);

    console.log(annualData[0]);

    return (
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Interest</th>
            <th>Value End Of The Year</th>
            <th>Annual Investment</th>
          </tr>
        </thead>
        <tbody>
            {
                annualData.map((data, key) => (
                  <tr key={key}>
                    <td>{data.year}</td>
                    <td>{formatter.format(data.interest)}</td>
                    <td>{formatter.format(data.valueEndOfYear)}</td>
                    <td>{data.annualInvestment}</td>
                  </tr>  
                ))
            }
        </tbody>
      </table>
    );
}