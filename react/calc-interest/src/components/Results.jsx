import { calculateInvestmentResults, formatter } from '../util/investment.js'


export default function Results({ values }) {
    let results = calculateInvestmentResults({ initialInvestment: parseInt(values.initial), annualInvestment: parseInt(values.annual), expectedReturn: parseInt(values.expected), duration: parseInt(values.duration) });

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Interest</th>
                    <th>Value End of Year</th>
                    <th>Annual Investment</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result, index) => (
                    <tr key={index}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(result.annualInvestment)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
