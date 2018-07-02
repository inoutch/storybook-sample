import * as React from "react";

interface ProviderProps<T> {
    factory: (state: T, setState: (state: T) => void) => React.ReactNode;
    initialState: T;
}

class Provider<T> extends React.Component<ProviderProps<T>, T> {
    constructor(props: ProviderProps<T>) {
        super(props);
        this.state = props.initialState;
    }

    render() {
        return (
            <React.Fragment>
                {this.props.factory(Object.assign({}, this.state), (state) => this.setState(state))}
            </React.Fragment>
        );
    }
}

export function withState<T>(factory: (state: T, setState: (state: T) => void) => React.ReactNode, initialState: T) {
    return () => <Provider {...{factory, initialState}}/>
}
