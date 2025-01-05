
export default function InvestmentParams({ values, onChangeHandler }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>initial investment</label>
                    <input name="initial" type="number" onChange={onChangeHandler} value={values["initial"]} />
                </p>
                <p>
                    <label>annual investment</label>
                    <input name="annual" type="number" onChange={onChangeHandler} value={values["annual"]} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>expected return</label>
                    <input name="expected" type="number" onChange={onChangeHandler} value={values["expected"]} />
                </p>
                <p>
                    <label>duration</label>
                    <input name="duration" type="number" onChange={onChangeHandler} value={values["duration"]} />
                </p>
            </div>
        </section >
    );
}
