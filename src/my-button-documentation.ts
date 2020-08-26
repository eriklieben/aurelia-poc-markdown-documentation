import Prism from 'prismjs';
export class MyButtonDocumentation {
    public enter() {
        console.log('yup, works like a regular component :-)');
        Prism.highlightAll();
    }
}