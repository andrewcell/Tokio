import React from 'react';
import './App.css';

interface AppState {
    input: string;
}

class App extends React.Component<unknown, AppState> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            input: ''
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (ev: KeyboardEvent) => {
        // alert(ev.code)
        if (ev.key.length <= 1) {
            this.setState(prevState => {
                return {input: prevState.input + ev.key}
            })
        }
    }

    render(): React.ReactElement {
        const { input } = this.state;
        return (
            <div className="App">
                <header>
                </header>
                <section>
                    <p>Microsoft Windows [Version 10.0.10240]</p>
                    <p>&copy; Microsoft Corporation. All rights reserved.</p>
                    <br />
                    <div id={'input'}>
                        <p>C:\Windows\System32></p>
                        <p>{input}</p>
                    </div>

                </section>
            </div>
        );
    }
}

export default App;
