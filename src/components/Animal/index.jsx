import { useState } from "react";
import Button from "../Button";

const styles = {
    wrap: {
        display: 'flex',
        border: '1px solid black',
        flexDirection: 'column',
    }
}

export default function Animal({ id, type, param, free }) {
    const [paramValue, setParamValue] = useState(param.value);

    const feedHandelClick = () => {
        setParamValue(current => current + 1);
    }

    return (
        <div style={styles.wrap}>
            <div style={{ textAlign: 'center' }}>{type + ' [' + paramValue + ']'}</div>
            <div>
                <Button onClick={feedHandelClick} name="Feed" /><Button onClick={() => free(id)} name="Free" />
            </div>
        </div>
    )
}
