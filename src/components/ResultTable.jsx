import { calculateInvestmentResults } from "../util/investment"

export function ResultTable({userInput}) {

    const annualData = calculateInvestmentResults(userInput[0].value, userInput[1].value, userInput[2].value, userInput[3].value);

    return (
        <table>
            <thead>
                <tr>
                    <th value="Year"></th>
                    <th value="Interest"></th>
                    <th value="Value End Of The Year"></th>
                    <th value="Annual Investment"></th>
                </tr>
            </thead>
            <tbody>
                {
                    annualData.map((data, key) => {
                        <tr>
                            <td value={data.year}></td>
                            <td value={data.interest}></td>
                            <td value={data.valueEndOfYear}></td>
                            <td value={data.annualInvestment}></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}