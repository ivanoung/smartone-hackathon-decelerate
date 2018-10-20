import * as React from "react";
import './MenuBar.css';
interface IState {
    IsOpen: boolean,
}

export default class MenuBar extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            IsOpen: false
        }
    }
    public Menu = () => {
        if (this.state.IsOpen) {
            this.setState({ IsOpen: false });
        }
        else {
            this.setState({ IsOpen: true })
        }
    }
    public render() {
        const MenuSlide = () => (
        this.state.IsOpen ?(<div id="menuOverlay">
        <div id="menuItem">
        <div className="headerbox">
        <div className="child"><h1>Menu</h1></div>
        <div className="child" onClick={this.Menu}><h1>&#10005;</h1></div>
        </div>
            <h4>Item1</h4>
            <h4>Item2</h4>
            <h4>Item3</h4>
        </div>
        </div>):(<div className="hide"/>)
        )
        return (
            <div>
                <div id="menu-button" onClick={this.Menu}>
                    <div className="stacks" />
                    <div className="stacks" />
                    <div className="stacks" />
                </div>
                <MenuSlide/>
            </div>
        );
    }
}