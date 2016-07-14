import React from 'react';
import Timer from '../components/timer';
import Canvas from '../components/canvas';
import Round from '../components/round';
import Score from '../components/score';


class CanvasCont extends React.Component {
    render() {
        return (
          <div style={{width: "60%", backgroundColor: "#ddd", padding: "24", margin: "0"}}>
            <Timer/>
            <Canvas/>
            <div>
            <Round/>
            <Score/>
            </div>
          </div>
        );
    }
}

export default CanvasCont;
