function getComponent(): Promise<any> {
    return import(/* webpackChunkName: lodash */ 'lodash').then(_ => {
        let element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return element as Node;
    }).catch(_ => 'Could not load the component');
}

getComponent().then(component => {
    document.body.appendChild(component as Node);
});