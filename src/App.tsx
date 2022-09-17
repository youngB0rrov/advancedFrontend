import {Counter} from "./components/counter/Counter";
import "./index.scss";

export const App = () => {
    return (
        <div
            className={'app'}>
            <Counter />
        </div>
    )
}