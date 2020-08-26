import { bindable } from "aurelia";

export class MyButton {
    @bindable() public text = 'text on button';
    @bindable() public color = false;
}