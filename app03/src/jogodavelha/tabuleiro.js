import React from "react";

export default class Tabuleiro extends React.Component {
    render() {
        return (
            <div style={this.props.tabu}>
                {this.props.j.map((linha, lIndex) => (
                    <div style={this.props.tabul} key={lIndex}>
                        {linha.map((coluna, cIndex) => (
                            <div
                                style={this.props.c}
                                data-pos={`${lIndex}${cIndex}`}
                                onClick={this.props.jg}
                                key={cIndex}
                            >
                                {coluna}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}
