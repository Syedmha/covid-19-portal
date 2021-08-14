export default function CheckBox({ states }) {
    return (
        <li>
            <input
                key={states.isoCode}
                onClick={states.handleChecked}
                type="checkbox"
                checked={states.isChecked}
                value={states.name}
            />{" "}
            {states.isoCode}
        </li>
    );
};

