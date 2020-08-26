import { CustomElement } from "aurelia";


export class CustomElementInspector {

    constructor(private element: HTMLElement) {
    }

    public name = '';
    public properties = [];
    public viewModel;

    public afterAttach() {
        var customElement = CustomElement.for(this.element.firstElementChild);             
        this.viewModel = customElement.viewModel;
        this.name = customElement.context.compiledDefinition.name;
        for (var prop in customElement.viewModel) {
            if (prop.startsWith('$')) continue;

            this.properties.push({ name: prop, type: typeof customElement.viewModel[prop] });
        }      
    }
}