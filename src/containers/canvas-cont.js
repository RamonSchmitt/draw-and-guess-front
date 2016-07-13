import React from 'react';
import Timer from '../components/timer';
import Canvas from '../components/canvas';
import Round from '../components/round';
import Score from '../components/score';


class CanvasCont extends React.Component {
    render() {
        return (
          <div>
            <Timer/>
            <Canvas/>
            <Round/>
            <Score/>
          </div>
        );
    }
}

export default CanvasCont;
