import {Cursor} from 'immutable/contrib/cursor';
import {IPropAccessor} from "../../context/prop-accessor";

const Prop = 'editing';

export default function todoItemEditing(item: Cursor) {
    return item.get(Prop);
}

todoItemEditing.prototype.Prop = Prop;